import styled from "styled-components";
import Theme from "../../styles/Theme";

const Wrapper = styled.div`
  position: relative;

  @media (min-width: 801px) {
    width: 400px;
    margin-left: 45px;
    margin-right: 50px;
  }

  @media (min-width: 1025px) {
    width: 700px;
    margin-left: 45px;
    margin-right: 50px;
  }

  @media (min-width: 1380px) {
    width: 1000px;
    margin-left: 45px;
    margin-right: 50px;
  }
`;

const InputIcon = styled.div`
  display: none;
  position: absolute;
  top: 16px;
  left: 18px;
  z-index: 1;
  color: #959595;
  transition: 0.1s;

  @media (min-width: 801px) {
    display: block;
  }
`;

const Input = styled.input`
  display: none;
  padding: 14px 14px 14px 48px;
  border: 2px solid ${Theme.colors.background};
  border-radius: 32px;
  outline: none;
  transition: 0.3s;
  width: 264px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 0;

  &:hover {
    border: 2px solid #959595;
  }

  &:focus {
    border: 2px solid ${Theme.colors.primary};
  }

  &:focus + ${InputIcon} {
    color: ${Theme.colors.primary};
  }

  @media (min-width: 801px) {
    display: block;
  }
`;

export default { Wrapper, InputIcon, Input };
