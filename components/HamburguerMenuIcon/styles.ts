import styled from "styled-components";
import Theme from "../../styles/Theme";
import { HamburguerMenuIconProps } from "./types";

const HamburguerMenuIcon = styled.div<HamburguerMenuIconProps>`
  width: 60px;
  height: 45px;
  position: relative;
  left: 0;
  top: 36px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 6px;
    width: 80%;
    background: ${Theme.colors.primary};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2) {
    top: 12px;
  }

  span:nth-child(3) {
    top: 24px;
  }

  ${({ open }) =>
    open &&
    `
    position: fixed;
    left: 16px;
    top: 35px;
    margin: 0;

    span:nth-child(1) {
      top: 18px;
      transform: rotate(135deg);
    }

    span:nth-child(2) {
      opacity: 0;
      left: -60px;
    }

    span:nth-child(3) {
      top: 18px;
      transform: rotate(-135deg);
    }
  `}
`;

export default { HamburguerMenuIcon };
