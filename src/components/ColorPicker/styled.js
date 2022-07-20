import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50%;
  width: 34px;
  height: 34px;
  background: ${({color}) => (color ? color : '#282828')};
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px ${({active}) => (active ? active : '#b5b5b5')};
`