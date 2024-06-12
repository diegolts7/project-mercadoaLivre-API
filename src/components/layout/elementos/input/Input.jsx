import { useState } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const DivInput = styled.form`
  display: flex;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  width: 60vh;
  background-color: white;
  input {
    padding: 11px;
    outline: none;
    border: none;
    width: 90%;
    background-color: inherit;
    border-radius: 3px;
    font-size: 15px;
  }
  button {
    width: 10%;
    color: #333333;
    background-color: inherit;
    border: none;
    border-left: 1px solid gray;
    svg {
      font-size: 20px;
    }
  }
`;

const Input = () => {
  const [valorInput, setValorInput] = useState("");
  const navigate = useNavigate();
  function Buscar(e) {
    e.preventDefault();
    if (valorInput !== "") {
      navigate(`/search/${valorInput}`);
      setValorInput("");
    }
  }
  function pegarValorInput(e) {
    setValorInput(e.target.value);
  }
  return (
    <DivInput onSubmit={Buscar}>
      <input
        onChange={pegarValorInput}
        type="text"
        placeholder="Buscar produtos, marcas e muito mais..."
        value={valorInput}
      />
      <button>
        <IoIosSearch />
      </button>
    </DivInput>
  );
};

export default Input;
