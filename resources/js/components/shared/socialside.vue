<script setup>
import { defineAsyncComponent } from "vue";

const prop = defineProps({
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
const whatsapp = defineAsyncComponent(() =>
    import("../shared/icons/whatsapp.vue")
);
let pageLink = window.location.href;

const socials = [
    {
        icon: facebook,
        network: "facebook",
        color: "#3B5998",
        sharer:
            "https://www.facebook.com/sharer/sharer.php?display=popup&u=" +
            pageLink +
            "&title=" +
            prop["pageTitle"] +
            "&description=" +
            prop["pageTitle"],
    },
    {
        icon: twitter,
        network: "twitter",
        color: "#00acee",
        sharer:
            "https://twitter.com/intent/tweet?url=" +
            pageLink +
            "&text=" +
            prop["pageTitle"] +
            "&via=rajdhanipress",
    },
    {
        icon: linkedin,
        network: "linkedin",
        color: "#0077B5",
        sharer:
            "https://www.linkedin.com/sharing/share-offsite/?url=" +
            pageLink +
            "&title=" +
            prop["pageTitle"],
    },
    {
        icon: whatsapp,
        network: "whatsapp",
        color: "#25d366",
        sharer:
            "https://api.whatsapp.com/send?text=" +
            prop["pageTitle"] +
            " " +
            pageLink,
    },
];
const share = (sharer) => {
    window.open(sharer);
};
</script>
<template>
    <div class="position-sticky" style="top: 80px">
        <ul class="list-style-none d-flex d-md-block">
            <template v-for="social in socials">
                <li class="mb-4">
                    <v-btn
                        target="_blank"
                        :icon="social['icon']"
                        :color="social['color']"
                        @click="share(social['sharer'])"
                    ></v-btn>
                </li>
            </template>
        </ul>
    </div>
</template>
