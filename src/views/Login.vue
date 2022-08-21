<template>
	<div class="login">
		<v-container fluid fill-height>
			<v-layout align-center justify-center>
				<v-flex xs12 sm8 md4>
					<v-card>
						<v-toolbar flat color="primary" class="custom-font">
							<v-toolbar-title>Login</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-form>
								<v-text-field
									v-model="email"
									label="Email address"
									type="text"
								></v-text-field>
								<v-text-field
									v-model="password"
									label="Password"
									type="password"
								></v-text-field>
							</v-form>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn class="custom-font" @click="login()">
								Login
							</v-btn>
							<v-btn class="custom-font" @click="toRegister()">
								Register
							</v-btn>
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
import { getAuth, signInWithEmailAndPassword } from "@/firebase";
import router from "@/router";

export default {
	name: "login",
	data() {
		return {
			email: "",
			password: "",
		};
	},

	methods: {
		login() {
			const auth = getAuth();
			signInWithEmailAndPassword(auth, this.email, this.password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					router.replace({ name: "Home" }).catch((error) => {});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(
						`Login failed; errorCode: ${errorCode}; errorMessage: ${errorMessage}`
					);
					if (errorCode === "auth/user-not-found") {
						alert("Invalid crdentials");
					} else {
						alert("Login failed");
					}
				});
		},
		toRegister() {
			router.push({ name: "Register" }).catch((error) => {});
		},
	},
};
</script>
