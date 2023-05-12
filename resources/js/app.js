import { createApp } from "vue";

// Plugins
import { defineAsyncComponent } from "vue";
// import { registerPlugins } from "./plugins";
import { createVuetify } from "vuetify";
import "vuetify/styles";
// Icons
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
// Composables
import { VApp, VLayout, VMain } from "vuetify/components";
// import vuetify from "./plugins/vuetify";

const app = createApp({
    components: {
        // Layouts first
        midbar: defineAsyncComponent(() =>
            import("./components/layout/midbar.vue")
        ),
        navbar: defineAsyncComponent(() =>
            import("./components/layout/navbar.vue")
        ),
        bottombar: defineAsyncComponent(() =>
            import("./components/layout/bottombar.vue")
        ),
        gotop: defineAsyncComponent(() =>
            import("./components/layout/gotop.vue")
        ),
        // Pages second
        searchpage: defineAsyncComponent(() => import("./pages/search.vue")),
        home: defineAsyncComponent(() => import("./pages/index.vue")),
        newsdetail: defineAsyncComponent(() =>
            import("./pages/news_detail.vue")
        ),
        categorynews: defineAsyncComponent(() =>
            import("./pages/category_news.vue")
        ),
        contactus: defineAsyncComponent(() => import("./pages/contactus.vue")),
    },
});

// registerPlugins(app);

const vuetify = createVuetify({
    // blueprint: md3,
    components: { VApp, VMain, VLayout },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: "light",
        variations: {
            colors: [
                "primary",
                "secondary",
                "error",
                "info",
                "success",
                "warning",
            ],
            lighten: 5,
            darken: 5,
        },
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: "#3870c5",
                },
            },
            dark: {
                dark: true,
                colors: {
                    primary: "#3870c5",
                },
            },
        },
    },
});

app.use(vuetify);

app.mount("#app");
