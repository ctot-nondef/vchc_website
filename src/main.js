// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions } from 'vuetify';

import router from './router';

Vue.use(
  Vuetify, {
    components: {
      VApp,
      VNavigationDrawer,
      VFooter,
      VList,
      VBtn,
      VIcon,
      VGrid,
      VToolbar,
      transitions } });

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
Vue.config.customAPI = {
  api: 'http://wksd8dev.eos.arz.oeaw.ac.at/',
};

/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app');
