import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import styled from "styled-components";

const DivFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  gap: 3rem;
  min-height: 25vh;
  margin-top: 15vh;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
`;

const ConteinerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vh;
  min-height: 20vh;
  position: relative;
  flex-direction: column;
  gap: 1rem;

  &::after {
    content: "";
    width: 2px;
    height: 15vh;
    top: 0 auto;
    right: 0;
    background-color: #e9e9e9;
    position: absolute;
  }
  strong {
    font-weight: 600;
  }
  p {
    font-size: 13px;
    a {
      color: #002f6c;
    }
  }
`;

const ConteinerSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vh;
  min-height: 20vh;
  position: relative;
  flex-direction: column;
  gap: 1rem;
  &::after {
    content: "";
    width: 1.5px;
    height: 15vh;
    top: 0 auto;
    left: 0;
    background-color: #e9e9e9;
    position: absolute;
  }
  strong {
    font-weight: 600;
  }
  div {
    display: flex;
    gap: 1rem;
    svg {
      font-size: 23px;
      color: #002f6c;
    }
  }
`;

const ConteinerAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 30vh;
  min-height: 20vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
  strong {
    font-weight: 600;
  }
  p {
    font-size: 13px;
  }
`;

const Footer = () => {
  return (
    <DivFooter>
      <ConteinerInfo>
        <strong>Contrabando Livre &copy;</strong>
        <p>
          <a href="">contrabandoLivre@gmail.com</a>
        </p>
      </ConteinerInfo>
      <ConteinerAbout>
        <strong>Sobre nós</strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          excepturi eius quibusdam. Quis nulla assumenda ex possimus, odit
          iusto? Ad odit iusto blanditiis et maxime sapiente ratione beatae iure
          laboriosam.
        </p>
      </ConteinerAbout>
      <ConteinerSocialMedia>
        <strong>Redes sociais</strong>
        <div>
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <FaWhatsapp />
        </div>
      </ConteinerSocialMedia>
    </DivFooter>
  );
};

export default Footer;
