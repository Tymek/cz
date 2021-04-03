import { FC } from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import useTranslation from 'hooks/useTranslation'
import Block from './Block'
import { useRouter } from 'next/router'
import { enUS, pl } from 'date-fns/locale'
import useTheme from 'hooks/useTheme'

const messages = {
  lastBuild: 'Last build: ',
  moreToCome: 'More to come',
}

const translations = {
  pl: {
    [messages.lastBuild]: 'Ostatnia aktualizacja: ',
    [messages.moreToCome]: 'Będzie więcej',
  },
}

export type OtherProps = { buildTimestamp?: string }

const Other: FC<OtherProps> = ({ buildTimestamp }) => {
  const { locale } = useRouter()
  const theme = useTheme()
  const translate = useTranslation(messages, translations)
  const timestamp = parseInt(buildTimestamp, 10)
  const dateLocale = locale === 'pl' ? pl : enUS

  return (
    <Block
      background={theme.colors.backgroundAccent}
      color={theme.colors.text}
      height={1}
      title={translate('moreToCome')}
    >
      {translate('lastBuild')}{' '}
      {format(timestamp, 'PPPPpppp', { locale: dateLocale })} (
      {formatDistance(timestamp, new Date(), {
        addSuffix: true,
        locale: dateLocale,
      })}
      )
    </Block>
  )
}

export const selector = (state: OtherProps & Record<string, any>) => ({
  buildTimestamp: state?.buildTimestamp,
})

export default Other
