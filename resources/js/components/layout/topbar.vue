<script setup>
import moment from "moment";
import { ref } from "vue";

defineProps({
    date: String,
    socials: Object,
});

let currentTime = ref();

setInterval(function () {
    currentTime.value = moment().format("h:mm:ss a");
}, 1000);
</script>
<template>
    <v-system-bar>
        <v-container class="py-0">
            <v-row align="center">
                <v-col cols="12" md="4" class="text-left py-0">
                    {{ date }} | {{ currentTime }}
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" md="4" class="py-0 text-right">
                    <div class="d-flex">
                        <v-spacer></v-spacer>
                        <ul class="d-flex ml-auto mb-0">
                            <li v-if="socials['facebook_link']">
                                <v-btn
                                    variant="text"
                                    rounded="0"
                                    size="small"
                                    height="24"
                                    :icon="'fa:fa-brands fa-facebook-f'"
                                    :href="socials['facebook_link']"
                                    target="_blank"
                                >
                                </v-btn>
                            </li>
                            <li v-if="socials['instagram_link']">
                                <v-btn
                                    variant="text"
                                    rounded="0"
                                    size="small"
                                    height="24"
                                    :icon="'fa:fa-brands fa-instagram'"
                                    :href="socials['instagram_link']"
                                    target="_blank"
                                >
                                </v-btn>
                            </li>
                            <li v-if="socials['youtube_link']">
                                <v-btn
                                    variant="text"
                                    rounded="0"
                                    size="small"
                                    height="24"
                                    :icon="'fa:fa-brands fa-youtube'"
                                    :href="socials['youtube_link']"
                                    target="_blank"
                                >
                                </v-btn>
                            </li>
                            <li v-if="socials['twitter_link']">
                                <v-btn
                                    variant="text"
                                    rounded="0"
                                    size="small"
                                    height="24"
                                    :icon="'fa:fa-brands fa-twitter'"
                                    :href="socials['twitter_link']"
                                    target="_blank"
                                >
                                </v-btn>
                            </li>
                            <li v-if="socials['linkedin_link']">
                                <v-btn
                                    variant="text"
                                    rounded="0"
                                    size="small"
                                    height="24"
                                    :icon="'fa:fa-brands fa-linkedin'"
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
<style>
.v-system-bar {
    position: relative !important;
    height: 24px;
    max-height: 24px;
}
</style>
