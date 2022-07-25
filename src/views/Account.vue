<template>
	<div class="account">
		<v-container>
			<v-card class="text-left">
				<v-row>
					<v-col cols="3">Avatar</v-col>
					<v-col cols="9">
						<v-row>
							<v-col cols="9">
								<v-row><v-col>Email</v-col></v-row>
								<v-row><v-col>Something</v-col></v-row>
							</v-col>
							<v-col cols="3">
								<v-row><v-col>Edit</v-col></v-row>
								<v-row><v-col>Edit</v-col></v-row>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-card>
		</v-container>
	</div>
</template>

<script>
export default {
	name: "account",
	created() {
		alert("In progress");
	},
};
</script>
