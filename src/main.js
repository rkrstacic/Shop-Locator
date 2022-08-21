import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/style.css";
import "./assets/tailwind.css";
import vuetify from "./plugins/vuetify";
import croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
	faPersonRunning,
	faClock,
	faStar,
	faLocationDot,
	faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
	faPersonRunning,
	faClock,
	faStar,
	faStarReg,
	faLocationDot,
	faCaretLeft
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(vuetify);
Vue.use(croppa);

new Vue({
	router,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
