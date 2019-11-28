import Vue from "vue";
import Vuex from "vuex";
import StoreEx from "../store/modules/store";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    StoreEx
  }
});
