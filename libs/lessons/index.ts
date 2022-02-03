const {
	displayName: 'lessons',
	preset: '../../jest.preset.js',
	setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
	globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
	stringifyContentPathRegex: '\\.(html|svg)$'
} = require("./jest.config");
module.exports = {
	displayName: 'lessons',
	preset: '../../jest.preset.js',
	setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
	globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
	stringifyContentPathRegex: '\\.(html|svg)$'
};
