<template>
  <header class="bg-white rounded-lg shadow-lg">
    <nav class="flex flex-row items-center justify-between px-5">
      <div class="flex items-center justify-between w-full h-16 px-0 lg:w-auto">
        <NuxtLink
          to="/"
          aria-label="Home"
          class="flex items-center h-full pl-5 -ml-5"
        >
          <span class="mr-20 text-2xl font-bold">Bijlesnodig</span>
        </NuxtLink>
        <div class="flex items-center -mr-2 lg:hidden">
          <button
            id="main-menu"
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
            aria-haspopup="true"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
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
      <ul
        class="static flex-row justify-between flex-grow hidden h-full py-0 text-sm lg:flex bg-transparant"
      >
        <div class="flex justify-center flex-grow">
          <li class="flex items-center">
            <div class="relative">
              <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
              <button
                v-on-clickaway="close"
                type="button"
                class="inline-flex items-center text-base font-medium text-gray-600 bg-white rounded-md group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-blue-800"
                aria-expanded="false"
                @click="isVisible = !isVisible"
              >
                <span>Hoe werkt Bijlesnodig.nl?</span>
                <!--
      Heroicon name: solid/chevron-down

      Item active: "text-gray-600", Item inactive: "text-gray-400"
    -->
                <svg
                  class="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0"
              >
                <div
                  v-show="isVisible"
                  class="absolute z-10 w-screen max-w-xs px-2 mt-6 transform -translate-x-1/2 left-1/2 sm:px-0"
                >
                  <div
                    class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                  >
                    <div
                      class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8"
                    >
                      <NuxtLink
                        to="/hoe-werkt-het"
                        class="block p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                      >
                        <p class="text-base font-medium text-gray-900">
                          Bijles nodig?
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Leer hoe bijlesnodig.nl werkt voor jou als student
                        </p>
                      </NuxtLink>

                      <NuxtLink
                        to="/hoe-werkt-het#bijlesgevers"
                        class="block p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                      >
                        <p class="text-base font-medium text-gray-900">
                          Bijles geven?
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Jezelf registreren als bijlesgever gaat snel en
                          gemakkelijk.
                        </p>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </li>
          <li class="flex items-center">
            <NuxtLink
              to="/over-ons"
              class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
            >
              Over ons
            </NuxtLink>
          </li>
          <li class="flex items-center">
            <NuxtLink
              to="/prijzen"
              class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
            >
              Prijzen
            </NuxtLink>
          </li>
          <li class="flex items-center">
            <NuxtLink
              to="/faq"
              class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
            >
              FAQ
            </NuxtLink>
          </li>
        </div>
        <div class="flex">
          <li class="flex items-center">
            <NuxtLink
              to="/login"
              class="flex items-center justify-center flex-shrink-0 h-8 px-4 my-0 ml-0 mr-4 font-medium text-gray-800 transition-colors bg-gray-200 rounded-md hover:bg-gray-300"
              >Login</NuxtLink
            >
          </li>
          <li class="flex items-center">
            <NuxtLink
              to="/register"
              class="flex items-center justify-center flex-shrink-0 h-8 px-4 m-0 font-medium transition-colors rounded-md text-gray-50 bg-sky-blue-800 hover:bg-sky-blue-900"
              >Registreren</NuxtLink
            >
          </li>
        </div>
      </ul>
    </nav>

    <siteSlideMobileMenu
      :show="isMobileMenuOpen"
      @close="isMobileMenuOpen = false"
    />
  </header>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import siteSlideMobileMenu from '~/components/UI/mobileMenu'

export default {
  components: { siteSlideMobileMenu },
  mixins: [clickaway],
  data() {
    return {
      isMobileMenuOpen: false,
      isVisible: false,
    }
  },
  methods: {
    close() {
      this.isVisible = false
    },
  },
}
</script>

<style></style>
