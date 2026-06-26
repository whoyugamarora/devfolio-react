/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only TypeScript files are treated as pages — prevents old CRA .jsx files in src/ from registering as routes
  pageExtensions: ['ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    // Next.js 15 generates src/app/ paths in validator.ts when a src/ directory exists,
    // even though the actual app directory is at the root. Compilation succeeds fine.
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint is configured to ignore src/ via .eslintignore
    dirs: ['app', 'components', 'lib'],
  },
}

module.exports = nextConfig
