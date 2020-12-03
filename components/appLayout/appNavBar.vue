<template>
  <div class="relative pb-16 bg-light-blue-800">
    <nav class="relative z-10">
      <div class="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div
          class="relative flex items-center justify-between h-16 border-b border-light-blue-900"
        >
          <div class="flex items-center px-2 lg:px-0">
            <div class="flex-shrink-0">
              <img
                class="block w-auto h-8"
                src="https://tailwindui.com/img/logos/v1/workflow-mark-teal-400.svg"
                alt="Workflow"
              />
            </div>
            <div class="hidden lg:block lg:ml-6 lg:space-x-4">
              <div class="flex">
                <NuxtLink
                  to="/dashboard"
                  exact-active-class="bg-black bg-opacity-25"
                  exact
                  class="px-3 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out rounded-md hover:bg-light-blue-700 focus:outline-none focus:bg-light-blue-700"
                  aria-current="page"
                  >Dashboard</NuxtLink
                >

                <NuxtLink
                  to="/tutors"
                  exact-active-class="bg-black bg-opacity-25"
                  exact
                  class="px-3 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out rounded-md hover:bg-light-blue-700 focus:outline-none focus:bg-light-blue-700"
                  >Zoeken</NuxtLink
                >

                <NuxtLink
                  to="/berichten"
                  exact-active-class="bg-black bg-opacity-25"
                  exact
                  class="px-3 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out rounded-md hover:bg-light-blue-700 focus:outline-none focus:bg-light-blue-700"
                  >Berichten</NuxtLink
                >

                <NuxtLink
                  to="/favorieten"
                  exact-active-class="bg-black bg-opacity-25"
                  exact
                  class="px-3 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out rounded-md hover:bg-light-blue-700 focus:outline-none focus:bg-light-blue-700"
                  >Favorieten</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
            <div class="w-full max-w-lg lg:max-w-xs">
              <label for="search" class="sr-only">Zoeken</label>
              <div
                class="relative text-light-blue-100 focus-within:text-gray-400"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
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
                  class="block w-full py-2 pl-10 pr-3 leading-5 transition duration-150 ease-in-out bg-opacity-50 border border-transparent rounded-md bg-light-blue-700 placeholder-light-blue-100 focus:outline-none focus:bg-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm"
                  placeholder="Zoeken op postcode"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div class="flex lg:hidden">
            <!-- Mobile menu button -->
            <button
              class="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md text-light-blue-200 hover:text-white hover:bg-light-blue-800 focus:outline-none focus:bg-light-blue-800 focus:text-white"
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
              <button
                class="flex-shrink-0 p-1 transition duration-150 ease-in-out border-2 border-transparent rounded-full text-light-blue-200 hover:bg-light-blue-800 hover:text-white focus:outline-none focus:text-white focus:bg-light-blue-800"
              >
                <span class="sr-only">View notifications</span>
                <!-- Heroicon name: bell -->
                <svg
                  class="w-6 h-6"
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
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
</template>

<script>
import SlideMobileMenu from '~/components/UI/SlideMobileMenu'
import ProfileDropdown from '~/components/UI/ProfileDropdown'

export default {
  components: { SlideMobileMenu, ProfileDropdown },
  data() {
    return {
      isMobileMenuOpen: false,
      isUserMenuOpen: false,
    }
  },
}
</script>

<style></style>
