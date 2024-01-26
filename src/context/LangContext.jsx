import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("es");

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
