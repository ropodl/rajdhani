<script setup>
defineProps({
    result: Object,
    search: String,
    param: String,
});

const paginate = (e) => {
    window.location.href = "/search?page=" + e;
};
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12" v-if="result['data'].length == 0">
                <v-card flat color="transparent" class="py-16">
                    <div
                        class="text-h1 font-weight-bold"
                        style="
                            font-family: 'Rajdhani' !important;
                            line-height: 7.6rem;
                        "
                    >
                        माफ गर्नुहोस्!
                        <span class="text-primary">
                            " {{ search || param }} "
                        </span>
                        नामको कुनै पोस्ट फेला परेन
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" v-else>
                <v-row>
                    <template v-for="(item, index) in result['data']">
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
                                                width="150"
                                                height="120"
                                                :class="
                                                    isHovering ? 'zoom' : ''
                                                "
                                                :src="item['image']"
                                            ></v-img>
                                        </v-avatar>
                                    </template>
                                    <v-list-item-title
                                        class="text-h5 text-wrap line-clamp-2 font-weight-bold"
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
            <v-col cols="12" v-if="result['data'].length !== 0">
                <v-pagination
                    rounded="circle"
                    variant="flat"
                    active-color="primary"
                    v-model="result['current_page']"
                    :length="result['last_page']"
                    :total-visible="7"
                    @update:modelValue="paginate"
                ></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>
