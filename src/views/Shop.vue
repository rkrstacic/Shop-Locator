<template>
	<div class="shop">
		<v-row class="shop-heading custom-font">
			<v-col cols="2" class="text-left pl-10">
				<router-link to="/shoplist">&#60;</router-link>
			</v-col>
			<v-col cols="8">
				<v-row>
					<v-col class="shop-name text-center">
						{{ shop.name }}
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="6" class="text-right">
						{{ shop.closeTime }}
					</v-col>
					<v-col cols="6" class="text-left">
						{{ shop.distance }}
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="2" class="text-right pr-10">
				{{ shop.stars }}
			</v-col>
		</v-row>

		<v-row>
			<v-col>
				<v-row
					v-for="userComment in fetchComments"
					:key="userComment.comment.id"
				>
					<v-col>
						<Comment :model="userComment"></Comment>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<v-row class="custom-font">
			<v-col class="comment">Please log in to leave a comment!</v-col>
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

.comment {
	font-size: 16px;
	margin: 15px 0px;
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
</style>

<script>
import Comment from "@/components/shop/Comment.vue";
function fetchShop(id) {
	return {
		id: 1,
		name: "Test Shop Name 1",
		closeTime: "00:00pm",
		stars: 999,
		distance: "100 m",
	};
}

export default {
	name: "Shop",
	data() {
		// Fetch a shop
		let shop = fetchShop(this.$route.params.id);
		return {
			shopID: this.$route.params.id,
			shop,
		};
	},
	components: { Comment },
	computed: {
		fetchComments(shopID) {
			return [
				{
					user: {},
					comment: { id: 1, comment: "Hi" },
				},
				{
					user: {},
					comment: { id: 2, comment: "Hello" },
				},
				{
					user: {},
					comment: { id: 3, comment: ":)" },
				},
			];
		},
	},
};
</script>
