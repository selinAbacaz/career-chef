import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@utils": path.resolve(import.meta.dirname, "./src/utils"),
      "@data": path.resolve(import.meta.dirname, "./src/data"),
      "@pages": path.resolve(import.meta.dirname, "./src/pages/index.ts"),
      "@components": path.resolve(
        import.meta.dirname,
        "./src/components/index.ts",
      ),
      "@css": path.resolve(import.meta.dirname, "./src/css"),
      "@themes": path.resolve(import.meta.dirname, "./src/css/themes"),
      "@assets": path.resolve(import.meta.dirname, "./src/assets"),
      "@indexcss": path.resolve(import.meta.dirname, "./src/index.css"),
    },
  },
});
