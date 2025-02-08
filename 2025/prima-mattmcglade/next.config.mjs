// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    disableStaticImages: true,
    domains: [
      'loremflickr.com'
    ],
    deviceSizes: [640, 750, 900, 1080, 1200, 1440, 1920, 2560],
    imageSizes: [8, 16, 32, 48, 64, 96, 128, 192, 256, 320, 384, 448, 512],
  },
};

export default nextConfig;
