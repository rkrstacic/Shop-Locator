<template>
	<div>
		<IntroScreen v-if="stage == 1" @startShopEvent="nextStage" />
		<IntroForm v-if="stage == 2" @startShopEvent="nextStage" />
		<ShopTypeForm v-if="stage == 3" @startShopEvent="nextStage" />
		<IntroDistance v-if="stage == 4" @startShopEvent="savePreferences" />
	</div>
</template>

<script>
import IntroScreen from "@/components/home/IntroScreen.vue";
import IntroForm from "@/components/home/IntroForm.vue";
import ShopTypeForm from "@/components/home/ShopTypeForm.vue";

import store, { lsKey } from "@/store";
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
		savePreferences() {
			localStorage.setItem(lsKey, JSON.stringify(store.shopPreferences));
			router.replace({ name: "ShopList" }).catch((error) => {});
		},
		homeRestartEvent() {
			this.stage = store.homeStage;
			store.homeStage = 1;
		},
	},
	beforeCreate() {
		// Skip check if resetPreference is set to "true"
		if (store.resetPreference) {
			store.resetPreference = false;
			return;
		}

		const preferences = localStorage.getItem(lsKey);
		if (preferences !== null && preferences !== undefined) {
			router.replace({ name: "ShopList" }).catch((error) => {});
		}
	},
};
</script>
