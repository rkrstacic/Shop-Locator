<template>
    <header>
        <AppNavbar />
    </header>
    <div class="container pt-3">
        <router-view/>
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>


<script>
import AppNavbar from '@/components/AppNavbar.vue'

export default {
    components: {
        AppNavbar,
    }
}
</script>
