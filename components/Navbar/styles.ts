import styled from "styled-components";

const Nav = styled.nav`
  grid-area: sidebar;
`;

const Menu = styled.ul`
  list-style: none;
  margin: 90px 0 0 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 36px;
  cursor: pointer;
`;

export default { Nav, Menu, MenuItem };
