<template>
    <v-card class="mx-auto" max-width="344">
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
        ></v-img>

        <v-card-title> {{ title }} </v-card-title>

        <v-card-subtitle> {{ subtitle }} </v-card-subtitle>

        <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
                <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
            </v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text v-html="rawhtml"> </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
export default {
    name: "CardTest",
    data: () => ({
        show: false,
    }),
    props: ["title", "subtitle", "rawhtml"],
};
</script>
