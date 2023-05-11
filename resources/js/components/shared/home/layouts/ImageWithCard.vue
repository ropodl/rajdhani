<script setup>
defineProps({
    data: Object,
});
</script>
<template>
    <v-row>
        <v-col cols="12">
            <div class="d-flex align-center flex-wrap">
                <span
                    class="text-h3 font-rajdhani font-weight-bold"
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
        <template v-for="(item, i) in data['news']">
            <v-hover v-if="i < 6" v-slot="{ isHovering, props }">
                <v-col cols="12" md="4" v-bind="props">
                    <v-card :href="'/news/' + item['id']">
                        <v-img
                            cover
                            height="250"
                            :class="[
                                'align-end px-2 pb-2',
                                isHovering ? 'zoom' : '',
                            ]"
                            :src="item['image']"
                        >
                            <v-card
                                style="
                                    background-color: rgba(
                                        var(--v-theme-background),
                                        0.8
                                    );
                                    backdrop-filter: blur(10px);
                                "
                            >
                                <v-card-title
                                    class="text-h6 text-wrap font-weight-bold line-clamp-3"
                                >
                                    {{ item["title"] }}
                                </v-card-title>
                            </v-card>
                        </v-img>
                    </v-card>
                </v-col>
            </v-hover>
        </template>
    </v-row>
</template>

<style lang="scss" scoped></style>
