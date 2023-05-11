<script setup>
import { useNow } from "@vueuse/core";
import { defineAsyncComponent } from "vue";
defineProps({
    date: String,
    socials: Object,
});

const now = useNow();


</script>
<template>
    <v-system-bar class="position-relative" style="max-height: 24px">
        <v-container class="py-0">
            <v-row align="center">
                <v-col cols="6" sm="6" md="6" class="text-left py-0">
                    {{ date }} |
                    {{ new Date(now).toLocaleString([], { hour12: true }) }}
                </v-col>
                <v-col cols="6" sm="6" md="6" class="py-0 text-right">
                    <div class="d-flex">
                        <v-spacer></v-spacer>
                        
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-system-bar>
</template>
