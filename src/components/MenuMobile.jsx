import React, { useState, useEffect } from "react";
import NavOption from "./NavOption";
import NavOptionMobile from "./NavOptionMobile";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "../styles/header.css";
import { options } from "../utils/menuOptions";
import { scroller } from "react-scroll";

export default function MenuMobile({ componentActive }) {
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [opts, setOpts] = useState(options);
  const [title, setTitle] = useState("Home");
  const scrollType = {
    duration: 500,
    delay: 50,
    smooth: true, // linear “easeInQuint” “easeOutCubic”
    offset: -10,
  };

  const selectOption = (index) => {
    const name = opts[index].title;
    setTitle(name);
    const newOpts = opts.map((item) => ({ ...item, isActive: false }));
    newOpts[index].isActive = true;
    setOpts(newOpts);
    toggleOptions();
    scroller.scrollTo(name, scrollType);
  };

  const toggleOptions = () => {
    setIsShowOptions(!isShowOptions);
  };

  const showOptions = isShowOptions ? "active" : "";

  useEffect(() => {
    if (title) {
      setTitle(componentActive);
    }
  }, [componentActive]);

  return (
    <header className="menuMobile">
      <NavOption title={title} isActive={true} />
      <MenuOutlinedIcon onClick={toggleOptions} />
      <div className={`listContainer ${showOptions}`}>
        <ul>
          {options
            // .filter((item) => item.isActive === false)
            .map((item, index) => (
              <NavOptionMobile
                key={index}
                pos={index}
                title={item.title}
                isActive={false}
                setOption={selectOption}
              />
            ))}
        </ul>
      </div>
    </header>
  );
}
