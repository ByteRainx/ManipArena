import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 关键配置
  images: { unoptimized: true }, // 可选：禁用图片优化
};

export default nextConfig;
