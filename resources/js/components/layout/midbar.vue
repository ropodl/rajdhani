<script setup>
defineProps({
    date: String,
    ads: {
        type: [Boolean, Object],
        required: true,
    },
});
</script>
<template>
    <v-container class="pa-0">
        <v-row align="center">
            <v-col cols="12" md="4">
                <v-btn
                    block
                    color="transparent"
                    variant="text"
                    rounded="0"
                    height="100"
                    href="/"
                >
                    <v-img
                        width="380"
                        height="60"
                        src="/frontend/img/logo.png"
                    ></v-img>
                </v-btn>
            </v-col>
            <v-col cols="12" md="8">
                <div class="d-flex" v-if="ads">
                    <v-card
                        flat
                        class="w-100 ml-auto rounded-0 bg-transparent"
                        max-width="728"
                        :href="ads['url']"
                        target="_blank"
                    >
                        <v-img
                            height="90"
                            class="w-100 h-100"
                            :src="ads['image']"
                        ></v-img>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
