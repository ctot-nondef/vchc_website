import axios from 'axios';

const CONFIG = {
  limit: 10,
  page: 1,
  sort: 'title',
  direction: 'asc',
};
const ZOTERO = axios.create({
  baseURL: 'https://api.zotero.org/',
});


export default {
  data: () => ({
    LibData: null,
    ItemData: null,
  }),
  methods: {
    getItem() {
    },
    getLibrary(library, p, l, s, d) {
      this.loading = true;
      const limit = l || CONFIG.limit;
      const page = p || CONFIG.page;
      const sort = s || CONFIG.sort;
      const direction = d || CONFIG.direction;
      /* eslint no-console: ["error", { allow: ["log"] }] */
      return ZOTERO.get(`/users/${library}/items/`, {
        params: {
          limit,
          start: limit * (page - 1),
          sort,
          direction,
          format: 'json',
        },
      });
    },
  },
  created() {
    /* eslint no-console: ["error", { allow: ["log"] }] */
    if (this.LibToFetch) {
      this.getLibrary(this.LibToFetch).then((res) => {
        console.log(res.data);
        this.LibData = res.data;
        this.loading = false;
      });
    }
  },
};
