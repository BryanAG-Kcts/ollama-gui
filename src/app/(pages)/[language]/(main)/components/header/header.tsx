import Gear from '@/../public/icons/settings.svg'
import universalStyles from '@/app/universal.module.css'
import { Configuration } from '../../../views/configuration/configuration'
import headerStyles from './styles.module.css'

export function Header() {
  return (
    <header className={headerStyles.header}>
      <h1 className={universalStyles.textHeading1}>Ollama UI</h1>
      <Configuration>
        <Gear />
      </Configuration>
    </header>
  )
}
