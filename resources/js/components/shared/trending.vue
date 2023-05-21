<script setup>
import { mdiFire } from "@mdi/js";

defineProps({
    trending: Object,
});
</script>
<template>
    <div
        class="text-h4 font-weight-bold mb-3"
        style="font-family: 'Rajdhani' !important"
    >
        <v-icon color="red" size="x-small" :icon="mdiFire"></v-icon>
        लोकप्रिय
    </div>
    <v-list class="pt-0 bg-transparent">
        <template v-for="(item, index) in trending">
            <v-list-item :href="'/news/' + item['id']">
                <v-list-item-title
                    class="text-h6 font-weight-medium text-wrap line-clamp-3 my-2"
                    style="line-height: 2rem; white-space: wrap"
                >
                    {{ item["title"] }}
                </v-list-item-title>
            </v-list-item>
            <v-divider v-if="index + 1 != trending.length"></v-divider>
        </template>
    </v-list>
</template>

<style lang="scss" scoped></style>
