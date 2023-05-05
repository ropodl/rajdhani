<script setup>
defineProps({
    date: String,
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
                <v-img
                    height="100"
                    src="https://www.onlinekhabar.com/wp-content/uploads/2023/03/ezgif.com-video-to-gif.gif"
                ></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>
