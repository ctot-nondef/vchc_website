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
    <carousel-3d :width="400" :height="500" :space="600">
      <slide v-for="(project, index) in projects" :index="index" :key="project.name" >
        <v-card class="elevation-0 transparent">
          <v-card-media v-if="project.thumbnailUrl" v-bind:src="project.thumbnailUrl.url" height="200px">
          </v-card-media>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline text-xs-center" height="200px!important">{{ project.headline }}</div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat v-on:click="goTo(project.name)">DETAILS</v-btn>
          </v-card-actions>
        </v-card>
      </slide>
    </carousel-3d>
    <section v-for="project in projects" :key="project.name" v-bind:id="'p'+project.name">
      <v-parallax v-if="project.thumbnailUrl" v-bind:src="project.primaryImageOfPage.url" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">{{ project.headline }}</h4>
        </v-layout>
      </v-parallax>
      <v-parallax v-if="!project.thumbnailUrl" v-bind:src="splash.primaryImageOfPage.url" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">{{ project.headline }}</h4>
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
            <span class="subheading" v-html="project.description"></span>
          </div>
        </v-flex>
      </v-layout>
    </section>
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
    goTo(dest) {
      console.log(dest);
      const el = `#p${dest}`;
      this.$scrollTo(el, 1500);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-3d-slide {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}
</style>
