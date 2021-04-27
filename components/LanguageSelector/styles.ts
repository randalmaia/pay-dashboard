import { FaFileExcel } from "react-icons/fa";
import styled from "styled-components";

const LanguageSelector = styled.div`
  cursor: pointer;
  position: relative;
  font-size: 12px;
  display: flex;
  align-items: center;

  svg {
    margin-left: 4px;
  }
`;

const MenuItemStyle = {
  fontSize: "11px",
  padding: "18px 50px 18px 30px",
  borderBottom: "1px solid #535353",
  backgroundColor: "transparent",
  color: "#cccccc",
  hover: {
    backgroundColor: "transparent",
    color: "#535353",
  },
};

const MenuStyle = {
  border: "none",
  borderRadius: "24px",
  backgroundColor: "#14131d",
  padding: "0",
};

const MenuButtonStyle = {
  border: "none",
  cursor: "pointer",
  backgroundColor: "transparent",
  display: "flex",
  fontSize: "12px",
};

export default { LanguageSelector, MenuItemStyle, MenuStyle, MenuButtonStyle };
