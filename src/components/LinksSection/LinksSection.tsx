import { FC } from 'react'
import Spotify, {
  SpotifyProps,
  resolver as spotifyResolver,
  selector as spotifySelector,
} from './components/Spotify'
import Other, {
  OtherProps,
  selector as otherSelector,
} from './components/Other'

export type LinksSectionProps = SpotifyProps & OtherProps

const LinksSection: FC<LinksSectionProps> = ({ ...props }) => (
  <div id="links" className="wrapper">
    {console.log({ props })}
    <Spotify {...spotifySelector(props)} />
    {/* <StackOverflow /> */}
    {/* <GitHub /> */}
    {/* <GitLab /> */}
    {/* <Instagram /> */}
    <Other {...otherSelector(props)} />
    <style jsx>{`
      .wrapper {
        padding: 2rem 2rem 5rem;
        min-height: 90vh;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        align-content: start;
        gap: 1rem;
      }

      @media (orientation: landscape) {
        .wrapper {
          padding: 2rem 10vw;
        }
      }
    `}</style>
  </div>
)

export const resolver = () => ({
  ...spotifyResolver(),
})

export default LinksSection
