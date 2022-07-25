<template>
	<div class="shoplist">
		<v-row class="text-left list-heading">
			<v-col cols="12" md="10" sm="8">
				<v-row class="custom-font">
					<v-col>Here is a list of shop that are near you:</v-col>
				</v-row>
				<v-row class="custom-font-2 color-primary mt-0">
					<v-col @click="changeSettings()" class="cursor-pointer">
						Change settings
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="12" md="2" sm="4">
				<v-row class="custom-font">
					<v-col>Sort by</v-col>
				</v-row>
				<v-row class="mt-0">
					<v-col>
						<v-menu offset-y open-on-hover rounded="lg">
							<template v-slot:activator="{ on, attrs }">
								<v-btn v-bind="attrs" v-on="on">
									{{ currentSort }}
								</v-btn>
							</template>
							<v-list class="text-left">
								<v-list-item @click="sortList('distance')">
									<v-list-item-title>
										Distance
									</v-list-item-title>
								</v-list-item>
								<v-list-item @click="sortList('rating')">
									<v-list-item-title>
										Rating
									</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<v-row>
			<v-col>
				<div class="shopcard-container">
					<ShopCard
						@click.native="toShop(shop.id)"
						v-for="shop in shopList"
						:key="shop.id"
						:model="shop"
					></ShopCard>
				</div>
			</v-col>
		</v-row>
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

.list-heading {
	width: 75%;
	margin: auto;
}

.shopcard-container > * {
	cursor: pointer;
}

@media only screen and (max-width: 1264px) {
	.shopcard-container {
		width: initial;
	}

	.list-heading {
		width: initial;
	}
}

.ShopCard:not(:last-child) {
	border-bottom: 2px solid var(--primary-color);
}

.v-btn {
	background-color: var(--quaternary-color) !important;
	border: 1px solid var(--secondary-color);
}

.v-list {
	background-color: var(--quaternary-color) !important;
}
</style>

<script>
import router from "@/router";
import store, { getEmptySP, isAnyDefaultSP, lsKey } from "@/store";
import ShopCard from "../components/shoplist/ShopCard.vue";

const sortEnum = {
	distance: "distance",
	rating: "stars",
};

function fetchShops() {
	// let preferences = store.shopPreferences;
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

function getDistance(rawDistance) {
	let data = rawDistance.split(" ");
	data[0] = parseFloat(data[0]);

	if (data[1] === "km") {
		data[0] *= 1000;
	}

	return data[0];
}

function getSortedList(shopList, attr) {
	shopList.sort((f, s) => {
		const sortKey = sortEnum[attr];

		let first = f[sortKey];
		let second = s[sortKey];

		let sortLogic = false;
		if (sortKey === "stars") {
			sortLogic = parseInt(first) < parseInt(second);
		}
		if (sortKey === "distance") {
			sortLogic = getDistance(first) > getDistance(second);
		}

		return sortLogic ? 1 : -1;
	});

	return shopList;
}

export default {
	name: "ShopList",
	beforeCreate() {
		const preferences = localStorage.getItem(lsKey);

		// Shop preferences do not exist
		if (preferences === null || preferences === undefined) {
			store.shopPreferences = getEmptySP();
			router.replace({ name: "Home" }).catch((error) => {});
			return;
		}

		// Shop preferences have any default value
		if (isAnyDefaultSP(preferences)) {
			store.homeStage = 2;
			router.replace({ name: "Home" }).catch((error) => {});
			return;
		}
	},
	created() {
		this.sortList("distance");
	},
	data() {
		let shopList = fetchShops();
		return {
			shopList,
			currentSort: "Distance",
		};
	},
	methods: {
		toShop(id) {
			router
				.push({ name: "Shop", params: { id: id } })
				.catch((error) => {});
		},
		sortList(by) {
			this.shopList = getSortedList(this.shopList, by);
		},
		changeSettings() {
			store.resetPreference = true;
			store.homeStage = 2;
			router.push({ name: "Home" }).catch((error) => {});
		},
	},
	components: { ShopCard },
};
</script>
