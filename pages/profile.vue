<template>
  <main class="relative -mt-16">
    <div class="max-w-screen-xl px-4 pb-6 mx-auto sm:px-6 lg:pb-16 lg:px-8">
      <div class="overflow-hidden bg-white rounded-lg shadow">
        <div
          class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x"
        >
          <aside class="py-6 lg:col-span-3">
            <nav>
              <a
                href="#"
                class="flex items-center px-3 py-2 text-sm font-medium leading-5 text-teal-700 transition duration-150 ease-in-out border-l-4 border-teal-500 group bg-teal-50 hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:bg-teal-100 focus:text-teal-700"
                aria-current="page"
              >
                <!-- Heroicon name: user-circle -->
                <svg
                  class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-teal-500 transition duration-150 ease-in-out group-hover:text-teal-500 group-focus:text-teal-600"
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
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="truncate"> Profile </span>
              </a>

              <a
                href="#"
                class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900"
              >
                <!-- Heroicon name: cog -->
                <svg
                  class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="truncate"> Account </span>
              </a>

              <a
                href="#"
                class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900"
              >
                <!-- Heroicon name: key -->
                <svg
                  class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
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
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                <span class="truncate"> Wachtwoord </span>
              </a>

              <a
                href="#"
                class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900"
              >
                <!-- Heroicon name: bell -->
                <svg
                  class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
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
                <span class="truncate"> Notificaties </span>
              </a>

              <a
                href="#"
                class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900"
              >
                <!-- Heroicon name: credit-card -->
                <svg
                  class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span class="truncate"> Facturering </span>
              </a>
            </nav>
          </aside>

          <form
            class="divide-y divide-gray-200 lg:col-span-9"
            action="#"
            method="POST"
          >
            <!-- Profile section -->
            <div class="px-4 py-6 space-y-6 sm:p-6 lg:pb-8">
              <div>
                <h2 class="text-lg font-medium leading-6 text-gray-900">
                  Profiel
                </h2>
                <p class="mt-1 text-sm leading-5 text-gray-500">
                  Deze informatie wordt online gedeeld.
                </p>
              </div>

              <div
                class="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6"
              >
                <div class="flex-grow space-y-6">
                  <div class="space-y-1">
                    <label
                      for="username"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Gebruikersnaam
                    </label>
                    <div class="flex rounded-md shadow-sm">
                      <span
                        class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md sm:text-sm"
                      >
                        {{ loggedInUser.user.email }}
                      </span>
                      <input
                        id="username"
                        class="flex-grow block w-full min-w-0 transition duration-150 ease-in-out rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                        value="lisamarie"
                      />
                    </div>
                  </div>

                  <div class="space-y-1">
                    <label
                      for="about"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Over jou
                    </label>
                    <div class="rounded-md shadow-sm">
                      <textarea
                        id="about"
                        rows="3"
                        class="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                      ></textarea>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Een korte beschrijving over jezelf
                    </p>
                  </div>
                </div>

                <div
                  class="flex-grow space-y-1 lg:flex-grow-0 lg:flex-shrink-0"
                >
                  <p
                    class="block text-sm font-medium leading-5 text-gray-700"
                    aria-hidden="true"
                  >
                    Foto
                  </p>
                  <div class="lg:hidden">
                    <div class="flex items-center">
                      <div
                        class="flex-shrink-0 inline-block w-12 h-12 overflow-hidden rounded-full"
                        aria-hidden="true"
                      >
                        <img
                          class="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div class="ml-5 rounded-md shadow-sm">
                        <div
                          class="relative flex items-center justify-center px-3 py-2 transition duration-150 ease-in-out border border-gray-300 rounded-md group focus-within:border-blue-300 focus-within:shadow-outline-blue focus-within:text-gray-900"
                        >
                          <label
                            for="user_photo"
                            class="relative text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out pointer-events-none group-hover:text-gray-500"
                          >
                            <span>Wijzigen</span>
                            <span class="sr-only"> user photo</span>
                          </label>
                          <input
                            id="user_photo"
                            type="file"
                            class="absolute w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="relative hidden overflow-hidden transition duration-150 ease-in-out rounded-full lg:block"
                  >
                    <img
                      class="relative w-40 h-40 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                      alt=""
                    />
                    <label
                      class="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-black bg-opacity-75 opacity-0 hover:opacity-100 focus-within:opacity-100"
                    >
                      <span>Wijzigen</span>
                      <span class="sr-only"> user photo</span>
                      <input
                        type="file"
                        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 sm:col-span-6">
                  <label
                    for="first_name"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Voornaam</label
                  >
                  <input
                    id="first_name"
                    class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-12 sm:col-span-6">
                  <label
                    for="last_name"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Achternaam</label
                  >
                  <input
                    id="last_name"
                    class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
            </div>

            <!-- Privacy section -->
            <div class="pt-6 space-y-4 divide-y divide-gray-200">
              <div class="px-4 space-y-2 sm:px-6">
                <div>
                  <h2 class="text-lg font-medium leading-6 text-gray-900">
                    Privacy
                  </h2>
                  <p class="mt-1 text-sm leading-5 text-gray-500">
                    Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
                  </p>
                </div>
                <ul class="divide-y divide-gray-200">
                  <li class="flex items-center justify-between py-4 space-x-4">
                    <div class="flex flex-col">
                      <p
                        id="privacy-option-label-1"
                        class="text-sm font-medium leading-5 text-gray-900"
                      >
                        Available to hire
                      </p>
                      <p
                        id="privacy-option-description-1"
                        class="text-sm leading-5 text-gray-500"
                      >
                        Nulla amet tempus sit accumsan. Aliquet turpis sed sit
                        lacinia.
                      </p>
                    </div>
                    <!-- On: "bg-teal-500", Off: "bg-gray-200" -->
                    <span
                      role="checkbox"
                      tabindex="0"
                      aria-checked="true"
                      aria-labelledby="privacy-option-label-1"
                      aria-describedby="privacy-option-description-1"
                      class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline"
                    >
                      <!-- On: "translate-x-5", Off: "translate-x-0" -->
                      <span
                        aria-hidden="true"
                        class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow"
                      ></span>
                    </span>
                  </li>
                  <li class="flex items-center justify-between py-4 space-x-4">
                    <div class="flex flex-col">
                      <p
                        id="privacy-option-label-2"
                        class="text-sm font-medium leading-5 text-gray-900"
                      >
                        Make account private
                      </p>
                      <p
                        id="privacy-option-description-2"
                        class="text-sm leading-5 text-gray-500"
                      >
                        Pharetra morbi dui mi mattis tellus sollicitudin cursus
                        pharetra.
                      </p>
                    </div>
                    <!-- On: "bg-teal-500", Off: "bg-gray-200" -->
                    <span
                      role="checkbox"
                      tabindex="0"
                      aria-checked="false"
                      aria-labelledby="privacy-option-label-2"
                      aria-describedby="privacy-option-description-2"
                      class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline"
                    >
                      <!-- On: "translate-x-5", Off: "translate-x-0" -->
                      <span
                        aria-hidden="true"
                        class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow"
                      ></span>
                    </span>
                  </li>
                  <li class="flex items-center justify-between py-4 space-x-4">
                    <div class="flex flex-col">
                      <p
                        id="privacy-option-label-3"
                        class="text-sm font-medium leading-5 text-gray-900"
                      >
                        Allow commenting
                      </p>
                      <p
                        id="privacy-option-description-3"
                        class="text-sm leading-5 text-gray-500"
                      >
                        Integer amet, nunc hendrerit adipiscing nam. Elementum
                        ame
                      </p>
                    </div>
                    <!-- On: "bg-teal-500", Off: "bg-gray-200" -->
                    <span
                      role="checkbox"
                      tabindex="0"
                      aria-checked="true"
                      aria-labelledby="privacy-option-label-3"
                      aria-describedby="privacy-option-description-3"
                      class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline"
                    >
                      <!-- On: "translate-x-5", Off: "translate-x-0" -->
                      <span
                        aria-hidden="true"
                        class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow"
                      ></span>
                    </span>
                  </li>
                  <li class="flex items-center justify-between py-4 space-x-4">
                    <div class="flex flex-col">
                      <p
                        id="privacy-option-label-4"
                        class="text-sm font-medium leading-5 text-gray-900"
                      >
                        Allow mentions
                      </p>
                      <p
                        id="privacy-option-description-4"
                        class="text-sm leading-5 text-gray-500"
                      >
                        Adipiscing est venenatis enim molestie commodo eu gravid
                      </p>
                    </div>
                    <!-- On: "bg-teal-500", Off: "bg-gray-200" -->
                    <span
                      role="checkbox"
                      tabindex="0"
                      aria-checked="true"
                      aria-labelledby="privacy-option-label-4"
                      aria-describedby="privacy-option-description-4"
                      class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline"
                    >
                      <!-- On: "translate-x-5", Off: "translate-x-0" -->
                      <span
                        aria-hidden="true"
                        class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow"
                      ></span>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="flex justify-end px-4 py-4 space-x-5 sm:px-6">
                <div class="inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-light-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                  >
                    Cancel
                  </button>
                </div>
                <div class="inline-flex rounded-md shadow-sm">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-light-blue-700 hover:bg-light-blue-600 focus:outline-none focus:border-light-blue-800 focus:shadow-outline-blue active:bg-light-blue-800"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  layout: 'app',
  computed: { ...mapGetters(['isAuthenticated', 'loggedInUser']) },
}
</script>
