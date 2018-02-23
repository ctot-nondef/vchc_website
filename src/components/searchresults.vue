<template>
  <v-text-field name="input-1" v-model="searchstring" v-on:keyup.enter="searchfunc" label="Suche" box ></v-text-field>
</template>

<script>
import HELPERS from '../helpers';

export default {
  mixins: [HELPERS],
  data: () => ({
    searchresults: [],
    searchstring: '',
  }),
  watch: {
  },
  created() {
    if (this.$route.params.searchstring) {
      this.searchstring = this.$route.params.searchstring;
      this.get(`${this.$route.params.lang}/search/${this.$route.params.searchstring}`).then((res) => {
        console.log(res);
      });
    }
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
