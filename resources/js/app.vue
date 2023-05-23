<template>
    <v-app>
        <slot name="popup"></slot>
        <slot name="header"></slot>
        <v-main class="pa-0">
            <slot name="content"></slot>
        </v-main>
        <slot name="footer"></slot>
    </v-app>
</template>