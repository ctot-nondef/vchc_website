import axios from 'axios';

export const DRUPAL = axios.create({
  baseURL: 'http://wksd8dev.eos.arz.oeaw.ac.at/',
});

export const HTTP = axios;

export const ZOTERO = 'zotero';
