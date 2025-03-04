import { Configuration } from '@/i18n/base/configuration'
import { Locale } from '@/i18n/locale'

export const localeEs = new Locale(
  new Configuration('Configuración', {
    lightMode: 'Modo claro',
    darkMode: 'Modo oscuro',
    system: 'Preferido por el sistema'
  })
)
