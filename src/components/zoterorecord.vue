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
    });
  },
  methods: {
    fetchRec() {
      this.loading = true;
      this.getLibrary(this.LibToFetch,
        this.pagination.page,
        this.pagination.rowsPerPage,
        this.pagination.sortBy,
        !this.pagination.descending ? 'asc' : 'desc',
      ).then((res) => {
        this.LibData = res.data;
        this.loading = false;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
