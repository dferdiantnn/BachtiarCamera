/** @type {import("next").NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/BachtiarCamera" : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "instagram.com" },
      { protocol: "https", hostname: "*.cdninstagram.com" },
      { protocol: "https", hostname: "*.fbcdn.net" }
    ]
  }
};

export default nextConfig;
