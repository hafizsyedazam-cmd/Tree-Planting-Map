/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[{
      protocol:"https",
      hostname:"images.pexels.com"
    }
    ]
  },
  reactCompiler: true,
};

export default nextConfig;
