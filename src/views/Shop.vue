<template>
	<div class="shop">
		<v-row class="shop-heading custom-font">
			<v-col cols="12" md="2" class="pl-10">
				<router-link to="/shoplist">
					<font-awesome-icon icon="fa-solid fa-caret-left" /> Back
				</router-link>
			</v-col>
			<v-col cols="12" md="8">
				<v-row>
					<v-col class="shop-name text-center">
						{{ shop.title }}
					</v-col>
				</v-row>
				<v-row class="shop-info">
					<v-col col="12" sm="4">
						<font-awesome-icon icon="fa-solid fa-clock" />
						{{ closingHour }}
					</v-col>
					<v-col cols="12" sm="4">
						<font-awesome-icon icon="fa-solid fa-location-dot" />
						{{ location }}
					</v-col>
					<v-col cols="12" sm="4">
						<font-awesome-icon icon="fa-solid fa-person-running" />
						{{ shopDistance }}
					</v-col>
				</v-row>
			</v-col>
			<v-col
				cols="12"
				md="2"
				@click="toggleFavAsync()"
				class="shop-star pr-10"
			>
				<v-row>
					<v-col class="d-flex justify-end mt-1">
						<font-awesome-icon
							v-if="favID"
							icon="fa-solid fa-star"
						/>
						<font-awesome-icon
							v-if="!favID"
							icon="fa-regular fa-star"
						/>
					</v-col>
					<v-col class="text-left">
						{{ shop.stars }}
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<v-row>
			<v-col v-if="comments.length">
				<v-row
					v-for="comment in comments"
					:key="comment.id"
					class="Comment"
				>
					<v-col>
						<Comment :model="comment"></Comment>
					</v-col>
				</v-row>
			</v-col>
			<v-col v-if="!comments.length">
				<v-row>
					<v-col> There are no reviews </v-col>
				</v-row>
			</v-col>
		</v-row>

		<v-row class="custom-font">
			<v-col v-if="!isLoggedUser" class="nocomment">
				Please log in to leave a comment!
			</v-col>
			<v-col v-if="isLoggedUser">
				<WriteComment></WriteComment>
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>
.shop {
	background-color: var(--quaternary-color);
	border: 3px solid var(--primary-color);
	border-radius: 20px;
	padding: 10px;
	width: 65%;
	margin: auto;
	margin-top: 50px;
}

.shop-name {
	font-size: 32px;
}

.nocomment {
	font-size: 16px;
	margin: 15px 0px;
}

.shop-info {
	font-size: 18px;
}

.shop-star {
	cursor: pointer;
}

@media only screen and (max-width: 1264px) {
	.shop {
		width: initial;
	}
}

.shop > * {
	padding: 10px;
}

.shop-heading > * {
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.shop > *:first-child {
	border-bottom: 1px solid var(--primary-color);
}

.shop > *:nth-child(2) {
	border-bottom: 2px solid var(--primary-color);
}

.Comment:not(:last-child) {
	border-bottom: 1px solid gray;
}
</style>

<script>
import Comment from "@/components/shop/Comment.vue";
import {
	db,
	collection,
	query,
	where,
	getDocs,
	addDoc,
	orderBy,
	deleteDoc,
	doc,
} from "@/firebase";
import store from "@/store";
import router from "@/router";
import WriteComment from "@/components/shop/WriteComment.vue";
import getShopById from "@/HERE Developer API/lookup";

function makeFavObj({ shop_id, user }) {
	return { shop_id, user };
}

async function fetchCommentsSnapshotAsync(shopID) {
	// Get comments collection
	const commentsRef = collection(db, "comments");

	// Create a query against the collection.
	const q = query(
		commentsRef,
		where("shop_id", "==", shopID),
		orderBy("date_sent")
	);

	// Return a snapshot with the query
	return await getDocs(q);
}

async function fetchFavSnapshotAsync({ shop_id, user }) {
	// Get favourites collection
	const favouritesRef = collection(db, "favourites");

	// Create a query against the collection.
	const q = query(
		favouritesRef,
		where("shop_id", "==", shop_id),
		where("user", "==", user)
	);

	// Return a snapshot with the query
	return await getDocs(q);
}

async function fetchShopFavSnapshotAsync(shop_id) {
	// Get favourites collection
	const favouritesRef = collection(db, "favourites");

	// Create a query against the collection.
	const q = query(favouritesRef, where("shop_id", "==", shop_id));

	// Return a snapshot with the query
	return await getDocs(q);
}

export default {
	name: "Shop",
	data() {
		return {
			shopID: this.$route.params.id,
			shop: {
				title: "",
				stars: 0,
				address: {
					label: "",
				},
			},
			isLoggedUser: store.currentUser !== null,
			comments: [],
			currentUser: store.currentUser,
			favID: "",
		};
	},
	created() {
		this.fetchShopAsync(this.shopID).then(() => {
			this.fetchCommentsAsync();
			this.fetchFavAsync();
			this.fetchShopFavAsync();
		});
	},
	methods: {
		async toggleFavAsync() {
			// Only logged users can mark as fav
			if (!this.isLoggedUser) {
				alert("You must be logged in to give this shop a star");
				return;
			}

			// Not previously marked as fav
			if (!this.favID) {
				await this.addToFavAsync();
			}

			// Previously marked as fav
			else {
				await this.removeFromFavAsync();
			}
		},
		async removeFromFavAsync() {
			try {
				await deleteDoc(doc(db, "favourites", this.favID));
				router.go();
			} catch (e) {
				console.error("Error deleting document: ", e);
			}
		},
		async addToFavAsync() {
			const favourite = makeFavObj({
				shop_id: this.shopID,
				user: this.currentUser,
			});

			try {
				await addDoc(collection(db, "favourites"), favourite);
				router.go();
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		},
		async fetchCommentsAsync() {
			await fetchCommentsSnapshotAsync(this.shopID).then(
				(querySnapshot) => {
					querySnapshot.forEach((doc) => {
						this.comments.unshift(doc.data());
					});
				}
			);
		},
		async fetchFavAsync() {
			await fetchFavSnapshotAsync({
				shop_id: this.shopID,
				user: store.currentUser,
			}).then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					this.favID = doc.id;
				});
			});
		},
		async fetchShopFavAsync() {
			await fetchShopFavSnapshotAsync(this.shopID).then(
				(querySnapshot) => {
					querySnapshot.forEach(() => {
						this.shop.stars += 1;
					});
				}
			);
		},

		async fetchShopAsync(id) {
			let shop = await getShopById(id);
			this.shop = shop;
			this.shop.stars = 0;
		},
	},
	components: { Comment, WriteComment },
	computed: {
		closingHour() {
			let openingHours = this.shop.openingHours;

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
			return this.shop.address.label.split(", ")[1];
		},

		shopDistance() {
			let integer = this.$route.params.distance;
			if (integer < 1000) {
				return `${integer} m`;
			}

			return `${Math.round(integer / 100) / 10} km`;
		},
	},
};
</script>
