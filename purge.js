// Default safelist: github.com/Developmint/nuxt-purgecss/blob/main/src/config.ts
const defaultSafelist = [
    "body",
    "html",
    // 'nuxt-progress',
    // '__nuxt',
    // /-(leave|enter|appear)(|-(to|from|active))$/, // Normal transitions
    // /^nuxt-link(|-exact)-active$/, // Nuxt link classes
    // /^(?!cursor-move).+-move$/, // Move transitions
    // /.*data-v-.*/, // Keep scoped styles
    // // New Vue3 selectors
    // /:slotted/,
    // /:deep/,
    // /:global/,
];

// Default content: github.com/Developmint/nuxt-purgecss/blob/main/src/config.ts
const defaultContent = [
    "resources/js/components/**/*.{vue,jsx?,tsx?}",
    // "resources/js/layouts/**/*.{vue,jsx?,tsx?}",
    "resources/js/pages/**/*.{vue,jsx?,tsx?}",
    // 'composables/**/*.{vue,jsx?,tsx?}',
    // 'App.{vue,jsx?,tsx?}',
    // 'app.{vue,jsx?,tsx?}',
    // 'plugins/**/*.{js,ts}',
    // 'nuxt.config.{js,ts}',
    "public/build/assets/*.{vue,js?,tsx?}",
];

/* Vuetify: Additional locations to scan */
const additionalLocations = [
    "modules/purgecss/static-generated-html/**/*.html",
];

/* Vuetify: Selectors (runtime generated) better never not to remove */
const vuetifySafelist = [
    /v-application/, // generated by vApp
    // /v-layout/, // generated by vApp
    /v-toolbar/, // generated by vAppBar
    // /v-locale/,  // generated runtime by i.e vBtn if locale enabled
    /v-icon/, // generated by vBtn
    /flex-grow-1/, // generated by v-spacer
    /v-responsive/, // generated eager
];

/* Vuetify: Components and directives used in this project */
const usedComponents = [
    /v-ripple/, // when enabled, generated at runtime by vBtn
    /v-app/,
    /v-app-bar/,
    // /v-app-bar-nav-icon/,
    // /v-navigation-drawer/,
    // /v-toolbar-title/,
    /v-container/,
    // /v-sheet/,
    /v-main/,
    /v-card/,
    /v-btn/,
    /v-col/,
];

export default {
    content: [...defaultContent, ...additionalLocations],
    safelist: {
        greedy: [...vuetifySafelist, ...usedComponents],
        standard: [...defaultSafelist],
    },
};