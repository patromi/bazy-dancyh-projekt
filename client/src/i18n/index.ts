import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/assets/locales/en.json";
import pl from "@/assets/locales/pl.json";

export const resources = {
  en: {
    translation: en,
  },
  pl: {
    translation: pl,
  },
} as const;

export const defaultNS = Object.keys(resources.en)[0];

i18n.use(initReactI18next).init({
  lng: "pl",
  fallbackLng: ["pl", "en"],
  resources: resources,
});

export default i18n;
