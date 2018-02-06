<template>
  <v-content v-if="!loading">
      <v-data-table
        v-bind:headers="headers"
        v-bind:items="LibData"
        v-bind:pagination.sync="pagination"
        :total-items="totalItems"
        :loading="loading"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.data.title }}</td>
          <td  class="text-xs-right">{{ props.item.data.date }}</td>
          <td  class="text-xs-right">{{ props.item.data.series }}</td>
          <td  class="text-xs-right">{{ props.item.data.creators[0].firstName }}{{ props.item.data.creators[0].lastName }}</td>
        </template>
      </v-data-table>
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
    totalItems: 42,
    search: '',
    pagination: {
      rowsPerPage: 10,
    },
    selected: [],
    headers: [
      { text: 'Title', align: 'left', value: 'title' },
      { text: 'Publication Date', value: 'date' },
      { text: 'In Series', value: 'series', sortable: false },
      { text: 'Author', value: 'creator' },
    ],
  }),
  watch: {
    'pagination.page': 'fetchLib',
    'pagination.rowsPerPage': 'fetchLib',
    'pagination.sortBy': 'fetchLib',
    'pagination.descending': 'fetchLib',
  },
  created() {
    this.fetchLib();
  },
  methods: {
    fetchLib() {
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
