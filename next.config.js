/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async() => {
    return [
      /** 
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
        destination: '/location/houston-replacement-windows',
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
        destination: '/location/houston-replacement-windows',
        permanent: true,
      },
      {
        source: '/rockport-replacement-windows',
        destination: '/location/houston-replacement-windows',
        permanent: true,
      },
      { 
        //pointed this one to houston
        source: '/design-windows',
        destination: '/location/houston-replacement-windows',
        permanent: true,
      },
      { 
        //sent to home because the contact for is there
        source: '/contact',
        destination: '/',
        permanent: true,
      },
      { 
        //I added this page, not sure if you serve this area
        source: '/san-antonio',
        destination: '/location/san-antonio',
        permanent: true,
      },
      
      { 
        //Send this to a blog post
        source: '/healthy-home',
        destination: '/blog/15-off-windows-for-a-healthy-home-economy',
        permanent: true,
      },
      { 
        source: '/author/truwin',
        destination: '/company',
        permanent: true,
      },
      { 
        source: '/window-warranty',
        destination: '/',
        permanent: true,
      },
      { 
        source: '/post',
        destination: '/blog',
        permanent: true,
      },
      { 
        source: '/proper-siding-install',
        destination: '/product/siding',
        permanent: true,
      },
      { 
        source: '/windows_and_doors_supply_chain_headaches',
        destination: '/blog',
        permanent: true,
      },
      { 
        source: '/2019-spring-katy-home-and-garden-show-2',
        destination: '/blog/2019-spring-katy-home-and-garden-show-2',
        permanent: true,
      },
      { 
        source: '/2019-fall-katy-home-garden',
        destination: '/blog',
        permanent: true,
      },
      { 
        source: '/2018-fall-katy-home-garden-show',
        destination: '/blog/2018-fall-katy-home-garden-show',
        permanent: true,
      },
      { 
        source: '/better-windows-301-installation',
        destination: '/blog',
        permanent: true,
      },*/
    ]
  },
}

module.exports = {
  redirects: async() => {
    return [
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
        //sent to home because the contact for is there
        source: '/contact',
        destination: '/pricing',
        permanent: true,
      },
      //Locations
      {
        source: '/location/san-antonio',
        destination: '/location/replacement-windows-san-antonio',
        permanent: true,
      },
      {
        source: '/location/college-station',
        destination: '/location/replacement-windows-college-station',
        permanent: true,
      },
      {
        source: '/location/bryan',
        destination: '/location/replacement-windows-bryan',
        permanent: true,
      },
      {
        source: '/location/humble',
        destination: '/location/replacement-windows-humble',
        permanent: true,
      },
      {
        source: '/location/kingwood',
        destination: '/location/replacement-windows-kingwood',
        permanent: true,
      },
      {
        source: '/location/katy',
        destination: '/location/replacement-windows-katy',
        permanent: true,
      },
      {
        source: '/location/woodlands',
        destination: '/location/replacement-windows-woodlands',
        permanent: true,
      },
      {
        source: '/location/conroe',
        destination: '/location/replacement-windows-conroe',
        permanent: true,
      },
      {
        source: '/location/richmond',
        destination: '/location/replacement-windows-richmond',
        permanent: true,
      },
    ]
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['truwin.flywheelsites.com'],
  },
  
  typescript: {
    ignoreBuildErrors:true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}