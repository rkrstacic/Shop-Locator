<template>
	<v-container class="text-center mt-10">
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css?family=Aclonica"
		/><link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css?family=PT%20Sans%20Caption"
		/>
		<v-card
			elevation="2"
			max-width="400"
			class="rounded-lg mt-16 ma-auto pa-8"
		>
			<v-row>
				<v-col>
					<v-row>
						<v-col class="custom-font"
							>Select which types of shop you want to
							search</v-col
						>
					</v-row>
					<v-row class="pt-5 pb-5">
						<v-col>
							<v-checkbox
								v-for="shopType in Object.keys(shopTypes)"
								:key="shopType"
								:label="shopType"
								v-model="shopTypes[shopType]"
							></v-checkbox>
						</v-col>
					</v-row>
					<v-row>
						<v-col class="text-left"> </v-col>
						<div
							@click="goNext()"
							class="custom-font next-btn text-right cursor-pointer"
						>
							Next >
						</div>
					</v-row>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<style scoped>
.v-label {
	color: var(--quaternary-color) !important;
}

.theme--light.v-icon {
	color: var(--quaternary-color);
}
</style>

<script>
import store from "@/store";

export default {
	name: "ShopTypeForm",
	data() {
		const shopTypeList = ["Bakery", "Sea food", "Random"];

		return {
			shopTypes: shopTypeList.reduce((accumulator, value) => {
				return { ...accumulator, [value]: false };
			}, {}),
		};
	},
	methods: {
		goNext() {
			store.shopPreferences.shopTypes = this.shopTypes;
			this.$emit("startShopEvent");
		},
	},
};
</script>
