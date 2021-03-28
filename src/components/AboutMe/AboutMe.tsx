import { Fragment } from 'react'
import useTranslation from 'hooks/useTranslation'
import EnvelopeIcon from './assets/envelope.svg'
import BuildIcon from './assets/build.svg'
import LinkIcon from './assets/link.svg'
import Button from './components/Button'

const messages = {
  description: [
    "Hi! I'm Tymek. You can call me Tim.",
    'I use new technology to make life better.',
    'This pursuit lead me to specialize in creating websites.',
  ].join('\n'),
  links: 'Links',
  stack: 'Stack',
  contact: 'Contact',
}

const translations = {
  pl: {
    [messages.description]: [
      'Hej! Jestem Tymek.',
      'Używam nowych technologii, by żyło się łatwiej i ciekawiej.',
      'Moje zainteresowania sprawiły, że specjalizuję się w tworzeniu stron internetowych.',
    ].join('\n'),
    [messages.links]: 'Linki',
    [messages.stack]: 'Stack',
    [messages.contact]: 'Kontakt',
  },
}

const AboutMe = () => {
  const translate = useTranslation(messages, translations)

  return (
    <section className="container">
      <div className="block">
        <h1 className="title">
          Tymoteusz <br />
          Czech
        </h1>
        <div className="description">
          <p>
            {translate('description')
              .split('\n')
              .map((text, index) => (
                <Fragment key={text}>
                  {!!index && <br />}
                  {text}
                </Fragment>
              ))}
          </p>
        </div>
        <div className="buttons">
          <Button href="#contact" Icon={EnvelopeIcon} style="tertiary">
            {translate('contact')}
          </Button>
          <Button href="#stack" Icon={BuildIcon} style="primary">
            {translate('stack')}
          </Button>
          <Button href="#links" Icon={LinkIcon} style="secondary">
            {translate('links')}
          </Button>
        </div>
      </div>
      <style jsx>{`
        .container {
          box-sizing: border-box;
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          padding: 2rem 2rem;
        }

        @media (orientation: landscape) {
          .container {
            padding: 2rem 10vw;
          }
        }

        .title {
          font-size: 4.188036796rem;
          line-height: 1.2em;
          /* text-transform: uppercase; */
          font-weight: 700;
          color: #253854;
          margin: 0 0 2rem;
        }

        .description {
          padding-bottom: 1.11646975rem;
          color: #4b3445;
          font-size: 1.11646975rem;
          line-height: 1.6em;
        }
      `}</style>
    </section>
  )
}

export default AboutMe
