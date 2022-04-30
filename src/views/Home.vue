<template>
    <div>
        <IntroScreen @startShopEvent="hello_world" />
    </div>
</template>

<script>
import IntroScreen from "@/components/home/IntroScreen.vue";

export default {
    components: { IntroScreen },
    name: "Home",
    methods: {
        hello_world() {
            alert("Trigger Form Start");
        },
    },
};
</script>
