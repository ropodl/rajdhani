<script setup>
import { mdiArrowUp } from "@mdi/js";
import { ref } from "vue";
import { useScrollTo } from "../../composables/scrollId";

let show = ref(false);

const onScroll = (e) => {
    if (typeof window === "undefined") return;
    const top = window.scrollY || 0;
    show.value = top > 500 ? true : false;
};
</script>
<template>
    <v-btn
        class="position-fixed"
        v-scroll="onScroll"
        aria-label="Go to top button"
        :icon="mdiArrowUp"
        :style="{
            bottom: show ? '40px' : '-70px',
            right: '40px',
            zIndex: '999',
            transition: 'all 250ms cubic-bezier(.17,.26,1,.32) 0s',
        }"
        @click="useScrollTo('app', 10)"
    ></v-btn>
</template>
