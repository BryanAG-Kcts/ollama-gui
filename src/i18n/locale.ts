import { Configuration } from './base/configuration'

export class Locale {
  readonly configuration: Configuration

  constructor(configuration = new Configuration()) {
    this.configuration = configuration
  }
}
