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

  </v-content>
</template>

<script>
import HELPERS from '../helpers';

export default {
  mixins: [HELPERS],
  data: () => ({
    toFetch: {
      splash: 'full\\28',
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
