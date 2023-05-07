<script setup>
import moment from "moment";
defineProps({
    result: Object,
});
</script>
<template>
    <v-container>
        <v-row>
            {{ result }}
            <v-col cols="12" v-if="result['data'].length == 0">
                <div class="d-flex">
                    <div>Sorry no data found</div>
                </div>
            </v-col>
            <v-col cols="12" v-else>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-list
                            color="primary"
                            class="py-0 pl-0 bg-transparent"
                        >
                            <template v-for="(item, index) in result">
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
                                                    width="150"
                                                    height="120"
                                                    :class="
                                                        isHovering ? 'zoom' : ''
                                                    "
                                                    :src="item['image']"
                                                ></v-img>
                                            </v-avatar>
                                        </template>
                                        <v-list-item-title
                                            class="text-h5 text-wrap line-clamp-3 font-weight-bold"
                                            style="
                                                line-height: 2rem;
                                                white-space: wrap;
                                            "
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
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped></style>
