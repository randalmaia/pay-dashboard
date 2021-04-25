import { ReactNode } from "react";

export type HeadingProps = {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "body1";
  children: ReactNode;
};
