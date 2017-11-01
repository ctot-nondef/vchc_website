<template>
    <v-app light>
      <v-toolbar fixed app class="elevation-0 blue darken-4">
          <v-toolbar-title>
            <router-link :to="{ name: 'start' }">
              <div class="logo">
                <h5 style="font-weight: 200; padding: 0px; margin: 0px;letter-spacing: 3px!important; line-height:25px;">VIENNA CENTER FOR</h5>
                <h5 style="font-weight: 800; padding: 0px; margin: 0px;letter-spacing: 2px!important; line-height:25px;">THE HISTORY OF COLLECTING</h5>
              </div>
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn color="white" flat v-for="item in items" :key="item.tid[0].value" :to="{name: item.field_path[0].value}">{{ item.name[0].value }}</v-btn>
          </v-toolbar-items>
      </v-toolbar>
      <main>
            <v-slide-y-transition mode="out-in">
                <router-view name="Content"></router-view>
            </v-slide-y-transition>
      </main>
      <v-footer :fixed="fixed" app>
        <span>&copy; 2017</span>
      </v-footer>
    </v-app>
</template>

<script>
  import DRUPAL from '../http';

  export default {
    /* eslint no-console: ["error", { allow: ["log"] }] */
    mixins: [DRUPAL],
    data() {
      return {
        fixed: false,
        items: [],
      };
    },
    beforeRouteEnter: (to, from, next) => {
      DRUPAL.methods.get(`${to.params.lang}\\menu`).then((response) => {
        next(vm => vm.setData(response.data));
      });
    },
    methods: {
      setData(menu) {
        this.items = menu;
      },
    },
  };

</script>

<style lang="stylus">
  @import '../stylus/main'
  .logo {
  	color: white;
  	white-space: nowrap;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none none none!important;
  }
</style>
