import styled from "styled-components";
import CardProduto from "../cardProduto/CardProduto";

const ConteinerCentral = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => (props.isGroup ? "110vh" : "140vh")};
  background-color: white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  margin-top: 8vh;
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

const ConteinerBusca = ({ titulo, lista, isGroup }) => {
  1;
  return (
    <ConteinerCentral isGroup={isGroup}>
      <TituloConteinerCentral>{titulo}</TituloConteinerCentral>
      <ConteinerLista>
        {lista.length > 0 &&
          lista.map((produto) => (
            <CardProduto key={produto.id} produto={produto} isGroup={isGroup} />
          ))}
      </ConteinerLista>
    </ConteinerCentral>
  );
};

export default ConteinerBusca;
