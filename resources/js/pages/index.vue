<script setup>
import { defineAsyncComponent } from "vue";

defineProps({
    mainnews: Object,
    latestnews: Object,
    provincenews: Object,
    provinces: Object,
    photos: Object,
    videos: Object,
});

const mainNews = defineAsyncComponent(() =>
    import("../components/shared/home/mainnews.vue")
);
const latestNews = defineAsyncComponent(() =>
    import("../components/shared/home/latestNews.vue")
);
const provinceNews = defineAsyncComponent(() =>
    import("../components/shared/home/provincenews.vue")
);
const photoFeature = defineAsyncComponent(() =>
    import("../components/shared/home/photofeature.vue")
);
const videoFeature = defineAsyncComponent(() =>
    import("../components/shared/home/videofeature.vue")
);
</script>
<template>
    <template v-if="mainnews.length > 0">
        <mainNews :mainnews="mainnews" />
    </template>
    <v-container>
        <v-row>
            <v-col cols="12" md="9">
                <latestNews :latest="latestnews" />
            </v-col>
            <v-col cols="12" md="3">
                <v-card class="mb-3">
                    <v-img
                        src="https://www.rajdhanipress.com/media/138/received_1128184614782496.webp"
                    ></v-img>
                </v-card>
                <v-card>
                    <v-img
                        src="https://www.rajdhanipress.com/media/74/goldenget.jpg"
                    ></v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <provinceNews :provinces="provinces" :provincenews="provincenews" />
    <photoFeature :photos="photos"></photoFeature>
    <videoFeature :videos="videos"></videoFeature>
</template>
