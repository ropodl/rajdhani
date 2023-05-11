<script setup>
defineProps({
    data: Object,
});
</script>
<template>
    <v-row>
        <v-col cols="12">
            <div class="d-flex align-center">
                <span
                    class="text-h3 font-weight-bold"
                    style="font-family: 'Rajdhani' !important"
                >
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
        <!-- test -->
        <template v-for="(item, index) in data['news']">
            <v-col cols="12" sm="6" md="6" lg="4" class="pb-0" v-if="index < 9">
                <v-hover v-slot="{ isHovering, props }">
                    <v-list-item
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
                            {{
                                moment(item["created_at"])
                                    .startOf("day")
                                    .fromNow()
                            }}
                        </v-list-item-subtitle> -->
                    </v-list-item>
                </v-hover>
            </v-col>
        </template>
    </v-row>
</template>
