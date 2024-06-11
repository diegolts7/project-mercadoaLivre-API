import styled from "styled-components";

const DivModal = styled.div`
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 45vh;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  right: -45vh;
  border-radius: 5px 0px 0px 0px;
  margin-top: 11vh;
  padding: 10px;
  background-color: white;
  animation: AnimacaoModal 0.2s forwards ease-in-out;

  @keyframes AnimacaoModal {
    0% {
      right: -45vh;
    }
    100% {
      right: 0;
    }
  }
`;

const ModalCarrinho = () => {
  return <DivModal>Carrinho</DivModal>;
};

export default ModalCarrinho;
