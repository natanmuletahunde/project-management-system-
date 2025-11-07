import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "3000",
                pathname: "/public/**",
              },
            // {
            //     protocol: 'https',
            //     hostname: 'res.cloudinary.com',
            //     port: '',
            //     pathname: '/dqvob2f3n/**',
            // },
        ]
    }
  /* config options here */
};

export default nextConfig;
