import { useRouter } from 'next/router'
import { useCallback } from 'react'

const useTranslation = <Key extends string, Text extends string>(
  messages: Record<Key, Text>,
  translations?: Record<string, Partial<Record<Text, string>>>,
) => {
  const { locale } = useRouter()
  const callback = useCallback(
    (key: Key) => {
      const defaultText = messages[key]

      if (translations && Object.keys(translations).includes(locale)) {
        const translation = translations[locale]

        if (Object.keys(translation).includes(defaultText)) {
          return translation[defaultText]
        }
      }

      return defaultText
    },
    [locale, messages, translations],
  )

  return callback
}

export default useTranslation
