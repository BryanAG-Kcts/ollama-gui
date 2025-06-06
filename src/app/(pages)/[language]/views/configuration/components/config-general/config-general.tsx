import { I18n } from '@/i18n/i18n'
import { ConfigTheme } from './components/config-theme/config-theme'

export default function ConfigGeneral() {
  const generalLocale = I18n.getInstance().getLocale.configuration.general

  return (
    <div>
      <ConfigTheme themeLocale={generalLocale.theme} />
    </div>
  )
}
