<template>
  <nuxt />
</template>

<script>
// import homeNavBar from '~/components/homeNavBar'

export default {
  components: {},
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
  auth: 'guest',
}
</script>
