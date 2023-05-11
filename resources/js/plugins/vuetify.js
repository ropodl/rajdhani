import { createVuetify } from "vuetify";
import "vuetify/styles";
// Icons
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
// Composables
import { VApp, VLayout, VMain } from "vuetify/components";

export default createVuetify({
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
