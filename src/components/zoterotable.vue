<template>
  <v-content v-if="!loading">
  </v-content>
</template>

<script>
import HELPERS from '../helpers';
import ZOTERO from '../zotero';

export default {
  mixins: [HELPERS, ZOTERO],
  data: () => ({
    LibToFetch: '3808523',
    loading: true,
  }),
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
