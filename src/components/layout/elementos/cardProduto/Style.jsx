import styled from "styled-components";

const ConteinerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DivCard = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isGroup ? "flex" : "column")};
  width: ${(props) => (props.isGroup ? "100vh" : "25vh")};
  gap: 1rem;
  position: relative;
  cursor: pointer;
  border-bottom: ${(props) => (props.isGroup ? "1px solid #e9e9e9" : "none")};
  padding-bottom: 1rem;

  &:hover {
    p {
      color: #194d91;
    }
    svg {
      display: flex;
    }
  }

  img {
    width: ${(props) => (props.isGroup ? "135px" : "125px")};
    height: ${(props) => (props.isGroup ? "135px" : "125px")};
    margin: ${(props) => (props.isGroup ? "0" : "0 auto")};
  }
  div {
    margin-left: ${(props) => (props.isGroup ? "auto" : "none")};
    margin-top: auto;
    strong {
      font-size: 25px;
      gap: 0.3rem;
      font-weight: 450;
      display: flex;
      flex-direction: column;
    }
  }
  p {
    font-size: ${(props) => (props.isGroup ? "16px" : "13px")};
    font-weight: 350;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
`;

const DivIconeCarrinho = styled.div`
  position: absolute;
  right: 0;
  padding: 5px;
  svg {
    font-size: 23px;

    display: none;

    &:hover {
      color: gray;
    }
  }
`;

const SpanFreeShipping = styled.span`
  font-size: 13px;
  color: #09d109;
  font-weight: 580;
`;

const SpanPorcentagemOFF = styled.span`
  font-size: 14px;
  color: #09d109;
`;

const SpanOriginalPrice = styled.span`
  color: gray;
  font-size: 12px;
  text-decoration: line-through;
`;

const SpanParcelas = styled.span`
  font-size: 13px;
  font-weight: 480;
`;
const SpanMarca = styled.span`
  font-size: 11.5px;
  font-weight: 650;
`;
const SpanLoja = styled.span`
  font-size: 11px;
  color: gray;
`;

export {
  SpanLoja,
  SpanMarca,
  SpanParcelas,
  SpanOriginalPrice,
  SpanPorcentagemOFF,
  SpanFreeShipping,
  DivIconeCarrinho,
  DivCard,
  ConteinerPrincipal,
};
