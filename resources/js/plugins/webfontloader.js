/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
    const webFontLoader = await import(
        /* webpackChunkName: "webfontloader" */ "webfontloader"
    );

    webFontLoader.load({
        google: {
            families: [
                // "Roboto:100,300,400,500,700,900&display=swap",
                "Mukta+Mahee:200,300,400,500,600,700,800&display=swap",
                "Rajdhani:600&display=swap",
            ],
        },
    });
}
