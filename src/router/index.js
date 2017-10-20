import Vue from 'vue';
import Router from 'vue-router';
import app from '@/components/app';
import start from '@/components/start';
import events from '@/components/events';

Vue.use(Router);

export default new Router({
  routes: [
  /* Step 1: define our routes */
    {
      /*
      We mount our App component to the root route '/'.
      The App component loads the Layout component which has our named
      router router-views.
      */
      path: '/:lang',
      components: {
        default: app,
      },
      beforeEnter: (to, from, next) => {
        /* eslint no-console: ["error", { allow: ["log"] }] */
        console.log();
        next();
      },
      // Children to the root path '/'
      children: [
        {
          path: 'start',
          components: {
            Content: start,
          },
        },
        {
          path: 'events',
          components: {
            Content: events,
          },
        },
      ],
    },
  ],
});
