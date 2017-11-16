<template>
  <v-content v-if="!loading">
    <section>
      <v-parallax v-bind:src="splash.primaryImageOfPage.url" :height="windowSize.y" jumbotron>
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <div class="layer"></div>
          <v-layout v-html="splash.mainContentOfPage" column align-center justify-center></v-layout>
          <v-btn icon dark color="accent" v-on:click="goTo('mission')">
            <v-icon>expand_more</v-icon>
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section id="nodemission">
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline" v-html="mission.headline"></h2>
            <span class="subheading" v-html="mission.mainContentOfPage"></span>
          </div>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-parallax v-bind:src="board.primaryImageOfPage.url" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">{{ board.headline }}</h4>
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
            <span class="subheading" v-html="board.mainContentOfPage"></span>
          </div>
        </v-flex>
      </v-layout>
    </section>
  </v-content>
</template>

<script>
import HELPERS from '../helpers';

export default {
  mixins: [HELPERS],
  data: () => ({
    toFetch: {
      mission: 'full\\9',
      splash: 'full\\10',
      board: 'full\\11',
    },
    windowSize: {
      x: window.innerWidth,
      y: window.innerHeight - 64,
    },
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
