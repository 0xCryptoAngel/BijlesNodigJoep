<template>
  <HomeNavBar />
</template>

<script>
import homeNavBar from '~/components/homeNavBar'
export default {
  name: 'Home',
  components: { homeNavBar },
  layout: 'default',
  auth: 'guest',
}
</script>
