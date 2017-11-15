<template>
  <v-content v-if="!loading">
    <section class="pb-5">
      <v-parallax  v-bind:src="splash.banner.url" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">{{ splash.headline }}</h4>
        </v-layout>
      </v-parallax>
    </section>
    <section class="pt-5 pb-5">
      <carousel-3d :width="500" :disable3d="true" :height="400" :space="600" :controls-visible="true">
        <slide v-for="(project, index) in projects" :index="index" :key="project.name" >
          <v-card class="elevation-5 projectcard white--text"  >
            <v-layout column justify-space-between style="height: 100%!important;">
              <v-card-media v-if="project.thumbnailUrl" v-bind:src="project.thumbnailUrl.url" style="height: 200px!important;">
              </v-card-media>
              <v-card-title primary-title>
                <h6>{{ project.headline }}</h6>
              </v-card-title>
              <v-card-actions class="text-xs-right pb-4">
                <v-layout row justify-space-between align-end>
                  <v-flex></v-flex>
                  <v-flex>
                    <v-btn dark class="accent" v-on:click="goTo(project.name)">DETAILS</v-btn>
                    <v-btn dark class="accent" v-on:click="goTo(project.name)">CONTACT</v-btn>
                  </v-flex>
                </v-layout>
              </v-card-actions>
            </v-layout>
          </v-card>
        </slide>
      </carousel-3d>
    </section>
    <section class="pt-5 pb-5" v-for="project in projects" :key="project.name" v-bind:id="'p'+project.name">
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
      <v-container grid-list-xl text-xs-center class="mt-5 mb-5">
        <v-layout class="pt-5 pb-5" row wrap align-start>
        <v-flex xs12 md4>
          <div justify-center>
            <span class="subheading" style="text-align: justify;"></span>
          </div>
          <div justify-center>
            <span class="subheading" style="text-align: justify;" v-html="project.description"></span>
          </div>
        </v-flex>
        <v-flex xs0 md1></v-flex>
        <v-flex xs12 md7 lg6 xl4>
          <v-card class="elevation-5 projectcard white--text">
            <v-container fluid grid-list-sm>
              <v-layout row wrap>
                <v-flex xs12 lg7>
                    <v-card-title primary-title style="flex-direction: column; align-items: flex-start;">
                      <div>
                        <h6>{{ project.accountablePerson[0].first_name }} {{ project.accountablePerson[0].last_name }}</h6>
                      </div>
                      <div>Tel: {{ project.accountablePerson[0].telephone }}</div>
                      <a class="white--text" :href="'mailto:'+project.accountablePerson[0].email[0]">Mail: {{ project.accountablePerson[0].email[0] }}</a>
                    </v-card-title>
                </v-flex>
                <v-flex class="pb-4 pt-4 pr-4"xs12 lg4>
                  <v-avatar size="180px" v-if="project.accountablePerson[0].image">
                    <img :src="project.accountablePerson[0].image[0].url" alt="avatar">
                  </v-avatar>
                  <v-avatar size="180px" v-if="!project.accountablePerson[0].image">
                    <v-icon x-large dark >person</v-icon>
                  </v-avatar>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        </v-layout>
      </v-container>
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
    this.batchget(this.toFetch);
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight - 64 };
    },
    goTo(dest) {
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
  border: none;
  overflow: visible!important;
}
</style>
