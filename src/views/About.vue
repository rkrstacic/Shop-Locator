<template>
    <div class="about">
        <h1>This is an about page</h1>
        <CardTest
            title="MyTitle"
            subtitle="subtitle"
            rawhtml="<p>There are two air conditioners in apartment. One in a living room and another in first bedroom.</p><p>Feel free to use them anytime, they have no limits or locks, but please use them responsibly.</p><p> Please turn them <b>OFF when leaving the apartment</b> or set up timers!</p>"
        />
    </div>
</template>
<script>
import CardTest from "@/components/CardTest.vue";
export default {
    components: { CardTest },
    name: "about",
};
</script>
