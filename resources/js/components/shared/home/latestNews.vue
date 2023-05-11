<script setup>
defineProps({
    latest: Object,
});
</script>
<template>
    <v-row>
        <v-col cols="12" md="6">
            <v-hover v-slot="{ isHovering, props }">
                <v-card variant="text" :href="'/news/' + latest[0].id">
                    <v-img
                        cover
                        v-bind="props"
                        height="570"
                        class="pa-4 align-end"
                        :class="isHovering ? 'zoom' : ''"
                        :src="latest[0].image"
                        :alt="latest[0].media[0].file_name"
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
                                        class="text-h5 font-weight-bold mb-3"
                                        style="line-height: 2rem"
                                    >
                                        {{ latest[0].title }}
                                    </v-list-item-title>
                                    <!-- <v-list-item-subtitle>
                                        <v-icon
                                            start
                                            size="small"
                                            :icon="mdiClockOutline"
                                        ></v-icon>
                                        {{
                                            moment(latest[0].created_at)
                                                .startOf("day")
                                                .fromNow()
                                        }}
                                    </v-list-item-subtitle> -->
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-img>
                </v-card>
            </v-hover>
        </v-col>
        <v-col cols="12" md="6">
            <v-list color="primary" class="py-0 pl-0 bg-transparent">
                <template v-for="(item, index) in latest">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-list-item
                            v-if="index != 0"
                            :href="'/news/' + item['id']"
                            v-bind="props"
                            class="py-0 pl-0 mb-3"
                        >
                            <template #prepend>
                                <v-avatar rounded="lg" size="auto">
                                    <v-img
                                        cover
                                        width="140"
                                        height="133"
                                        :class="isHovering ? 'zoom' : ''"
                                        :src="item['image']"
                                        :alt="item.media[0].file_name"
                                    ></v-img>
                                </v-avatar>
                            </template>
                            <v-list-item-title
                                class="text-h5 text-wrap line-clamp-3 font-weight-bold mb-3"
                                style="line-height: 2rem; white-space: wrap"
                            >
                                {{ item["title"] }}
                            </v-list-item-title>
                            <!-- <v-list-item-subtitle>
                                <v-icon
                                    start
                                    size="small"
                                    :icon="mdiClockOutline"
                                ></v-icon>
                                {{ new Date().getMonth(item["created_at"]) }}a
                                {{
                                    moment(item["created_at"])
                                        .startOf("day")
                                        .fromNow()
                                }}
                            </v-list-item-subtitle> -->
                        </v-list-item>
                    </v-hover>
                </template>
            </v-list>
        </v-col>
    </v-row>
</template>
