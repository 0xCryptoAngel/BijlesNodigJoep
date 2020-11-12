<template>
  <div class="px-4 py-6 sm:px-0">
    <GridResults />
  </div>
</template>

<script>
import GridResults from '~/components/GridResults'

export default {
  components: { GridResults },
  layout: 'app',
  middleware: 'loggedIn',
}
</script>
