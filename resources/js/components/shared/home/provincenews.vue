<script setup>
defineProps({
    provincenews: Object,
    provinces: Object,
});
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-row align="center">
                    <v-col cols="12" md="4">
                        <div
                            class="text-h3 font-weight-bold"
                            style="font-family: 'Rajdhani' !important"
                        >
                            प्रदेश समाचार
                        </div>
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-chip-group class="justify-space-between">
                            <v-chip
                                v-for="item in provinces"
                                class="font-rajdhani font-weight-bold text-subtitle-1 mb-2"
                                :href="'/province/' + item['name']"
                                style="max-width: min-content !important"
                            >
                                {{ item["name"] }}
                            </v-chip>
                        </v-chip-group>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="7">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card
                                variant="text"
                                class="mb-3"
                                :href="'/news/' + provincenews[0].id"
                            >
                                <v-img
                                    cover
                                    height="516"
                                    v-bind="props"
                                    class="pa-4 align-end"
                                    :class="isHovering ? 'zoom' : ''"
                                    :src="provincenews[0].image"
                                    :alt="provincenews[0].media[0].file_name"
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
                                                    {{ provincenews[0].title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-card>
                                </v-img>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card
                                variant="text"
                                :href="'/news/' + provincenews[1].id"
                            >
                                <v-img
                                    cover
                                    height="516"
                                    v-bind="props"
                                    class="pa-4 align-end"
                                    :class="isHovering ? 'zoom' : ''"
                                    :src="provincenews[1].image"
                                    :alt="provincenews[1].media[0].file_name"
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
                                                    {{ provincenews[1].title }}
                                                </v-list-item-title>
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
                    <template v-for="(item, index) in provincenews">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-list-item
                                v-if="index > 1"
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
                            </v-list-item>
                        </v-hover>
                    </template>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>
