import LANGUAGE from "./localization/language";

export const getDay = (date) => LANGUAGE.DAYS[date.getDay()];

export const getDate_DD_MM_YY = (date) => `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

export const getDate_DD_Month_YY = (date) =>`${date.getDate()} ${LANGUAGE.MONTHS[date.getMonth()]} ${date.getFullYear()}`;

export const getTime = (date) =>
  `${Math.abs(12 - date.getHours())}:${date.getMinutes()} ${
    date.getHours() < 12 ? LANGUAGE.TIME_PERIOD.AM : LANGUAGE.TIME_PERIOD.PM
  }`;