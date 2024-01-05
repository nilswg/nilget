import { defineConfig } from "tsup";

export default defineConfig({
  shims: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: true,
  entry: [
    "./src/index.tsx",
  ],
  format: ["cjs"], // 
  outDir: "dist",
  dts: true,
});
