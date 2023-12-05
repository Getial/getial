import React, { useState, useRef, useEffect } from "react";
import "../styles/habilitys.css";
import { Element } from "react-scroll";
import CardCarrousel from "./CardCarrousel";

export default function Habilitys({ onInView }) {
  const habilitysRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Acciones cuando el componente está en pantalla
      const rect =
        habilitysRef.current.childBindings.domNode.getBoundingClientRect();
      // console.log(
      //   "rect.top habilitys ===>> ",
      //   rect.top < 300 && rect.bottom >= 300
      // );
      // console.log(rect.bottom);
      // console.log("innerheight====>", window.innerHeight);
      const isInView = rect.top < 300 && rect.bottom >= 300;
      onInView(isInView);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Element name="Habilidades" className="habilitys" ref={habilitysRef}>
      {/* <section> */}
      <h3 className="title">Habilidades y Conocimientos</h3>
      <CardCarrousel />
      {/* </section> */}
    </Element>
  );
}
