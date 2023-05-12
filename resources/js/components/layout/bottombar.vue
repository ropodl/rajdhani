<script setup>
import { defineAsyncComponent } from "vue";
defineProps({
    info: Object,
    socials: Object,
});

const facebook = defineAsyncComponent(() =>
    import("../shared/home/icons/facebook.vue")
);
const instagram = defineAsyncComponent(() =>
    import("../shared/home/icons/instagram.vue")
);
const twitter = defineAsyncComponent(() =>
    import("../shared/home/icons/twitter.vue")
);
const linkedin = defineAsyncComponent(() =>
    import("../shared/home/icons/linkedin.vue")
);
const youtube = defineAsyncComponent(() =>
    import("../shared/home/icons/youtube.vue")
);
</script>
<template>
    <div class="bg-grey-darken-4">
        <v-container class="py-8">
            <v-row>
                <v-col cols="12" md="3">
                    <v-img
                        class="w-100 mb-3"
                        height="50"
                        src="/frontend/img/logo.png"
                    ></v-img>
                    <div class="mb-6" v-html="info['description']"></div>
                    <ul
                        class="d-flex justify-space-between list-style-none ml-auto"
                    >
                        <li v-if="socials['facebook_link']">
                            <v-btn
                                variant="tonal"
                                color="white"
                                :icon="facebook"
                                :href="socials['facebook_link']"
                                target="_blank"
                            ></v-btn>
                        </li>
                        <li v-if="socials['instagram_link']">
                            <v-btn
                                variant="tonal"
                                color="white"
                                :icon="instagram"
                                :href="socials['instagram_link']"
                                target="_blank"
                            >
                            </v-btn>
                        </li>
                        <li v-if="socials['youtube_link']">
                            <v-btn
                                variant="tonal"
                                color="white"
                                :icon="youtube"
                                :href="socials['youtube_link']"
                                target="_blank"
                            >
                            </v-btn>
                        </li>
                        <li v-if="socials['twitter_link']">
                            <v-btn
                                variant="tonal"
                                color="white"
                                :icon="twitter"
                                :href="socials['twitter_link']"
                                target="_blank"
                            >
                            </v-btn>
                        </li>
                        <li v-if="socials['linkedin_link']">
                            <v-btn
                                variant="tonal"
                                color="white"
                                :icon="linkedin"
                                :href="socials['linkedin_link']"
                                target="_blank"
                            >
                            </v-btn>
                        </li>
                    </ul>
                </v-col>
                <v-col cols="12" md="2">
                    <div
                        class="text-h6 font-weight-bold"
                        style="font-family: 'Rajdhani' !important"
                    >
                        कार्यकारी प्रवन्धक
                    </div>
                    <div>
                        {{ info["executive_manager"] }}
                    </div>
                </v-col>
                <v-col cols="12" md="2">
                    <div
                        class="text-h6 font-weight-bold"
                        style="font-family: 'Rajdhani' !important"
                    >
                        सम्पादक :
                    </div>
                    <div>
                        {{ info["editor"] }}
                    </div>
                </v-col>
                <v-col cols="12" md="2">
                    <div
                        class="text-h6 font-weight-bold"
                        style="font-family: 'Rajdhani' !important"
                    >
                        सूचना विभाग दर्ता नं :
                    </div>
                    <div>
                        {{ info["registration_no"] }}
                    </div>
                </v-col>
                <v-col cols="12" md="2">
                    <div
                        class="text-h6 font-weight-bold"
                        style="font-family: 'Rajdhani' !important"
                    >
                        सम्पर्क
                    </div>
                    <ul class="list-style-none">
                        <li>
                            {{ info["address"] }}
                        </li>
                        <li>
                            {{ info["phone1"] }}
                            <span v-if="info['phone2']">
                                ,{{ info["phone2"] }}
                            </span>
                        </li>
                        <li>
                            {{ info["email"] }}
                        </li>
                    </ul>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <v-app-bar
        flat
        class="bg-grey-darken-4 position-static"
        style="z-index: 1 !important"
    >
        <v-container>
            <v-row justify="center">
                <v-col cols="12" class="text-center">
                    Copyright © {{ new Date().getFullYear() }} राजधानी प्रेस
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>
