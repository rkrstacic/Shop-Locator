import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/style.css";
import "./assets/tailwind.css";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(vuetify);

new Vue({
	router,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
