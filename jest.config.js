module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'], // Padrão para encontrar os arquivos de teste
    moduleFileExtensions: ['ts', 'js'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json'
      }
    },
    collectCoverage: true, // Coletar cobertura de código
    collectCoverageFrom: ['src/**/*.ts'], // Arquivos para coletar cobertura
    coverageReporters: ['text', 'lcov'] // Tipos de relatórios de cobertura
  };
  