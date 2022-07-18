<template>
	<div class="shop">
		<h1>This is a shop with id {{ $route.params.id }}</h1>
	</div>
</template>

<script>
import router from "@/router";
export default {
	name: "about",
	beforeCreate() {
		if (isNaN(this.$route.params.id)) {
			router.replace({ name: "Home" }).catch((error) => {});
		}
	},
};
</script>
