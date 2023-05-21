<script setup>
import { defineAsyncComponent } from "vue";

defineProps({
    mainnews: Object,
    latest: Object,
    provincenews: Object,
    provinces: Object,
    photos: Object,
    videos: Object,
    trending: Object,
    catnews: Object,
    advertisements: Object,
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
// const tabNews = defineAsyncComponent(() =>
//     import("../components/shared/tabnews.vue")
// );
const trendingNews = defineAsyncComponent(() =>
    import("../components/shared/trending.vue")
);

const overlayFull = defineAsyncComponent(() =>
    import("../components/shared/home/layouts/OverlayFullWidth.vue")
);
const imageWithCard = defineAsyncComponent(() =>
    import("../components/shared/home/layouts/ImageWithCard.vue")
);
const twoFive = defineAsyncComponent(() =>
    import("../components/shared/home/layouts/TwoFive.vue")
);
const threeCol = defineAsyncComponent(() =>
    import("../components/shared/home/layouts/ThreeCol.vue")
);
const twoFour = defineAsyncComponent(() =>
    import("../components/shared/home/layouts/TwoFour.vue")
);
</script>
<template>
    <template v-if="mainnews.length > 0">
        <mainNews :mainnews="mainnews" />
    </template>
    <v-container>
        <v-row>
            <v-col cols="12" :md="advertisements.sm_ad ? '9' : '12'">
                <latestNews :latest="latest" />
            </v-col>
            <template v-if="advertisements.sm_ad">
                <v-col cols="12" md="3">
                    <div class="d-flex flex-wrap justify-space-between">
                        <v-card
                            class="mb-3 w-100 h-100"
                            :href="advertisements.sm_ad[0].advertisement.url"
                            target="_blank"
                            height="290"
                            max-width="290"
                        >
                            <v-img
                                class="w-100 h-100"
                                :src="
                                    advertisements.sm_ad[0].advertisement.image
                                "
                                :alt="
                                    advertisements.sm_ad[0].advertisement.title
                                "
                            ></v-img>
                        </v-card>
                        <v-card
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
                </v-col>
            </template>
        </v-row>
    </v-container>
    <template v-if="advertisements.xl_ad">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-img
                        eager
                        max-height="200"
                        max-width="1270"
                        :src="advertisements.xl_ad[0].advertisement.image"
                    >
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
    </template>
    <template v-for="(item, index) in catnews">
        <template v-if="item['name'] == 'राजनीति' && item['news'].length > 0">
            <v-container>
                <overlayFull :data="item"></overlayFull>
            </v-container>
        </template>
        <template v-if="item['name'] == 'समाज' && item['news'].length > 0">
            <v-container>
                <v-row>
                    <v-col cols="12" md="9">
                        <twoFive :data="item"></twoFive>
                    </v-col>
                    <v-col cols="12" md="3">
                        <trendingNews :trending="trending"></trendingNews>
                        <!-- <tabNews
                            :latest="latest"
                            :trending="trending"
                        ></tabNews> -->
                    </v-col>
                </v-row>
            </v-container>
        </template>
        <template v-if="item['name'] == 'खेलकुद़़' && item['news'].length > 0">
            <v-container>
                <overlayFull :data="item"></overlayFull>
            </v-container>
        </template>
        <template v-if="item['name'] == 'अर्थ' && item['news'].length > 0">
            <v-container>
                <overlayFull :data="item"></overlayFull>
            </v-container>
        </template>
        <template v-if="item['name'] == 'साहित्य' && item['news'].length > 0">
            <v-container>
                <threeCol :data="item"></threeCol>
            </v-container>
        </template>
        <template
            v-if="item['name'] == 'अन्तर्राष्ट्रिय' && item['news'].length > 0"
        >
            <v-container>
                <threeCol :data="item"></threeCol>
            </v-container>
        </template>
        <template v-if="item['name'] == 'मनोरञ्जन' && item['news'].length > 0">
            <v-container>
                <twoFour :data="item"></twoFour>
            </v-container>
        </template>
        <template v-if="item['name'] == 'विचार' && item['news'].length > 0">
            <v-container>
                <twoFour :data="item"></twoFour>
            </v-container>
        </template>
        <template v-if="item['name'] == 'शिक्षा' && item['news'].length > 0">
            <v-container>
                <imageWithCard :data="item" />
            </v-container>
        </template>
        <template v-if="item['name'] == 'स्वास्थ्य' && item['news'].length > 0">
            <v-container>
                <twoFive :data="item"></twoFive>
            </v-container>
        </template>
        <template v-if="index == 1">
            <provinceNews :provinces="provinces" :provincenews="provincenews" />
        </template>
        <template v-if="index == 6">
            <photoFeature :photos="photos"></photoFeature>
        </template>
    </template>
    <videoFeature v-if="videos.length > 0" :videos="videos"></videoFeature>
</template>
