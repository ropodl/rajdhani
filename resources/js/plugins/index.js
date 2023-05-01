// Plugins
import { loadFonts } from "./webfontloader";
// import { loadFontAwesome } from "./fontawesome";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
// import router from "../router";
import vuetify from "./vuetify";

export function registerPlugins(app) {
    loadFonts();
    //   loadFontAwesome(app);
    app.use(vuetify).use(autoAnimatePlugin);
}
