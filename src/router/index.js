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
      path: '/',
      name: 'root',
      redirect: (to) => {
        if (to.params.lang !== '') {
          // default language german req by client, regardless of userLanguage
          // const language = window.navigator.userLanguage || window.navigator.language;
          return '/de/start';
          // return `/${language.split('-')[0]}`;
        }
        return to.fullPath;
      },
    },
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
          props: {
            Content: true,
          },
        },
        {
          path: 'imprint',
          name: 'imprint',
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
          props: {
            Content: true,
          },
        },
        {
          path: 'pub',
          name: 'pub',
          components: {
            Content: pub,
          },
        },
        {
          path: '',
          redirect: '/en/start',
        },
        {
          path: '*',
          redirect: 'start',
        },
      ],
    },
  ],
});
