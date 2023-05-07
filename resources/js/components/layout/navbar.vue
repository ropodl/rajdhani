<script setup>
import {
    mdiChevronDown,
    mdiClose,
    mdiHome,
    mdiMagnify,
    mdiWeatherSunny,
} from "@mdi/js";
import { onMounted, ref } from "vue";

import { useTheme } from "vuetify";
const theme = useTheme();

defineProps({
    provinces: Object,
    categories: Object,
    tags: Object,
});

onMounted(() => {
    isDarkMode.value = localStorage.getItem("isDarkMode") === "true";
    theme.global.name.value = isDarkMode.value ? "dark" : "light";
});

let dialog = ref(false);

let isDarkMode = ref(false);

const switchThemeMode = () => {
    isDarkMode.value = localStorage.getItem("isDarkMode") !== "true";
    localStorage.setItem("isDarkMode", isDarkMode.value);
    theme.global.name.value = isDarkMode.value ? "dark" : "light";
};
</script>
<template>
    <v-app-bar
        color="primary"
        height="60"
        class="overflow-visible position-relative"
    >
        <v-container>
            <v-row>
                <v-btn
                    eager
                    color="white"
                    rounded="0"
                    height="60"
                    href="/"
                    class="font-weight-bold text-subtitle-1"
                >
                    <v-icon :icon="mdiHome"></v-icon>
                </v-btn>
                <!-- TODO:menu not working a intended -->
                <v-menu
                    contained
                    width="150"
                    location="top"
                    location-strategy="connected"
                >
                    <template v-slot:activator="{ props }">
                        <v-btn
                            rounded="0"
                            color="white"
                            height="60"
                            v-bind="props"
                            class="font-rajdhani font-weight-bold text-h6"
                        >
                            प्रदेश
                            <v-icon
                                end
                                size="x-small"
                                :icon="mdiChevronDown"
                            ></v-icon>
                        </v-btn>
                    </template>
                    <v-list class="rounded-t-0">
                        <template v-for="item in provinces">
                            <v-list-item :href="'/province/' + item['name']">
                                <v-list-item-title>
                                    {{ item["name"] }}
                                </v-list-item-title>
                            </v-list-item>
                        </template>
                    </v-list>
                </v-menu>
                <template v-for="category in categories">
                    <v-btn
                        v-if="category['show_on_menu']"
                        rounded="0"
                        height="60"
                        color="white"
                        class="text-h6 font-weight-bold font-rajdhani"
                        :href="'/category/' + category['slug']"
                    >
                        {{ category.name }}
                    </v-btn>
                </template>

                <v-spacer></v-spacer>
                <v-btn
                    rounded="0"
                    height="60"
                    class="font-weight-bold text-subtitle-1"
                    @click="switchThemeMode"
                    :icon="mdiWeatherSunny"
                >
                </v-btn>
                <v-dialog v-model="dialog" scrim="black" max-width="650">
                    <template v-slot:activator="{ props }">
                        <v-btn
                            color="white"
                            rounded="0"
                            height="60"
                            class="font-weight-bold text-subtitle-1"
                            v-bind="props"
                        >
                            <v-icon :icon="mdiMagnify"></v-icon>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="d-flex">
                            Search for news and articles
                            <v-spacer></v-spacer>
                            <v-btn
                                size="x-small"
                                color="primary"
                                variant="tonal"
                                :icon="mdiClose"
                                @click="dialog = false"
                                location-strategy="static"
                            ></v-btn>
                        </v-card-title>
                        <v-form action="/search" method="get">
                            <v-card-text class="py-0">
                                <v-text-field
                                    variant="outlined"
                                    name="search"
                                    placeholder="Type here to search"
                                ></v-text-field>
                            </v-card-text>
                            <v-card-title>Recommended Tags</v-card-title>
                            <v-card-text>
                                <template v-for="tag in tags">
                                    <v-btn
                                        variant="text"
                                        :href="'/search?tag=' + tag['name']"
                                        >#{{ tag["name"] }}</v-btn
                                    >
                                </template>
                            </v-card-text>
                            <v-btn
                                block
                                type="submit"
                                height="50"
                                rounded="0"
                                color="primary"
                                class="text-capitalize"
                                @click="dialog = false"
                            >
                                Search
                            </v-btn>
                        </v-form>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-container>
    </v-app-bar>
</template>
<style>
.v-app-bar {
    position: sticky !important;
    top: 0 !important;
}

.font-rajdhani {
    font-family: "Rajdhani" !important;
    font-weight: 600;
}
</style>
