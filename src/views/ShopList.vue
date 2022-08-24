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
					<div v-if="shopList.length === 0" id="no-shops">
						No shops to display
					</div>
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

#no-shops {
	padding: 0.2em;
	cursor: initial;
}
</style>

<script>
import router from "@/router";
import store, { getEmptySP, isAnyDefaultSP, lsKey } from "@/store";
import ShopCard from "../components/shoplist/ShopCard.vue";
import data from "@/sampleData";
import requestShops from "@/HERE Developer API/requestShops";

const sortEnum = {
	distance: "distance",
	rating: "stars",
};

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
			sortLogic = first > second;
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
		this.fetchShops().then(() => {
			this.sortList("distance");
		});
	},
	data() {
		return {
			shopList: [],
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

		async fetchShops() {
			let preferences = JSON.parse(localStorage.getItem(lsKey));
			let shopTypes = [];

			for (const [key, value] of Object.entries(preferences.shopTypes)) {
				if (value) {
					shopTypes.push(key);
				}
			}

			let shops = await requestShops({
				location: preferences.location,
				distance: preferences.distance,
				shopTypes: shopTypes.join(","),
			});

			shops.items.map((shop) => {
				shop.stars = 0;
				return shop;
			});

			this.shopList = shops.items;
		},
	},
	components: { ShopCard },
};
</script>
