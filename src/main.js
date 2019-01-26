import Vue from "vue";
import App from "./App";
import VueAnalytics from "vue-analytics";
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands/index.es.js";
import regular from "@fortawesome/fontawesome-free-regular";
import solid from "@fortawesome/fontawesome-free-solid";
// import VueFullPage from 'vue-fullpage'
// import 'vue-fullpage/vue-fullpage.css'

//sometimes commenting this solves, other breaks it
// Vue.use(VueFullPage);
Vue.use(VueAnalytics, {
  id: "UA-74378318-3"
  // debug: {
  //   enabled: true
  // }
});

fontawesome.config.familyPrefix;
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App)
});
