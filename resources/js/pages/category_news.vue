<script setup>
defineProps({
    news: Object,
    title: String,
});

const paginate = (e) => {
    window.location.href = "?page=" + e;
};
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12" v-if="news['data'].length == 0">
                <v-card flat color="transparent" class="py-16">
                    <div class="font-rajdhani text-h1 font-weight-bold">
                        माफ गर्नुहोस्!
                        <span class="text-primary">" {{ title || tag }} "</span>
                        नामको कुनै पोस्ट फेला परेन
                    </div>
                </v-card>
            </v-col>
            <template v-else>
                <v-col cols="12">
                    <div class="font-rajdhani font-weight-bold text-h3">
                        {{ title }}
                    </div>
                </v-col>
                <v-col cols="12">
                    <v-row>
                        <template v-for="(item, index) in news['data']">
                            <v-col cols="12" md="6">
                                <v-hover v-slot="{ isHovering, props }">
                                    <v-list-item
                                        :href="'/news/' + item['id']"
                                        v-bind="props"
                                        class="py-0 pl-0 mb-3"
                                    >
                                        <template #prepend>
                                            <v-avatar rounded="lg" size="auto">
                                                <v-img
                                                    cover
                                                    width="200"
                                                    height="150"
                                                    :class="
                                                        isHovering ? 'zoom' : ''
                                                    "
                                                    :src="item['image']"
                                                    :alt="
                                                        item.media[0].file_name
                                                    "
                                                ></v-img>
                                            </v-avatar>
                                        </template>
                                        <v-list-item-title
                                            class="text-h5 text-wrap line-clamp-3 font-weight-medium mb-3"
                                            style="
                                                line-height: 2rem;
                                                white-space: wrap;
                                            "
                                        >
                                            {{ item["title"] }}
                                        </v-list-item-title>
                                        <v-list-item-subtitle
                                            class="line-clamp-3"
                                            v-html="item['description']"
                                            style="line-height: 1.2rem"
                                        ></v-list-item-subtitle>
                                    </v-list-item>
                                </v-hover>
                            </v-col>
                        </template>
                    </v-row>
                </v-col>
            </template>
            <v-col cols="12" v-if="news['data'].length !== 0">
                <v-pagination
                    rounded="circle"
                    variant="flat"
                    active-color="primary"
                    v-model="news['current_page']"
                    :length="news['last_page']"
                    :total-visible="7"
                    @update:modelValue="paginate"
                ></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>
