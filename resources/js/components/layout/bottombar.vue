<script setup>
defineProps({
    info: Object,
});
</script>
<template>
    <div class="bg-grey-darken-4">
        <v-container class="py-8">
            <v-row>
                <v-col cols="12" md="3">
                    <v-img
                        class="w-100 mb-3"
                        height="50"
                        src="/frontend/img/logo.png"
                    ></v-img>
                    <div v-html="info['description']"></div>
                </v-col>
                <v-col cols="12" md="2">
                    <div class="font-rajdhani text-h6 font-weight-bold">
                        कार्यकारी प्रवन्धक
                    </div>
                    <div>
                        {{ info["executive_manager"] }}
                    </div>
                </v-col>
                <v-col cols="12" md="2">
                    <div class="font-rajdhani text-h6 font-weight-bold">
                        सम्पादक :
                    </div>
                    <div>
                        {{ info["editor"] }}
                    </div>
                </v-col>
                <v-col cols="12" md="2">
                    <div class="font-rajdhani text-h6 font-weight-bold">
                        सूचना विभाग दर्ता नं :
                    </div>
                    <div>
                        {{ info["registration_no"] }}
                    </div>
                </v-col>
                <v-col cols="12" md="2">
                    <div class="font-rajdhani text-h6 font-weight-bold">
                        सम्पर्क
                    </div>
                    <ul class="list-style-none">
                        <li>
                            {{ info["address"] }}
                        </li>
                        <li>
                            {{ info["phone1"] }}
                            <span v-if="info['phone2']">
                                ,{{ info["phone2"] }}
                            </span>
                        </li>
                        <li>
                            {{ info["email"] }}
                        </li>
                    </ul>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <v-app-bar
        flat
        class="bg-grey-darken-4 position-static"
        style="z-index: 1 !important"
    >
        <v-container>
            <v-row justify="center">
                <v-col cols="12" class="text-center">
                    Copyright © {{ new Date().getFullYear() }} राजधानी प्रेस
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>
