export class Configuration {
  readonly title: string
  readonly darkMode: {
    readonly lightMode: string
    readonly darkMode: string
    readonly system: string
  }

  constructor(
    title = 'Configuration',
    darkMode = {
      lightMode: 'Light mode',
      darkMode: 'Dark mode',
      system: 'preferred by the system'
    }
  ) {
    this.title = title
    this.darkMode = darkMode
  }
}
