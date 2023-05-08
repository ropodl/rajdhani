<script setup>
import { mdiClockOutline } from "@mdi/js";
import { defineAsyncComponent, nextTick, onMounted, ref } from "vue";
defineProps({
    currentnews: Object,
    currentnewsdate: String,
    latest: Object,
    trending: Object,
    related: Object,
});

const tabNews = defineAsyncComponent(() =>
    import("../components/shared/tabnews.vue")
);
const relatedNews = defineAsyncComponent(() =>
    import("../components/shared/relatednews.vue")
);

const dynamicContent = ref(null);
let index = ref(null);
let allImages = ref("");
let imageSrcList = ref([]);
let allImagesAlt = ref([]);

onMounted(() => {
    imageGallery();
});

const imageGallery = () => {
    nextTick(() => {
        const content = dynamicContent.value.$el;
        console.log(content.getElementsByTagName("img"));
        // if (process.client) {
        if (content.getElementsByTagName("img")) {
            let context = this;
            allImages = content.getElementsByTagName("img");
            Array.from(allImages).forEach((element, index) => {
                if (context) {
                    allImagesAlt =
                        content.getElementsByTagName("img")[index].alt;
                    context.imageSrcList.push(element.src);
                    // console.log(this.allImagesAlt);
                    element.addEventListener("click", function () {
                        context.index = index;
                    });
                }
            });
        }
        // }
    });
};
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="9">
                <article>
                    <!-- class="position-sticky" -->
                    <!-- top: 60px; -->
                    <v-card
                        flat
                        rounded="0"
                        style="
                            z-index: 99;
                            background-color: rgb(var(--v-theme-background));
                        "
                    >
                        <v-card-title
                            class="text-h3 font-weight-bold text-wrap px-0"
                            style="line-height: 4rem"
                        >
                            {{ currentnews["title"] }}
                        </v-card-title>
                    </v-card>

                    <v-card-text class="px-0">
                        <v-icon :icon="mdiClockOutline"></v-icon>
                        {{ currentnewsdate }}
                    </v-card-text>

                    <v-img
                        eager
                        class="rounded-lg"
                        :src="currentnews['image']"
                    ></v-img>
                    <!-- <LightGallery
                        :images="imageSrcList"
                        :index="index"
                        :disable-scroll="false"
                        @close="index = null"
                    /> -->
                    {{ imageSrcList }}
                    <v-card-text
                        ref="dynamicContent"
                        class="px-0 dynamic-content"
                        v-html="currentnews['description']"
                    ></v-card-text>
                </article>
            </v-col>
            <v-col cols="12" md="3">
                <v-card class="mb-3">
                    <v-img
                        eager
                        height="274"
                        src="https://www.rajdhanipress.com/media/138/received_1128184614782496.webp"
                    ></v-img>
                </v-card>
                <v-card class="mb-3">
                    <v-img
                        eager
                        height="274"
                        src="https://www.rajdhanipress.com/media/74/goldenget.jpg"
                    ></v-img>
                </v-card>
                <tabNews :latest="latest" :trending="trending" />
            </v-col>
            <v-col cols="12" v-if="related.length > 0">
                <relatedNews :related="related"></relatedNews>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss">
div.dynamic-content {
    font-size: 22px;
    line-height: 2.2rem;
    img {
        max-width: 100%;
        height: auto;
        cursor: pointer;
        border-radius: 6px;
    }
    figure {
        figcaption {
            margin: 0;
            margin-bottom: 10px;
            padding: 0;
            font-size: 0.8rem;
            line-height: 1.25rem;
            text-align: right;
            justify-content: flex-end;
        }
        a {
            background-color: transparent;
            background-size: 0px;
            &:hover {
                background-size: 0px;
            }
        }
    }

    video {
        width: 100%;
        height: auto;
    }

    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    ul,
    ol {
        margin-bottom: 1rem;
    }

    blockquote {
        position: relative;
        font-size: 20px;
        margin-bottom: 20px;
        border-right: 10px solid var(--v-primary-base);
        background-color: rgba(50, 50, 50, 0.4);
        // backdrop-filter: blur(20px);
        &::before {
            content: open-quote;
            position: absolute;
            top: 0;
            left: -10px;
            font-family: medium-content-serif-font, Georgia, Cambria,
                "Times New Roman", Times, serif;
            font-size: 50px;
            font-weight: 900;
        }
        // footer.blockquote-footer{}
    }

    pre {
        padding: 10px 10px;
        overflow: auto;
        margin-bottom: 10px;
        background-color: #2d2d2d;
        color: white;
    }

    h1 {
        font-size: 2.5rem !important;
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
    }

    h2 {
        font-size: 2rem !important;
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
    }

    h3 {
        font-size: 1.75rem !important;
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
    }

    h4 {
        font-size: 1.5rem !important;
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
    }

    h5 {
        font-size: 1.25rem !important;
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
    }

    h6 {
        font-size: 1rem !important;
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
    }
}
</style>
