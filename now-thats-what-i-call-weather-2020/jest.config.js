const { defaults } = require("jest-config")

module.exports = {
  setupFiles: [
    "./test/bootstrap-jest.ts"
  ],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.scss$": "./config/jest/cssTransform.js",
  },
  preset: "ts-jest",
  transformIgnorePatterns: ["/node_modules/"],
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "EMIS Group Web Application - Test Report",
      "outputPath": "build/reports/jest/test_report.html"
    }]
  ],
  collectCoverage: true,
  coverageDirectory: "build/reports/coverage",
  coverageReporters: ["json", "html", "cobertura", "lcov"],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10
    }
  },
  testMatch: [
    "**/**/*spec.ts?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/build/"
  ]
}
