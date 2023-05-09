<script setup>
import { mdiClockOutline } from "@mdi/js";
import moment from "moment";
import { ref } from "vue";

defineProps({
    latest: Object,
    trending: Object,
});

let tab = ref("1");
</script>
<template>
    <v-card border flat class="rounded-t-0">
        <v-tabs grow color="primary" v-model="tab" :show-arrows="false" >
            <v-tab
                class="font-rajdhani text-subtitle-1 font-weight-bold rounded-0"
                value="1"
                >लोकप्रिय</v-tab
            >
            <v-tab
                class="font-rajdhani text-subtitle-1 font-weight-bold rounded-0"
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
                                class="text-h6 text-wrap line-clamp-3 font-weight-bold mb-2"
                                style="line-height: 2rem; white-space: wrap"
                            >
                                {{ item["title"] }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                <v-icon
                                    start
                                    size="small"
                                    :icon="mdiClockOutline"
                                ></v-icon>
                                {{
                                    moment(item["created_at"])
                                        .startOf("day")
                                        .fromNow()
                                }}
                            </v-list-item-subtitle>
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
                                class="text-h6 text-wrap line-clamp-3 font-weight-bold mb-2"
                                style="line-height: 2rem; white-space: wrap"
                            >
                                {{ item["title"] }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                <v-icon
                                    start
                                    size="small"
                                    :icon="mdiClockOutline"
                                ></v-icon>
                                {{
                                    moment(item["created_at"])
                                        .startOf("day")
                                        .fromNow()
                                }}
                            </v-list-item-subtitle>
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
