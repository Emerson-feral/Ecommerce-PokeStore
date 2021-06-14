module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>//styleMock/styleMock.js'
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/setuptests.js'
  ]
};
