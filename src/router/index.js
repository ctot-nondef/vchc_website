import Vue from 'vue';
import Router from 'vue-router';
import Start from '@/components/Start';
import Menu from '@/components/Menu';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      components: {
        Menu,
        Start },
    },
  ],
});
