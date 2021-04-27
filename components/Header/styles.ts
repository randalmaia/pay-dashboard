import styled from "styled-components";

const Header = styled.header`
  display: grid;
  grid-area: header;
  align-items: center;
  width: 100%;

  @media (min-width: 480px) {
    padding: 0 0;
    grid-template-columns: 124px 100px 45px 75px 50px;
  }

  @media (min-width: 801px) {
    width: 100%;
    padding: 30px 0;
    grid-template-columns: 124px auto 45px 75px 50px;
  }
`;

// @media (min-width:320px) { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
// @media (min-width:480px) { /* smartphones, Android phones, landscape iPhone */ }
// @media (min-width:600px) { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
// @media (min-width:801px) { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
// @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
// @media (min-width:1380px) { /* hi-res laptops and desktops */ }

export default { Header };
