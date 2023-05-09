<script setup>
defineProps({
    show: {
        required: true,
        type: Boolean,
        default: false,
    },
    index: Number,
    images: Object,
});
</script>
<template>
    <v-overlay persistent no-click-animation :model-value="show">
        {{ show }}
        <v-btn @click="show = false"></v-btn>
        <ul>
            <li v-for="image in images">
                <v-img :src="image['src']"></v-img>
            </li>
        </ul>
    </v-overlay>
</template>

<style lang="scss" scoped></style>
