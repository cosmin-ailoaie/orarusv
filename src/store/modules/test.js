// import axios from 'axios';

const state = {
  options: [
    {
      id: 0,
      title: "Studenti"
    },
    {
      id: 1,
      title: "Profesori"
    },
    {
      id: 2,
      title: "Sali"
    },
    {
      id: 3,
      title: "Facultati"
    },
    {
      id: 4,
      title: "Despre"
    }
  ],
  selectedOption: ""
};
const getters = {
  getOptions: state => state.options,
  getSelectedOption: state => state.selectedOption
};
const actions = {
  setSelectedOption({ commit }, option) {
    commit("setSelectedOption", state.options[option].title);
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
