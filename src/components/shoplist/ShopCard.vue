<template>
	<div class="ShopCard p-3">
		<div class="row">
			<div class="col-10 text-left">{{ model.name }}</div>
			<div class="col-2 text-left">{{ model.closeTime }}</div>
		</div>
		<div class="row">
			<div class="col-10 text-left">{{ model.stars }}</div>
			<div class="col-2 text-left">{{ model.distance }}</div>
		</div>
	</div>
</template>

<style scoped>
.ShopCard {
	border: 1px solid black;
}
</style>

<script>
export default {
	name: "CardTest",
	props: ["model"],
	data: () => ({}),
};
</script>
