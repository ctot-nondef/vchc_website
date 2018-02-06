<template>
  <v-content v-if="!loading">
    <section class="pb-5">
      <v-parallax  v-bind:src="splash[0].banner.url" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">{{ splash[0].headline }}</h4>
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
                  </v-flex>
                </v-layout>
              </v-card-actions>
            </v-layout>
          </v-card>
        </slide>
      </carousel-3d>
    </section>
    <section class="pt-5 pb-5" v-for="project in projects" :key="project.name" v-bind:id="'node'+project.name">
      <v-parallax v-if="project.primaryImageOfPage" v-bind:src="project.primaryImageOfPage.url" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">{{ project.headline }}</h4>
        </v-layout>
      </v-parallax>
      <v-parallax v-if="!project.primaryImageOfPage" v-bind:src="splash.primaryImageOfPage.url" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">{{ project.headline }}</h4>
        </v-layout>
      </v-parallax>
      <v-container grid-list-md text-xs-center class="mt-5 mb-5" >
        <v-layout class="pt-5 pb-5" row wrap align-start justify-center>
        <v-flex xs12 md6 lg5>
          <div justify-center>
            <span class="subheading" style="text-align: left;" v-html="project.description"></span>
          </div>
        </v-flex>
        <v-flex xs0 md12 lg1 hidden-sm-and-down></v-flex>
        <v-flex xs12 md6 lg6 xl4>
          <v-layout column justify-space-between>
            <v-flex v-for="person in project.accountablePerson">
              <v-card class="elevation-5 projectcard white--text">
                <v-container fluid grid-list-sm>
                  <v-layout row wrap>
                    <v-flex xs12 lg7>
                      <v-card-title primary-title style="flex-direction: column; align-items: flex-start;" >
                        <div>
                          <h6>{{ person.first_name }} {{ person.last_name }}</h6>
                        </div>
                        <div v-if="person.telephone" ><v-icon dark>phone</v-icon>{{ person.telephone }}</div>
                        <a class="white--text" :href="'mailto:'+person.email[0]"><v-icon dark>mail</v-icon> {{ person.email[0] }}</a>
                        <v-btn dark class="accent" :to="{name: 'people', params: { scrollTo: person.id }}">DETAILS</v-btn>
                      </v-card-title>
                    </v-flex>
                    <v-flex class="pb-4 pt-4 pr-4"xs12 lg4>
                      <v-avatar size="180px" v-if="person.image">
                        <img :src="person.image[0].url" alt="avatar">
                      </v-avatar>
                      <v-avatar size="180px" v-if="!person.image">
                        <v-icon x-large dark >person</v-icon>
                      </v-avatar>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
import HELPERS from '../helpers';

export default {
  mixins: [HELPERS],
  data: () => ({
    toFetch: {
      splash: 'full\\22',
      projects: 'teaser\\?type=project',
    },
    windowSize: {
      x: window.innerWidth,
      y: window.innerHeight - 64,
    },
    loading: true,
  }),
  mounted() {
    this.onResize();
  },
  methods: {
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
