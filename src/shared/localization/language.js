import arabic from "./locals/ar";
import english from "./locals/en";

const lang = {
  ar: arabic,
  en: english
};

// const LANGUAGE = lang.en; //lang[localStorage.getItem("userLanguage") || "en"];
const LANGUAGE = localStorage.getItem("userLanguage")? lang[localStorage.getItem("userLanguage")] : lang.en;

export default LANGUAGE;