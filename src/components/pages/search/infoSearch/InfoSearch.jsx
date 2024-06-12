import styled from "styled-components";
import { MdGridView, MdFormatListBulleted } from "react-icons/md";

const DivInfoSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 6vh;
  width: 100vh;
  p {
    font-size: 13px;
    strong {
      font-weight: 600;
    }
  }
  label {
    font-size: 13px;
    font-weight: 550;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  select {
    background-color: inherit;
    border: none;
    outline: none;
    color: #413e3e;
    padding: 5px;
    &:hover {
      color: #194d91;
    }
  }
`;

const DivAgrupar = styled.div`
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #194d91;
    transition: 0.2s;
  }
`;

const InfoSearch = ({
  toggleIsGroup,
  isGroup,
  busca,
  valueSelect,
  setValueSelect,
}) => {
  return (
    <DivInfoSearch>
      <DivAgrupar onClick={toggleIsGroup}>
        {isGroup ? (
          <>
            <p>Em lista</p>
            <MdFormatListBulleted />
          </>
        ) : (
          <>
            <p>Em grupo</p>
            <MdGridView />
          </>
        )}
      </DivAgrupar>
      <div>
        <p>
          Achados para<strong> {busca.slice(0, 20)}</strong>
        </p>
      </div>

      <div>
        <label>Ordenar por</label>
        <select
          value={valueSelect}
          onChange={(e) => setValueSelect(e.target.value)}
        >
          <option value="">Mais relevantes</option>
          <option value="menorPreco">Menor preço</option>
          <option value="maiorPreco">Maior preço</option>
        </select>
      </div>
    </DivInfoSearch>
  );
};

export default InfoSearch;
