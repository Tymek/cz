import AboutMe from 'components/AboutMe'
import { GetStaticProps, NextPage } from 'next'
import LinksSection, {
  LinksSectionProps,
  resolver as linksResolver,
} from 'components/LinksSection'

type Props = { linksProps: LinksSectionProps }

const Home: NextPage<Props> = ({ linksProps }) => (
  <>
    <AboutMe />
    <LinksSection
      {...linksProps}
      buildTimestamp={process.env.BUILD_TIMESTAMP}
    />
  </>
)

export const getStaticProps: GetStaticProps = async (context) => {
  const linksProps = linksResolver()
  return {
    props: {
      linksProps,
    },
  }
}

export default Home
