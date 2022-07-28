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
import {
	getAuth,
	onAuthStateChanged,
	getStorage,
	getDownloadURL,
	ref,
} from "@/firebase";
import router from "@/router";

const auth = getAuth();
store.authFired = false;

function setImg(fileName) {
	const storage = getStorage();
	getDownloadURL(ref(storage, fileName))
		.then((url) => {
			const imgs = document.getElementsByClassName("acc-pfp");
			store.userProfileURL = url;
			Array.from(imgs).forEach((img) => {
				img.setAttribute("src", url);
			});
		})
		.catch((error) => {
			console.log("Error", error);
		});
}

onAuthStateChanged(auth, (user) => {
	const currentRoute = router.currentRoute;
	store.authFired = true;

	if (user) {
		store.currentUser = user.email;
		setImg(store.currentUser);

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
