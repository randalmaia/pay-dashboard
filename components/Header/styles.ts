import styled from "styled-components";

const Header = styled.header`
  /* display: flex;
  justify-content: space-between;
  grid-area: header;
  align-items: center; */
  width: 100%;

  @media (min-width: 480px) {
    padding: 0 0;
    height: 100px;
  }

  @media (min-width: 801px) {
    width: 100%;
    padding: 30px 0;
  }
`;

export default { Header };
