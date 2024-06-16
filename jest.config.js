module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
