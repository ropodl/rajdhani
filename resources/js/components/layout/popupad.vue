<script setup>
import { mdiClose } from "@mdi/js";
import { onMounted, ref } from "vue";

defineProps({
    ads: Object,
});

let popupAdv = ref(true);
let progress = ref(0);

onMounted(() => {
    setInterval(() => {
        if (progress.value >= 100) popupAdv.value = false;
        progress.value += 5;
    }, 1000);
});
</script>
<template>
    <v-dialog
        v-model="popupAdv"
        persistent
        scrim="black"
        style="backdrop-filter: blur(2px)"
    >
        <v-card-title class="d-flex align-center justify-end px-0">
            <span class="text-white mr-3">Skip advertisement</span>
            <v-progress-circular v-model="progress" color="red" size="45">
                <v-btn
                    size="small"
                    :icon="mdiClose"
                    @click="popupAdv = false"
                ></v-btn>
            </v-progress-circular>
        </v-card-title>
        <v-card
            elevation="0"
            color="transparent"
            target="_blank"
            :href="ads['url']"
        >
            <v-img eager contain :src="ads['image']"></v-img>
        </v-card>
    </v-dialog>
</template>
