import { FaSearch } from "react-icons/fa";
import Styles from "./styles";

const InputSearch = () => (
  <Styles.Wrapper>
    <Styles.Input placeholder="Search" />
    <Styles.Icon>
      <FaSearch size={16} />
    </Styles.Icon>
  </Styles.Wrapper>
);

export default InputSearch;
