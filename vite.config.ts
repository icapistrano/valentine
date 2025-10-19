import { defineConfig } from "vite";
import gltf from "vite-plugin-gltf";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: "/valentine/",
  build: {
    outDir: "dist/valentine", // Build output folder
  },
  plugins: [react(), gltf()],
}));
