<script setup>
import { ref } from "vue";

defineProps({
    videos: Object,
});

let tab = ref("0");

const getWatchUrl = (link) => {
    return link.replace("watch?v=", "embed/");
};
</script>
<template>
    <div class="bg-grey-darken-4">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div class="font-rajdhani font-weight-bold text-h3">
                        भिडियो
                    </div>
                </v-col>
                <v-col cols="12" md="3">
                    <v-tabs v-model="tab" direction="vertical" color="primary">
                        <v-tab
                            v-for="(video, index) in videos"
                            :value="index"
                            class="text-capitalize"
                        >
                            Video {{ index+ 1 }}
                        </v-tab>
                    </v-tabs>
                </v-col>
                <v-col cols="12" md="9">
                    <v-window v-model="tab">
                        <v-window-item
                            :value="index"
                            v-for="(video, index) in videos"
                        >
                                <iframe
                                    width="100%"
                                    height="490"
                                    :src="getWatchUrl(video['iframe'])"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allowfullscreen
                                ></iframe>
                        </v-window-item>
                    </v-window>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="scss" scoped>
.iframe {
    width: 100% !important;
}
</style>
