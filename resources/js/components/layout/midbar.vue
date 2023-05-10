<script setup>
defineProps({
    date: String,
    ads: Object,
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
            <!-- <v-spacer></v-spacer> -->
            <v-col cols="12" md="8">
                <div class="d-flex">
                    <v-card
                        flat
                        class="w-100 ml-auto rounded-0"
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
        <!-- {{ ads }} -->
</template>
