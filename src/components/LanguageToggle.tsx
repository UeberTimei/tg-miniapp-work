import React from "react";
import { Language } from "../types";
import "../styles/LanguageToggle.css";

interface LanguageToggleProps {
  language: Language;
  onToggle: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  language,
  onToggle,
}) => {
  return (
    <button onClick={onToggle} className="language-toggle">
      {language === "translated" ? "EN" : "RU"}
    </button>
  );
};

export default LanguageToggle;
