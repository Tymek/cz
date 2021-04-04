import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

const AlternativeLocales: FC = () => {
  const { asPath, locales, locale, defaultLocale } = useRouter()

  return (
    <Head>
      {locales &&
        locales
          .filter(lang => lang !== locale)
          .map(lang => (
            <link
              key={lang}
              rel="alternate"
              hrefLang={lang}
              href={lang !== defaultLocale ? `/${lang}${asPath}` : asPath}
            />
          ))}
    </Head>
  )
}

export default AlternativeLocales
