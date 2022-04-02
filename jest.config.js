// jest.config.js
const nextJest = require('next/jest');

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' });

// Any custom config you want to pass to Jest
const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/coverage', '<rootDir>/dist'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@component/(.*)': '<rootDir>/component/$1',
    '@styles/(.*)': '<rootDir>/styles/$1',
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);

// module.exports = {
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/coverage', '<rootDir>/dist'],
//   moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
//   moduleNameMapper: {
//     '@src/(.*)': '<rootDir>/src/$1',
//     '@component/(.*)': '<rootDir>/component/$1',
//     '@styles/(.*)': '<rootDir>/styles/$1',
//     '\\.(scss|sass|css)$': 'identity-obj-proxy',
//   },
//   coverageDirectory: 'coverage',
//   collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
//   coverageThreshold: {
//     global: {
//       branches: 0,
//       functions: 0,
//       lines: 0,
//       statements: 0,
//     },
//   },
// };
