import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

i18n
  .use(ChainedBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      backends: [
        LocalStorageBackend,
        HttpBackend,
      ],
      backendOptions: [{
        expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
      }, {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      }],
    },

    detection: {
      convertDetectedLanguage: (lng) => lng.split("-")[0],
    },

    fallbackLng: "en",

    ns: [
      "core",
      "experiences",
      "more",
      "skills",
    ],

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
