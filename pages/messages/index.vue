<template>
  <div>
    <div>
      <main>
        <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <header>
            <div class="pb-5 border-b border-gray-200 sm:pb-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Berichten
              </h3>
              <div class="mt-3 sm:mt-4">
                <!-- Dropdown menu on small screens -->
                <div class="sm:hidden">
                  <label for="selected-tab" class="sr-only">Select a tab</label>
                  <select
                    id="selected-tab"
                    name="selected-tab"
                    class="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option selected>Ongelezen</option>

                    <option>Gelezen</option>
                  </select>
                </div>
                <!-- Tabs at small breakpoint and up -->
                <div class="hidden sm:block">
                  <nav class="flex -mb-px space-x-8">
                    <!-- Current: "border-light-blue-500 text-light-blue-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                    <a
                      href="#"
                      class="px-1 pb-4 text-sm font-medium border-b-2 text-light-blue-600 border-light-blue-500 whitespace-nowrap"
                      aria-current="page"
                    >
                      Ongelezen
                    </a>

                    <a
                      href="#"
                      class="px-1 pb-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap"
                    >
                      Gelezen
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <div class="mt-10">
            <ul v-if="hasRequests">
              <message-item
                v-for="req in receivedRequest"
                :key="req.id"
                :email="req.userEmail"
                :message="req.message"
              ></message-item>
            </ul>
            <h3 v-else>Je hebt geen ongelezen berichten</h3>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MessageItem from '~/components/berichten/MessageItem'

export default {
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
    loggedInUserImage() {
      return this.loggedInUser.user.profile_image_path
        ? 'http://notawanker.com' + this.loggedInUser.user.profile_image_path
        : 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder-480x480.gif'
    },
    fullName() {
      return this.loggedInUser.user.first_name &&
        this.loggedInUser.user.last_name
        ? this.loggedInUser.user.first_name +
            ' ' +
            this.loggedInUser.user.last_name
        : 'Foutmelding: Geen naam ingevoerd'
    },
  },
}
</script>
