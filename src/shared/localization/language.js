import arabic from "./locals/ar";
import english from "./locals/en";

const lang = {
  ar: arabic,
  en: english
};

const defaultLanguage = "ar";

const getUserLanguage = () => {
  let language = localStorage.getItem("userLanguage");
  if(language) {
    return lang[language];
  } else {
    localStorage.setItem("userLanguage", defaultLanguage);
    return lang[defaultLanguage];
  }
}

const LANGUAGE = getUserLanguage();

export default LANGUAGE;