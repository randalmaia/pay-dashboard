import { useState } from "react";
import Styles from "./styles";
import HamburguerMenuIcon from "../HamburguerMenuIcon";
import {
  BsHouseDoorFill,
  BsGear,
  BsGearFill,
  BsCloudUpload,
  BsCloudFill,
  BsPerson,
  BsPersonFill,
  BsEnvelope,
  BsEnvelopeFill,
  BsChat,
  BsChatFill,
  BsList,
} from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toogleIcon = () => {
    setOpen(!open);
  };

  return (
    <Styles.Nav>
      <Styles.HambuguerMenu>
        <HamburguerMenuIcon
          open={open}
          onClick={toogleIcon}
        ></HamburguerMenuIcon>
      </Styles.HambuguerMenu>

      <Styles.Menu open={open}>
        <Styles.MenuItem>
          <BsHouseDoorFill size={30} />
          <BsHouseDoorFill size={30} />
          <Styles.MenuItemDescription>Home</Styles.MenuItemDescription>
        </Styles.MenuItem>
        <Styles.MenuItem>
          <BsEnvelopeFill size={30} />
          <BsEnvelope size={30} />
          <Styles.MenuItemDescription>Email</Styles.MenuItemDescription>
        </Styles.MenuItem>
        <Styles.MenuItem>
          <BsChatFill size={30} />
          <BsChat size={30} />
          <Styles.MenuItemDescription>Chat</Styles.MenuItemDescription>
        </Styles.MenuItem>
        <Styles.MenuItem>
          <BsPersonFill size={30} />
          <BsPerson size={30} />
          <Styles.MenuItemDescription>User</Styles.MenuItemDescription>
        </Styles.MenuItem>
        <Styles.MenuItem>
          <BsCloudFill size={30} />
          <BsCloudUpload size={30} />
          <Styles.MenuItemDescription>Upload</Styles.MenuItemDescription>
        </Styles.MenuItem>
        <Styles.MenuItem>
          <BsGearFill size={30} />
          <BsGear size={30} />
          <Styles.MenuItemDescription>Settings</Styles.MenuItemDescription>
        </Styles.MenuItem>
      </Styles.Menu>
    </Styles.Nav>
  );
};

export default Navbar;
