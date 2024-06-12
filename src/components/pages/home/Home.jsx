import styled from "styled-components";
import ConteinerBusca from "../../layout/elementos/conteinerBusca/ConteinerBusca";
import { useEffect, useState } from "react";
import RequestGET from "../../../functions/request/RequestGET";

const DivHome = styled.div`
  margin-top: 19vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Home = () => {
  const [lista, setLista] = useState([]);
  const [isLoading, setIsLoading] = useState();

  async function pegarDados() {
    let dados = await RequestGET();
    setLista(dados ? dados : []);
    setIsLoading(false);
  }
  useEffect(() => {
    setIsLoading(true);
    pegarDados();
  }, []);
  return (
    <DivHome>
      <ConteinerBusca
        titulo="Produtos mais relevantes"
        lista={lista}
        isGroup={false}
        isLoading={isLoading}
      />
    </DivHome>
  );
};

export default Home;
