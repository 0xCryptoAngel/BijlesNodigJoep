<template>
  <div>
    <webNavBar />
    <nuxt />
  </div>
</template>

<script>
import webNavBar from '~/components/webNavBar'

export default {
  components: { webNavBar },
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
