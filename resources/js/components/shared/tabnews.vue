<script setup>
import { ref } from "vue";

defineProps({
    latest: Object,
    trending: Object,
});

let tab = ref("1");
</script>
<template>
    <v-card flat color="transparent" class="rounded-t-0">
        <v-tabs
            grow
            color="primary"
            bg-color="transparent"
            v-model="tab"
            :show-arrows="false"
        >
            <v-tab
                class="text-h4 font-weight-bold rounded-0"
                value="1"
                style="font-family: 'Rajdhani' !important"
                >लोकप्रिय</v-tab
            >
            <v-tab
                class="text-h4 font-weight-bold rounded-0"
                value="2"
                style="font-family: 'Rajdhani' !important"
                >ताजा</v-tab
            >
        </v-tabs>
        <v-divider></v-divider>
        <v-window v-model="tab">
            <v-window-item value="1">
                <v-list class="pt-0 bg-transparent">
                    <template v-for="(item, index) in trending">
                        <v-list-item :href="'/news/' + item['id']">
                            <v-list-item-title
                                class="text-h6 font-weight-medium text-wrap line-clamp-3 my-2"
                                style="line-height: 2rem; white-space: wrap"
                            >
                                {{ item["title"] }}
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider
                            v-if="index + 1 != trending.length"
                        ></v-divider>
                    </template>
                </v-list>
            </v-window-item>
            <v-window-item value="2">
                <v-list class="pt-0 bg-transparent">
                    <template v-for="(item, index) in latest">
                        <v-list-item :href="'/news/' + item['id']">
                            <v-list-item-title
                                class="text-h6 font-weight-medium text-wrap line-clamp-3 mb-2"
                                style="line-height: 2rem; white-space: wrap"
                            >
                                {{ item["title"] }}
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider
                            v-if="index + 1 != latest.length"
                        ></v-divider>
                    </template>
                </v-list>
            </v-window-item>
        </v-window>
    </v-card>
</template>
