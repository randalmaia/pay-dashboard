import Styles from "./styles";
import {
  BsHouseDoorFill,
  BsGear,
  BsCloudUpload,
  BsPerson,
  BsEnvelope,
  BsChat,
} from "react-icons/bs";

const Navbar = () => (
  <Styles.Nav>
    <Styles.Menu>
      <Styles.MenuItem>
        <BsHouseDoorFill size={30} />
      </Styles.MenuItem>
      <Styles.MenuItem>
        <BsEnvelope size={30} />
      </Styles.MenuItem>
      <Styles.MenuItem>
        <BsChat size={30} />
      </Styles.MenuItem>
      <Styles.MenuItem>
        <BsPerson size={30} />
      </Styles.MenuItem>
      <Styles.MenuItem>
        <BsCloudUpload size={30} />
      </Styles.MenuItem>
      <Styles.MenuItem>
        <BsGear size={30} />
      </Styles.MenuItem>
    </Styles.Menu>
  </Styles.Nav>
);

export default Navbar;
