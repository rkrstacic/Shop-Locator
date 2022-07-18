<template>
	<v-container class="text-center mt-10">
		<v-card
			elevation="2"
			max-width="400"
			class="rounded-lg mt-16 ma-auto pa-8"
		>
			<v-row>
				<v-col>
					<v-row>
						<v-col class="custom-font"
							>Enter maximum distance search</v-col
						>
					</v-row>
					<v-row class="pt-5 pb-5">
						<v-col>
							<v-text-field
								v-model="distance"
								label="Distance"
								placeholder="e.g. 250m"
							></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col class="text-left"> </v-col>
						<v-col
							class="custom-font next-btn text-right cursor-pointer"
							@click="submit()"
						>
							Submit
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

.v-label {
	color: var(--quaternary-color) !important;
}

.theme--light.v-icon {
	color: var(--quaternary-color);
}
</style>

<script>
import router from "@/router";
import store from "@/store";

export default {
	name: "ShopTypeForm",
	data() {
		return {
			distance: null,
		};
	},
	methods: {
		submit() {
			// If is not valid
			if (false) {
				alert("Not allowed");
				return;
			}

			store.shopPreferences.distance = this.distance;
			router.replace({ name: "ShopList" }).catch((error) => {});
		},
	},
};
</script>
