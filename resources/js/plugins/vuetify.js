import { createVuetify } from "vuetify";
// Styles
// import { md3 } from "vuetify/blueprints";
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
        },
        //  {
        //     dark: {
        //         dark: true,
        //         colors: {
        //             primary: "#3870c5",
        //             accent: colors.grey.darken3,
        //             secondary: colors.amber.darken3,
        //             info: colors.teal.lighten1,
        //             warning: colors.amber.base,
        //             error: colors.deepOrange.accent4,
        //             success: colors.green.accent3,
        //         },
        //     },
        // },
    },
});
