<template>
  <appNavBar />
</template>

<script>
import appNavBar from '~/components/appNavBar'

export default {
  components: { appNavBar },
  head: {
    title: 'BijlesNodig',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js with TailwindUI example',
      },
    ],
  },
}
</script>
