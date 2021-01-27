<template>
  <div>
    <web-page-nav-bar :title="title" />
    <nuxt />
    <web-footer />
  </div>
</template>

<script>
import WebFooter from '~/components/webLayout/webFooter.vue'
import WebPageNavBar from '~/components/webLayout/webPageNavBar.vue'

export default {
  components: { WebFooter, WebPageNavBar },
  data() {
    return {
      title: 'test',
    }
  },
  head: {
    title: 'BijlesNodig',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Local Dev Env',
      },
    ],
  },
}
</script>
