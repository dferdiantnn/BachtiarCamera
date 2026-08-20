/** @type {import("next").NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true" || process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig = {
  ...(isGithubPages ? {
    output: "export",
    basePath: "/BachtiarCamera",
    assetPrefix: "/BachtiarCamera",
  } : {}),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/BachtiarCamera" : "",
  },
};

export default nextConfig;
