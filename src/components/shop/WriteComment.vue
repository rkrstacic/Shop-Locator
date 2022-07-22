<template>
	<v-row class="text-left">
		<v-col cols="3"> User </v-col>
		<v-col cols="7" class="custom-font extension-font mt-2 mb-2">
			<v-textarea solo auto-grow label="Your comment..."></v-textarea>
		</v-col>
		<v-col cols="2" class="mt-2 mb-2">
			<v-btn width="auto" color="submit white--text" elevation="2">
				Send
			</v-btn>
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
export default {
	name: "WriteComment",
};
</script>
