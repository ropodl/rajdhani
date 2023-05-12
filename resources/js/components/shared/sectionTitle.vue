<script setup>
defineProps({
    data: Object,
});
</script>
<template>
    <div class="d-flex align-center">
        <span class="font-weight-bold section-title">
            {{ data["name"] }}
        </span>
        <v-spacer></v-spacer>
        <template v-if="data['slug']">
            <v-btn
                rounded
                color="primary"
                variant="tonal"
                :href="'/category/' + data['slug']"
                >थप {{ data["name"] }} समाचार</v-btn
            >
        </template>
    </div>
</template>

<style lang="scss" scoped>
.section-title {
    font-family: "Rajdhani";
    font-size: 3rem;
    font-weight: 700;
}
</style>
