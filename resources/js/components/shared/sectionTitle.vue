<script setup>
defineProps({
    data: Object,
});
</script>
<template>
    <div class="d-flex align-center">
        <span class="font-weight-bold text-h3">
            {{ data["name"] }}
        </span>
        <v-spacer></v-spacer>
        <v-btn
            rounded
            color="primary"
            variant="tonal"
            :href="'/category/' + data['slug']"
            >थप {{ data["name"] }} समाचार</v-btn
        >
    </div>
</template>

<style lang="scss" scoped></style>
