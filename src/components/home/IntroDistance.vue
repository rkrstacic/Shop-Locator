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

<style scoped>
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
</style>

<script>
import store from "@/store";

function getRealDistance(dString) {
	let distance = dString;
	let mult = 1;

	// Distance is in km
	if (dString.slice(-2) === "km") {
		distance = dString.slice(0, -2).trim();
		mult = 1000;
	}

	// Distance is in m
	else if (dString.slice(-1) === "m") {
		distance = dString.slice(0, -1).trim();
	}

	if (isNaN(distance)) {
		distance = -1;
	}

	return parseFloat(distance) * mult;
}

export default {
	name: "IntroDistance",
	data() {
		return {
			distance: null,
		};
	},
	methods: {
		submit() {
			// No distance check
			if (this.distance === null || this.distance === 0) {
				alert("Distance cannot be 0");
				return;
			}

			this.distance = getRealDistance(this.distance);

			if (isNaN(this.distance)) {
				alert("Distance must be a number");
				return;
			}

			store.shopPreferences.distance = this.distance;
			this.$emit("startShopEvent");
		},
	},
};
</script>
