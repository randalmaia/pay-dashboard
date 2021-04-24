import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  margin: 0 auto;

  @media (min-width: 480px) {
    grid-template-columns: 70px 70px auto auto;
    grid-template-rows: 100px auto;
    grid-template-areas:
      "sidebar header  header header"
      "content content content content";
    width: 465px;
  }

  @media (min-width: 801px) {
    grid-template-columns: 70px auto auto;
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
`;

// @media (min-width:320px) { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
// @media (min-width:480px) { /* smartphones, Android phones, landscape iPhone */ }
// @media (min-width:600px) { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
// @media (min-width:801px) { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
// @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
// @media (min-width:1380px) { /* hi-res laptops and desktops */ }

export default { Layout, Main };
