module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/infra/common/**',
    '!<rootDir>/src/infra/interceptors/**',
    '!<rootDir>/src/infra/pipes/**',
    '!<rootDir>/src/infra/**/**.module.ts',
    '!<rootDir>/src/**.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
  },
};
