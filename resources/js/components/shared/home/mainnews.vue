<script setup>
defineProps({
    mainnews: Object,
});
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card
                        flat
                        text
                        :ripple="false"
                        href="/"
                        class="bg-transparent"
                        v-bind="props"
                    >
                        <v-card-title
                            class="text-h2 text-center text-wrap font-weight-bold"
                            :class="[isHovering ? 'text-primary' : '']"
                            style="line-height: 5rem"
                        >
                            गोरखा अस्पताललाई हव अस्पतालका रुपमा सञ्चालन गर्ने
                            तयारी
                        </v-card-title>
                        <v-img
                            cover
                            height="500"
                            :class="isHovering?'zoom':''"
                            src="http://127.0.0.1:8000/storage/44/Health-State-Minister-Bhawani-khapung.jpg"
                        ></v-img>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>
