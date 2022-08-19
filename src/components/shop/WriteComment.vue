<template>
	<v-row class="text-left">
		<v-col cols="3"> User </v-col>
		<v-col cols="9" class="custom-font extension-font mt-2 mb-2">
			<v-row>
				<v-col>
					<v-textarea
						v-model="userComment"
						solo
						auto-grow
						label="Your comment..."
					></v-textarea>
				</v-col>

				<v-col cols="12" md="2">
					<v-btn
						@click="sendComment"
						width="auto"
						color="submit white--text"
						elevation="2"
					>
						Send
					</v-btn>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<style>
.extension-font {
	font-size: 16px;
	word-wrap: break-word;
	border-left: 1px solid gray;
}

textarea {
	height: 100px;
}

.v-label {
	color: gray !important;
}

.submit {
	background-color: var(--primary-color) !important;

	font-family: "PT Sans Caption";
	font-style: normal;
	font-weight: 700 !important;
	font-size: 20px !important;
	line-height: 52px;
	align-items: center;
	text-align: center;

	color: white;

	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>

<script>
import { db, collection, addDoc } from "@/firebase";
import store from "@/store";
import router from "@/router";

function makeCommentObj({ shop_id, user, message, date_sent }) {
	return { shop_id, user, message, date_sent };
}

export default {
	name: "WriteComment",
	data() {
		return {
			userComment: "",
		};
	},
	methods: {
		async sendComment() {
			if (this.userComment === null || this.userComment === "") {
				alert("Comment cannot be empty");
				return;
			}

			const comment = makeCommentObj({
				shop_id: this.$route.params.id,
				user: store.currentUser,
				message: this.userComment,
				date_sent: Date.now(),
			});

			try {
				await addDoc(collection(db, "comments"), comment);
				router.go();
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		},
	},
};
</script>
