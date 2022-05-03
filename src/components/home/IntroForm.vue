<template>
    <v-container class="text-center mt-10">
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Aclonica"
        /><link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=PT%20Sans%20Caption"
        />
        <v-card
            elevation="2"
            max-width="400"
            class="rounded-lg mt-16 ma-auto pa-8"
        >
            <v-row>
                <v-col>
                    <v-row>
                        <v-col class="custom-font"
                            >First, we need Your location</v-col
                        >
                    </v-row>
                    <v-row class="pt-5 pb-5">
                        <v-col>
                            <v-text-field
                                v-model="location"
                                label="Location"
                                placeholder="e.g. Trafalgar Square, London"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-left"> </v-col>
                        <v-col class="custom-font next-btn text-right">
                            Next >
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<style>
div[data-app="true"] {
    background: url("/src/assets/img/Cars-on-highway.jpg") !important;

    /* Center and scale the image nicely */
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}

.v-card {
    background-color: var(--tertiary-color) !important;
    border-color: var(--tertiary-color) !important;
    color: var(--quaternary-color) !important;
}

.custom-font {
    font-family: "PT Sans Caption";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
}

.next-btn {
    font-size: 18px;
}

.v-label {
    color: gray !important;
}

.v-label--active {
    color: var(--quaternary-color) !important;
}

.v-input__slot {
    color: var(--quaternary-color) !important;
}

.v-text-field__slot {
    color: var(--quaternary-color) !important;
}

.v-input__slot::before {
    border-color: gray !important;
    border-width: 1px !important;
}

input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: gray !important;
    opacity: 1; /* Firefox */
}

input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: gray !important;
}

input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: gray !important;
}

input {
    color: var(--quaternary-color);
}

input:active {
    caret-color: var(--quaternary-color);
}

.v-input input {
    color: var(--quaternary-color) !important;
}
</style>

<script>
export default {
    name: "IntroForm",
    data() {
        return {
            location: "",
        };
    },
};
</script>
