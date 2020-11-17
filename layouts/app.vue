<template>
  <div class="antialiased text-gray-900">
    <div class="min-h-screen bg-gray-100">
      <appNavBar />
      <nuxt />
    </div>
  </div>
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
        content: 'Local Dev Env',
      },
    ],
  },
}
</script>
