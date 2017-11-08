import axios from 'axios';

const HTTP = axios;

const DRUPAL = axios.create({
  baseURL: 'http://wksd8dev.eos.arz.oeaw.ac.at/',
});


export default {
  methods: {
    get(url) {
      return DRUPAL.get(url);
    },
    batchget(entries) {
      /* eslint no-console: ["error", { allow: ["log"] }] */
      const promises = [];
      const a = Object.entries(entries);
      let idx = a.length - 1;
      while (idx > -1) {
        promises[idx] = DRUPAL.get(`${this.$route.params.lang}\\${a[idx][1]}`);
        idx -= 1;
      }
      return HTTP.all(promises).then((res) => {
        console.log(res);
        let idn = a.length - 1;
        while (idn > -1) {
          if (res[idn].data.length === 1) this[a[idn][0]] = res[idn].data[0];
          else this[a[idn][0]] = res[idn].data;
          idn -= 1;
        }
        this.loading = false;
      });
    },
  },
};
