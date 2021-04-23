import { createGlobalStyle } from "styled-components";
import Theme from "../Theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${Theme.colors.background};
    font-family: 'Inter', sans-serif;
    font-size: ${Theme.fontSize.default};
    color: ${Theme.colors.primary};
  }
`;

export default GlobalStyle;
