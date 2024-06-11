import styled from "styled-components";
import ConteinerBusca from "../../layout/elementos/conteinerBusca/ConteinerBusca";
import { useEffect, useState } from "react";
import RequestGET from "../../../functions/request/RequestGET";

const DivHome = styled.div`
  margin-top: 11vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Home = () => {
  const [lista, setLista] = useState([]);

  async function pegarDados() {
    let dados = await RequestGET();
    setLista(dados);
  }
  useEffect(() => {
    pegarDados();
  }, []);
  return (
    <DivHome>
      <ConteinerBusca titulo="Produtos mais relevantes" lista={lista} />
    </DivHome>
  );
};

export default Home;
