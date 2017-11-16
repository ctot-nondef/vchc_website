<template>
  <v-content v-if="!loading">
    <section class="pb-5">
      <v-parallax  v-bind:src="splash.banner.url" height="380">
        <v-layout column align-center justify-center>
          <div class="layer"></div>
          <h4 class="white--text pagecaption">{{ splash.headline }}</h4>
        </v-layout>
      </v-parallax>
    </section>
    <section class="pt-5 pb-5">
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12>
              <h4 class="pagecaption">Leitung</h4>
              <hr class="separator">
            </v-flex>
            <v-flex xs12 lg6 xl4  v-for="person in employees('Leitung')" :key="person.last_name" v-bind:id="'node'+person.name">
              <v-card class="elevation-5 projectcard white--text">
                <v-container fluid grid-list-sm>
                  <v-layout row wrap>
                    <v-flex xs12 md7>
                        <v-card-title primary-title style="flex-direction: column; align-items: flex-start;">
                          <div>
                            <h6>{{ person.firstName }} {{ person.lastName }}</h6>
                          </div>
                          <div><v-icon dark>phone</v-icon>{{ person.telephone }}</div>
                          <a class="white--text" :href="'mailto:'+person.email[0]"><v-icon dark>mail</v-icon> {{ person.email[0] }}</a>
                          <a class="white--text" :href="person.sameAs[0].url"><v-icon dark>home</v-icon> {{ person.sameAs[0].text }}</a>
                        </v-card-title>
                    </v-flex>
                    <v-flex class="pb-4 pt-4 pr-4" xs12 md4>
                      <v-avatar size="180px" v-if="person.image[0]">
                        <img :src="person.image[0].url" alt="avatar">
                      </v-avatar>
                      <v-avatar size="180px" v-if="!person.image[0]">
                        <v-icon x-large dark >person</v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex xs12>
                        <v-card-text v-html="person.description">
                        </v-card-text>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </section>
    <section class="pt-5 pb-5">
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12>
              <h4 class="pagecaption">MitarbeiterInnen</h4>
              <hr class="separator">
            </v-flex>
            <v-flex xs12 lg6 xl4 v-for="person in employees('Projektmitarbeiter')" :key="person.last_name" v-bind:id="'node'+person.name">
              <v-card class="elevation-5 projectcard white--text">
                <v-container fluid grid-list-sm align-content-space-between>
                  <v-layout row wrap >
                    <v-flex xs12 md7>
                      <v-card-title primary-title style="flex-direction: column; align-items: flex-start;">
                        <div>
                          <h6>{{ person.firstName }} {{ person.lastName }}</h6>
                        </div>
                        <div><v-icon dark>phone</v-icon>{{ person.telephone }}</div>
                        <a class="white--text" :href="'mailto:'+person.email[0]"><v-icon dark>mail</v-icon> {{ person.email[0] }}</a>
                        <a class="white--text" :href="person.sameAs[0].url"><v-icon dark>home</v-icon> {{ person.sameAs[0].text }}</a>
                      </v-card-title>
                    </v-flex>
                    <v-flex class="pb-4 pt-4 pr-4" xs12 md4>
                      <v-avatar size="180px" v-if="person.image[0]">
                        <img :src="person.image[0].url" alt="avatar">
                      </v-avatar>
                      <v-avatar size="180px" v-if="!person.image[0]">
                        <v-icon x-large dark >person</v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex xs12 fill-height>
                    </v-flex>
                  </v-layout>
                  <v-layout column >
                    <v-flex>
                    <v-card-text v-html="person.description"></v-card-text>
                    </v-flex>
                    <v-flex>
                      <h6 class="pl-3">Projects</h6>
                      <v-list class="transparent" dark>
                        <v-list-tile avatar dark v-for="project in fprojects(person.email[0])" v-bind:key="project.name" :to="{name: 'projects', params: { scrollTo: project.name }}">
                          <v-list-tile-content>
                            <v-list-tile-title>{{ project.headline }}</v-list-tile-title>
                          </v-list-tile-content>
                          <v-list-tile-avatar>
                            <img v-bind:src="project.thumbnailUrl.url"/>
                          </v-list-tile-avatar>
                        </v-list-tile>
                      </v-list>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </section>
    <section class="pt-5 pb-5">
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12>
              <h4 class="pagecaption">Leitungsgremium</h4>
              <hr class="separator">
            </v-flex>
            <v-flex xs12 lg6 xl4  v-for="person in employees('Leitung')" :key="person.last_name" v-bind:id="'node'+person.name">
              <v-card class="elevation-5 projectcard white--text">
                <v-container fluid grid-list-sm>
                  <v-layout row wrap>
                    <v-flex xs12 md7>
                      <v-card-title primary-title style="flex-direction: column; align-items: flex-start;">
                        <div>
                          <h6>{{ person.firstName }} {{ person.lastName }}</h6>
                        </div>
                        <div><v-icon dark>phone</v-icon>{{ person.telephone }}</div>
                        <a class="white--text" :href="'mailto:'+person.email[0]"><v-icon dark>mail</v-icon> {{ person.email[0] }}</a>
                        <a class="white--text" :href="person.sameAs[0].url"><v-icon dark>home</v-icon> {{ person.sameAs[0].text }}</a>
                      </v-card-title>
                    </v-flex>
                    <v-flex class="pb-4 pt-4 pr-4" xs12 md4>
                      <v-avatar size="180px" v-if="person.image[0]">
                        <img :src="person.image[0].url" alt="avatar">
                      </v-avatar>
                      <v-avatar size="180px" v-if="!person.image[0]">
                        <v-icon x-large dark >person</v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex xs12>
                        <v-card-text v-html="person.description">
                        </v-card-text>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex xs12 lg6 xl4  v-for="person in employees('Leitungsgremium')" :key="person.last_name" v-bind:id="'node'+person.name">
              <v-card class="elevation-5 projectcard white--text">
                <v-container fluid grid-list-sm>
                  <v-layout row wrap>
                    <v-flex xs12 md7>
                      <v-card-title primary-title style="flex-direction: column; align-items: flex-start;">
                        <div>
                          <h6>{{ person.firstName }} {{ person.lastName }}</h6>
                        </div>
                        <div><v-icon dark>phone</v-icon>{{ person.telephone }}</div>
                        <a class="white--text" :href="'mailto:'+person.email[0]"><v-icon dark>mail</v-icon> {{ person.email[0] }}</a>
                        <a class="white--text" :href="person.sameAs[0].url"><v-icon dark>home</v-icon> {{ person.sameAs[0].text }}</a>
                      </v-card-title>
                    </v-flex>
                    <v-flex class="pb-4 pt-4 pr-4" xs12 md4>
                      <v-avatar size="180px" v-if="person.image[0]">
                        <img :src="person.image[0].url" alt="avatar">
                      </v-avatar>
                      <v-avatar size="180px" v-if="!person.image[0]">
                        <v-icon x-large dark >person</v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex xs12>
                        <v-card-text v-html="person.description">
                        </v-card-text>
                    </v-flex>
                  </v-layout>
                </v-container>
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
      splash: 'full\\27',
      persons: 'teaser\\?type=person',
      projects: 'teaser\\?type=project',
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
    /* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
    employees(type) {
      return this.persons.filter(function a(person) {
        return person.hasPosition === type;
      });
    },
    fprojects(person) {
      return this.projects.filter(function a(project) {
        return project.accountablePerson[0].email[0] === person;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projectcard {
  background-color: rgba(0, 50, 99, 0.5);
  border-left: 20px solid rgb(0,50,99)!important;
}
</style>
