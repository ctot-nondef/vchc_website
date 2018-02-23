<template>
    <v-app light>
      <v-toolbar app fixed class="elevation-0 primary">
          <v-toolbar-title>
            <router-link :to="{ name: 'start' }">
              <div class="logo">
                <h5 style="font-weight: 200; padding: 0px; margin: 0px;letter-spacing: 3px!important; line-height:25px;">VIENNA CENTER FOR</h5>
                <h5 style="font-weight: 800; padding: 0px; margin: 0px;letter-spacing: 2px!important; line-height:25px;">THE HISTORY OF COLLECTING</h5>
              </div>
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <div class="text-xs-center hidden-lg-and-up">
            <v-menu offset-y>
              <v-btn color="accent" class="elevation-5" dark icon slot="activator"><v-icon>list</v-icon></v-btn>
              <v-list v-if="!loading">
                <v-list-tile v-for="item in items" :key="item.tid[0].value" :to="{name: item.field_path[0].value}">
                  <v-list-tile-title>{{ item.name[0].value }}</v-list-tile-title>
                </v-list-tile>
                <div color="white">
                  <v-btn small fab :to="{ name: this.$route.name, params: { lang: 'de' }}" flat >
                    DE
                  </v-btn>
                  <span >|</span>
                  <v-btn small fab :to="{ name: this.$route.name, params: { lang: 'en' }}" flat >
                    EN
                  </v-btn>
                </div>
              </v-list>
            </v-menu>
          </div>
          <v-toolbar-items class="hidden-md-and-down">
            <v-btn color="white" flat v-for="item in items" :key="item.tid[0].value" :to="{name: item.field_path[0].value}">{{ item.name[0].value }}</v-btn>
          </v-toolbar-items>
          <v-btn-toggle color="white" class="hidden-md-and-down">
            <v-btn small fab :to="{ name: this.$route.name, params: { lang: 'de' }}" flat color="white">
              DE
            </v-btn>
            <span style="color:white">|</span>
            <v-btn small fab :to="{ name: this.$route.name, params: { lang: 'en' }}" flat color="white">
              EN
            </v-btn>
          </v-btn-toggle>
      </v-toolbar>
      <main>
        <v-slide-y-transition mode="out-in">
            <router-view name="Content"></router-view>
        </v-slide-y-transition>
      </main>
      <v-footer class="primary"  app v-if="!loading">
          <v-flex xs12>
            <v-layout row wrap  >
              <v-flex v-for="item in footermenu" :key="item.tid[0].value" xs12 md6 class="text-xs-center mt-5 mb-5">
                <v-btn color="white" flat :to="{name: item.field_path[0].value}">{{ item.name[0].value }}</v-btn>
              </v-flex>
              <!-- <v-flex xs12 md4 class="text-xs-center mt-5 mb-5">
                <v-text-field name="input-1" v-model="searchstring" v-on:keyup.enter="searchfunc" label="Suche" dark box ></v-text-field>
              </v-flex> -->
              <v-flex xs12 md6 class="text-xs-center mt-5 mb-5">
                <v-btn color="white" flat href="mailto:vchc@univie.ac.at">KONTAKT</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-footer color="primary"  app v-if="!loading">
        <v-footer  app v-if="!loading">
          <v-flex xs12 >
            <v-layout row wrap>
              <v-flex v-for="(logo, index) in footer[0].imagefull" :key="index" xs12 md4 class="text-xs-center mt-5 mb-5" >
                <img align-center :src="logo.url" style="max-height:200px;max-width:200px;" >
              </v-flex>
            </v-layout>
          </v-flex>
      </v-footer>
    </v-app>
</template>

<script>
  import HELPERS from '../helpers';

  export default {
    /* eslint no-console: ["error", { allow: ["log"] }] */
    mixins: [HELPERS],
    data: () => ({
      toFetch: {
        footer: 'full\\50',
        footermenu: 'menu?vid=footer',
        items: 'menu?vid=menu',
      },
      searchstring: '',
      items: null,
      loading: true,
    }),
    watch: {
      // reload data if language is swapped
      $route(to, from) {
        if (to.params.lang !== from.params.lang) {
          location.reload();
        }
      },
    },
    methods: {
      searchfunc(term) {
        this.$router.push({ name: 'search', params: { searchstring: term.target.value } });
      },
    },
    route: {
      canReuse: false,
    },
  };

</script>

<style lang="stylus">
  @import '../../node_modules/vuetify/src/stylus/settings/_colors.styl'
  $theme := {
    primary: #003263
    accent: #2c76be
    secondary: #2c76be
    info: #B2DFDB
    warning: $red.base
    error: $red.base
    success: $green.base
  }
  @import '../stylus/main'
  .logo {
  	color: white;
  	white-space: nowrap;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none none none!important;
  }
</style>
