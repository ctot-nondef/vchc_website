<template>
  <v-content v-if="!loading">
    <section>
      <v-parallax  v-bind:src="splash.banner.url" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">{{ splash.headline }}</h4>
        </v-layout>
      </v-parallax>
      <v-layout row wrap align-center>
        <v-flex xs12 md7 lg6 xl4>
          <v-card class="elevation-2 projectcard white--text"  v-for="person in persons" :key="person.last_name" v-bind:id="'p'+person.last_name">
            <v-container fluid grid-list-sm>
              <v-layout row wrap>
                <v-flex xs12 lg7>
                    <v-card-title primary-title style="flex-direction: column; align-items: flex-start;">
                      <div>
                        <h6>{{ person.firstName }} {{ person.lastName }}</h6>
                      </div>
                      <div>Tel: {{ person.telephone }}</div>
                      <a class="white--text" :href="'mailto:'+person.email[0]">Mail: {{ person.email[0] }}</a>
                    </v-card-title>
                </v-flex>
                <v-flex xs12 lg4>
                  <v-card-media v-if="person.image[0]" :src="person.image[0].url"  height="200px" contain></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
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
      splash: 'full\\27',
      persons: 'teaser\\?type=person',
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
.projectcard {
  background-color: rgba(0, 50, 99, 0.5);
  border-left: 20px solid rgb(0,50,99)!important;
  height:100%!important;
}
</style>
