import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en from './locales/en.json';
import vi from './locales/vi.json';
import { LocaleKeys } from '@/@types/locales';

type LocaleSources = Record<
  Language,
  {
    translation: LocaleKeys
  }
>

enum Language {
  EN = 'en',
  VI = 'vi',
}

const resources: LocaleSources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || Language.EN,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
