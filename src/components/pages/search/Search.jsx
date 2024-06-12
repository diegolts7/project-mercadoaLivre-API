import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import RequestGET from "../../../functions/request/RequestGET";
import ConteinerBusca from "../../layout/elementos/conteinerBusca/ConteinerBusca";
import { MdGridView, MdFormatListBulleted } from "react-icons/md";

const DivSearch = styled.div`
  margin-top: 16vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DivInfoSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 6vh;
  width: 100vh;
  p {
    font-size: 13px;
    strong {
      font-weight: 600;
    }
  }
  label {
    font-size: 13px;
    font-weight: 550;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  select {
    background-color: inherit;
    border: none;
    outline: none;
    color: #413e3e;
    padding: 5px;
    &:hover {
      color: #194d91;
    }
  }
`;

const DivAgrupar = styled.div`
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #194d91;
    transition: 0.2s;
  }
`;

const Search = () => {
  const { busca } = useParams();
  const [resultsBusca, setResultsBusca] = useState([]);
  const [isGroup, setIsGroup] = useState(true);
  const [isLoading, setIsLoading] = useState();
  const [listaMaiorPreco, setListaMaiorPreco] = useState([]);
  const [listaMenorPreco, setListaMenorPreco] = useState([]);
  const [listaPrincipal, setListaPrincipal] = useState([]);
  const [valueSelect, setValueSelect] = useState("");

  function toggleIsGroup() {
    setIsGroup(isGroup ? false : true);
  }

  async function pegarResultado() {
    let result = await RequestGET(busca);
    setResultsBusca(result ? result : []);
    setListaPrincipal(result ? result : []);
    setListaMaiorPreco(
      result ? [...result].sort((a, b) => b.price - a.price) : []
    );
    setListaMenorPreco(
      result ? [...result].sort((a, b) => a.price - b.price) : []
    );
    setIsLoading(false);
  }

  function setarListaPrincipal() {
    if (valueSelect === "") {
      setListaPrincipal(resultsBusca);
    }
    if (valueSelect === "menorPreco") {
      setListaPrincipal(listaMenorPreco);
    }
    if (valueSelect === "maiorPreco") {
      setListaPrincipal(listaMaiorPreco);
    }
  }

  useEffect(() => {
    setValueSelect("");
    setIsLoading(true);
    pegarResultado();
  }, [busca]);

  useEffect(() => {
    setarListaPrincipal();
  }, [valueSelect]);
  return (
    <DivSearch>
      <DivInfoSearch>
        <DivAgrupar onClick={toggleIsGroup}>
          {isGroup ? (
            <>
              <p>Em lista</p>
              <MdFormatListBulleted />
            </>
          ) : (
            <>
              <p>Em grupo</p>
              <MdGridView />
            </>
          )}
        </DivAgrupar>
        <div>
          <p>
            Achados para<strong> {busca.slice(0, 20)}</strong>
          </p>
        </div>

        <div>
          <label>Ordenar por</label>
          <select
            value={valueSelect}
            onChange={(e) => setValueSelect(e.target.value)}
          >
            <option value="">Mais relevantes</option>
            <option value="menorPreco">Menor preço</option>
            <option value="maiorPreco">Maior preço</option>
          </select>
        </div>
      </DivInfoSearch>
      <ConteinerBusca
        lista={listaPrincipal}
        isGroup={isGroup}
        isLoading={isLoading}
      />
    </DivSearch>
  );
};

export default Search;
