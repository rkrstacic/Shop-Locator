<template>
	<v-container class="text-center">
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css?family=Aclonica"
		/><link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css?family=PT%20Sans%20Caption"
		/>
		<v-card elevation="2" max-width="400" class="rounded-lg ma-auto pa-8">
			<v-row>
				<v-col>
					<v-row>
						<v-col class="custom-font"
							>Select which types of shop you want to
							search</v-col
						>
					</v-row>
					<v-row>
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

<style>
.v-card {
	background-color: var(--tertiary-color) !important;
	border-color: var(--tertiary-color) !important;
	color: var(--quaternary-color) !important;
}

.next-btn {
	font-size: 18px;
}

.v-label {
	color: var(--quaternary-color) !important;
}

.theme--light.v-icon {
	color: var(--quaternary-color);
}

.v-input--selection-controls {
	margin-top: 0px !important;
}
</style>

<script>
import store from "@/store";

export default {
	name: "ShopTypeForm",
	data() {
		const shopTypeList = [
			"Cafe",
			"Supermarket",
			"Bakery",
			"Restaraunt",
			"Mall",
			"Pharmacy",
			"Butchery",
			"Sea food",
			"Library",
			"Jewelry",
			"Clothing store",
			"Gas station",
		];

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
