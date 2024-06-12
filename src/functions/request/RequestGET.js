async function RequestGET(pesquisa) {
  try {
    let data = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?q=${pesquisa}`
    );
    let dados = await data.json();
    return dados.results;
  } catch (error) {
    throw new Error("Erro na requisição GET.");
  }
}

export default RequestGET;
