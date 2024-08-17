export type ZodiacSign =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export type Language = "original" | "translated";

export type Period = "today" | "tomorrow" | "week" | "month" | "year";
export type PeriodRU = "сегодня" | "завтра" | "неделя" | "месяц" | "год";

export interface HoroscopeResponse {
  sign: ZodiacSign;
  language: Language;
  period: Period;
  horoscope: string;
}

export interface ZodiacInfo {
  name: ZodiacSign;
  nameRu: string;
}
