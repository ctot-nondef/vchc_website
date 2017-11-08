<template>
  <v-content v-if="!loading">
    <section>
      <v-parallax  v-bind:src="splash.banner.url" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">{{ splash.headline }}</h4>
        </v-layout>
      </v-parallax>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <span class="subheading" v-html="splash.mainContentOfPage"></span>
          </div>
        </v-flex>
      </v-layout>
    </section>
    <v-flex xs12>
      <v-container grid-list-xl>
        <v-layout row wrap align-center>
          <v-flex xs12 md4 v-for="project in projects" :key="project.name">
            <v-card class="elevation-0 transparent">
              <v-card-media v-bind:src="project.thumbnailUrl.url" height="200px">
              </v-card-media>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center" height="200px!important">{{ project.headline }}</div>
              </v-card-title>
              <v-card-text class="text-xs-center" v-html="project.description">
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-content>
</template>

<script>
import DRUPAL from '../http';

export default {
  mixins: [DRUPAL],
  data: () => ({
    toFetch: {
      splash: 'full\\22',
      projects: 'teaser\\?type=project',
    },
    windowSize: {
      x: window.innerWidth,
      y: window.innerHeight - 64,
    },
    menu: null,
    loading: true,
  }),
  created() {
    /* eslint no-console: ["error", { allow: ["log"] }] */
    this.batchget(this.toFetch).then((res) => {
      console.log(this.projects, res);
    });
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight - 64 };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
