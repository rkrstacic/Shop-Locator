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
						{{ model.name }}
					</v-col>
				</v-row>
				<v-row>
					<v-col>{{ model.stars }}</v-col>
				</v-row>
			</v-col>

			<v-col cols="12" md="2" sm="4">
				<v-row>
					<v-col>{{ model.closeTime }}</v-col>
				</v-row>
				<v-row>
					<v-col>{{ model.distance }}</v-col>
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
};
</script>
