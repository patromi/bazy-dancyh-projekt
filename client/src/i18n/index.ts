import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/assets/locales/en.json";
import pl from "@/assets/locales/pl.json";

i18n.use(initReactI18next).init({
  lng: "pl",
  fallbackLng: ["pl", "en"],
  resources: {
    en: {
      translation: en,
    },
    pl: {
      translation: pl,
    },
  },
});

export default i18n;
