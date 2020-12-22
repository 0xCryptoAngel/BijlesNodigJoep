import Vue from 'vue'
import * as GmapVue from '~/node_modules/gmap-vue'

Vue.use(GmapVue, {
  load: {
    key: 'AIzaSyB9-LenXLdFOU3PT8X4k_jSfL375pSq9Xc',
    libraries: 'places',
  },
})
