import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vh;
  gap: 0.9rem;
  position: relative;
  cursor: pointer;

  &:hover {
    p {
      color: #194d91;
    }
    svg {
      display: flex;
    }
  }

  img {
    width: 120px;
    margin: 0 auto;
  }
  strong {
    font-size: 25px;
    margin-top: auto;
    font-weight: 480;
  }
  p {
    font-size: 13px;
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

const CardProduto = ({ produto }) => {
  const { thumbnail, price, currency_id, title } = produto;

  const img = thumbnail.replace("I.jpg", "W.jpg");

  const formatarPreco = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency_id || "BRL",
  });
  return (
    <DivCard>
      <MdAddShoppingCart />
      <img src={img} alt={title} />
      <p>{title.slice(0, 50)}...</p>
      <strong>{formatarPreco.format(price)}</strong>
    </DivCard>
  );
};

export default CardProduto;
