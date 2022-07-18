<template>
	<div>
		<IntroScreen v-if="stage == 1" @startShopEvent="nextStage" />
		<IntroForm v-if="stage == 2" @startShopEvent="nextStage" />
		<ShopTypeForm v-if="stage == 3" @startShopEvent="nextStage" />
		<IntroDistance v-if="stage == 4" @startShopEvent="nextStage" />
	</div>
</template>

<style>
.v-card {
	background-color: var(--tertiary-color) !important;
	border-color: var(--tertiary-color) !important;
	color: var(--quaternary-color) !important;
}

.next-btn {
	font-size: 18px;
}
</style>

<script>
import IntroScreen from "@/components/home/IntroScreen.vue";
import IntroForm from "@/components/home/IntroForm.vue";
import ShopTypeForm from "@/components/home/ShopTypeForm.vue";

import store from "@/store";
import router from "@/router";
import IntroDistance from "@/components/home/IntroDistance.vue";

export default {
	components: { IntroScreen, IntroForm, ShopTypeForm, IntroDistance },
	name: "Home",
	data() {
		let stage = store.homeStage;
		store.homeStage = 1;

		return {
			stage,
		};
	},
	methods: {
		nextStage() {
			this.stage++;
		},
	},
	beforeCreate() {
		let skip = false;
		if (skip) {
			return;
		}

		console.log("THIS SHOULD NOT BE VISIBLE IN PRODUCTION!");
		store.shopPreferences = {
			location: "Abc",
			shopTypes: { Bakery: false, "Sea food": false, Random: false },
			distance: 3000,
		};

		router.replace({ name: "ShopList" }).catch((error) => {});

		// In 1 hour, alert that the app is in test mode
		setTimeout(() => {
			alert("APP IS IN TEST MODE!");
		}, 1000 * 60 * 60);
		return;
	},
};
</script>
