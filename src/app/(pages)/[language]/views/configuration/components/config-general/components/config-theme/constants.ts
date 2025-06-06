import BrightnessUp from '@/../public/icons/brightness-up.svg'
import Desktop from '@/../public/icons/device-desktop.svg'
import Moon from '@/../public/icons/moon.svg'
import type { GeneralCommunication } from '@/i18n/base/configuration/general-configuration'

export function themeOptions(themeLocale: GeneralCommunication['theme']) {
  const { options, title } = themeLocale

  return {
    title,
    options: [
      {
        id: 'light',
        title: options.light,
        icon: BrightnessUp
      },
      {
        id: 'dark',
        title: options.dark,
        icon: Moon
      },
      {
        id: 'system',
        title: options.system,
        icon: Desktop
      }
    ]
  }
}
