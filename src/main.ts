import Vue from 'vue';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueRouter from 'vue-router';

import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';

import router from './router';
import store from './store';

Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.config.performance = true;

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
