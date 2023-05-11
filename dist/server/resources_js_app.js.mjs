import { createApp, defineAsyncComponent } from "vue";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import { VApp, VMain, VLayout } from "vuetify/components";
const main = "";
const vuetify = createVuetify({
  // blueprint: md3,
  components: { VApp, VMain, VLayout },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    }
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
        "warning"
      ],
      lighten: 5,
      darken: 5
    },
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#3870c5"
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: "#3870c5"
        }
      }
    }
  }
});
const app = createApp({
  components: {
    // Layouts first
    // topbar: defineAsyncComponent(() =>
    //     import("./components/layout/topbar.vue")
    // ),
    midbar: defineAsyncComponent(
      () => import("./chunks/chunk-c8190899.js")
    ),
    navbar: defineAsyncComponent(
      () => import("./chunks/chunk-355e26af.js")
    ),
    bottombar: defineAsyncComponent(
      () => import("./chunks/chunk-e83712ec.js")
    ),
    gotop: defineAsyncComponent(
      () => import("./chunks/chunk-a7eda98d.js")
    ),
    // Pages second
    searchpage: defineAsyncComponent(() => import("./chunks/chunk-01f9017a.js")),
    home: defineAsyncComponent(() => import("./chunks/chunk-6d50913b.js")),
    newsdetail: defineAsyncComponent(
      () => import("./chunks/chunk-06c4158b.js")
    ),
    categorynews: defineAsyncComponent(
      () => import("./chunks/chunk-b6378c11.js")
    ),
    contactus: defineAsyncComponent(() => import("./chunks/chunk-3e9ccf44.js"))
  }
});
app.use(vuetify);
app.mount("#app");
