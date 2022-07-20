<template>
	<v-toolbar class="app-navbar noselect" dark>
		<v-toolbar-title
			><router-link
				@click.native="checkHome('Home')"
				class="nav-link m-2"
				to="/"
				>Logo</router-link
			></v-toolbar-title
		>

		<v-spacer></v-spacer>

		<v-toolbar-items class="hidden-sm-and-down">
			<v-list-item v-for="link in links" :key="link.name">
				<router-link
					@click.native="checkHome(link.name)"
					class="nav-link m-2"
					:to="link"
					>{{ link.name }}</router-link
				>
			</v-list-item>

			<v-list-item>
				<router-link
					title="Account"
					class="nav-link profile-card"
					to="/login"
				>
					<img
						class="acc-pfp"
						src="@/assets/img/default_pfp.jpg"
						alt="Default profile picture"
					/>
				</router-link>
			</v-list-item>

			<button v-if="isLogged" @click="signout()" class="text-warning">
				Logout
			</button>
		</v-toolbar-items>
	</v-toolbar>
</template>

<style scoped lang="scss">
.app-navbar {
	background-color: var(--tertiary-color) !important;

	.nav-link:hover {
		color: var(--quaternary-color);
		opacity: 0.5;
	}

	.nav-link,
	.nav-link:visited {
		text-decoration: none;
		font-weight: bold;
		color: var(--quaternary-color);
	}

	.profile-card {
		height: 3.7em;
	}

	.acc-pfp {
		max-width: 100%;
		max-height: 100%;
		border-radius: 50%;
		padding: 0.3em;
	}
}
</style>

<script>
import store from "@/store";
import { getAuth, signOut } from "@/firebase";

export default {
	name: "AppNavbar",

	data() {
		return {
			store,
			links: [
				{ route: "/", name: "Home" },
				{ route: "/pricing", name: "Pricing" },
				{ route: "/about", name: "About" },
			],
		};
	},
	computed: {
		isLogged() {
			return this.store.currentUser !== null;
		},
	},
	methods: {
		async signout() {
			if (!this.store.currentUser) {
				return;
			}

			const auth = getAuth();
			signOut(auth)
				.then(() => {
					console.log("Signed out!");
				})
				.catch((error) => {
					console.error(`Error signing out! ${error}`);
				});
		},

		checkHome(linkName) {
			// Check if home
			if (linkName === "Home") {
				this.$emit("homeRestartEvent");
			}
		},
	},
	beforeRouteEnter(to, from) {
		alert("Hello");
	},
};
</script>
