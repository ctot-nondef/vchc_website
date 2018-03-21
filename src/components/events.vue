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
            <v-flex xs12 lg6 xl4  v-for="event in sortedEvents" :key="event.name">
              <v-card class="elevation-5 projectcard white--text"  >
                <v-layout column justify-space-between style="height: 100%!important;">
                  <v-card-media v-if="event.thumbnailUrl" v-bind:src="event.thumbnailUrl.url" style="height: 200px!important;">
                  </v-card-media>
                  <v-card-title primary-title>
                    <h6>{{ event.headline }}</h6>
                    <div><v-icon dark>event</v-icon> {{ event.startDate | moment("dddd, Do MMM YYYY, h:mm a") }} - {{ event.endDate | moment("dddd, Do MMM YYYY, h:mm a") }}</div>
                    <div><v-icon dark>place</v-icon> {{ event.location }}</div>
                  </v-card-title>
                  <v-card-text v-html="event.description"></v-card-text>
                  <v-card-actions class="text-xs-right pb-4">
                    <v-layout row justify-space-around>
                      <v-flex xs10>
                        <v-btn v-for="(download, index) in event.workFeatured" :key="index" dark class="accent" :href="download.url" target="_blank">{{download.description}}</v-btn>
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
      events: 'teaser\\?type=event',
      persons: 'teaser\\?type=person',
    },
    windowSize: {
      x: window.innerWidth,
      y: window.innerHeight - 64,
    },
    menu: null,
    loading: true,
  }),
  filters: {
    sortedEvents: function sort() {
      return this.events.sort((a, b) => {
        console.log(a, b);
        return moment(a.startDate, "X") - moment(b.startDate, "X");
      });
    },
  },
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
