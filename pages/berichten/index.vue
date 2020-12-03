<template>
  <div>
    <div>
      <main>
        <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <header>
            <h2 class="text-2xl font-semibold">Request Received</h2>
          </header>
          <ul v-if="hasRequests">
            <message-item
              v-for="req in receivedRequest"
              :key="req.id"
              :email="req.userEmail"
              :message="req.message"
            ></message-item>
          </ul>
          <h3 v-else>You haven't received any request yet</h3>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MessageItem from '~/components/berichten/MessageItem'

export default {
  middleware: 'auth',
  layout: 'app',
  components: { MessageItem },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    receivedRequest() {
      return this.$store.getters.request
    },
    hasRequests() {
      return this.$store.getters.hasRequest
    },
  },
}
</script>
