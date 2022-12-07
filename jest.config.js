module.exports = {
  roots: ['<rootDir>'],
  // Onde queremos pegar os arquivos para teste
  collectCoverageFrom: ['<rootDir/src/**/*.ts>', '**/*.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/presentation', '<rootDir>/src/utils/option'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
