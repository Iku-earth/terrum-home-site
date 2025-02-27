/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:
      process.env.NODE_ENV === "production"
        ? ["terrum-prod.s3.amazonaws.com"]
        : ["terrum-development.s3.amazonaws.com"],
  },
};

module.exports = nextConfig
