import styled from "styled-components";
import Theme from "../../styles/Theme";
import { ChartSelectorStyleProps } from "./types";

const ChartSelector = styled.div<ChartSelectorStyleProps>`
  font-size: 14px;
  font-weight: 400;
  color: #959496;

  &:hover {
    cursor: pointer;
    color: ${Theme.colors.primary};
  }

  ${({ active }) =>
    active &&
    `
       color: ${Theme.colors.primary};
       font-weight: 600;
        
  `}
`;

export default {
  ChartSelector,
};
