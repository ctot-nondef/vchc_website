<template>
  <v-content v-if="!loading">
    <section>
      <v-parallax src="static/savoyen2.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">Projects</h4>
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
            <span class="subheading" v-html=""></span>
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
      menu: 'menu',
      mission: 'full\\9',
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
      console.log(this.menu, res);
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
