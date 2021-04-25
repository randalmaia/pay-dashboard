import { FC } from "react";
import styled from "styled-components";
import Styles from "./styles";
import { HeadingProps } from "./types";

const StyledHeading = styled.h1<HeadingProps>`
  ${({ size }) => size && Styles[size]};
`;

const Heading: FC<HeadingProps> = ({
  children,
  level = "h2",
  size = "body1",
}: HeadingProps) => {
  return (
    <StyledHeading as={level} size={size}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
