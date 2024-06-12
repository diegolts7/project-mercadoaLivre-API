import { createContext, useState } from "react";

const ContextCarrinho = createContext();

const CarrinhoContext = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  function setarCarrinho(produto) {
    setCarrinho([...carrinho].push(produto));
  }
  return (
    <ContextCarrinho.Provider value={{ carrinho, setarCarrinho }}>
      {children}
    </ContextCarrinho.Provider>
  );
};

export { CarrinhoContext, ContextCarrinho };
