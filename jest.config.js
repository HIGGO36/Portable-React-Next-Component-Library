module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: [
    'node_modules',
    '<rootDir>/components',
    '<rootDir>/pages',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  collectCoverageFrom: [
    '<rootDir>/components/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/pages/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: 'coverage',
};
