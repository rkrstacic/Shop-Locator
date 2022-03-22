<template>
	<nav class="navbar navbar-expand-sm navbar-light app-navbar">
		<div class="d-flex flex-grow-1">
			<span class="w-100 d-xs-none d-block"><!-- hidden spacer to center brand on mobile --></span>
			<a class="navbar-brand d-none d-inline-block" href="#">
				<router-link class="nav-link menu-item" to="/">
					<img src="" alt="Logo">
				</router-link>
			</a>
			<div class="w-100 text-right">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
					<span class="navbar-toggler-icon"></span>
				</button>
			</div>
		</div>
		<div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
			<ul class="navbar-nav ml-auto align-items-center flex-nowrap">
				<li class="nav-item">
					<router-link class="nav-link m-2 menu-item" to="/">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link m-2 menu-item" to="/pricing">Pricing</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link m-2 menu-item" to="/about">About</router-link>
				</li>
				<li class="nav-item">
					<router-link title="Account" class="nav-link menu-item profile-card" to="/login">
						<img class="acc-pfp" src="@/assets/img/default_pfp.jpg" alt="Default profile picture">
					</router-link>
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

	.profile-card {
		height: 3.7em;
	}

	.acc-pfp {
		max-width: 100%;
		max-height: 100%;
		border-radius: 50%;
	}
}
</style>

<script>
export default {
    name: 'AppNavbar',
}
</script>
