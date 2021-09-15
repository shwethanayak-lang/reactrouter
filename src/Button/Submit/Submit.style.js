import styled from "styled-components";

export const SubmitButton = styled.button`
  padding: 9px 10px;
  border-radius: 5%;
  overflow: hidden;
  cursor: pointer;
  margin: 10px 80px;
  border: 1px solid #000;
  background-color: #008000;

  &:hover {
    & label {
      color: green;
      font-size: 10px;
    }
    background-color: #d7be69;
  }
`;

export const Button = styled.button`
  padding: 9px 10px;
  border-radius: 5%;
  overflow: hidden;
  cursor: pointer;
  margin: 10px 80px;
  border: 1px solid #000;
  background-color: ${(props) => props.backgroundColor};
`;

export const ButtonLabel = styled.label`
  color: #fff;
  font-size: 10px;
`;
