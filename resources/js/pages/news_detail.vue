<script setup>
import { mdiClockOutline, mdiClose, mdiFire } from "@mdi/js";
import Panzoom from "@panzoom/panzoom";
import { defineAsyncComponent, nextTick, onMounted, reactive, ref } from "vue";

defineProps({
    currentnews: Object,
    currentnewsdate: String,
    latest: Object,
    trending: Object,
    related: Object,
    advertisements: Object,
});

const tabNews = defineAsyncComponent(() =>
    import("../components/shared/tabnews.vue")
);
const relatedNews = defineAsyncComponent(() =>
    import("../components/shared/relatednews.vue")
);

const dynamicContent = ref(null);
let thumbIndex = ref(null);
let imageSrcList = reactive([]);
let showGallery = ref(false);
let allImagesAlt = reactive([]);

onMounted(() => {
    imageCollector();
});

const imageCollector = () => {
    nextTick(() => {
        // image collector
        const content = dynamicContent.value.$el;
        const allImages = content.getElementsByTagName("img");
        if (allImages.length > 0) {
            Array.from(allImages).forEach((element, index) => {
                console.log(element);
                allImagesAlt.push(
                    content.getElementsByTagName("img")[index].alt
                );
                imageSrcList.push(element.src);
                element.addEventListener("click", function () {
                    thumbIndex.value = index;
                    showGallery.value = true;
                    nextTick(() => {
                        const elem = document.getElementById("scene");
                        const panzoom = Panzoom(elem, {
                            maxScale: 5,
                        });
                        elem.parentElement.addEventListener(
                            "wheel",
                            panzoom.zoomWithWheel
                        );
                        console.log(showGallery.value);
                    });
                });
                // }
            });
        }
    });
};
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="9">
                <article>
                    <!-- <v-card
                        flat
                        rounded="0"
                        style="
                            z-index: 99;
                            background-color: rgb(var(--v-theme-background));
                        "
                    > -->
                        <v-card-title
                            class="text-h3 font-weight-black text-wrap px-0"
                            style="line-height: 4rem"
                            v-text="currentnews['title']"
                        >
                        </v-card-title>
                    <!-- </v-card> -->

                    <v-card-text class="px-0">
                        <v-icon :icon="mdiClockOutline"></v-icon>
                        {{ currentnewsdate }}
                    </v-card-text>

                    <v-img
                        eager
                        class="rounded-lg align-start"
                        :src="currentnews['image']"
                    >
                        <v-card-title v-if="currentnews['is_trending']">
                            <v-btn icon color="grey-darken-4">
                                <v-icon color="red" :icon="mdiFire"></v-icon>
                            </v-btn>
                        </v-card-title>
                    </v-img>

                    <v-card-text
                        ref="dynamicContent"
                        class="px-0 dynamic-content"
                        v-html="currentnews['description']"
                    ></v-card-text>
                </article>
            </v-col>
            <v-col cols="12" md="3">
                <template v-if="advertisements.sm_ad[0]">
                    <div class="d-flex flex-wrap justify-space-between">
                        <v-card
                            class="mb-3 w-100 h-100"
                            :href="advertisements.sm_ad[0].advertisement.url"
                            target="_blank"
                            max-height="290"
                            max-width="290"
                        >
                            <v-img
                                :src="
                                    advertisements.sm_ad[0].advertisement.image
                                "
                                :alt="
                                    advertisements.sm_ad[0].advertisement.title
                                "
                            ></v-img>
                        </v-card>
                        <v-card
                            v-if="advertisements.sm_ad[1]"
                            class="mb-3 w-100 h-100"
                            :href="advertisements.sm_ad[1].advertisement.url"
                            target="_blank"
                            max-height="290"
                            max-width="290"
                        >
                            <v-img
                                :src="
                                    advertisements.sm_ad[1].advertisement.image
                                "
                                :alt="
                                    advertisements.sm_ad[1].advertisement.title
                                "
                            ></v-img>
                        </v-card>
                    </div>
                </template>
                <tabNews :latest="latest" :trending="trending" />
            </v-col>
            <v-col cols="12" v-if="related.length > 0">
                <relatedNews :related="related"></relatedNews>
            </v-col>
        </v-row>
    </v-container>
    <!-- TODO:work more on gallery -->
    <!-- Image Gallery -->
    <v-overlay
        eager
        persistent
        no-click-animation
        theme="dark"
        :model-value="showGallery"
        content-class="w-100 gallery-content"
    >
        <v-btn
            icon
            theme="dark"
            color="white"
            variant="tonal"
            @click="showGallery = false"
            style="
                position: absolute;
                top: 10px;
                right: 10px;
                z-index: 9999999999;
            "
        >
            <v-icon :icon="mdiClose"></v-icon>
        </v-btn>
        <div id="scene" style="height: calc(100vh - 80px)">
            <v-img :src="imageSrcList[thumbIndex]" />
        </div>
        <v-card
            class="w-100 d-flex align-center justify-center pa-4"
            height="80"
            style="position: relative"
        >
            <ul class="d-flex">
                <li
                    class="list-style-none"
                    :class="i + 1 >= imageSrcList.length ? '' : 'mr-3'"
                    v-for="(image, i) in imageSrcList"
                    :style="
                        thumbIndex == i
                            ? 'border: 2px solid red'
                            : 'border: 2px solid transparent'
                    "
                >
                    <v-img
                        height="50"
                        width="100"
                        :src="image"
                        class="pa-1"
                        @click="thumbIndex = i"
                        style="cursor: pointer"
                    ></v-img>
                </li>
            </ul>
        </v-card>
        <!-- <v-img src=""></v-img> -->
    </v-overlay>
</template>

<style lang="scss">
.gallery-content {
    background-color: rgba(var(--v-theme-background), 0.5);
    backdrop-filter: blur(10px);
}
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
