<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white">
    <div class="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="sm:flex sm:flex-col sm:align-center">
        <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">
          Tarieven
        </h1>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div
          class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8"
        >
          <button
            type="button"
            class="relative w-1/2 py-2 text-sm font-medium text-gray-700 bg-white border-gray-200 rounded-md shadow-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-light-blue-500 focus:z-10 sm:w-auto sm:px-8"
          >
            Maandelijks
          </button>
          <button
            type="button"
            class="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-light-blue-500 focus:z-10 sm:w-auto sm:px-8"
          >
            Jaarlijks
          </button>
        </div>
      </div>
      <div
        class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4"
      >
        <div
          class="border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm xl:col-start-2"
        >
          <div class="p-6">
            <h2 class="text-lg font-medium leading-6 text-gray-900">Student</h2>
            <p class="mt-4 text-sm text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error
            </p>
            <p class="mt-8">
              <span class="text-4xl font-extrabold text-gray-900">€7</span>
              <span class="text-base font-medium text-gray-500">p.m.</span>
            </p>
            <a
              href="#"
              class="block w-full py-2 mt-8 text-sm font-semibold text-center text-white bg-gray-800 border border-gray-800 rounded-md hover:bg-gray-900"
              >Registreer je hier</a
            >
          </div>
          <div class="px-6 pt-6 pb-8">
            <h3
              class="text-xs font-medium tracking-wide text-gray-900 uppercase"
            >
              Wat is inbegrepen
            </h3>
            <ul class="mt-6 space-y-4">
              <li class="flex space-x-3">
                <!-- Heroicon name: check -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Onbeperkt keer zoeken naar leraren.</span
                >
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: check -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Contact opnemen met leraren.</span
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm"
        >
          <div class="p-6">
            <h2 class="text-lg font-medium leading-6 text-gray-900">Leraar</h2>
            <p class="mt-4 text-sm text-gray-500">
              Sit voluptatem accusantium doloremque laudantium
            </p>
            <p class="mt-8">
              <span class="text-4xl font-extrabold text-gray-900">€13</span>
              <span class="text-base font-medium text-gray-500">p.m.</span>
            </p>
            <a
              href="#"
              class="block w-full py-2 mt-8 text-sm font-semibold text-center text-white bg-gray-800 border border-gray-800 rounded-md hover:bg-gray-900"
              >Registreer je hier</a
            >
          </div>
          <div class="px-6 pt-6 pb-8">
            <h3
              class="text-xs font-medium tracking-wide text-gray-900 uppercase"
            >
              Wat is inbegrepen
            </h3>
            <ul class="mt-6 space-y-4">
              <li class="flex space-x-3">
                <!-- Heroicon name: check -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Je profiel is zichtbaar voor iedereen.
                </span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: check -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Orci neque eget pellentesque.</span
                >
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: check -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Donec mauris sit in eu tincidunt etiam.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Prijzen',
  layout: 'webpage',
  middleware: 'auth',
  auth: 'guest',
}
</script>

<style></style>
