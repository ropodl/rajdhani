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
            <v-hover v-if="i < 6" v-slot="{ isHovering, props }">
                <v-col cols="12" md="4" v-bind="props">
                    <v-card :href="'/news/' + item['id']">
                        <v-img
                            cover
                            height="300"
                            :class="[
                                'align-end',
                                isHovering ? 'zoom' : '',
                            ]"
                            :src="item['image']"
                        >
                            <v-card class="mx-2 mb-2"
                                style="
                                    background-color: rgba(
                                        var(--v-theme-background),
                                        0.8
                                    );
                                    backdrop-filter: blur(10px);
                                "
                            >
                                <v-card-title
                                    class="text-h6 text-wrap font-weight-medium line-clamp-3"
                                >
                                    {{ item["title"] }}
                                </v-card-title>
                            </v-card>
                        </v-img>
                    </v-card>
                </v-col>
            </v-hover>
        </template>
    </v-row>
</template>