import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";

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

const CardProduto = ({ produto, isGroup }) => {
  const {
    thumbnail,
    price,
    currency_id,
    title,
    permalink,
    original_price,
    shipping: { free_shipping },
    official_store_name,
    attributes,
  } = produto;

  const [marcaValue, setMarcaValue] = useState();

  const porcentagemOff = original_price
    ? parseInt(
        ((Number(original_price) - Number(price)) / Number(original_price)) *
          100
      )
    : "";

  useEffect(() => {
    if (attributes) {
      attributes.forEach((atributo) => {
        if (atributo.id === "BRAND") {
          setMarcaValue(atributo.value_name);
        }
      });
    }
  }, [produto]);

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
    <DivCard isGroup={isGroup} onClick={abrirMercadoLivre}>
      <DivIconeCarrinho>
        <MdAddShoppingCart />
      </DivIconeCarrinho>
      <img src={img} alt={title} />
      <p>
        {isGroup && (
          <>
            {marcaValue && (
              <SpanMarca>
                {marcaValue.slice(0, 40).toUpperCase()}
                {marcaValue.length > 40 && "..."}
              </SpanMarca>
            )}
          </>
        )}
        {isGroup ? title : title.slice(0, 50) + "..."}
        {isGroup && (
          <>
            {official_store_name && <SpanLoja>{official_store_name}</SpanLoja>}
          </>
        )}
      </p>

      <div>
        <strong>
          {original_price && (
            <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
              <SpanOriginalPrice>
                {formatarPreco.format(original_price)}
              </SpanOriginalPrice>
              {porcentagemOff !== "" && porcentagemOff !== 0 && (
                <SpanPorcentagemOFF>
                  {`${porcentagemOff}`}% OFF
                </SpanPorcentagemOFF>
              )}
            </div>
          )}
          {formatarPreco.format(price)}
          {produto.installments && (
            <SpanParcelas>
              em {produto.installments.quantity}x{" "}
              {formatarPreco.format(produto.installments.amount)}
            </SpanParcelas>
          )}
        </strong>
        {free_shipping && <SpanFreeShipping>Frete grátis</SpanFreeShipping>}
      </div>
    </DivCard>
  );
};

export default CardProduto;
