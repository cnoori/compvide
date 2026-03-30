/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // Legacy WordPress URLs → new Next.js routes
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-us/',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/complement-system-serum',
        destination: '/cimed',
        permanent: true,
      },
      {
        source: '/complement-system-serum/',
        destination: '/cimed',
        permanent: true,
      },
      {
        source: '/complement-system-ai-buffers',
        destination: '/platform',
        permanent: true,
      },
      {
        source: '/complement-system-ai-buffers/',
        destination: '/platform',
        permanent: true,
      },
      {
        source: '/hello-world',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hello-world/',
        destination: '/',
        permanent: true,
      },
      // Enforce www (non-www → www)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'compvide.com' }],
        destination: 'https://www.compvide.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
