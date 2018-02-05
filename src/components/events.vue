<template>
  <v-content v-if="!loading">
    <section>
      <v-parallax  v-bind:src="splash[0].banner.url" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">{{ splash[0].headline }}</h4>
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
            <span class="subheading" v-html="splash[0].mainContentOfPage"></span>
          </div>
        </v-flex>
      </v-layout>
    </section>
    <section class="pt-5 pb-5">
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12>
              <h4 class="pagecaption">Upcoming</h4>
              <hr class="separator">
            </v-flex>
            <v-flex xs12 lg6 xl4  v-for="event in pastevents" :key="event.name">
              <v-card class="elevation-5 projectcard white--text"  >
                <v-layout column justify-space-between style="height: 100%!important;">
                  <v-card-media v-if="event.thumbnailUrl" v-bind:src="event.thumbnailUrl.url" style="height: 200px!important;">
                  </v-card-media>
                  <v-card-title primary-title>
                    <h6>{{ event.headline }}</h6>
                  </v-card-title>
                  <v-card-actions class="text-xs-right pb-4">
                    <v-layout row justify-space-between align-end>
                      <v-flex></v-flex>
                      <v-flex>
                        <v-btn dark class="accent" v-on:click="goTo(project.name)">DETAILS</v-btn>
                        <v-btn dark class="accent" v-on:click="goTo(project.name)">DOWNLOAD</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-card-actions>
                </v-layout>
              </v-card>
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
      splash: 'full\\31',
      pastevents: `teaser\\?type=event&afterdate=${Math.round(Date.now() / 1000)}`,
      futureevents: `teaser\\?type=event&beforedate=${Math.round(Date.now() / 1000)}`,
      persons: 'teaser\\?type=person',
    },
    windowSize: {
      x: window.innerWidth,
      y: window.innerHeight - 64,
    },
    menu: null,
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

</style>
