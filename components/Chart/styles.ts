import styled from "styled-components";

const ChartWrapper = styled.div`
  position: relative;
  height: 320px;
`;

const ChartContainer = styled.div`
  position: absolute;
  left: -8px;
  width: 340px;

  @media (min-width: 480px) {
    width: 390px;
  }

  @media (min-width: 801px) {
    width: 395px;
  }

  @media (min-width: 1025px) {
    width: 455px;
  }
`;

const ChartOptions = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto 15px;
  justify-content: space-evenly;
`;

export default {
  ChartWrapper,
  ChartContainer,
  ChartOptions,
};
