<template>
    <v-app light>
      <v-toolbar fixed app :clipped-left="clipped" class="elevation-0">
        <v-btn
          icon
          light
          @click.stop="clipped = !clipped"
        >
          <v-icon>web</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      </v-toolbar>
      <main>
        <v-content>
          <v-container fluid>
            <v-slide-y-transition mode="out-in">
              <v-layout column align-center>
                <router-view name="Content"></router-view>
              </v-layout>

            </v-slide-y-transition>
          </v-container>
        </v-content>
      </main>
      <v-footer :fixed="fixed" app>
        <span>&copy; 2017</span>
      </v-footer>
    </v-app>
</template>

<script>
  export default {
    /* eslint no-console: ["error", { allow: ["log", "error"] }] */
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire',
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
      };
    },
  };

</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
