import Vue from 'vue';
import Router from 'vue-router';
import app from '@/components/app';
import start from '@/components/start';
import events from '@/components/events';
import projects from '@/components/projects';
import about from '@/components/about';
import db from '@/components/db';
import people from '@/components/people';
import pub from '@/components/pub';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:lang',
      components: {
        default: app,
      },
      // Children to the root path '/'
      children: [
        {
          path: 'start',
          name: 'start',
          components: {
            Content: start,
          },
        },
        {
          path: 'events',
          name: 'events',
          components: {
            Content: events,
          },
        },
        {
          path: 'projects',
          name: 'projects',
          components: {
            Content: projects,
          },
        },
        {
          path: 'about',
          name: 'about',
          components: {
            Content: about,
          },
        },
        {
          path: 'db',
          name: 'db',
          components: {
            Content: db,
          },
        },
        {
          path: 'people',
          name: 'people',
          components: {
            Content: people,
          },
        },
        {
          path: 'pub',
          name: 'pub',
          components: {
            Content: pub,
          },
        },
      ],
    },
  ],
});
