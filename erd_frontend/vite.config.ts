import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  build: {
    outDir: "../src/erd_assets",
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: "src/index.tsx",
      formats: ["es"],
      fileName: () => "editor.js",
      cssFileName: "editor",
    },
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
