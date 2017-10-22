<template>
  <v-content>
    <section>
      <v-parallax src="/static/savoyen.jpg" :height="windowSize.y" jumbotron>
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <div class="layer"></div>
          <h4 class="white--text pagecaption">Sammler • Sammlungen • Sammlungskulturen</h4>
          <h4 class="white--text pagecaption">in Wien und Mitteleuropa</h4>
          <v-btn icon color="white">
            <v-icon>expand_more</v-icon>
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Mission Statement</h2>
            <span class="subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="static/savoyen2.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">Wissenschaftlicher Beirat</h4>
          <v-btn icon color="white">
            <v-icon>expand_more</v-icon>
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>    <section>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex xs12 sm4 class="my-3">
              <div class="text-xs-center">
                <span class="subheading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
              </div>
            </v-flex>
          </v-layout>
        </section>
  </v-content>
</template>

<script>

export default {
  data: () => ({
    windowSize: {
      x: window.innerWidth,
      y: window.innerHeight,
    },
  }),

  mounted() {
    this.onResize();
  },

  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layer {
      background-color: rgba(0, 50, 99, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
  }
</style>
