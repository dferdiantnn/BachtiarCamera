/** @type {import("next").NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const isGithubPages = isProd && (process.env.GITHUB_ACTIONS === "true" || process.env.DEPLOY_TARGET === "gh-pages");
const basePath = isGithubPages ? "/BachtiarCamera" : "";

const nextConfig = {
  output: isProd ? "export" : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
