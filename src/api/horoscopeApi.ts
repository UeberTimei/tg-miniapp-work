import axios from "axios";
import {
  ZodiacSign,
  Language,
  Period,
  HoroscopeResponse,
  ZodiacInfo,
} from "../types";

const API_URL = "https://poker247tech.ru/get_horoscope/";

interface HoroscopeParams {
  sign: ZodiacSign;
  language: Language;
  period: Period;
}

export const getHoroscope = async ({
  sign,
  language,
  period,
}: HoroscopeParams): Promise<HoroscopeResponse> => {
  try {
    const response = await axios.post<HoroscopeResponse>(API_URL, {
      sign,
      language,
      period,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching horoscope:", error);
    throw error;
  }
};

export const getZodiacSigns = async (
  language: Language
): Promise<ZodiacInfo[]> => {
  try {
    const response = await axios.get<ZodiacInfo[]>(`${API_URL}/signs`, {
      params: { language },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching zodiac signs:", error);
    throw error;
  }
};
