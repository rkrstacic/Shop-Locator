import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
	},
	{
		path: "/pricing",
		name: "Pricing",
		component: () => import("../views/Pricing.vue"),
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/Login.vue"),
		meta: {
			onlyNoUser: true,
		},
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("../views/Register.vue"),
		meta: {
			onlyNoUser: true,
		},
	},
	{
		path: "/shoplist",
		name: "ShopList",
		component: () => import("../views/ShopList.vue"),
	},
	{
		path: "/shop/:id",
		name: "Shop",
		component: () => import("../views/Shop.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	console.log(`route: ${from.name} -> ${to.name}`);
	const noUser = store.currentUser === null;

	if (noUser && to.meta.needsUser) {
		next({ name: "Login" });
	} else if (!noUser && to.meta.onlyNoUser) {
		next({ name: "Home" });
	} else {
		next();
	}
});

export default router;
