import { RiDeleteBin2Line } from "react-icons/ri";
import styled from "styled-components";
import { ContextCarrinho } from "../../../../contexts/carrinhoContext/CarrinhoContext";
import { useContext } from "react";

const DivCardCarrinho = styled.div`
  display: flex;

  gap: 0.5rem;
  width: 100%;
  min-height: 10vh;
  padding: 1vh;
  border-bottom: 1px solid #e9e9e9;
  position: relative;
  cursor: pointer;
  &:hover {
    p {
      color: #194d91;
    }
  }
`;

const DivImg = styled.div`
  width: 9vh;
  img {
    width: 9vh;
    height: 9vh;
  }
`;
const DivInfo = styled.div`
  width: 36vh;
  display: flex;
  flex-direction: column;
  p {
    font-size: small;
    font-weight: 350;
  }
  strong {
    font-weight: 500;
    margin-top: auto;
    margin-left: auto;
  }
`;

const DivDelete = styled.div`
  position: absolute;
  top: 8px;
  right: 5px;
  svg {
    font-size: 18px;
    color: red;
    &:hover {
      color: #d55555;
      scale: 1.1;
      transition: 0.2s;
    }
  }
`;

const CardCarrinho = ({ produto }) => {
  const { deletarProduto } = useContext(ContextCarrinho);

  const { title, thumbnail, price, currency_id, permalink } = produto;

  const img = thumbnail.replace("I.jpg", "W.jpg");

  const formatarPreco = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency_id || "BRL",
  });

  function abrirMercadoLivre(e) {
    if (e.target.tagName !== "path" && e.target.tagName !== "svg") {
      window.open(permalink, "_blank");
    }
  }
  return (
    <DivCardCarrinho onClick={abrirMercadoLivre}>
      <DivDelete onClick={() => deletarProduto(produto)}>
        <RiDeleteBin2Line />
      </DivDelete>
      <DivImg>
        <img src={img} alt={title} />
      </DivImg>
      <DivInfo>
        <p>
          {title.slice(0, 60)}
          {title.length > 60 && "..."}
        </p>
        <strong>{formatarPreco.format(price)}</strong>
      </DivInfo>
    </DivCardCarrinho>
  );
};

export default CardCarrinho;
