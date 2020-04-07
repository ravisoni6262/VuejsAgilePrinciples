import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Principles } from "@/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    principlesArray: Array<Principles>(),
    isLoading: Boolean
  },
  actions: {
    loadPrinciples({ commit }) {
      commit("SET_LOADING", true);
      axios
        .get("http://localhost:4000/", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(principles => {
          commit("SET_PRINCIPLES", principles);
          commit("SET_LOADING", false);
        });
    }
  },
  mutations: {
    SET_PRINCIPLES(state, principles) {
      state.principlesArray = principles.data;
    },
    SET_LOADING(state, value) {
      state.isLoading = value;
    }
  },
  modules: {}
});
