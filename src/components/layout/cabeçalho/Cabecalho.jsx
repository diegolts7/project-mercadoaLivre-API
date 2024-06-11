import styled from "styled-components";
import Imagem from "../../../assets/logoMercadoLivre.png";
import { Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import ModalCarrinho from "../modalCarrinho/ModalCarrinho";
import { useState } from "react";
import Input from "../elementos/input/Input";

const ConteinerCabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  background-color: #ffe600;
  color: #002f6c;
  position: fixed;
`;

const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10vh;

  gap: 0.5rem;
  img {
    width: 50px;
  }
  a {
    color: #002f6c;
    &:hover {
      color: #194d91;
    }
    h1 {
      font-size: 28px;
    }
  }
`;

const DivLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-right: 10vh;
`;

const DivCarrinho = styled.div`
  display: flex;
  svg {
    font-size: 28px;
    position: relative;
    cursor: pointer;
    color: #333333;
    &:hover {
      color: gray;
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 15px;
    height: 15px;
    background-color: red;
    color: #fffafa;
    font-weight: bold;
    border-radius: 15px;
    font-size: 12px;
  }
`;

const Cabecalho = () => {
  const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false);
  function toggleOpenCarrinho() {
    setIsOpenShoppingCart(isOpenShoppingCart === true ? false : true);
  }
  return (
    <ConteinerCabecalho>
      <DivLogo>
        <img src={Imagem} />
        <Link to="/">
          <h1>Contrabando livre</h1>
        </Link>
      </DivLogo>
      <DivLinks>
        <Input />
        <DivCarrinho>
          <CgShoppingCart onClick={toggleOpenCarrinho} />
          <span>2</span>
        </DivCarrinho>
      </DivLinks>
      {isOpenShoppingCart && <ModalCarrinho />}
    </ConteinerCabecalho>
  );
};

export default Cabecalho;
