// Plugins
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { loadFontAwesome } from "./fontawesome";
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";

export function registerPlugins(app) {
    loadFonts();
    loadFontAwesome(app);
    app.use(vuetify).use(autoAnimatePlugin);
}
