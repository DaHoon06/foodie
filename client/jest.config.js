//jest.config.js

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js",
    "<rootDir>/setupTests.ts",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@public/(.*)$": "<rootDir>/public/$1",
    "^@images/(.*)$": "<rootDir>/public/images/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
