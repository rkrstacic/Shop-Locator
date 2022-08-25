<template>
	<div class="account">
		<v-container>
			<v-card class="text-left p-2">
				<v-row>
					<v-col cols="12" md="3">
						<img
							class="acc-pfp"
							id="avatar"
							:width="200"
							:height="200"
							:src="userProfileURL"
						/>
						<croppa
							v-model="imgRef"
							:width="200"
							:height="200"
							:placeholder-font-size="14"
							:zoom-speed="10"
							:placeholder-color="'#e8f7dd'"
							:canvas-color="'#151b1f'"
							v-if="pfpFlag"
						></croppa>
					</v-col>
					<v-col cols="12" md="9">
						<v-row>
							<v-col>
								<v-text-field
									v-model="user.email"
									label="Email (cannot be changed)"
									type="text"
									readonly
									disabled
									hide-details="auto"
								></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col>
								<v-text-field
									v-model="user.username"
									label="Username"
									type="text"
									required
									hide-details="auto"
								></v-text-field>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
				<v-row justify="space-between">
					<v-col>
						<v-btn class="custom-font" @click="EditPfp()">
							{{ pfpText }}
						</v-btn>
					</v-col>

					<v-col cols="auto">
						<v-btn class="custom-font" @click="updateUserAsync()">
							Save changes
						</v-btn>
					</v-col>

					<v-col cols="auto">
						<v-btn class="custom-font" @click="signOutAsync()">
							Logout
						</v-btn>
					</v-col>
				</v-row>
			</v-card>
		</v-container>
	</div>
</template>

<style>
.v-card {
	background-color: var(--tertiary-color) !important;
	border-color: var(--tertiary-color) !important;
	color: var(--quaternary-color) !important;
}

.next-btn {
	font-size: 18px;
}

.v-label {
	color: gray !important;
}

.v-label--active {
	color: var(--quaternary-color) !important;
}

.v-input__slot {
	color: var(--quaternary-color) !important;
}

.v-text-field__slot {
	color: var(--quaternary-color) !important;
}

.v-input__slot::before {
	border-color: gray !important;
	border-width: 1px !important;
}

input::placeholder {
	/* Chrome, Firefox, Opera, Safari 10.1+ */
	color: gray !important;
	opacity: 1; /* Firefox */
}

input:-ms-input-placeholder {
	/* Internet Explorer 10-11 */
	color: gray !important;
}

input::-ms-input-placeholder {
	/* Microsoft Edge */
	color: gray !important;
}

input {
	color: var(--quaternary-color);
}

input:active {
	caret-color: var(--quaternary-color);
}

.v-input input {
	color: var(--quaternary-color) !important;
}

.v-btn {
	background-color: var(--primary-color) !important;
}
</style>

<script>
import store from "@/store";
import {
	db,
	collection,
	query,
	where,
	getDocs,
	setDoc,
	doc,
	getStorage,
	uploadBytes,
	ref,
} from "@/firebase";
import router from "@/router";
import { getAuth, signOut } from "@/firebase";

async function fetchUserSnapshotAsync(email) {
	// Get users collection
	const userRef = collection(db, "users");

	// Create a query against the collection.
	const q = query(userRef, where("email", "==", email));

	// Return a snapshot with the query
	return await getDocs(q);
}

function saveImg(fileName, file) {
	const storage = getStorage();
	const storageRef = ref(storage, fileName);

	uploadBytes(storageRef, file);
}

export default {
	name: "account",
	data() {
		return {
			user: {
				id: "",
				username: "",
				email: "",
				pfp: null,
			},
			pfpFlag: false,
			pfpText: "Edit profile image",
			imgRef: null,
			userProfileURL: store.userProfileURL,
		};
	},
	created() {
		this.fetchUserAsync();
	},
	methods: {
		async fetchUserAsync() {
			await fetchUserSnapshotAsync(store.currentUser).then(
				(querySnapshot) => {
					querySnapshot.forEach((user) => {
						this.user = user.data();
						this.user.id = user.id;
					});
				}
			);
		},
		async updateUserAsync() {
			if (this.user.username === "") {
				alert("Please enter username");
				return;
			}

			// Save username
			await setDoc(doc(db, "users", this.user.id), {
				username: this.user.username,
				email: this.user.email,
			});

			// Save img
			this.imgRef.generateBlob(
				(blobData) => {
					let imgName = store.currentUser;
					saveImg(imgName, blobData);
				},
				"image/jpeg",
				0.8
			);

			router.go();
		},
		async signOutAsync() {
			if (!store.currentUser) {
				return;
			}

			const auth = getAuth();
			signOut(auth)
				.then(() => {
					router.go();
				})
				.catch((error) => {
					console.error(`Error signing out! ${error}`);
				});
		},
		EditPfp() {
			const flag = this.pfpFlag;
			this.pfpFlag = !flag;
			this.pfpText = flag ? "Edit profile image" : "Cancel";

			let avatar = document.getElementById("avatar");
			avatar.style.display = flag ? "Block" : "None";
		},
	},
};
</script>
