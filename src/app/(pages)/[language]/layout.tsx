import type { RouterLanguageProps } from '@/app/interfaces'
import { I18n } from '@/i18n/i18n'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

interface Props extends RouterLanguageProps {
  children: ReactNode
}
export default async function Layout({ children, params }: Props) {
  const i18n = I18n.getInstance()
  const { language } = await params
  i18n.setLanguage = language

  return i18n.getLocale ? children : notFound()
}
