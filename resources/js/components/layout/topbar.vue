<script setup>
import { useNow } from "@vueuse/core";
import { defineAsyncComponent } from "vue";
defineProps({
    date: String,
    socials: Object,
});

const now = useNow();

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
    <v-system-bar class="position-relative" style="height: 24px">
        <v-container class="py-0">
            <v-row align="center">
                <v-col cols="6" sm="6" md="6" class="text-left py-0">
                    {{ date }} |
                    {{ new Date(now).toLocaleString([], { hour12: true }) }}
                </v-col>
                <v-col cols="6" sm="6" md="6" class="py-0 text-right">
                    <div class="d-flex">
                        <v-spacer></v-spacer>
                        <ul class="d-flex list-style-none ml-auto mb-0">
                            <li v-if="socials['facebook_link']">
                                <v-btn
                                    variant="text"
                                    rounded="0"
                                    color="primary"
                                    size="x-small"
                                    height="24"
                                    :icon="facebook"
                                    :href="socials['facebook_link']"
                                    target="_blank"
                                ></v-btn>
                            </li>
                            <li v-if="socials['instagram_link']">
                                <v-btn
                                    variant="text"
                                    rounded="0"
                                    color="primary"
                                    size="x-small"
                                    height="24"
                                    :icon="instagram"
                                    :href="socials['instagram_link']"
                                    target="_blank"
                                >
                                </v-btn>
                            </li>
                            <li v-if="socials['youtube_link']">
                                <v-btn
                                    variant="text"
                                    rounded="0"
                                    size="x-small"
                                    height="24"
                                    :icon="youtube"
                                    :href="socials['youtube_link']"
                                    target="_blank"
                                >
                                </v-btn>
                            </li>
                            <li v-if="socials['twitter_link']">
                                <v-btn
                                    variant="text"
                                    rounded="0"
                                    size="x-small"
                                    height="24"
                                    :icon="twitter"
                                    :href="socials['twitter_link']"
                                    target="_blank"
                                >
                                </v-btn>
                            </li>
                            <li v-if="socials['linkedin_link']">
                                <v-btn
                                    variant="text"
                                    rounded="0"
                                    size="x-small"
                                    height="24"
                                    :icon="linkedin"
                                    :href="socials['linkedin_link']"
                                    target="_blank"
                                >
                                </v-btn>
                            </li>
                        </ul>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-system-bar>
</template>
