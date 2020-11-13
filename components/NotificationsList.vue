<template>
  <div
    class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
  >
    <notification-message />
  </div>
</template>

<script>
import NotificationMessage from './NotificationMessage'

export default {
  components: { NotificationMessage },
}
</script>

<style></style>
