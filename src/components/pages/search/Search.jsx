import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import RequestGET from "../../../functions/request/RequestGET";
import ConteinerBusca from "../../layout/elementos/conteinerBusca/ConteinerBusca";
import InfoSearch from "./infoSearch/InfoSearch";

const DivSearch = styled.div`
  margin-top: 16vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  const { pathname } = useLocation();

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <DivSearch>
      <InfoSearch
        toggleIsGroup={toggleIsGroup}
        isGroup={isGroup}
        busca={busca}
        valueSelect={valueSelect}
        setValueSelect={setValueSelect}
      />
      <ConteinerBusca
        lista={listaPrincipal}
        isGroup={isGroup}
        isLoading={isLoading}
      />
    </DivSearch>
  );
};

export default Search;
