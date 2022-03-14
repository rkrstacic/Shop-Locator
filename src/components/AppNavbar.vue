<template>
	<nav class="navbar navbar-expand-lg navbar-light app-navbar">
		<div class="d-flex flex-grow-1">
			<span class="w-100 d-lg-none d-block"><!-- hidden spacer to center brand on mobile --></span>
			<a class="navbar-brand d-none d-lg-inline-block" href="#">
				<router-link class="nav-link menu-item" to="/">Logo</router-link>
			</a>
			<a class="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
				<img src="//via.placeholder.com/40?text=LOGO" alt="logo">
			</a>
			<div class="w-100 text-right">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
					<span class="navbar-toggler-icon"></span>
				</button>
			</div>
		</div>
		<div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
			<ul class="navbar-nav ml-auto flex-nowrap">
				<li class="nav-item">
					<router-link class="nav-link m-2 menu-item" to="/">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link m-2 menu-item" to="/pricing">Pricing</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link m-2 menu-item" to="/about">About</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>


<style scoped lang="scss">
.app-navbar {
    background-color: var(--tertiary-color);
	
	.nav-link:hover {
		color: var(--quaternary-color);
		opacity: 0.5;
	}

    .nav-link, .nav-link:visited {
        text-decoration: none;
        font-weight: bold;
        color: var(--quaternary-color);
    }
} 
</style>

<script>
export default {
    name: 'AppNavbar',
}
</script>
