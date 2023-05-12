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
const tabNews = defineAsyncComponent(() =>
    import("../components/shared/tabnews.vue")
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
            <v-col cols="12" md="9">
                <latestNews :latest="latest" />
            </v-col>
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
                            :src="advertisements.sm_ad[0].advertisement.image"
                            :alt="advertisements.sm_ad[0].advertisement.title"
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
                            :src="advertisements.sm_ad[1].advertisement.image"
                            :alt="advertisements.sm_ad[1].advertisement.title"
                        ></v-img>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
    <template
        v-for="(item, index) in catnews.sort((a, b) =>
            a.sort > b.sort ? 1 : -1
        )"
    >
        <!-- {{ item["name"] }}{{ item["sort"] }} -->
        <template v-if="item['name'] == 'राजनीति' && item['news'].length > 0">
            <v-container>
                <v-lazy
                    :options="{ threshold: 0.5 }"
                    transition="fade-transition"
                >
                    <overlayFull :data="item"></overlayFull>
                </v-lazy>
            </v-container>
        </template>
        <template v-if="item['name'] == 'समाज' && item['news'].length > 0">
            <v-container>
                <v-row>
                    <v-col cols="12" md="9">
                        <v-lazy
                            :options="{ threshold: 0.5 }"
                            transition="fade-transition"
                        >
                            <twoFive :data="item"></twoFive>
                        </v-lazy>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-lazy
                            :options="{ threshold: 0.5 }"
                            transition="fade-transition"
                        >
                            <tabNews
                                :latest="latest"
                                :trending="trending"
                            ></tabNews>
                        </v-lazy>
                    </v-col>
                </v-row>
            </v-container>
        </template>
        <template v-if="item['name'] == 'खेलकुद़़' && item['news'].length > 0">
            <v-container>
                <v-lazy
                    :options="{ threshold: 0.5 }"
                    transition="fade-transition"
                >
                    <overlayFull :data="item"></overlayFull>
                </v-lazy>
            </v-container>
        </template>
        <template v-if="item['name'] == 'अर्थ' && item['news'].length > 0">
            <v-container>
                <v-lazy
                    :options="{ threshold: 0.5 }"
                    transition="fade-transition"
                >
                    <overlayFull :data="item"></overlayFull>
                </v-lazy>
            </v-container>
        </template>
        <template v-if="item['name'] == 'साहित्य' && item['news'].length > 0">
            <v-container>
                <v-lazy
                    :options="{ threshold: 0.5 }"
                    transition="fade-transition"
                >
                    <threeCol :data="item"></threeCol>
                </v-lazy>
            </v-container>
        </template>
        <template
            v-if="item['name'] == 'अन्तर्राष्ट्रिय' && item['news'].length > 0"
        >
            <v-container>
                <v-lazy
                    :options="{ threshold: 0.5 }"
                    transition="fade-transition"
                >
                    <threeCol :data="item"></threeCol>
                </v-lazy>
            </v-container>
        </template>
        <template v-if="item['name'] == 'मनोरञ्जन' && item['news'].length > 0">
            <v-container>
                <v-lazy
                    :options="{ threshold: 0.5 }"
                    transition="fade-transition"
                >
                    <twoFour :data="item"></twoFour>
                </v-lazy>
            </v-container>
        </template>
        <template v-if="item['name'] == 'विचार' && item['news'].length > 0">
            <v-container>
                <v-lazy
                    :options="{ threshold: 0.5 }"
                    transition="fade-transition"
                >
                    <twoFour :data="item"></twoFour>
                </v-lazy>
            </v-container>
        </template>
        <template v-if="item['name'] == 'शिक्षा' && item['news'].length > 0">
            <v-container>
                <v-lazy
                    :options="{ threshold: 0.5 }"
                    transition="fade-transition"
                >
                    <imageWithCard :data="item" />
                </v-lazy>
            </v-container>
        </template>
        <template v-if="item['name'] == 'स्वास्थ्य' && item['news'].length > 0">
            <v-container>
                <v-lazy
                    :options="{ threshold: 0.5 }"
                    transition="fade-transition"
                >
                    <twoFour :data="item"></twoFour>
                </v-lazy>
            </v-container>
        </template>
        <template v-if="index == 1">
            <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
                <provinceNews
                    :provinces="provinces"
                    :provincenews="provincenews"
                />
            </v-lazy>
        </template>
        <template v-if="index == 6">
            <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
                <photoFeature :photos="photos"></photoFeature>
            </v-lazy>
        </template>
    </template>
    <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
        <videoFeature v-if="videos.length > 0" :videos="videos"></videoFeature>
    </v-lazy>
</template>
