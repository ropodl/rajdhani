<script setup>
import { mdiArrowUp } from "@mdi/js";
import { useScrollTo } from "../../composables/scrollId";
</script>
<template>
    <v-btn
        :icon="mdiArrowUp"
        class="position-fixed"
        style="bottom: 40px; right: 40px"
        @click="useScrollTo('app')"
    ></v-btn>
</template>

<style lang="scss" scoped></style>
