/** @type {import('next').NextConfig} */
const nextConfig = {
  // Faragate deployment configuration (default)
  // Standalone mode creates a minimal server.js that can be run with Node.js
  // This is what the Dockerfile uses for production deployment
  
  // ============================================================================
  // S3 DEPLOYMENT CONFIGURATION (Alternative)
  // ============================================================================
  // To deploy to S3 instead of Faragate, replace the above configuration with:
  //
  // output: 'export',
  // output: 'standalone',
  // distDir: 'dist',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // },
  //
  // IMPORTANT: When deploying to S3:
  // - The build will output to the 'dist' folder instead of '.next'
  // - You cannot use server-side features (API routes, server components with dynamic data, etc.)
  // - The deploy script will upload the contents of the 'dist' folder to S3
  // - Make sure to update deploy.yaml to use platform: "s3"
  // ============================================================================
};

module.exports = nextConfig;
