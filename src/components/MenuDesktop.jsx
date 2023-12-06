import React, { useEffect, useState } from "react";
import { options } from "../utils/menuOptions";
import NavOption from "./NavOption";
import "../styles/header.css";
import { scroller } from "react-scroll";

export default function MenuDesktop({ componentActive }) {
  const [opts, setOpts] = useState(options);
  const scrollType = {
    duration: 500,
    delay: 50,
    smooth: true, // linear “easeInQuint” “easeOutCubic”
    offset: -10,
  };

  const selectOption = (index) => {
    const name = opts[index].title;
    const newOpts = opts.map((item) => ({ ...item, isActive: false }));
    newOpts[index].isActive = true;
    setOpts(newOpts);
    scroller.scrollTo(name, scrollType);
  };

  const setTitleOption = (index) => {
    const newOpts = opts.map((item) => ({ ...item, isActive: false }));
    newOpts[index].isActive = true;
    setOpts(newOpts);
  };

  useEffect(() => {
    if (opts) {
      let indice = opts.findIndex((objeto) => objeto.title === componentActive);
      setTitleOption(indice);
    }
  }, [componentActive]);

  return (
    <header className="menuDesktop">
      {opts.map((item, index) => (
        <NavOption
          key={index}
          pos={index}
          title={item.title}
          isActive={item.isActive}
          setOption={selectOption}
        />
      ))}
    </header>
  );
}
