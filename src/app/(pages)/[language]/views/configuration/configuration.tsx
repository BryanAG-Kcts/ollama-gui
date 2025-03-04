import X from '@/../public/icons/x.svg'
import universalStyles from '@/app/universal.module.css'
import { I18n } from '@/i18n/i18n'
import type { ReactNode } from 'react'
import configurationStyles from './configuration.module.css'

interface Props {
  children: ReactNode
}
export function Configuration({ children }: Props) {
  const { configuration } = I18n.getInstance().getLocale

  return (
    <>
      <div className={configurationStyles.configurationBody}>
        {children}

        <input
          name='open-configuration-dialog'
          type='radio'
        />
      </div>

      <div className={configurationStyles.configurationDialog}>
        <section>
          <div className='border-b pb-2 flex items-center justify-between'>
            <h2 className={universalStyles.textHeading1}>
              {configuration.title}
            </h2>

            <div>
              <X />

              <input
                name='open-configuration-dialog'
                type='radio'
              />
            </div>
          </div>
        </section>

        <input
          name='open-configuration-dialog'
          type='radio'
        />
      </div>
    </>
  )
}
