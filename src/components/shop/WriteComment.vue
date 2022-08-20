<template>
	<div class="text-left d-flex">
		<div class="mr-4">
			<v-avatar>
				<img
					class="acc-pfp"
					src="@/assets/img/default_pfp.jpg"
					alt="Default profile picture"
				/>
			</v-avatar>
		</div>
		<div class="flex-grow-1 custom-font extension-font">
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
		</div>
	</div>
</template>

<style>
.extension-font {
	font-size: 16px;
	word-wrap: break-word;
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
import {
	db,
	collection,
	addDoc,
	getStorage,
	getDownloadURL,
	ref,
} from "@/firebase";
import store from "@/store";
import router from "@/router";

function makeCommentObj({ shop_id, user, message, date_sent }) {
	return { shop_id, user, message, date_sent };
}

function setImg(fileName) {
	const storage = getStorage();
	getDownloadURL(ref(storage, fileName))
		.then((url) => {
			const imgs = document.getElementsByClassName("acc-pfp");
			store.userProfileURL = url;
			Array.from(imgs).forEach((img) => {
				img.setAttribute("src", url);
			});
		})
		.catch((error) => {
			console.log("Error", error);
		});
}

export default {
	name: "WriteComment",
	data() {
		setImg(store.currentUser);
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
