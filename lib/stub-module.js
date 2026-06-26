// Stub module: satisfies imports from legacy CRA source files
// These packages are no longer used in the Next.js app
module.exports = new Proxy({}, {
  get: () => () => null,
})
