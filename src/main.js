import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/style.css";
import "./assets/tailwind.css";
import vuetify from "./plugins/vuetify";
import croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";

Vue.config.productionTip = false;
Vue.use(vuetify);
Vue.use(croppa);

new Vue({
	router,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
