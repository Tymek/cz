import { useRouter } from 'next/router'

const useTranslation = <Key extends string, Text extends string>(
  messages: Record<Key, Text>,
  translations?: Record<string, Partial<Record<Text, string>>>,
) => {
  const { locale } = useRouter()

  return (key: Key) => {
    const defaultText = messages[key]

    if (translations && Object.keys(translations).includes(locale)) {
      const translation = translations[locale]

      if (Object.keys(translation).includes(defaultText)) {
        return translation[defaultText]
      }
    }

    return defaultText
  }
}

export default useTranslation
