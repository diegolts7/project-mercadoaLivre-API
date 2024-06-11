import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { busca } = useParams();
  const [resultsBusca, setResultsBusca] = useState([]);

  async function GETrequest() {
    let data = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?q=${busca}`
    );
    let dados = await data.json();
    setResultsBusca(dados.results);
  }
  useEffect(() => {
    GETrequest();
  }, [busca]);
  return (
    <div>
      {resultsBusca.length > 0 ? (
        <>
          {resultsBusca.map((produto) => (
            <p key={produto.id}>{produto.title}</p>
          ))}
        </>
      ) : (
        <p>Vazio</p>
      )}
    </div>
  );
};

export default Search;
