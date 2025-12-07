/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reduce unnecessary recompilation
  reactStrictMode: true,
  
  // Optimize webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Reduce file watching overhead
    if (dev) {
      config.watchOptions = {
        poll: false, // Disable polling
        aggregateTimeout: 300, // Delay rebuild after changes
        ignored: ['**/node_modules', '**/.git', '**/.next'],
      };
    }
    
    // Reduce memory usage
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
    };
    
    return config;
  },
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // Experimental features for better performance
  experimental: {
    // Reduce memory usage
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;
