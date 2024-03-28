/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sieun-portfolio.s3.ap-northeast-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
