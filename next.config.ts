import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beastcreativeagency.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/why-beast',
        destination: '/why-choose-beast-creative-agency',
        permanent: true,
      },
      {
        source: '/services/branding',
        destination: '/branding-agency-san-antonio',
        permanent: true,
      },
      {
        source: '/services/graphic-design',
        destination: '/graphic-design-san-antonio',
        permanent: true,
      },
      {
        source: '/services/logo-design',
        destination: '/logo-design-san-antonio',
        permanent: true,
      },
      {
        source: '/services/seo',
        destination: '/seo-agency-san-antonio',
        permanent: true,
      },
      {
        source: '/services/social-media',
        destination: '/social-media-marketing-san-antonio',
        permanent: true,
      },
      {
        source: '/services/web-design',
        destination: '/web-design-development-san-antonio',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
