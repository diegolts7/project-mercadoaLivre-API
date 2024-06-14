import { createContext, useState } from "react";

const ContextCarrinho = createContext();

const CarrinhoContext = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  function setarCarrinho(produto, stateFlashMessage) {
    setCarrinho((prevCarrinho) => {
      if (prevCarrinho.some((item) => item.id === produto.id)) {
        window.alert("Produto já está no carrinho.");
        return prevCarrinho;
      } else {
        stateFlashMessage(true);
        setTimeout(() => {
          stateFlashMessage(false);
        }, 2000);
        return [...prevCarrinho, produto];
      }
    });
  }

  function deletarProduto(produto) {
    setCarrinho((prevCarrinho) => {
      return prevCarrinho.filter((item) => item.id !== produto.id);
    });
  }
  return (
    <ContextCarrinho.Provider
      value={{ carrinho, setarCarrinho, deletarProduto }}
    >
      {children}
    </ContextCarrinho.Provider>
  );
};

export { CarrinhoContext, ContextCarrinho };
