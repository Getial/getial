import React, { useState } from "react";
import NavOption from "./NavOption";
import NavOptionMobile from "./NavOptionMobile";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "../styles/header.css";
import { options } from "../utils/menuOptions";

export default function MenuMobile() {
  const [isShowOptions, setIsShowOptions] = useState(false);
  const toggleOptions = () => {
    setIsShowOptions(!isShowOptions);
  };

  const showOptions = isShowOptions ? "active" : "";

  return (
    <header className="menuMobile">
      <NavOption title="Home" isActive={true} />
      <MenuOutlinedIcon onClick={toggleOptions} />
      <div className={`listContainer ${showOptions}`}>
        <ul>
          {options
            // .filter((item) => item.isActive === false)
            .map((item) => (
              <NavOptionMobile title={item.title} isActive={false} />
            ))}
        </ul>
      </div>
    </header>
  );
}
