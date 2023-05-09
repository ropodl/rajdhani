<script setup>
defineProps({
    info: Object,
});
</script>
<template>
    <iframe
        :src="info['map_iframe']"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
    ></iframe>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-list>
                    <v-list-item>
                        <v-list-item-title class="font-rajdhani text-h3" style="line-height: 3.5rem;">ठेगाना</v-list-item-title>
                        <v-list-item-subtitle class="text-h6" style="line-height:2rem">
                            {{ info["address"] }}
                        </v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title class="font-rajdhani text-h3" style="line-height: 3.5rem;">सम्पर्क</v-list-item-title>
                        <v-list-item-subtitle class="text-h6" style="line-height:2rem">
                            {{ info["phone1"] + "," + info["phone2"] }}
                        </v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title class="font-rajdhani text-h3" style="line-height: 3.5rem;">इमेल</v-list-item-title>
                        <v-list-item-subtitle class="text-h6" style="line-height:2rem">
                            {{ info["email"] }}
                        </v-list-item-subtitle>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col cols="12" md="6">
                <v-form>
                    <v-text-field placeholder="Full Name"></v-text-field>
                    <v-text-field placeholder="Email Address"></v-text-field>
                    <v-text-field placeholder="Subject"></v-text-field>
                    <v-textarea placeholder="Message"></v-textarea>
                    <v-btn
                        flat
                        block
                        type="submit"
                        height="50"
                        color="primary"
                        class="text-capitalize"
                        >Submit</v-btn
                    >
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped></style>
