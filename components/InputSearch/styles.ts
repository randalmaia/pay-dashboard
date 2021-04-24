import styled from "styled-components";
import Theme from "../../styles/Theme";

const Wrapper = styled.div`
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  top: 16px;
  left: 18px;
  z-index: 1;
  color: #959595;
  transition: 0.3s;
`;

const Input = styled.input`
  padding: 14px 14px 14px 48px;
  border: 2px solid ${Theme.colors.background};
  border-radius: 32px;
  outline: none;
  transition: 0.3s;
  width: 264px;
  display: block;
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

  &:focus + ${Icon} {
    color: ${Theme.colors.primary};
  }
`;

export default { Wrapper, Icon, Input };
