import React from "react";
import "../styles/navOptionMobile.css";

export default function NavOptionMobile({ title, isActive, setOption, pos }) {
  const navOption = "navOptionMobile";
  const bgActive = isActive ? "isActive" : "";
  return (
    <button
      onClick={() => setOption(pos)}
      className={`${navOption} ${bgActive}`}
    >
      {title}
    </button>
  );
}
