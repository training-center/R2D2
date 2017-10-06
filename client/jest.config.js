module.exports = {
  collectCoverageFrom: ['**/src/**/*.js', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov'],
  moduleNameMapper: {
    '(.*).(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/__mocks__/fileMock.js',
    '^client[/](.+)': '<rootDir>/$1'
  },
  setupFiles: ['<rootDir>/config/setup-enzyme.js']
};
