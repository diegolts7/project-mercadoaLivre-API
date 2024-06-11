import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import RequestGET from "../../../functions/request/RequestGET";

const DivSearch = styled.div`
  margin-top: 11vh;
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
      {resultsBusca.length > 0 ? (
        <>
          {resultsBusca.map((produto) => (
            <p key={produto.id}>{produto.title}</p>
          ))}
        </>
      ) : (
        <p>Vazio</p>
      )}
    </DivSearch>
  );
};

export default Search;
