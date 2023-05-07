<script setup>
import { mdiClockOutline } from "@mdi/js";
import { defineAsyncComponent } from "vue";
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
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="9">
                <article>
                    <v-card
                        flat
                        rounded="0"
                        style="
                            position: sticky;
                            top: 60px;
                            z-index: 99;
                            backdrop-filter: blur(10px);
                            background-color: rgba(var(--v-theme-background),0.8);
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
                        contain
                        class="rounded-lg"
                        :src="currentnews['image']"
                    ></v-img>

                    <v-card-text
                        class="px-0 news"
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
            <v-col cols="12">
                <relatedNews :related="related"></relatedNews>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped>
.news {
    font-size: 22px;
    line-height: 2.2rem;
}
</style>
