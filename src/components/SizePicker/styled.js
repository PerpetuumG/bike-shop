import styled from "styled-components";

export const Input = styled.input.attrs({
    type: 'radio',
    name: 'size'
})`
  position: absolute;
  z-index: -1;
  opacity: 0;
`

export const Label = styled.label`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #282828;
  margin-top: ${({first}) => (first ? '20px' : '24px')};

  display: inline-block;
  align-items: center;
  user-select: none;
`

export const Checked = styled.span`
  height: 12px;
  width: 12px;
  margin-right: 16px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: ${({checked}) => (checked ? '#282828' : '#fff')};;
`