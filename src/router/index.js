import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

// Define all routes
const routes = [
	{
		path: "/",
		alias: "/home",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
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
		path: "/account",
		name: "Account",
		component: () => import("../views/Account.vue"),
		meta: {
			needsUser: true,
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

// Define a router
const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

// Define all timeout rules for auth waiting
const paramsObjs = [
	{ timeout: 10, attempts: 3 },
	{ timeout: 100, attempts: 5 },
	{ timeout: 1000, attempts: 10 },
	{ timeout: 60000, attempts: 1 },
];

// Function that handles special route rules
function getRouterRuleObj({ to, _from, next }) {
	const noUser = store.currentUser === null;

	// Not logged in, needs auth
	if (noUser && to.meta.needsUser === true) {
		return { name: "Login" };
	}

	// Logged in, must not have auth
	if (!noUser && to.meta.onlyNoUser === true) {
		return { name: "Home" };
	}

	// Default
	return {};
}

// Before loading each route, check for special route rules using predefined timeouts
router.beforeEach((to, _from, next) => {
	function checkUser({ timeout = 0, attempts = 1, i = 0 } = {}) {
		setTimeout(function () {
			// Router rule check
			if (store.authFired) {
				return next(getRouterRuleObj({ to, _from, next }));
			}

			// New attempt with same timeout
			if (++i < attempts && !store.authFired) {
				return checkUser({ timeout, attempts, i });
			}

			// New attempt with slower timeout
			const paramsObj = paramsObjs.shift();
			checkUser(paramsObj);
		}, timeout);
	}

	checkUser();
});

export default router;
