import React, { useState, useEffect } from "react";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import ZodiacList from "./components/ZodiacList";
import ZodiacDetails from "./components/ZodiacDetails";
import LanguageToggle from "./components/LanguageToggle";
import { ZodiacSign, Language } from "./types";
import "./styles/App.css";

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>("translated");
  const [selectedZodiac, setSelectedZodiac] = useState<ZodiacSign | null>(null);

  const webApp = useWebApp();
  console.log(webApp.language_code);

  useEffect(() => {
    const telegramLanguage = webApp.initDataUnsafe?.user?.language_code;
    setLanguage(telegramLanguage === "ru" ? "original" : "translated");
  }, [webApp.initDataUnsafe?.user?.language_code]);

  const handleZodiacSelect = (zodiac: ZodiacSign) => {
    setSelectedZodiac(zodiac);
  };

  const handleBack = () => {
    setSelectedZodiac(null);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "original" ? "translated" : "original"));
  };

  return (
    <div className="app">
      <LanguageToggle language={language} onToggle={toggleLanguage} />
      {selectedZodiac ? (
        <ZodiacDetails
          zodiac={selectedZodiac}
          language={language}
          onBack={handleBack}
        />
      ) : (
        <ZodiacList onSelect={handleZodiacSelect} language={language} />
      )}
    </div>
  );
};

export default App;
