import styled from "styled-components";

const DivFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  background-color: white;
  height: 25vh;
  margin-top: 15vh;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
`;

const Footer = () => {
  return <DivFooter>Oiii</DivFooter>;
};

export default Footer;
