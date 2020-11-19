<template>
  <div class="relative overflow-hidden bg-light-blue-700">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-light-blue-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

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
        <main
          class="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h2
              class="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl"
            >
              Van Geschiedenis tot Wiskunde, van Duits tot Spaans
              <br class="xl:hidden" />
              <span class="text-yellow-400">BijlesNodig</span>
            </h2>
            <p
              class="mt-3 text-base font-light text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Bij BijlesNodig vind je de juiste personen voor vakken waar jij
              hulp bij nodig hebt. Vind iemand bij jou in de buurt, leg contact
              en maak een afspraak.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-light-blue-900 hover:bg-light-blue-500 focus:outline-none focus:border-light-blue-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
                >
                  Hoe het werkt
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/register"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md text-light-blue-700 hover:text-light-blue-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 md:py-4 md:text-lg md:px-10"
                >
                  Meld je aan
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import siteSlideMobileMenu from '~/components/UI/siteSlideMobileMenu'

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
