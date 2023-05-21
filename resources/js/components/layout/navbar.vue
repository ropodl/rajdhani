<script setup>
import {
    mdiChevronDown,
    mdiHome,
    mdiWeatherNight,
    mdiWeatherSunny,
} from "@mdi/js";
import { defineAsyncComponent, onMounted, ref } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();

defineProps({
    provinces: Object,
    categories: Object,
    tags: Object,
});

const searchDialog = defineAsyncComponent(() => import("./searchdialog.vue"));

let isDarkMode = ref(false);

onMounted(() => {
    isDarkMode.value = localStorage.getItem("isDarkMode") === "true";
    theme.global.name.value = isDarkMode.value ? "dark" : "light";
});

const switchThemeMode = () => {
    isDarkMode.value = localStorage.getItem("isDarkMode") !== "true";
    localStorage.setItem("isDarkMode", isDarkMode.value);
    theme.global.name.value = isDarkMode.value ? "dark" : "light";
};
</script>
<template>
    <v-app-bar floating color="primary" height="60" class="overflow-visible">
        <v-container>
            <v-row>
                <v-btn
                    color="white"
                    rounded="0"
                    height="60"
                    href="/"
                    class="hidden-md-only"
                    :icon="mdiHome"
                >
                </v-btn>
                <template v-if="categories.length > 0">
                    <div class="hidden-sm-and-down">
                        <template
                            v-for="(item, i) in categories.sort((a, b) =>
                                a.sort > b.sort ? 1 : -1
                            )"
                        >
                            <v-btn
                                height="60"
                                size="small"
                                class="text-h6 font-weight-bold rounded-0"
                                :href="'/category/' + item['slug']"
                                style="font-family: 'Rajdhani' !important"
                            >
                                {{ item["name"] }}
                            </v-btn>
                            <template v-if="i == 1">
                                <v-menu
                                    stacked
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
                                            size="small"
                                            v-bind="props"
                                            class="font-weight-bold text-h6"
                                            style="
                                                font-family: 'Rajdhani' !important;
                                            "
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
                                            <v-list-item
                                                :href="
                                                    '/province/' + item['name']
                                                "
                                            >
                                                <v-list-item-title>
                                                    {{ item["name"] }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </template>
                                    </v-list>
                                </v-menu>
                            </template>
                        </template>
                    </div>
                </template>
                <v-spacer> </v-spacer>
                <v-btn
                    rounded="0"
                    height="60"
                    class="font-weight-bold text-subtitle-1"
                    @click="switchThemeMode"
                    :icon="isDarkMode ? mdiWeatherSunny : mdiWeatherNight"
                >
                </v-btn>
                <searchDialog :tags="tags"></searchDialog>
            </v-row>
        </v-container>
    </v-app-bar>
</template>
<style scoped>
.v-app-bar {
    position: sticky !important;
    top: 0 !important;
}
</style>
<style lang="scss">
.font-rajdhani {
    font-family: Rajdhani !important;
}
</style>
