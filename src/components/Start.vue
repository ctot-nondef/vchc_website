<template>
  <v-content v-if="!loading">
    <section>
      <v-parallax v-bind:src="splash[0].primaryImageOfPage.url" :height="windowSize.y" jumbotron>
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <div class="layer"></div>
          <v-layout v-html="splash[0].mainContentOfPage" column align-center justify-center></v-layout>
          <v-btn icon dark color="accent" v-on:click="goTo('mission')">
            <v-icon>expand_more</v-icon>
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section id="nodemission">
      <v-container grid-list-md text-xs-center class="mt-5 mb-5" >
        <v-layout class="pt-5 pb-5" row wrap align-start justify-center>
        <v-flex xs12 md6 lg5>
          <h2 class="headline" v-html="mission[0].headline"></h2>
          <div justify-center >
            <span class="subheading" style="text-align: left;" v-html="mission[0].mainContentOfPage"></span>
          </div>
        </v-flex>
        <v-flex xs0 md12 lg1 hidden-sm-and-down></v-flex>
        <v-flex lg6 xl4 hidden-sm-and-down>
          <v-layout column align-center >
            <v-flex v-for="(img, index) in mission[0].imagefull" :key="index">
              <a :href="img.alt" target="_blank"><img :src="img.url" style="max-width:450px;" ></a>
            </v-flex>
          </v-layout>
        </v-flex>
        </v-layout>
      </v-container>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">

          </div>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-parallax v-bind:src="board[0].primaryImageOfPage.url" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">{{ board[0].headline }}</h4>
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
            <span class="subheading" v-html="board[0].mainContentOfPage"></span>
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
