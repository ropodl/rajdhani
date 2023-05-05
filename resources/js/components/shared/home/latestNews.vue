<script setup>
import { mdiArrowRight, mdiClock } from "@mdi/js";
import moment from "moment";

defineProps({
    latest: Object,
});
</script>
<template>
    <v-row>
        <v-col cols="12" md="6">
            <v-hover v-slot="{ isHovering, props }">
                <v-card :href="'/news/' + latest[0].id">
                    <v-img
                        cover
                        v-bind="props"
                        height="570"
                        class="pa-4 align-end"
                        :class="isHovering ? 'zoom' : ''"
                        :src="latest[0].image"
                        :alt="latest[0].media[0].file_name"
                    >
                        <v-card>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title
                                        class="text-h5 mb-2"
                                        style="line-height: 2rem"
                                    >
                                        {{ latest[0].title }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        <v-icon
                                            start
                                            size="small"
                                            :icon="mdiClock"
                                        ></v-icon>
                                        {{
                                            moment(latest[0].created_at)
                                                .startOf("day")
                                                .fromNow()
                                        }}
                                    </v-list-item-subtitle>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-img>
                </v-card>
            </v-hover>
        </v-col>
        <v-col cols="12" md="6">
            <v-list color="primary" class="py-0 pl-0">
                <template v-for="(item, index) in latest">
                    <v-card
                        flat
                        v-if="index != 0"
                        rounded="0"
                        class="mb-3"
                        :href="'/news/' + item['id']"
                    >
                        <v-list-item class="py-0 pl-0">
                            <template #prepend>
                                <v-avatar rounded="lg" size="auto">
                                    <v-img
                                        cover
                                        width="150"
                                        height="120"
                                        :src="item['image']"
                                    ></v-img>
                                </v-avatar>
                            </template>
                            <v-list-item-title
                                class="text-h5 text-wrap line-clamp-3 mb-2"
                                style="line-height: 2rem"
                            >
                                {{ item["title"] }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                <v-icon
                                    start
                                    size="small"
                                    :icon="mdiClock"
                                ></v-icon>
                                {{
                                    moment(item["created_at"])
                                        .startOf("day")
                                        .fromNow()
                                }}
                            </v-list-item-subtitle>
                        </v-list-item>
                    </v-card>
                </template>
            </v-list>
            <v-btn
                flat
                block
                variant="tonal"
                color="primary"
                class="text-capitalize font-rajdhani"
            >
                थप समाचारहरू हेर्नुहोस्
                <v-icon end :icon="mdiArrowRight"></v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>
