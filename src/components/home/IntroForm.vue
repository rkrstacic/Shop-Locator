<template>
	<v-container class="text-center mt-10">
		<v-card
			elevation="2"
			max-width="400"
			class="rounded-lg mt-16 ma-auto pa-8"
		>
			<v-row>
				<v-col>
					<v-row>
						<v-col class="custom-font">
							First, we need Your location
						</v-col>
					</v-row>
					<v-row class="pt-5 pb-5">
						<v-col>
							<v-text-field
								v-model="location"
								label="Location"
								placeholder="e.g. Trafalgar Square, London"
							></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col class="text-left">
							<div
								@click="getCurrentLocation()"
								class="locate-me"
							>
								<font-awesome-icon
									icon="fa-solid fa-location-crosshairs"
								/>
							</div>
						</v-col>
						<v-col
							class="custom-font next-btn text-right cursor-pointer"
							@click="goNext()"
						>
							Next >
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<style>
.v-card {
	background-color: var(--tertiary-color) !important;
	border-color: var(--tertiary-color) !important;
	color: var(--quaternary-color) !important;
}

.locate-me {
	cursor: pointer;
	width: 50%;
	font-size: 1.5em;
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
</style>

<script>
import store from "@/store";

export default {
	name: "IntroForm",
	data() {
		return {
			location: "",
			geolocation: null,
		};
	},
	methods: {
		goNext() {
			// Empty location check
			if (this.location === "" && this.geolocation === null) {
				alert("Location cannot be empty");
				return;
			}

			store.shopPreferences.location = this.location;
			store.shopPreferences.geolocation = this.geolocation;
			this.$emit("startShopEvent");
		},
		getCurrentLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					this.success,
					this.fail
				);
			} else {
				alert("Sorry, your browser does not support this feature.");
			}
		},

		success(position) {
			this.geolocation = {
				lng: position.coords.longitude,
				lat: position.coords.latitude,
			};

			this.goNext();
		},

		fail() {
			alert("Could not load the current position.");
		},
	},
};
</script>
