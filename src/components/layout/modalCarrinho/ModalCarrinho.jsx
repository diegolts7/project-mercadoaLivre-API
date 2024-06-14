import styled from "styled-components";
import { ContextCarrinho } from "../../../contexts/carrinhoContext/CarrinhoContext";
import { useContext } from "react";
import CardCarrinho from "./cardCarrinho/CardCarrinho";
import { GiShoppingCart } from "react-icons/gi";

const DivModal = styled.div`
  position: fixed;
  z-index: 1;
  height: 90vh;
  width: 50vh;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  right: -45vh;
  border-radius: 5px 0px 0px 0px;
  margin-top: 11vh;
  background-color: white;
  animation: AnimacaoModal 0.2s forwards ease-in-out;
  overflow-x: auto;
  color: #111;

  @keyframes AnimacaoModal {
    0% {
      right: -45vh;
    }
    100% {
      right: 0;
    }
  }
`;

const DivCarrinhoVazio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  gap: 0.5rem;
  color: gray;
  svg {
    font-size: 45px;
  }
  p {
    font-size: 16px;
  }
`;

const ModalCarrinho = () => {
  const { carrinho } = useContext(ContextCarrinho);
  return (
    <DivModal>
      {carrinho.length > 0 ? (
        carrinho.map((produto) => (
          <CardCarrinho key={produto.id} produto={produto} />
        ))
      ) : (
        <DivCarrinhoVazio>
          <GiShoppingCart />
          <p>O seu carrinho está vázio.</p>
        </DivCarrinhoVazio>
      )}
    </DivModal>
  );
};

export default ModalCarrinho;
