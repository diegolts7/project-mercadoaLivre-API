import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";

const DivCard = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isGroup ? "flex" : "column")};
  width: ${(props) => (props.isGroup ? "100vh" : "25vh")};
  gap: 0.9rem;
  position: relative;
  cursor: pointer;
  border-bottom: ${(props) => (props.isGroup ? "1px solid #e9e9e9" : "none")};

  &:hover {
    p {
      color: #194d91;
    }
    svg {
      display: flex;
    }
  }

  img {
    width: ${(props) => (props.isGroup ? "135px" : "120px")};
    height: ${(props) => (props.isGroup ? "135px" : "120px")};
    margin: ${(props) => (props.isGroup ? "0" : "0 auto")};
  }
  strong {
    font-size: 25px;
    margin-top: auto;
    font-weight: 450;
    margin-left: ${(props) => (props.isGroup ? "auto" : "none")};
  }
  p {
    font-size: ${(props) => (props.isGroup ? "16px" : "13px")};
  }
  svg {
    font-size: 25px;
    right: 0;
    display: none;
    position: absolute;
    &:hover {
      color: #194d91;
    }
  }
`;

const CardProduto = ({ produto, isGroup }) => {
  const { thumbnail, price, currency_id, title, permalink } = produto;

  const img = thumbnail.replace("I.jpg", "W.jpg");

  const formatarPreco = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency_id || "BRL",
  });

  function abrirMercadoLivre(e) {
    if (e.target.tagName !== "path") {
      window.open(permalink, "_blank");
    }
  }
  return (
    <DivCard isGroup={isGroup} onClick={abrirMercadoLivre}>
      <MdAddShoppingCart />
      <img src={img} alt={title} />
      <p>{isGroup ? title : title.slice(0, 50) + "..."}</p>
      <strong>{formatarPreco.format(price)}</strong>
    </DivCard>
  );
};

export default CardProduto;
