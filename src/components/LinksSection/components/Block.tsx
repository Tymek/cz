import useTheme from 'hooks/useTheme'
import { FC } from 'react'

type BlockProps = {
  height?: number
  title?: string
  link?: string
  color?: string
  background?: string
}

const Block: FC<BlockProps> = ({
  children,
  height = 1,
  title = '',
  link = '',
  color = 'black',
  background = 'transparent',
}) => {
  const theme = useTheme()

  return (
    <div
      className="block"
      style={{ color, background, gridRowStart: `span ${height}` }}
    >
      <h3 className="title">
        {link ? (
          <a href={link} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      {children}
      <style jsx>{`
        .block {
          border-radius: ${theme.borderRadius};
          padding: 1rem;
        }

        .title {
          margin-top: 0.25rem;
          font-size: 1.546391438rem;
        }
        .link {
          display: block;
          text-decoration: none;
        }
        .link:hover,
        .link:focus,
        .link:active {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}

export default Block
