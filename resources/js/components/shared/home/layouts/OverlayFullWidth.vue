<script setup>
import { mdiFire } from "@mdi/js";
defineProps({
    data: Object,
});
</script>
<template>
    <v-row>
        <v-col cols="12">
            <div class="d-flex align-center flex-wrap">
                <span class="text-h3 font-rajdhani font-weight-bold">
                    {{ data["name"] }}
                </span>
                <v-spacer></v-spacer>
                <v-btn
                    rounded
                    color="primary"
                    variant="tonal"
                    :href="'/category/' + data['slug']"
                >
                    थप {{ data["name"] }} समाचार
                </v-btn>
            </div>
        </v-col>
        <template v-for="(item, i) in data['news']">
            <v-col cols="12" md="4" v-if="i < 6">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card :href="'/news/' + item['id']">
                        <v-img
                            cover
                            height="250"
                            class="align-end"
                            :class="isHovering ? 'zoom' : ''"
                            :src="item['image']"
                            v-bind="props"
                        >
                            <v-overlay
                                :model-value="true"
                                contained
                                persistent
                                no-click-animation
                                scrim="black"
                                class="align-end"
                            >
                                <v-card-title v-if="item['is_trending']">
                                    <v-btn
                                        variant="tonal"
                                        color="red"
                                        :icon="mdiFire"
                                    >
                                    </v-btn>
                                </v-card-title>
                                <v-card-title
                                    class="font-rajdhani text-h5 text-wrap font-weight-bold text-white"
                                >
                                    {{ item["title"] }}
                                </v-card-title>
                            </v-overlay>
                        </v-img>
                    </v-card>
                </v-hover>
            </v-col>
        </template>
    </v-row>
</template>

<style lang="scss" scoped></style>
