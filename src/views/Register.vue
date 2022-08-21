<template>
	<div class="register">
		<v-container fluid fill-height>
			<v-layout align-center justify-center>
				<v-flex xs12 sm8 md4>
					<v-card>
						<v-toolbar flat color="primary custom-font">
							<v-toolbar-title>Register</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-form>
								<v-text-field
									v-model="email"
									label="Email address"
									type="text"
								></v-text-field>
								<v-text-field
									v-model="username"
									label="Username"
									type="text"
								></v-text-field>
								<v-text-field
									v-model="password"
									label="Password"
									type="password"
								></v-text-field>
								<v-text-field
									v-model="passwordRepeat"
									label="Confirm password"
									type="password"
								></v-text-field>
							</v-form>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn class="custom-font" @click="signup()"
								>Register</v-btn
							>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<style>
.v-card,
.v-toolbar {
	background-color: var(--tertiary-color) !important;
	border-color: var(--tertiary-color) !important;
	color: var(--quaternary-color) !important;
}

.v-btn {
	background-color: var(--primary-color) !important;
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
	color: var(--quaternary-color) !important;
}

input:active {
	caret-color: var(--quaternary-color) !important;
}

.v-input input {
	color: var(--quaternary-color) !important;
}
</style>

<script>
import { createUserWithEmailAndPassword, getAuth } from "@/firebase";
import router from "@/router";
import { db, collection, addDoc } from "@/firebase";

const auth = getAuth();

function makeUserObj({ username, email, pfp_id }) {
	return { username, email, pfp_id };
}

async function addUserToCollections({ username, email, pfp_id }) {
	const userObj = makeUserObj({ username, email, pfp_id });

	try {
		await addDoc(collection(db, "users"), userObj);
	} catch (e) {
		console.error("Error adding document: ", e);
		alert("Register failed");
	}
}

export default {
	name: "Register",
	data() {
		return {
			username: "",
			email: "",
			password: "",
			passwordRepeat: "",
		};
	},
	methods: {
		async signup() {
			// Firebase auth
			await createUserWithEmailAndPassword(
				auth,
				this.email,
				this.password
			);

			// Two users with same username cannot exist

			// Firebase users colleciton
			await addUserToCollections({
				username: this.username,
				email: this.email,
				pfp_id: 0,
			});

			router.replace({ name: "Home" }).catch((error) => {});
		},
	},
};
</script>
