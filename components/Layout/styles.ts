import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  margin: 0 auto 50px;

  @media (min-width: 480px) {
    grid-template-columns: 70px 70px auto auto;
    grid-template-rows: 100px auto;
    grid-template-areas:
      "sidebar header  header header"
      "content content content content";
    width: 465px;
  }

  @media (min-width: 801px) {
    grid-template-columns: 80px auto auto;
    grid-template-areas:
      "header  header  header"
      "sidebar content content";
    width: 785px;
  }

  @media (min-width: 1025px) {
    width: 1015px;
  }

  @media (min-width: 1380px) {
    width: 1370px;
  }
`;

const Main = styled.main`
  grid-area: content;
  min-height: 400px;
  max-width: 1290px;
`;

export default { Layout, Main };
