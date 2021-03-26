<template>
  <div class="sticky top-0 z-30">
    <div class="relative pb-16 bg-sky-blue-700">
      <nav class="relative z-20">
        <div class="px-2 mx-auto max-w-8xl sm:px-4 lg:px-8">
          <div
            class="relative flex items-center justify-between h-16 border-b border-sky-blue-900"
          >
            <div class="flex items-center px-2 lg:px-0">
              <div class="flex-shrink-0">
                <h1 class="text-2xl text-white">Bijlesnodig.nl</h1>
              </div>
              <div class="hidden lg:block lg:ml-6 lg:space-x-4">
                <div class="flex">
                  <NuxtLink
                    to="/dashboard"
                    exact-active-class="bg-black bg-opacity-25"
                    exact
                    class="px-3 py-2 mr-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out rounded-md hover:bg-sky-blue-900 focus:outline-none focus:bg-sky-blue-900"
                    aria-current="page"
                    >Dashboard</NuxtLink
                  >

                  <NuxtLink
                    to="/tutors"
                    exact-active-class="bg-black bg-opacity-25"
                    exact
                    class="px-3 py-2 mr-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out rounded-md hover:bg-sky-blue-900 focus:outline-none focus:bg-sky-blue-900"
                    >Search</NuxtLink
                  >

                  <NuxtLink
                    to="/messages"
                    active-class="bg-black bg-opacity-25"
                    class="px-3 py-2 mr-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out rounded-md hover:bg-sky-blue-900 focus:outline-none focus:bg-sky-blue-900"
                    >Messages</NuxtLink
                  >

                  <NuxtLink
                    to="/favorites"
                    active-class="bg-black bg-opacity-25"
                    class="px-3 py-2 mr-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out rounded-md hover:bg-sky-blue-900 focus:outline-none focus:bg-sky-blue-900"
                    >Favorites</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
              <div class="w-full max-w-lg lg:max-w-xs">
                <label for="search" class="sr-only">Zoeken</label>
                <div
                  class="relative text-sky-blue-100 focus-within:text-gray-400"
                >
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-800 pointer-events-none"
                  >
                    <!-- Heroicon name: search -->
                    <svg
                      class="flex-shrink-0 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    class="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-800 transition duration-150 ease-in-out bg-white border border-transparent rounded-md focus:outline-none focus:bg-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm"
                    placeholder="Zoeken op postcode"
                    type="search"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>
            <div class="flex lg:hidden">
              <!-- Mobile menu button -->
              <button
                class="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md text-sky-blue-200 hover:text-white hover:bg-sky-blue-800 focus:outline-none focus:bg-sky-blue-800 focus:text-white"
                aria-expanded="false"
                @click="isMobileMenuOpen = !isMobileMenuOpen"
              >
                <span class="sr-only">Open main menu</span>
                <!-- Icon when menu is closed. -->
                <!--
                  Heroicon name: menu
  
                  Menu open: "hidden", Menu closed: "block"
                -->
                <svg
                  class="flex-shrink-0 block w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <!-- Icon when menu is open. -->
                <!--
                  Heroicon name: x
  
                  Menu open: "block", Menu closed: "hidden"
                -->
                <svg
                  class="flex-shrink-0 hidden w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="hidden lg:block lg:ml-4">
              <div class="flex items-center">
                <!-- Notification dropdown -->
                <notifications-menu></notifications-menu>
                <!-- Profile dropdown -->
                <ProfileDropdown />
              </div>
            </div>
          </div>
        </div>
        <!--
          Mobile menu
        -->
        <SlideMobileMenu
          :show="isMobileMenuOpen"
          @close="isMobileMenuOpen = false"
        />
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NotificationsMenu from '../UI/NotificationsMenu.vue'
import SlideMobileMenu from '~/components/UI/SlideMobileMenu'
import ProfileDropdown from '~/components/UI/ProfileDropdown'

export default {
  components: { SlideMobileMenu, ProfileDropdown, NotificationsMenu },
  data() {
    return {
      isMobileMenuOpen: false,
      isUserMenuOpen: false,
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
}
</script>

<style></style>
