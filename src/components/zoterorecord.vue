<template>
  <v-content v-if="!loading">
    test
    <div class="">
        {{ ItemData.key }}
    </div>
  </v-content>
</template>

<script>
import HELPERS from '../helpers';
import ZOTERO from '../zotero';

export default {
  mixins: [HELPERS, ZOTERO],
  data: () => ({
    LibToFetch: '2083331',
    loading: true,
    totalItems: 7,
    search: '',
    pagination: {
      rowsPerPage: 10,
    },
    selected: [],
  }),
  props: ['zkey'],
  watch: {
  },
  created() {
    this.getItem(this.LibToFetch, this.zkey).then((res) => {
      this.ItemData = res.data;
      this.loading = false;
    });
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
