import React from "react";
import { zodiacSigns } from "../constants/zodiacSigns";
import { ZodiacSign, Language } from "../types";
import "../styles/ZodiacList.css";

interface ZodiacListProps {
  onSelect: (zodiac: ZodiacSign) => void;
  language: Language;
}

const ZodiacList: React.FC<ZodiacListProps> = ({ onSelect, language }) => {
  return (
    <div className="zodiac-list">
      {zodiacSigns.map((zodiac) => (
        <div
          key={zodiac.name}
          className="zodiac-item"
          onClick={() => onSelect(zodiac.name)}
        >
          <h3>{language === "original" ? zodiac.nameRu : zodiac.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ZodiacList;
