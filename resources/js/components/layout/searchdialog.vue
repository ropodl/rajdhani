<script setup>
import { mdiClose, mdiMagnify } from "@mdi/js";
import { ref } from "vue";

defineProps({
    tags: Object,
});

let dialog = ref(false);
</script>
<template>
    <v-dialog
        v-model="dialog"
        scrim="black"
        max-width="500"
        
        transition="none"
        style="backdrop-filter: blur(2px)"
    >
        <template v-slot:activator="{ props }">
            <v-btn icon color="white" rounded="0" height="60" v-bind="props">
                <v-icon :icon="mdiMagnify"></v-icon>
            </v-btn>
        </template>
        <v-card-title class="d-flex justify-end px-0">
            <v-btn
                :icon="mdiClose"
                @click="dialog = false"
                location-strategy="static"
            ></v-btn>
        </v-card-title>
        <v-card border class="mb-3">
            <v-card-title
                class="text-h5 font-weight-bold"
                style="font-family: 'Rajdhani' !important"
                >समाचार र लेख खोज्नुहोस्</v-card-title
            >
            <v-form action="/search" method="get">
                <v-card-text class="py-0">
                    <v-text-field
                        density="comfortable"
                        variant="outlined"
                        name="search"
                        placeholder="Press enter to submit"
                    ></v-text-field>
                </v-card-text>
            </v-form>
        </v-card>
        <template v-if="tags.length >= 4">
            <v-card border>
                <v-card-title
                    class="text-h5 font-weight-bold"
                    style="font-family: 'Rajdhani' !important"
                    >सुझाव गरिएको ट्यागहरू</v-card-title
                >
                <v-card-title class="pt-0 text-wrap">
                    <v-chip-group color="primary">
                        <template v-for="tag in tags">
                            <v-chip variant="tonal" background-color="primary" :href="'/search?tag=' + tag['name']"
                                >#{{ tag["name"] }}</v-chip
                            >
                        </template>
                    </v-chip-group>
                </v-card-title>
            </v-card>
        </template>
    </v-dialog>
    <div></div>
</template>
