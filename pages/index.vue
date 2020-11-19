<template>
  <HomeNavBar />
</template>

<script>
import homeNavBar from '~/components/webLayout/homeNavBar'
export default {
  name: 'Home',
  components: { homeNavBar },
  layout: 'homepage',
  middleware: 'auth',
  auth: 'guest',
}
</script>
