import styled from "styled-components";
import ImgLoading from "../../../../assets/loading.svg";

const DivLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50px;
  }
`;

const Loading = () => {
  return (
    <DivLoading>
      <img src={ImgLoading} />
    </DivLoading>
  );
};

export default Loading;
