import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Principles } from "@/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    principlesArray: Array<Principles>()
  },
  actions: {
    loadPrinciples({ commit }) {
      axios
        .get("http://localhost:4000/", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(principles => {
          commit("SET_PRINCIPLES", principles);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mutations: {
    SET_PRINCIPLES(state, principles) {
      state.principlesArray = principles.data;
    }
  },
  modules: {}
});
