import type { I18n } from '@/i18n/i18n'

export interface RouterLanguageProps {
  params: {
    language: I18n['getLanguage']
  }
}
