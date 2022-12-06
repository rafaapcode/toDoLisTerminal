module.exports = {
  roots: ['<rootDir>'],
  // Onde queremos pegar os arquivos para teste
  collectCoverageFrom: ['<rootDir/src/**/*.ts / .js>'],
  coverageDirectory: 'coverage',
  testEnviroment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
