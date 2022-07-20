<template>
	<div class="shoplist">
		<div class="box">
			<h1 class="custom-font">
				Here is a list of shop that are near you:
			</h1>
			<h4 class="custom-font-2 color-primary">Change settings</h4>
			<div class="custom-font">Sort By [Button]</div>
		</div>

		<div class="shopcard-container">
			<ShopCard
				@click.native="toShop(shop.id)"
				v-for="shop in shopList"
				:key="shop.id"
				:model="shop"
			></ShopCard>
		</div>
	</div>
</template>

<style scoped>
.shopcard-container {
	background-color: var(--quaternary-color);
	border: 3px solid var(--primary-color);
	border-radius: 20px;
	padding: 5px 15px;
	width: 75%;
	margin: auto;
}

.box {
	height: 100px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	width: 75%;
	margin: auto;
}

@media only screen and (max-width: 1264px) {
	.shopcard-container {
		width: initial;
	}

	.box {
		width: initial;
	}
}

.box > * {
	flex: 1 1 50px;
	display: flex;
	justify-content: center;
	flex-direction: column;

	text-align: left;
}

.box > *:last-child {
	text-align: right;
}

@media only screen and (max-width: 800px) {
	.box {
		height: auto;
		margin-bottom: 10px;
	}

	.box > * {
		flex: 1 1 0px;
	}

	.box > *:last-child {
		margin-top: 10px;
		text-align: left;
	}
}

.ShopCard:not(:last-child) {
	border-bottom: 2px solid var(--primary-color);
}
</style>

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
	methods: {
		toShop(id) {
			router
				.push({ name: "Shop", params: { id: id } })
				.catch((error) => {});
		},
	},
	components: { ShopCard },
};
</script>
