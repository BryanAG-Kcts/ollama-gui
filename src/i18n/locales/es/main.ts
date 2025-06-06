import { Configuration } from '@/i18n/base/configuration/configuration'
import { GeneralCommunication } from '@/i18n/base/configuration/general-configuration'
import { Locale } from '@/i18n/locale'

export const localeEs = new Locale(
  new Configuration(
    'Configuración',
    new GeneralCommunication('General', {
      title: 'Tema',
      options: {
        light: 'Modo claro',
        dark: 'Modo oscuro',
        system: 'Sistema'
      }
    })
  )
)
