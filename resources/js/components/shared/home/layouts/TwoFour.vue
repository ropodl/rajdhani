<script setup>
import { mdiClockOutline } from "@mdi/js";
import moment from "moment";

defineProps({
    data: Object,
});
</script>
<template>
    <v-row>
        <v-col cols="12">
            <v-row align="center">
                <v-col cols="12" md="12">
                    <div class="d-flex align-center">
                        <span class="font-rajdhani text-h3 font-weight-bold">
                            {{ data["name"] }}
                        </span>
                        <v-spacer></v-spacer>
                        <v-btn
                            rounded
                            variant="tonal"
                            color="primary"
                            :href="'/category/' + data['slug']"
                        >
                            थप {{ data["name"] }} समाचार
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" md="7">
            <v-row>
                <v-col cols="12" sm="6" md="6">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card
                            variant="text"
                            class="mb-3"
                            :href="'/news/' + data.news[0].id"
                        >
                            <v-img
                                cover
                                height="516"
                                v-bind="props"
                                class="pa-4 align-end"
                                :class="isHovering ? 'zoom' : ''"
                                :src="data.news[0].image"
                                :alt="data.news[0].media[0].file_name"
                            >
                                <v-card
                                    style="
                                        background-color: rgba(
                                            var(--v-theme-background),
                                            0.8
                                        );
                                        backdrop-filter: blur(10px);
                                    "
                                >
                                    <v-list class="bg-transparent">
                                        <v-list-item>
                                            <v-list-item-title
                                                class="text-h5 text-wrap font-weight-bold mb-2"
                                                style="line-height: 2rem"
                                            >
                                                {{ data.news[0].title }}
                                            </v-list-item-title>
                                            <v-list-item-subtitle>
                                                <v-icon
                                                    start
                                                    size="small"
                                                    :icon="mdiClockOutline"
                                                ></v-icon>
                                                {{
                                                    moment(
                                                        data.news[0].created_at
                                                    )
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
                <v-col cols="12" sm="6" md="6">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card
                            variant="text"
                            :href="'/news/' + data.news[1].id"
                        >
                            <v-img
                                cover
                                height="516"
                                v-bind="props"
                                class="pa-4 align-end"
                                :class="isHovering ? 'zoom' : ''"
                                :src="data.news[1].image"
                                :alt="data.news[1].media[0].file_name"
                            >
                                <v-card
                                    style="
                                        background-color: rgba(
                                            var(--v-theme-background),
                                            0.8
                                        );
                                        backdrop-filter: blur(10px);
                                    "
                                >
                                    <v-list class="bg-transparent">
                                        <v-list-item>
                                            <v-list-item-title
                                                class="text-h5 text-wrap font-weight-bold mb-2"
                                                style="line-height: 2rem"
                                            >
                                                {{ data.news[1].title }}
                                            </v-list-item-title>
                                            <v-list-item-subtitle>
                                                <v-icon
                                                    start
                                                    size="small"
                                                    :icon="mdiClockOutline"
                                                ></v-icon>
                                                {{
                                                    moment(
                                                        data.news[1].created_at
                                                    )
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
            </v-row>
        </v-col>
        <v-col cols="12" md="5">
            <v-list color="primary" class="py-0 pl-0 bg-transparent">
                <template v-for="(item, index) in data['news']">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-list-item
                            v-if="index > 1 && index <= 5"
                            :href="'/news/' + item['id']"
                            v-bind="props"
                            class="py-0 pl-0 mb-3"
                        >
                            <template #prepend>
                                <v-avatar rounded="lg" size="auto">
                                    <v-img
                                        cover
                                        width="150"
                                        height="120"
                                        :class="isHovering ? 'zoom' : ''"
                                        :src="item['image']"
                                    ></v-img>
                                </v-avatar>
                            </template>
                            <v-list-item-title
                                class="text-h5 text-wrap line-clamp-3 font-weight-bold"
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
                    </v-hover>
                </template>
            </v-list>
        </v-col>
    </v-row>
</template>

<style lang="scss" scoped></style>
