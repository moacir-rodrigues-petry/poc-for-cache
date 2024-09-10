// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // This configuration is typically not needed if you follow the convention of having the test files in the `tests` folder
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
};
