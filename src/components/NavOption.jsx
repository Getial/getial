import React, { useEffect, useState } from "react";
import "../styles/navOption.css";

export default function NavOption({ title, isActive, setOption, pos }) {
  const navOption = "navOption";
  const bgActive = isActive ? "isActive" : "";
  // const [bgActive, setBgActive] = useState("");
  // // if (isActive) {
  // //   setBgActive("isActive");
  // // }

  // useEffect(() => {
  //   console.log("UseEffect navoptioon");
  //   setBgActive(isActive ? "isActive" : "");
  // }, [isActive]);
  return (
    <div onClick={() => setOption(pos)} className={`${navOption} ${bgActive}`}>
      {title}
    </div>
  );
}
