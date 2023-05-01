// Plugins
import vue from "@vitejs/plugin-vue";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// Utilities
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

//optimize css some day

// Vite Pwa
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),
        // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
        vuetify({
            autoImport: true,
        }),
        // styles: {
        //   configFile: "src/styles/settings.scss",
        // },
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: "auto",
            // includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
            workbox: {
                cleanupOutdatedCaches: true,
                globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
            },
            manifest: {
                name: "Rajdhani Press",
                short_name: "Rajdhani Press",
                description: "News website",
                theme_color: "#ff7800",
                icons: [
                    {
                        src: "favicon-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "favicon-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
    define: { "process.env": {} },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
    },
    server: {
        port: 8000,
    },
});
