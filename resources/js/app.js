import { createApp } from "vue";

// Plugins
import { defineAsyncComponent } from "vue";
import { registerPlugins } from "./plugins";

const app = createApp({
    components: {
        // Layouts first
        topbar: defineAsyncComponent(() =>
            import("./components/layout/topbar.vue")
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

registerPlugins(app);

app.mount("#app");
