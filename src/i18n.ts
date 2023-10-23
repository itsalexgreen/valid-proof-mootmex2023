import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const language = (window as any).env.LANGUAGE;

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    supportedLngs: ["en", "es"],
    
    //Aquí se cambia el lenguaje principal
    lng: language ? language : "es",

    fallbackLng: "en",
    nonExplicitSupportedLngs: true,
    backend: {
      allowMultiLoading: false,
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
