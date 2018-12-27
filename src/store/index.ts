import Vue from 'vue';
import Vuex from 'vuex';

import routerPath from './modules/router';
import mock from './modules/mock';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    routerPath,
    mock
  },
});


