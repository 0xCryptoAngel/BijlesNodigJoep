<template>
  <div>
    <webNavBar />
    <nuxt />
    <web-footer />
  </div>
</template>

<script>
import WebFooter from '~/components/webLayout/webFooter.vue'
import webNavBar from '~/components/webLayout/webNavBar'

export default {
  components: { webNavBar, WebFooter },
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
