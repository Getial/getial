import React, { useState } from "react";
import "../styles/habilitys.css";
import { habilitys } from "../utils/habilitys";
import CardCarrousel from "./CardCarrousel";

export default function Habilitys() {
  return (
    <section className="habilitys">
      <h3 className="title">Habilidades y Conocimientos</h3>
      <CardCarrousel />
    </section>
  );
}
