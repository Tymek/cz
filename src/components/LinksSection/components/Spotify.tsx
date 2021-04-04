import { FC } from 'react'

export type SpotifyProps = {
  hello?: string
}

const Spotify: FC<SpotifyProps> = ({ hello }) => <>Spotify {hello}</>

// SPOTIFY_CLIENT_SECRET
// SPOTIFY_REDIRECT_URI

export const resolver = () => ({
  spotify: {
    hello: process.env.SPOTIFY_CLIENT_ID,
  },
})

export const selector = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state?: { spotify?: SpotifyProps } & Record<string, any>,
) => ({
  ...state?.spotify,
})

export default Spotify
