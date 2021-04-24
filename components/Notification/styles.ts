import styled from "styled-components";
import Theme from "../../styles/Theme";

const Notification = styled.div`
  position: relative;

  svg {
    cursor: pointer;
  }

  &:before {
    content: "";
    display: block;
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${Theme.colors.error};
    border: 2px solid ${Theme.colors.background};
    position: absolute;
    left: 12px;
    top: -2px;
  }
`;

export default { Notification };
