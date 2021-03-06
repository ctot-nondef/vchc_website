import axios from 'axios';

const HTTP = axios;

const DRUPAL = axios.create({
  baseURL: 'https://wks-backend.acdh.oeaw.ac.at/',
  params: {
    _format: 'json',
  },
});

/* eslint no-param-reassign: ["error", { "props": false }] */

export default {
  props: ['scrollTo'],
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
        let idn = a.length - 1;
        while (idn > -1) {
          this[a[idn][0]] = this.fixImgPath(res[idn].data);
          idn -= 1;
        }
        this.loading = false;
      });
    },
    fixImgPath(input) {
      let idx = input.length - 1;
      while (idx > -1) {
        if (input[idx].image) {
          input[idx].image.map((i) => {
            i.url = i.url.replace('apollo.arz', 'acdh');
            return i;
          });
        }
        if (input[idx].imagefull) {
          input[idx].imagefull.map((i) => {
            i.url = i.url.replace('apollo.arz', 'acdh');
            return i;
          });
        }
        if (input[idx].imageteaser) {
          input[idx].imageteaser.map((i) => {
            i.url = i.url.replace('apollo.arz', 'acdh');
            return i;
          });
        }
        idx -= 1;
      }
      return input;
    },

    goTo(dest) {
      const el = `#node${dest}`;
      this.$scrollTo(el, 1500, { offset: -50 });
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight - 64 };
    },
  },
  created() {
    /* eslint no-console: ["error", { allow: ["log"] }] */
    if (this.toFetch) {
      this.batchget(this.toFetch).then(() => {
        if (this.scrollTo) {
          this.goTo(this.scrollTo);
        }
      });
    }
  },
};
