<template>
  <div class="relative overflow-hidden bg-light-blue-700">
    <div class="max-w-screen-xl mx-auto">
      <div class="relative z-10 pb-8 bg-light-blue-700 lg:max-w-2xl lg:w-full">
        <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
          <nav
            class="relative flex items-center justify-between sm:h-10 lg:justify-start"
          >
            <div
              class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
            >
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="/" aria-label="Home">
                  <img
                    class="w-auto h-8 sm:h-10"
                    src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                    alt="Logo"
                  />
                </a>
                <div class="flex items-center -mr-2 md:hidden">
                  <button
                    id="main-menu"
                    type="button"
                    class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                    aria-label="Main menu"
                    aria-haspopup="true"
                    @click="isMobileMenuOpen = !isMobileMenuOpen"
                  >
                    <svg
                      class="w-6 h-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4">
              <a
                href="/over-ons"
                class="font-medium text-white transition duration-150 ease-in-out hover:text-gray-800"
                >Over Ons</a
              >
              <a
                href="/hoe-werkt-het"
                class="ml-8 font-medium text-white transition duration-150 ease-in-out hover:text-gray-800"
                >Hoe werkt het?</a
              >
              <a
                href="/prijzen"
                class="ml-8 font-medium text-white transition duration-150 ease-in-out hover:text-gray-800"
                >Prijzen</a
              >
              <a
                href="/login"
                class="px-8 py-3 ml-8 font-medium transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md text-light-blue-700 focus:outline-none focus:shadow-outline-indigo hover:text-light-blue-600 focus:border-indigo-300 md:py-3 md:text-lg md:px-6"
                >Log in</a
              >
            </div>
          </nav>
        </div>

        <!--
        Mobile menu
      -->

        <siteSlideMobileMenu
          :show="isMobileMenuOpen"
          @close="isMobileMenuOpen = false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import siteSlideMobileMenu from '~/components/siteSlideMobileMenu'

export default {
  components: { siteSlideMobileMenu },
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>

<style></style>
