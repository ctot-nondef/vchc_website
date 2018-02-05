<template>
  <v-content v-if="!loading">
      <v-data-table
        v-bind:headers="headers"
        v-bind:items="LibData"
        v-bind:search="search"
        v-bind:pagination.sync="pagination"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.data.title }}</td>
          <td  class="text-xs-right">{{ props.item.data.date }}</td>
          <td  class="text-xs-right">{{ props.item.data.series }}</td>
          <td  class="text-xs-right">{{ props.item.data.creators[0].firstName }}{{ props.item.data.creators[0].lastName }}</td>
        </template>
      </v-data-table>
      <div class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
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
    search: '',
    pagination: {
      rowsPerPage: 10,
    },
    selected: [],
    headers: [
      {
        text: 'Title',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      { text: 'Publication Date', value: 'pubdate' },
      { text: 'In Series', value: 'series' },
      { text: 'Author', value: 'author' },
    ],
  }),
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
