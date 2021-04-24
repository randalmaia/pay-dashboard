import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 70px auto auto;
  grid-template-areas:
    "header  header  header"
    "sidebar content content";
  width: 1370px;
  margin: 0 auto;
`;

const Main = styled.main`
  grid-area: content;
  min-height: 400px;
`;

export default { Layout, Main };
