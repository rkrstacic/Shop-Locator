<template>
	<v-toolbar class="app-navbar noselect" dark>
		<v-toolbar-title>
			<router-link
				@click.native="checkHome('Home')"
				class="nav-link m-2"
				to="/"
			>
				Shop Locator
			</router-link>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-toolbar-items class="hidden-xs-and-down">
			<v-list-item v-for="link in links" :key="link.name">
				<router-link
					@click.native="checkHome(link.name)"
					class="nav-link m-2"
					:to="link"
					>{{ link.name }}</router-link
				>
			</v-list-item>

			<v-list-item>
				<div
					title="Account"
					class="nav-link profile-card"
					@click="account()"
				>
					<img
						class="acc-pfp"
						src="@/assets/img/default_pfp.jpg"
						alt="Default profile picture"
					/>
				</div>
			</v-list-item>
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
import router from "@/router";

export default {
	name: "AppNavbar",

	data() {
		return {
			store,
			links: [
				{ route: "/", name: "Home" },
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
		checkHome(linkName) {
			// Check if home
			if (linkName === "Home") {
				this.$emit("homeRestartEvent");
			}
		},

		account() {
			if (this.store.currentUser) {
				router.push({ name: "Account" }).catch((error) => {});
			} else {
				router.push({ name: "Login" }).catch((error) => {});
			}
		},
	},
};
</script>
