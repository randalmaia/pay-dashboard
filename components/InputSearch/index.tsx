import { FaSearch } from "react-icons/fa";
import Styles from "./styles";

const InputSearch = () => (
  <Styles.Wrapper>
    <Styles.Input placeholder="Search" />
    <Styles.InputIcon>
      <FaSearch size={16} />
    </Styles.InputIcon>
  </Styles.Wrapper>
);

export default InputSearch;
