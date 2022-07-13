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
						<v-col
							class="custom-font next-btn text-right cursor-pointer"
							@click="$emit('startShopEvent')"
						>
							Next >
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<style>
div[data-app="true"] {
	background: url("/src/assets/img/Cars-on-highway.jpg") !important;

	/* Center and scale the image nicely */
	background-position: center !important;
	background-repeat: no-repeat !important;
	background-size: cover !important;
}

.v-card {
	background-color: var(--tertiary-color) !important;
	border-color: var(--tertiary-color) !important;
	color: var(--quaternary-color) !important;
}

.custom-font {
	font-family: "PT Sans Caption";
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
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
</style>

<script>
export default {
	name: "IntroForm",
	data() {
		const shopTypeList = ["Bakery", "Sea food", "Random"];

		return {
			shopTypes: shopTypeList.reduce((accumulator, value) => {
				return { ...accumulator, [value]: false };
			}, {}),
		};
	},
};
</script>
