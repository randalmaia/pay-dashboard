import styled from "styled-components";
import Theme from "../../styles/Theme";

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  z-index: 2;
  position: relative;

  &:hover::after {
    box-shadow: inset 0px 0px 0 2px ${Theme.colors.primary};
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
  }
`;

export default { Avatar };
