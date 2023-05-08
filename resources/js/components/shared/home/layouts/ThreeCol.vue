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
            <div class="d-flex align-center">
                <span class="font-rajdhani text-h3 font-weight-bold">
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
        <template v-for="(item, index) in data['news']">
            <v-col cols="12" md="4" class="pb-0" v-if="index < 9">
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
            </v-col>
        </template>
    </v-row>
</template>

<style lang="scss" scoped></style>
