<template>
	<div class="ShopCard p-3 text-left custom-font">
		<link
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
			rel="stylesheet"
		/>

		<v-row>
			<v-col cols="12" md="10" sm="8">
				<v-row>
					<v-col class="shop-name">
						{{ model.title }}
					</v-col>
				</v-row>
				<v-row>
					<v-col>{{ model.stars }}</v-col>
				</v-row>
			</v-col>

			<v-col cols="12" md="2" sm="4">
				<v-row>
					<v-col>{{ closingHour }}</v-col>
				</v-row>
				<v-row>
					<v-col>{{ distanceToStr(model.distance) }}</v-col>
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>
.shop-name {
	color: var(--tertiary-color) !important;
}
</style>

<script>
export default {
	name: "CardTest",
	props: ["model"],
	data: () => ({}),
	methods: {
		distanceToStr(integer) {
			if (integer < 1000) {
				return `${integer} m`;
			}

			return `${Math.round(integer / 100) / 10} km`;
		},
	},
	computed: {
		closingHour() {
			let openingHours = this.model.openingHours;

			if (openingHours === undefined) {
				return "No info";
			}

			if (!Array.isArray(openingHours)) {
				return "No info";
			}

			if (openingHours[0].isOpen) {
				return "No info";
			}

			return openingHours[0].text[0].split(" ").pop();
		},
	},
};
</script>
