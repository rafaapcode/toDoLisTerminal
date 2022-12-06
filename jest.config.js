module.exports = {
  roots: ['<rootDir>'],
  // Onde queremos pegar os arquivos para teste
  collectCoverageFrom: ['<rootDir/src/**/*.ts>'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
