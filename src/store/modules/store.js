// import axios from 'axios';
import router from "../../router/index";
const state = {
  options: [
    {
      id: 0,
      title: "Studenti",
      route: "/"
    },
    {
      id: 1,
      title: "Profesori",
      route: "/profesori"
    },
    {
      id: 2,
      title: "Sali",
      route: "/sali"
    },
    {
      id: 3,
      title: "Facultati",
      route: "/facultati"
    },
    {
      id: 4,
      title: "Despre",
      route: "/despre"
    }
  ],
  selectedOption: "Studenti"
};
const getters = {
  getOptions: state => state.options,
  getSelectedOption: state => state.selectedOption
};
const actions = {
  setSelectedOption({ commit }, option) {
    commit("setSelectedOption", state.options[option].title);
    router.push(state.options[option].route);
  }
};
const mutations = {
  setSelectedOption: (state, option) => (state.selectedOption = option)
};
export default {
  state,
  getters,
  actions,
  mutations
};
