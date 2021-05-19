module.exports = {
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
};
