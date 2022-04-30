<template>
    <v-app>
        <header>
            <AppNavbar />
        </header>
        <div class="container pt-3">
            <router-view />
        </div>
    </v-app>
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
import AppNavbar from "@/components/AppNavbar.vue";
import store from "@/store";
import { getAuth, onAuthStateChanged } from "@/firebase";
import router from "@/router";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    const currentRoute = router.currentRoute;

    if (user) {
        console.log(user.email);
        store.currentUser = user.email;

        if (!currentRoute.meta.onlyNoUser) {
            router.push({ name: "Home" }).catch((error) => {});
        }
    } else {
        store.currentUser = null;

        if (currentRoute.meta.needsUser) {
            router.push({ name: "Login" }).catch((error) => {});
        }
    }
});

export default {
    name: "App",
    components: {
        AppNavbar,
    },
};
</script>
