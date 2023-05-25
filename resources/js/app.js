import { createApp, defineAsyncComponent } from "vue";
// Plugins
import { createVuetify } from "vuetify";
import "vuetify/styles";
// Icons
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

const vuetify = createVuetify({
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

const app = createApp({
    components: {
        // Layouts first
        app: defineAsyncComponent(() => import("./app.vue")),
        popupad: defineAsyncComponent(() =>
            import("./components/layout/popupad.vue")
        ),
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

app.use(vuetify);

app.mount("#app");
