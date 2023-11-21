import React from "react";
import "../styles/navOptionMobile.css";

export default function NavOptionMobile({ title, isActive, setOption }) {
  const navOption = "navOptionMobile";
  const bgActive = isActive ? "isActive" : "";
  return (
    <div onClick={() => setOption} className={`${navOption} ${bgActive}`}>
      {title}
    </div>
  );
}
