<template>
  <section
    class="pt-8 pb-24 m-4 bg-gradient-to-br from-cyan-600 to-green-400 rounded-2xl"
  >
    <div class="px-16 mx-auto my-0 max-w-7xl">
      <header class="bg-white rounded-lg shadow-lg">
        <nav class="flex flex-row items-center px-5">
          <div class="w-auto h-16 px-0">
            <a
              href="/"
              aria-label="Home"
              class="flex items-center h-full pl-5 -ml-5"
            >
              <span class="mr-20 text-2xl font-bold">Bijlesnodig</span>
            </a>
          </div>
          <ul
            class="static flex flex-row justify-between flex-grow h-full py-0 text-sm bg-transparant"
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
                  Over ons
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
                  class="flex items-center justify-center flex-shrink-0 h-8 px-4 m-0 font-medium text-gray-100 transition-colors bg-gray-900 rounded-md hover:bg-gray-800"
                  >Registreren</a
                >
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
    <div class="px-16 mx-auto my-0 max-w-7xl">
      <div
        class="flex flex-col items-center max-w-6xl pt-24 mx-auto my-0 text-center"
      >
        <h1
          class="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-50 sm:text-5xl"
        >
          {{ title }}
        </h1>
        <p
          class="mt-3 mb-8 text-lg font-medium text-cyan-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0"
        >
          {{ beschrijving }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'beschrijving'],
}
</script>

<style></style>
