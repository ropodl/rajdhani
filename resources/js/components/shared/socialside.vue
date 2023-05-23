<script setup>
import { defineAsyncComponent } from "vue";
import { ShareNetwork } from "vue-social-sharing";

defineProps({
    pageLink: String,
    pageTitle: String,
});

const facebook = defineAsyncComponent(() =>
    import("../shared/icons/facebook.vue")
);
const twitter = defineAsyncComponent(() =>
    import("../shared/icons/twitter.vue")
);
const linkedin = defineAsyncComponent(() =>
    import("../shared/icons/linkedin.vue")
);
const instagram = defineAsyncComponent(() =>
    import("../shared/icons/instagram.vue")
);

const socials = [
    {
        icon: facebook,
        network: "facebook",
        color: "#3B5998",
    },
    {
        icon: twitter,
        network: "twitter",
        color: "#00acee",
    },
    {
        icon: linkedin,
        network: "linkedin",
        color: "#0077B5",
    }
];
</script>
<template>
    <div class="position-sticky" style="top: 80px">
        <ul class="list-style-none d-flex d-md-block">
            <template v-for="social in socials">
                <li class="mb-4">
                    <ShareNetwork
                        :network="social['network']"
                        url="https://news.vuejs.org/issues/180"
                        title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                        description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                        quote="The hot reload is so fast it\'s near instant. - Evan You"
                        hashtags="vuejs,vite"
                    >
                        <v-btn
                            :icon="social['icon']"
                            :color="social['color']"
                        ></v-btn>
                    </ShareNetwork>
                </li>
            </template>
        </ul>
    </div>
</template>
