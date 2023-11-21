import React from "react";
import "../styles/navOption.css";

export default function NavOption({ title, isActive, setOption }) {
  const navOption = "navOption";
  const bgActive = isActive ? "isActive" : "";
  return (
    <div onClick={() => setOption} className={`${navOption} ${bgActive}`}>
      {title}
    </div>
  );
}
