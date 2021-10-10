import arabic from "./locals/ar";
import english from "./locals/en";

const lang = {
  ar: arabic,
  en: english
};

const LANGUAGE = lang[localStorage.getItem("userLanguage") || "en"];

export default LANGUAGE;