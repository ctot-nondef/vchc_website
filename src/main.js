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
  VParallax,
  VCard,
  transitions,
  VSpeedDial,
  VAvatar,
  VMenu,
} from 'vuetify';
import Carousel3d from 'vue-carousel-3d';
import VueScrollTo from 'vue-scrollto';
import vueSlider from 'vue-slider-component';
import moment from 'vue-moment';

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
      VParallax,
      VCard,
      transitions,
      VSpeedDial,
      VAvatar,
      VMenu,
    } });

Vue.use(VueAxios, axios);
Vue.use(Carousel3d);
Vue.use(VueScrollTo);
Vue.use(vueSlider);
Vue.use(moment);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app');
