<script setup>
import { defineAsyncComponent } from "vue";

defineProps({
    photos: Object,
});

const sectionTitle = defineAsyncComponent(() => import("../sectionTitle.vue"));
</script>
<template>
    <div class="bg-grey-darken-4 py-16">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <sectionTitle :data="{ name: 'फोटो फिचर' }" />
                </v-col>
                <template v-for="(photo, i) in photos">
                    <v-col cols="12" md="3">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card
                                :href="'/news/' + photo['id']"
                                v-bind="props"
                            >
                                <v-img
                                    cover
                                    height="500"
                                    :src="photo['image']"
                                    :class="isHovering ? 'zoom' : ''"
                                >
                                    <v-overlay
                                        :model-value="true"
                                        contained
                                        persistent
                                        no-click-animation
                                        scrim="black"
                                        class="align-end"
                                    >
                                        <v-card-title
                                            class="font-rajdhani text-h5 text-wrap font-weight-bold text-white"
                                        >
                                            {{ photo["title"] }}
                                        </v-card-title>
                                    </v-overlay>
                                </v-img>
                            </v-card>
                        </v-hover>
                    </v-col>
                </template>
            </v-row>
        </v-container>
    </div>
</template>
