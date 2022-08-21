<template>
	<div class="ShopCard p-3 text-left custom-font">
		<link
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
			rel="stylesheet"
		/>

		<v-row>
			<v-col cols="12" md="10" sm="8">
				<v-row>
					<v-col>
						<span class="shop-stars">
							<font-awesome-icon icon="fa-solid fa-star" />
							{{ model.stars }}
						</span>
						<span class="shop-name"> • {{ model.title }} </span>
					</v-col>
				</v-row>
				<v-row>
					<v-col class="shop-location">
						<font-awesome-icon icon="fa-solid fa-location-dot" />
						{{ location }}
					</v-col>
				</v-row>
				<v-row> </v-row>
			</v-col>

			<v-col cols="12" md="2" sm="4">
				<v-row>
					<v-col class="shop-closing-hour">
						<font-awesome-icon icon="fa-solid fa-clock" />
						{{ closingHour }}
					</v-col>
				</v-row>
				<v-row>
					<v-col class="shop-distance">
						<font-awesome-icon icon="fa-solid fa-person-running" />
						{{ distanceToStr(model.distance) }}
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>
.shop-name {
	color: var(--tertiary-color) !important;
}
.shop-location,
.shop-closing-hour,
.shop-distance,
.shop-stars {
	font-size: 18px;
}
</style>

<script>
import { db, collection, query, where, getDocs } from "@/firebase";

async function fetchShopFavSnapshotAsync(shop_id) {
	// Get favourites collection
	const favouritesRef = collection(db, "favourites");

	// Create a query against the collection.
	const q = query(favouritesRef, where("shop_id", "==", shop_id));

	// Return a snapshot with the query
	return await getDocs(q);
}

export default {
	name: "CardTest",
	props: ["model"],
	data: () => ({}),
	created() {
		this.fetchShopFavAsync();
	},
	methods: {
		distanceToStr(integer) {
			if (integer < 1000) {
				return `${integer} m`;
			}

			return `${Math.round(integer / 100) / 10} km`;
		},

		fetchShopFavAsync() {
			fetchShopFavSnapshotAsync(this.model.id).then((querySnapshot) => {
				querySnapshot.forEach(() => {
					this.model.stars += 1;
				});
			});
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

			return openingHours[0].text[0].split(": ").pop();
		},
		location() {
			let loc = this.model.address.label.split(", ");
			loc.shift();
			return loc.join(", ");
		},
	},
};
</script>
