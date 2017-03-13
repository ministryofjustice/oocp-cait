module.exports = () => ({
  files: [
    { pattern: 'lib/**/*.js', load: false },
    "!lib/**/*.unit.spec.js",
    { pattern: 'scripts/**/*.js', load: false },
    "!scripts/**/*.unit.spec.js",
    { pattern: 'src/**/*.js', load: false },
    { pattern: 'data/**/*.json', load: false },
    { pattern: 'src/views/**/*', load: false },
    { pattern: 'dist/**/*', load: false }
  ],
  tests: [
    'lib/**/*.unit.spec.js',
    'scripts/**/*.unit.spec.js'
  ],
  env: {
    type: 'node'
  },
  testFramework: 'ava',
  workers: {
    recycle: true,
    initial: 1,
    regular: 1
  }
})
