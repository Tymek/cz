import useTheme from 'hooks/useTheme'
import { FC, ReactNode, useMemo } from 'react'

type ButtonProps = {
  Icon?: FC<React.SVGProps<SVGSVGElement>>
  children?: ReactNode
  href?: string
  style?: 'default' | 'primary' | 'secondary' | 'tertiary'
}

const Button: FC<ButtonProps> = ({
  children,
  href,
  Icon,
  style = 'default',
}) => {
  const theme = useTheme()

  const styles = useMemo(
    () => ({
      default: {},
      primary: {
        background: theme.colors.primary,
        color: theme.colors.background,
      },
      secondary: {
        background: theme.colors.secondary,
        color: theme.colors.text,
      },
      tertiary: {
        background: theme.colors.tertiary,
        color: theme.colors.background,
      },
    }),
    [theme],
  )

  return (
    <a href={href} className="button" style={styles[style]}>
      {Icon && <Icon aria-hidden="true" height="1em" className="icon" />}
      <span className="label">{children}</span>
      <style jsx>{`
        .button {
          display: inline-flex;
          border: 1px solid transparent;
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
          font-size: 1rem;
          line-height: 1.6em;
          margin: 0 8px 0 0;
          padding: 0.25em 1em;
          border-radius: ${theme.borderRadius};
          align-items: center;
          cursor: pointer;
          text-decoration: none;
          background: ${theme.colors.foreground};
          color: ${theme.colors.background};
        }

        .icon {
          height: 1em;
          font-size: 1.25rem;
          display: block;
          margin-right: 0.4em;
        }

        .label {
          padding-top: 0.2em;
        }
      `}</style>
    </a>
  )
}

export default Button
