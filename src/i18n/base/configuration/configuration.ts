import { GeneralCommunication } from './general-configuration'

export class Configuration {
  readonly title: string
  readonly general: GeneralCommunication

  constructor(title = 'Configuration', general = new GeneralCommunication()) {
    this.title = title
    this.general = general
  }
}
