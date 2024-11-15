import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  // Configuration options go here
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});
