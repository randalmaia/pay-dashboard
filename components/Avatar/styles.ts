import styled from "styled-components";
import Theme from "../../styles/Theme";

const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  z-index: 2;
  position: relative;

  &:hover::after {
    box-shadow: inset 0px 0px 0 2px #000000;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
  }
`;

export default { Avatar };
