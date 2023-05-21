<script setup>
defineProps({
    related: Object,
});
</script>

<template>
    <v-row>
        <v-col cols="12">
            <div
                class="text-h3 font-weight-bold"
                style="font-family: 'Rajdhani' !important"
            >
                सम्बन्धित खबर
            </div>
        </v-col>
        <template v-for="(item, i) in related">
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
