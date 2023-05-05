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
        // Pages second
        searchpage: defineAsyncComponent(() =>
            import("./pages/search.vue")
        ),
        home: defineAsyncComponent(() =>
            import("./pages/index.vue")
        ),
    },
});

registerPlugins(app);

app.mount("#app");
