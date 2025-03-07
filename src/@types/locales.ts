import JsonDictionary from '@/i18n/locales/en.json'

export enum Language {
  EN = 'en',
  VI = 'vi',
}

export type ListLocales = Record<Language, string>

export type LocaleKeys = Record<keyof typeof JsonDictionary, string>
