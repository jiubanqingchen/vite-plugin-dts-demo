import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "platform/index.ts"),
      name: "QcComponent",
      fileName: (format) => `qc-component.${format}.js`,
      //我们只打包 es 包
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
    },
    outDir: "es",
  },
});
