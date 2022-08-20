<template>
	<div class="d-flex text-left custom-font extension-font">
		<div class="mr-5 d-flex flex-row-reverse">
			<v-avatar>
				<img
					class="acc-pfp"
					:id="model.date_sent"
					:src="getPfpImgSrc(model.user)"
					alt="Default profile picture"
				/>
			</v-avatar>
		</div>
		<div class="flex-grow-1 mb-2">
			<div class="comment-top">
				{{ user.username }} • {{ relativeTime }}
			</div>
			<div>{{ model.message }}</div>
		</div>
	</div>
</template>

<style scoped>
.extension-font {
	font-size: 16px;
	word-wrap: break-word;
}
.comment-top {
	margin-bottom: 0.5em;
}
</style>

<script>
import {
	db,
	collection,
	query,
	where,
	getDocs,
	getDownloadURL,
	getStorage,
	ref,
} from "@/firebase";

async function fetchUserSnapshotAsync(email) {
	// Get users collection
	const userRef = collection(db, "users");

	// Create a query against the collection.
	const q = query(userRef, where("email", "==", email));

	// Return a snapshot with the query
	return await getDocs(q);
}

export default {
	name: "Comment",
	props: ["model"],
	data() {
		this.fetchUserAsync(this.model.user);
		return {
			user: {
				id: 0,
				username: "",
			},
		};
	},
	methods: {
		async fetchUserAsync(email) {
			await fetchUserSnapshotAsync(email).then((querySnapshot) => {
				querySnapshot.forEach((user) => {
					this.user = user.data();
					this.user.id = user.id;
				});
			});
		},

		getPfpImgSrc(filename) {
			const storage = getStorage();
			getDownloadURL(ref(storage, filename)).then((url) => {
				document
					.getElementById(this.model.date_sent)
					.setAttribute("src", url);
			});
		},
	},
	computed: {
		relativeTime() {
			var msPerMinute = 60 * 1000;
			var msPerHour = msPerMinute * 60;
			var msPerDay = msPerHour * 24;
			var msPerMonth = msPerDay * 30;
			var msPerYear = msPerDay * 365;

			var elapsed = new Date() - this.model.date_sent;

			if (elapsed < msPerMinute) {
				return Math.round(elapsed / 1000) + " second(s) ago";
			} else if (elapsed < msPerHour) {
				return Math.round(elapsed / msPerMinute) + " minute(s) ago";
			} else if (elapsed < msPerDay) {
				return Math.round(elapsed / msPerHour) + " hour(s) ago";
			} else if (elapsed < msPerMonth) {
				return Math.round(elapsed / msPerDay) + " day(s) ago";
			} else if (elapsed < msPerYear) {
				return Math.round(elapsed / msPerMonth) + " month(s) ago";
			} else {
				return Math.round(elapsed / msPerYear) + " year(s) ago";
			}
		},
	},
};
</script>
