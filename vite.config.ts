import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // <-- aggiunto

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // <-- qui si definisce l'alias "@"
    },
  },
});
