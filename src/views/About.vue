<template>
	<div class="about">
		<h1>This is an about page</h1>
	</div>
</template>

<script>
import callAjax from "@/HERE Developer API/ajaxBearerKey";

export default {
	name: "about",
	created() {
		callAjax();
	},
};
</script>
