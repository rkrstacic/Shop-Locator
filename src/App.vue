<template>
	<v-app>
		<header>
			<AppNavbar />
		</header>
		<div class="p-3">
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

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar,
html::-webkit-scrollbar {
	display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body,
html {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}
</style>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import store from "@/store";
import { getAuth, onAuthStateChanged } from "@/firebase";
import router from "@/router";

const auth = getAuth();
store.authFired = false;

onAuthStateChanged(auth, (user) => {
	const currentRoute = router.currentRoute;
	store.authFired = true;

	if (user) {
		store.currentUser = user.email;

		if (currentRoute.meta.onlyNoUser === true) {
			router.push({ name: "Home" }).catch((error) => {});
		}
	} else {
		store.currentUser = null;

		if (currentRoute.meta.needsUser === true) {
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
