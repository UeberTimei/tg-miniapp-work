import React, { useState, useEffect } from "react";
import { BackButton } from "@vkruglikov/react-telegram-web-app";
import { getHoroscope } from "../api/horoscopeApi";
import { ZodiacSign, Language, Period, PeriodRU } from "../types";
import "../styles/ZodiacDetails.css";
import { zodiacSigns } from "../constants/zodiacSigns";

interface ZodiacDetailsProps {
  zodiac: ZodiacSign;
  language: Language;
  onBack: () => void;
}

const periods: Period[] = ["today", "tomorrow", "week", "month", "year"];
const periodsRU: PeriodRU[] = ["сегодня", "завтра", "неделя", "месяц", "год"];

const ZodiacDetails: React.FC<ZodiacDetailsProps> = ({
  zodiac,
  language,
  onBack,
}) => {
  const [period, setPeriod] = useState<Period | PeriodRU>(
    language === "original" ? "сегодня" : "today"
  );
  const [horoscope, setHoroscope] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const periodMap: { [key in PeriodRU]: Period } = {
    сегодня: "today",
    завтра: "tomorrow",
    неделя: "week",
    месяц: "month",
    год: "year",
  };
  const periods_to_map = language === "original" ? periodsRU : periods;

  const zodiacName =
    zodiacSigns.find((z) => z.name === zodiac)?.[
      language === "original" ? "nameRu" : "name"
    ] || zodiac;

  useEffect(() => {
    fetchHoroscope();
  }, [zodiac, language, period]);

  const fetchHoroscope = async () => {
    setLoading(true);
    try {
      const requestPeriod =
        language === "original" && period in periodMap
          ? periodMap[period as PeriodRU]
          : (period as Period);

      const response = await getHoroscope({
        sign: zodiac,
        language,
        period: requestPeriod,
      });
      setHoroscope(response.horoscope);
    } catch (error) {
      console.error("Error fetching horoscope:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="zodiac-details">
      <BackButton onClick={onBack} />
      <h2 className="zodiac-name">{zodiacName}</h2>
      <div className="period-selector">
        {periods_to_map.map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={period === p ? "period-selected" : "period-unselected"}
          >
            {p}
          </button>
        ))}
      </div>
      {loading ? <p>Loading...</p> : <p>{horoscope}</p>}
    </div>
  );
};

export default ZodiacDetails;
