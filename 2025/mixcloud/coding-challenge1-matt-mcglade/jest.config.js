module.exports = {
    clearMocks: true,

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // A map from regular expressions to paths to transformers
    transform: {
        '\\.[jt]sx?$': '<rootDir>/node_modules/babel-jest'
    },

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],

    // Module file extensions Jest will recognize
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
