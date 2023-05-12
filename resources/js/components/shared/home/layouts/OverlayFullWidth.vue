<script setup>
import { defineAsyncComponent } from "vue";

defineProps({
    data: Object,
});

const sectionTitle = defineAsyncComponent(() =>
    import("../../sectionTitle.vue")
);
</script>
<template>
    <v-row>
        <v-col cols="12">
            <sectionTitle :data="data" />
        </v-col>
        <template v-for="(item, i) in data['news']">
            <v-col cols="12" sm="6" md="4" v-if="i < 6">
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
                                <v-card-title
                                    class="text-h6 text-wrap font-weight-bold text-white"
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
