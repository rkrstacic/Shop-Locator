<template>
	<div class="ShopCard p-3">
		<link
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
			rel="stylesheet"
		/>
		<div class="row">
			<div class="col-10 text-left shop-name custom-font">
				{{ model.name }}
			</div>
			<div class="col-2 text-left custom-font">
				{{ model.closeTime }}
			</div>
		</div>
		<div class="row">
			<div class="col-10 text-left custom-font">
				{{ model.stars }}
			</div>
			<div class="col-2 text-left custom-font">
				{{ model.distance }}
			</div>
		</div>
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
