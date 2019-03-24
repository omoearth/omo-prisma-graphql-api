// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import './../node_modules/bulma/css/bulma.css';
import '@/assets/theme.css';

import './../node_modules/bulma-pricingtable/dist/css/bulma-pricingtable.min.css';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  // Add atributes to BODY tag
  head.htmlAttrs = { class: 'has-navbar-fixed-top' }

  Vue.component('Layout', DefaultLayout)
}

