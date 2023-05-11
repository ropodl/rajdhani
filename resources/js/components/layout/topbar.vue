<script setup>
import { useNow } from "@vueuse/core";

defineProps({
    date: String,
    socials: Object,
});

const now = useNow();
</script>
<template>
    <v-system-bar>
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
                                    size="x-small"
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
                                    size="x-small"
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
                                    size="x-small"
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
                                    size="x-small"
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
                                    size="x-small"
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
