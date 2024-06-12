import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import RequestGET from "../../../functions/request/RequestGET";
import ConteinerBusca from "../../layout/elementos/conteinerBusca/ConteinerBusca";

const DivSearch = styled.div`
  margin-top: 11vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Search = () => {
  const { busca } = useParams();
  const [resultsBusca, setResultsBusca] = useState([]);

  async function pegarResultado() {
    let result = await RequestGET(busca);
    setResultsBusca(result);
  }
  useEffect(() => {
    pegarResultado();
  }, [busca]);
  return (
    <DivSearch>
      <ConteinerBusca
        titulo={`Achados para: ${busca}`}
        lista={resultsBusca}
        isGroup={true}
      />
    </DivSearch>
  );
};

export default Search;
