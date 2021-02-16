<template>
  <header class="bg-white rounded-lg shadow-lg">
    <nav class="flex flex-row items-center justify-between px-5">
      <div class="flex items-center justify-between w-full h-16 px-0 lg:w-auto">
        <a
          href="/"
          aria-label="Home"
          class="flex items-center h-full pl-5 -ml-5"
        >
          <span class="mr-20 text-2xl font-bold">Bijlesnodig</span>
        </a>
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
            <a
              href="#"
              class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
            >
              Prijzen
            </a>
          </li>
          <li class="flex items-center">
            <a
              href="/hoe-werkt-het"
              class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
            >
              Hoe werkt Bijlesnodig.nl?
            </a>
          </li>
          <li class="flex items-center">
            <a
              href="/over-ons"
              class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
            >
              Over Ons
            </a>
          </li>
          <li class="flex items-center">
            <a
              href="/faq"
              class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
            >
              FAQ
            </a>
          </li>
        </div>
        <div class="flex">
          <li class="flex items-center">
            <a
              href="/login"
              class="flex items-center justify-center flex-shrink-0 h-8 px-4 my-0 ml-0 mr-4 font-medium text-gray-800 transition-colors bg-gray-200 rounded-md hover:bg-gray-300"
              >Login</a
            >
          </li>
          <li class="flex items-center">
            <a
              href="/register"
              class="flex items-center justify-center flex-shrink-0 h-8 px-4 m-0 font-medium transition-colors rounded-md text-gray-50 bg-sky-blue-800 hover:bg-sky-blue-900"
              >Registreren</a
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
import siteSlideMobileMenu from '~/components/UI/mobileMenu'

export default {
  components: { siteSlideMobileMenu },
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
}
</script>

<style></style>
