import styled from "styled-components";

const DivFlashMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  position: relative;
  color: #599e4a;
  font-weight: 550;
  font-size: 15px;
  border-radius: 3px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    animation: Animacao 2s linear;
    background-color: #599e4a;
  }

  @keyframes Animacao {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
`;

const FlashMessage = ({ type, titulo }) => {
  return <DivFlashMessage type={type}>{titulo}</DivFlashMessage>;
};

export default FlashMessage;
