'use client'
import universalStyles from '@/app/universal.module.css'
import type { GeneralCommunication } from '@/i18n/base/configuration/general-configuration'
import { themeOptions } from './constants'
import configThemeStyles from './styles.module.css'

interface Props {
  themeLocale: GeneralCommunication['theme']
}
export function ConfigTheme({ themeLocale }: Props) {
  const { title, options } = themeOptions(themeLocale)

  return (
    <div className='flex flex-col gap-2'>
      <p>{title}</p>

      <div className='flex flex-wrap gap-2'>
        {options.map(option => (
          <button
            key={option.id}
            className={`${configThemeStyles.themeOption} ${universalStyles.regularButton}`}
            type='button'
          >
            <span>
              <option.icon />
            </span>
            <p>{option.title}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
