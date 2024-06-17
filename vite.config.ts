import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      components: path.resolve(
        __dirname,
        "./src/components"
      ),
      shared: path.resolve(__dirname, "./src/shared"),
      widgets: path.resolve(__dirname, "./src/widgets"),
      app: path.resolve(__dirname, "./src/app"),
      pages: path.resolve(__dirname, "./src/pages"),
      store: path.resolve(__dirname, "./src/store"),
      "@": path.resolve(__dirname, "./src")
    }
  },
  base: "/moviefinder"
})
