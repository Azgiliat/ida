import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import * as mutations from './mut';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state,
  mutations,
  actions,
  getters
});

export default store
