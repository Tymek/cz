import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  rootDir: './src',
  coverageDirectory: '<rootDir>/../coverage',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
}

export default config
