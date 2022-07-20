<template>
	<div>{{ model.comment.comment }}</div>
</template>

<style scoped></style>

<script>
export default {
	name: "Comment",
	props: ["model"],
};
</script>
