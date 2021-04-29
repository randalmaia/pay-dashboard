import styled from "styled-components";
import Theme from "../../styles/Theme";

const Savings = styled.div`
  background: ${Theme.colors.background};
  border-radius: 45px;
  font-size: 18px;
  font-weight: 600;
  height: 760px;
  width: 320px;

  @media (min-width: 480px) {
    width: 380px;
  }

  @media (min-width: 1025px) {
    width: 445px;
  }
`;

const Saved = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #959496;
  width: 200px;
  margin: 50px auto 30px;
  text-align: center;

  span {
    display: block;
    margin-top: 18px;
    font-weight: 900;
    font-size: 28px;
    color: ${Theme.colors.primary};
  }
`;

export default {
  Savings,
  Saved,
};
