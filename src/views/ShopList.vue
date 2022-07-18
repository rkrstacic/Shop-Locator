<template>
	<div class="shoplist">
		<h1>Here is a list of shop that are near you:</h1>

		<div>
			<ShopCard
				v-for="shop in shopList"
				:key="shop.id"
				:model="shop"
			></ShopCard>
		</div>
	</div>
</template>

<script>
import router from "@/router";
import store, { getEmptySP, isAnyDefaultSP } from "@/store";
import ShopCard from "../components/shoplist/ShopCard.vue";

function fetchShops() {
	// let preferences = store.shopPreferences);
	return [
		{
			id: 1,
			name: "Shop Name 1",
			closeTime: "10:00pm",
			stars: 10,
			distance: "40 m",
		},
		{
			id: 2,
			name: "Shop Name 2",
			closeTime: "11:00pm",
			stars: 16,
			distance: "100 m",
		},
		{
			id: 3,
			name: "Shop Name 3",
			closeTime: "7:00pm",
			stars: 3,
			distance: "1.3 km",
		},
		{
			id: 4,
			name: "Shop Name 4",
			closeTime: "4:00pm",
			stars: 58,
			distance: "3 km",
		},
	];
}

export default {
	name: "ShopList",
	beforeCreate() {
		alert("BeforeCreate");
		// Shop preferences do not exist
		if (store.shopPreferences === null) {
			store.shopPreferences = getEmptySP();
			router.replace({ name: "Home" }).catch((error) => {});
			alert("Something went wrong");
			return;
		}
		// Shop preferences have any default value
		if (isAnyDefaultSP(store.shopPreferences)) {
			store.homeStage = 2;
			router.replace({ name: "Home" }).catch((error) => {});
			return;
		}

		console.log(store.shopPreferences);
	},
	data() {
		let shopList = fetchShops();
		return {
			shopList,
		};
	},
	components: { ShopCard },
};
</script>
