import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleDirectories: ['node_modules', 'src'],
  rootDir: './',
  modulePaths: ['<rootDir>'],
  testRegex: '.*\\.test\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['./src/**/*.(t|j)s', '!./src/**/*.d.ts'],
  coverageDirectory: './coverage',
  transformIgnorePatterns: ['node_modules/@reduxjs/toolkit/node_modules/immer'],
  testEnvironment: 'node',
};
export default config;
