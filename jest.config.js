module.exports = {
  roots: ['<rootDir>/src/Components/ConferenceRoom/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/src/Components/ConferenceRoom/setupTests.ts'],
  // src/Components/ConferenceRoom/setupTests.ts
  reporters: ['default', 'jest-junit'],

  // We don't need to test the static JSX in the icons folder, so let's exclude it from our test coverage report
  coveragePathIgnorePatterns: ['node_modules', 'src/icons'],
};
