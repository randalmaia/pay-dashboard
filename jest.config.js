module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: { "\\.(css|less)$": "<rootDir>/mocks/styleMock.js" },
};
