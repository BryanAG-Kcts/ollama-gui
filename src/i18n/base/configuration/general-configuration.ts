export class GeneralCommunication {
  readonly title: string
  readonly theme: {
    readonly title: string
    readonly options: {
      light: string
      dark: string
      system: string
    }
  }

  constructor(
    title = 'General',
    theme: GeneralCommunication['theme'] = {
      title: 'Theme',
      options: {
        light: 'Light mode',
        dark: 'Dark mode',
        system: 'System'
      }
    }
  ) {
    this.title = title
    this.theme = theme
  }
}
