import React, { useState, useEffect, useRef } from "react";
import "../styles/hero.css";
import { Element } from "react-scroll";
import { useLang } from "../context/LangContext";
import { getTexts } from "../utils/textos";

export default function Hero({ onInView }) {
  const [showDescription, setShowDescription] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [texts, setTexts] = useState(getTexts);
  const heroRef = useRef(null);
  const { lang } = useLang();
  const isShowDescription = showDescription ? "active" : "";
  const textBtn = isShowDescription ? texts.txtBtn2 : texts.txtBtn1;

  // usseEffect para traer los textos dependiendo del idoma
  useEffect(() => {
    const texts = getTexts(lang);
    setTexts(texts.hero);
  }, [lang]);

  // useEffect para la animacion del fondo
  useEffect(() => {
    const moveDiv = () => {
      const newX = Math.random() * (window.innerWidth - 100);
      const newY = Math.random() * (window.innerHeight - 100);

      setPosition({ x: newX, y: newY });
    };

    // Mover el div cada 2 segundos (o ajusta según tus necesidades)
    const intervalId = setInterval(moveDiv, 1500);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  // useEffect para leer el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Acciones cuando el componente está en pantalla
      if (heroRef.current) {
        const rect =
          heroRef.current.childBindings.domNode.getBoundingClientRect();
        const isInView = rect.top < 300 && rect.bottom >= 300;
        onInView(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Element name="Home" className="hero" ref={heroRef}>
      <h1>{texts.title}</h1>
      <p className={`subtitle ${isShowDescription}`}>
        {texts.subtitle1}
        <span>Fullstack</span>
        {texts.subtitle2}
        <span>Frontend</span>
      </p>
      <p className={`description ${isShowDescription}`}>
        {texts.description1}
        <span>
          HTML, CSS, Javascript, React, React Native, VueJS & Bootstrap.
        </span>{" "}
        {texts.description2}
        <span>Python (Django) & Node.js (Express) </span>
        {texts.description3}
      </p>
      <button onClick={() => setShowDescription(!showDescription)}>
        {textBtn}
      </button>
      <div className="bgimage"></div>
      <div
        className="bgazul"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </Element>
  );
}
