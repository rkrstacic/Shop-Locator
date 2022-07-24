<template>
	<v-row class="text-left">
		<v-col cols="3">
			{{ model.user }}
		</v-col>
		<v-col cols="9" class="custom-font extension-font mt-2 mb-2">
			{{ model.comment.message }}
		</v-col>
	</v-row>
</template>

<style scoped>
.extension-font {
	font-size: 16px;
	word-wrap: break-word;
	border-left: 1px solid gray;
}
</style>

<script>
export default {
	name: "Comment",
	props: ["model"],
};
</script>
