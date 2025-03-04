import { localeEn } from './locales/en/main'
import { localeEs } from './locales/es/main'

export class I18n {
  private static instance: I18n
  private language: 'es' | 'en'
  private readonly localeOptions = {
    en: localeEn,
    es: localeEs
  }

  private constructor() {
    this.language = 'en'
  }

  static getInstance() {
    if (!I18n.instance) {
      I18n.instance = new I18n()
    }

    return I18n.instance
  }

  get getLanguage() {
    return this.language
  }

  set setLanguage(language: I18n['getLanguage']) {
    this.language = language
  }

  get getLocale() {
    return this.localeOptions[this.language]
  }
}
