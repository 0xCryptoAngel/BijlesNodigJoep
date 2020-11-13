<template>
  <HomeNavBar />
</template>

<script>
import homeNavBar from '~/components/homeNavBar'
export default {
  name: 'Home',
  components: { homeNavBar },
  layout: 'homepage',
  auth: 'guest',
}
</script>
