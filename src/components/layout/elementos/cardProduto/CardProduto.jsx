import { MdAddShoppingCart } from "react-icons/md";
import { useEffect, useState, useContext } from "react";
import {
  SpanLoja,
  SpanMarca,
  SpanParcelas,
  SpanOriginalPrice,
  SpanPorcentagemOFF,
  SpanFreeShipping,
  DivIconeCarrinho,
  DivCard,
  ConteinerPrincipal,
} from "./Style";
import { ContextCarrinho } from "../../../../contexts/carrinhoContext/CarrinhoContext.jsx";
import FlashMessage from "../flashMessage/FlashMessage.jsx";

const CardProduto = ({ produto, isGroup }) => {
  const { setarCarrinho } = useContext(ContextCarrinho);
  const [isAddCarrinho, setIsAddCarrinho] = useState(false);

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

  function adicionarProduto() {
    setarCarrinho(produto, setIsAddCarrinho);
  }

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
    <ConteinerPrincipal>
      {isAddCarrinho && (
        <FlashMessage type={"ADD"} titulo="Produto adicionado." />
      )}
      <DivCard isGroup={isGroup} onClick={abrirMercadoLivre}>
        <DivIconeCarrinho onClick={adicionarProduto}>
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
              {official_store_name && (
                <SpanLoja>{official_store_name}</SpanLoja>
              )}
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
    </ConteinerPrincipal>
  );
};

export default CardProduto;
