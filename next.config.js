/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['truwin.flywheelsites.com'],
  },
  redirects: async() => {
    return [
      {
        //Redirected to home page
        source: '/landing',
        destination: '/',
        permanent: true,
      },
      {
        source: '/doors',
        destination: '/product/doors',
        permanent: true,
      },
      {
        source: '/siding',
        destination: '/product/siding',
        permanent: true,
      },
      {
        source: '/windows',
        destination: '/product/windows',
        permanent: true,
      },
      {
        source: '/categories/pricing',
        destination: '/pricing',
        permanent: true,
      },
      {
        //This page doesn't exist on the new site yet
        source: '/categories/installation',
        destination: '/',
        permanent: true,
      },
      {
        source: '/why-truwin',
        destination: '/company',
        permanent: true,
      },
      {
        source: '/window-pricing-guide',
        destination: '/location/houston',
        permanent: true,
      },
      {
        source: '/replacement-windows-bryan',
        destination: '/location/bryan',
        permanent: true,
      },
      {
        source: '/replacement-windows-college-station',
        destination: '/location/college-station',
        permanent: true,
      },
      {
        source: '/replacement-windows-houston',
        destination: '/location/houston',
        permanent: true,
      },
      {
        source: '/rockport-replacement-windows',
        destination: '/location/houston',
        permanent: true,
      },
    ]
  }
}