// src/i18n/index.js
import { createI18n } from "vue-i18n";
import en from "./en";
import ar from "./ar";

const i18n = createI18n({
  legacy: false, // use Composition API
  locale: "en", // default locale
  fallbackLocale: "en",
  messages: {
    en,
    ar,
  },
});

export default i18n;
