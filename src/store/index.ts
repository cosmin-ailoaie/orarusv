import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
// import modules from './modules';

// import { STORE_AUTH_MODULE } from '@/constants';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  plugins: [createPersistedState({})],
});
