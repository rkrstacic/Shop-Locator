<template>
	<div>
		<IntroScreen v-if="stage == 1" @startShopEvent="nextStage" />
		<IntroForm v-if="stage == 2" @startShopEvent="nextStage" />
		<ShopTypeForm v-if="stage == 3" @startShopEvent="nextStage" />
	</div>
</template>

<script>
import IntroScreen from "@/components/home/IntroScreen.vue";
import IntroForm from "@/components/home/IntroForm.vue";
import ShopTypeForm from "@/components/home/ShopTypeForm.vue";

export default {
	components: { IntroScreen, IntroForm, ShopTypeForm },
	name: "Home",
	data() {
		return {
			stage: 3,
		};
	},
	methods: {
		nextStage() {
			this.stage++;
		},
	},
};
</script>
