<template>
    <div>
        <IntroScreen v-if="stage == 1" @startShopEvent="nextStage" />
        <IntroForm v-if="stage == 2" @startShopEvent="nextStage" />
    </div>
</template>

<script>
import IntroScreen from "@/components/home/IntroScreen.vue";
import IntroForm from "@/components/home/IntroForm.vue";

export default {
    components: { IntroScreen, IntroForm },
    name: "Home",
    data() {
        return {
            stage: 2,
        };
    },
    methods: {
        nextStage() {
            this.stage++;
        },
    },
};
</script>
