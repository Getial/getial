import React, { useEffect, useState } from "react";
import NavOption from "./NavOption";
import "../styles/header.css";
import { scroller } from "react-scroll";
import { useLang } from "../context/LangContext";
import { getTexts } from "../utils/textos";

export default function MenuDesktop({ componentActive }) {
  const [opts, setOpts] = useState([]);
  const [active, setActive] = useState(false);
  const { lang, toggleLang } = useLang();

  // usseEffect para traer los textos dependiendo del idioma
  useEffect(() => {
    const texts = getTexts(lang);
    setOpts(texts.header);
  }, [lang]);

  const scrollType = {
    duration: 500,
    delay: 50,
    smooth: true, // linear “easeInQuint” “easeOutCubic”
    offset: -10,
  };

  const selectOption = (index) => {
    const name = opts[index].component;
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

  const changeLanguage = () => {
    setActive(!active);
    toggleLang();
  };

  //background para el componente que esta activo dependiendo del scroll y tambien cuando se cambia de idioma
  useEffect(() => {
    if (opts.length > 0) {
      let indice = opts.findIndex(
        (objeto) => objeto.component === componentActive
      );
      setTitleOption(indice);
    }
  }, [componentActive]);

  return (
    <header className="menuDesktop">
      {opts?.map((item, index) => (
        <NavOption
          key={index}
          pos={index}
          title={item.title}
          isActive={item.isActive}
          setOption={selectOption}
        />
      ))}
      <div onClick={changeLanguage} className="buttonLanguage">
        <div className={`circleButtonLanguage ${active ? "active" : ""}`}></div>
      </div>
    </header>
  );
}
