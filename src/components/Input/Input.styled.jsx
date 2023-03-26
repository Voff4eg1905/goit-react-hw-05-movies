import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  width: 400px;
`;

export const InputEl = styled.input`
  box-sizing: border-box;
  width: 290px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  font-size: 18px;
  outline-color: gray;
  &:focus,
  &:active {
    outline-color: orange;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 8px;
  box-sizing: border-box;
  width: 100px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 2px solid orange;
  &:focus,
  &:hover {
    background-color: orange;
    color: white;
  }
`;
