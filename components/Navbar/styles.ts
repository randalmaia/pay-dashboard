import styled from "styled-components";
import { NavbarProps } from "./types";

const Nav = styled.nav`
  grid-area: sidebar;
`;

const HambuguerMenu = styled.div`
  position: relative;
  z-index: 3;
  @media (min-width: 801px) {
    display: none;
  }
`;

const Menu = styled.ul<NavbarProps>`
  display: block;
  position: absolute;
  top: 0;
  left: -100vw;
  height: 95vh;
  width: calc(97vw - 22px);
  list-style: none;
  padding: 108px 0 0 22px;
  margin: 0;
  transform: translateX(-100%);
  transition: 0.3s;
  background: #fff;

  @media (min-width: 801px) {
    display: block;
    margin: 90px 0 0 0;
    padding: 0;
    transform: none;
    height: auto;
    width: auto;
    left: 0px;
    position: relative;
    background: transparent;
  }

  ${({ open }) =>
    open &&
    `
        left:0;
        z-index: 2;
        transform: translateX(0%);
        
  `}
`;

const MenuItem = styled.li`
  margin-bottom: 36px;
  cursor: pointer;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;

  svg {
    opacity: 0;
    transition: 0.3s;
    position: absolute;
  }

  svg + svg {
    opacity: 1;
  }

  &:hover {
    text-decoration: underline;
    svg {
      opacity: 0.85;
    }
  }
`;

const MenuItemDescription = styled.div`
  display: block;
  margin-left: 50px;

  @media (min-width: 801px) {
    display: none;
  }
`;

const SearchItem = styled.div`
  @media (min-width: 801px) {
    display: none;
  }
`;

export default {
  Nav,
  HambuguerMenu,
  Menu,
  MenuItem,
  MenuItemDescription,
  SearchItem,
};
