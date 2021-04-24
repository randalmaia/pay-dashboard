import GlobalStyle from "../../styles/GlobalStyle";
import Navbar from "../Navbar";
import Header from "../Header";
import { LayoutProps } from "./types";
import Styles from "./styles";

const Layout = ({ children }: LayoutProps) => (
  <Styles.Layout>
    <GlobalStyle></GlobalStyle>
    <Header></Header>
    <Navbar></Navbar>
    <Styles.Main>{children}</Styles.Main>
  </Styles.Layout>
);

export default Layout;
