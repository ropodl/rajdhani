<script setup>
import { ref } from "vue";

defineProps({
    latest: Object,
    trending: Object,
});

let tab = ref("1");
</script>
<template>
    <v-card border flat class="rounded-t-0">
        <v-tabs grow color="primary" v-model="tab" :show-arrows="false">
            <v-tab
                class="text-h6 font-weight-medium rounded-0"
                value="1"
                >लोकप्रिय</v-tab
            >
            <v-tab
                class="text-h6 font-weight-medium rounded-0"
                value="2"
                >ताजा</v-tab
            >
        </v-tabs>
        <v-divider></v-divider>
        <v-window v-model="tab">
            <v-window-item value="1">
                <v-list class="pt-0">
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
                <v-list class="pt-0">
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
