<template>
	<v-container class="text-center mt-10">
		<v-row>
			<v-col class="shopfast noselect">
				<div class="shop">Shop</div>
				<div class="fast">fast</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-row>
					<v-col class="cap"
						>Find the right shop in the right time!</v-col
					>
				</v-row>
				<v-row>
					<v-col>
						<v-btn
							class="start-btn"
							color="white--text"
							elevation="2"
							x-large
							@click="$emit('startShopEvent')"
							>Let's start!</v-btn
						>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
.v-card {
	background-color: var(--tertiary-color) !important;
	border-color: var(--tertiary-color) !important;
	color: var(--quaternary-color) !important;
}

.next-btn {
	font-size: 18px;
}

.shopfast {
	font-family: "Aclonica";
	font-style: normal;
	font-weight: 400;
	font-size: 200px;
	line-height: 249px;
	align-items: center;
	text-align: center;

	text-shadow: 0px 6px 0px rgba(0, 0, 0, 0.25);
}

.shop {
	color: var(--tertiary-color);
	margin-left: -1em;
}

.fast {
	color: var(--primary-color);
	margin-left: 1em;
	margin-top: -0.3em;
}

.cap {
	font-family: "PT Sans Caption";
	font-style: normal;
	font-weight: 700;
	font-size: 28px;
	line-height: 36px;
	align-items: center;
	text-align: center;

	color: var(--tertiary-color);

	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.start-btn {
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

@media only screen and (max-width: 800px) {
	.shopfast {
		font-size: 150px;
		line-height: 200px;
	}

	.shop {
		margin-left: -0.2em;
	}

	.fast {
		margin-top: -0.3em;
	}
}

@media only screen and (max-width: 550px) {
	.shopfast {
		font-size: 100px;
		line-height: 100px;
	}

	.shop {
		margin-left: -0.2em;
	}

	.fast {
		margin-top: 0em;
		margin-left: 1em;
	}
}

@media only screen and (max-width: 380px) {
	.shopfast {
		font-size: 50px;
		line-height: 50px;
	}

	.shop {
		margin-left: -0.2em;
	}

	.fast {
		margin-top: 0em;
		margin-left: 1em;
	}

	.cap {
		font-size: 20px;
		line-height: 20px;
	}

	.start-btn {
		font-size: 18px !important;
	}
}
</style>

<script>
export default {
	name: "IntroScreen",
};
</script>
