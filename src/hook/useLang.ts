import { useTranslation } from 'react-i18next';
import { appConfig } from '../constants/settings';
import { getWords } from '../utils/helperr';
import LocalClass from '../utils/local';
import { items } from '../components/layout/navBar/LanguageBtn';

export const useLang = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, i18n] = useTranslation('global');

  const setLangToLocal = (lang: string) => {
    LocalClass.set(appConfig.userLangKey, lang);
    setLang(lang);
  };
  const userMainLang =
    LocalClass.get(appConfig.userLangKey) ||
    getWords(navigator.languages as string[])[0];

  const setLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const setDefaultLang = () => {
    setLang(userMainLang);
  };

  return {
    setLangToLocal,
    setDefaultLang,
  };
};
