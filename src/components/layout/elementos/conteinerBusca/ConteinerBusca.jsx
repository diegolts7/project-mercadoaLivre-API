import styled from "styled-components";
import CardProduto from "../cardProduto/CardProduto";
import Loading from "../loading/Loading";

const ConteinerCentral = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => (props.isGroup ? "110vh" : "140vh")};
  background-color: white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  gap: 2rem;
  padding: 10px;
`;

const ConteinerLista = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
`;
const TituloConteinerCentral = styled.p`
  font-size: 23px;
  font-weight: 550;
`;

const ConteinerBusca = ({ titulo, lista, isGroup, isLoading }) => {
  1;
  return (
    <>
      {!isLoading ? (
        <>
          {lista.length > 0 ? (
            <ConteinerCentral isGroup={isGroup}>
              <TituloConteinerCentral>{titulo}</TituloConteinerCentral>
              <ConteinerLista>
                {lista.map((produto) => (
                  <CardProduto
                    key={produto.id}
                    produto={produto}
                    isGroup={isGroup}
                  />
                ))}
              </ConteinerLista>
            </ConteinerCentral>
          ) : (
            <p style={{ marginTop: "8vh", fontWeight: "500" }}>
              Sem produtos encontrados
            </p>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ConteinerBusca;
