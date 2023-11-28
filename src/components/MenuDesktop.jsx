import React from "react";
import { options } from "../utils/menuOptions";
import NavOption from "./NavOption";
import "../styles/header.css";

export default function MenuDesktop() {
  const opt = options;
  const selectOption = (index) => {
    // console.log(index);
    opt[index] = true;
  };
  return (
    <header className="menuDesktop">
      {opt.map((item, index) => (
        <NavOption
          key={index}
          title={item.title}
          isActive={item.isActive}
          setOption={() => selectOption(index)}
        />
      ))}
    </header>
  );
}
