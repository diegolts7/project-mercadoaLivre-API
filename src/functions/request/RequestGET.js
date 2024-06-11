async function RequestGET(pesquisa) {
  let data = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${pesquisa}`
  );
  let dados = await data.json();
  return dados.results;
}

export default RequestGET;
