// Plugins
import Vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";
import vuetify from "vite-plugin-vuetify";
// Utilities
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

import VueMacros from "unplugin-vue-macros/vite";
// Vite Pwa
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                // frontend
                "resources/sass/frontend.scss",
                "resources/js/app.js",
                // backend
                // "resources/scss/backend.scss",
                // "resources/js/backend/backend.js",
                // inertia
                // "resources/js/inertia/index.js",
            ],
            refresh: true,
        }),
        VueMacros({
            plugins: {
                vue: Vue({
                    template: {
                        transformAssetUrls: {
                            base: null,
                            includeAbsolute: false,
                        },
                    },
                }),
            },
        }),
        vuetify({
            treeshaking: true,
            autoImport: true,
        }),
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
            vue: "vue/dist/vue.esm-bundler.js",
        },
        extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
    },
    server: {
        port: 8000,
    },
});
