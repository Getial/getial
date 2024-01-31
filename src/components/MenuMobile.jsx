import React, { useState, useEffect } from "react";
import NavOption from "./NavOption";
import NavOptionMobile from "./NavOptionMobile";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "../styles/header.css";
import { options } from "../utils/menuOptions";
import { scroller } from "react-scroll";
import { useLang } from "../context/LangContext";
import { getTexts } from "../utils/textos";

export default function MenuMobile({ componentActive }) {
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [opts, setOpts] = useState([]);
  const [title, setTitle] = useState("Home");
  const [active, setActive] = useState(false);
  const { lang, toggleLang } = useLang();
  const showOptions = isShowOptions ? "active" : "";

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

  const changeLanguage = () => {
    setActive(!active);
    toggleLang();
  };

  const BtnLanguage = () => (
    <div onClick={changeLanguage} className="buttonLanguage">
      <div className={`circleButtonLanguage ${active ? "active" : ""}`}></div>
    </div>
  );

  //titulo para el componente que esta activo dependiendo del scroll y tambien cuando se cambia de idioma
  useEffect(() => {
    if (opts.length > 0) {
      let indice = opts.findIndex(
        (objeto) => objeto.component === componentActive
      );
      setTitle(opts[indice].title);
    }
  }, [componentActive, opts]);

  return (
    <header className="menuMobile">
      <NavOption title={title} isActive={true} />
      <BtnLanguage />
      <MenuOutlinedIcon onClick={toggleOptions} />
      <div className={`listContainer ${showOptions}`}>
        <ul>
          {opts?.map((item, index) => (
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
