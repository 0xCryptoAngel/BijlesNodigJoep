<template>
  <div>
    <div>
      <main>
        <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="sm:px-0">
            <main class="relative z-0 flex-1 pb-8 overflow-y-auto">
              <!-- Page header -->
              <div class="bg-white shadow">
                <div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                  <div
                    class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-cool-gray-200"
                  >
                    <div class="flex-1 min-w-0">
                      <!-- Profile -->
                      <div class="flex items-center">
                        <img
                          class="hidden rounded-full h-15 w-15 sm:block"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                          alt=""
                        />
                        <div>
                          <div class="flex items-center">
                            <img
                              class="rounded-full h-15 w-15 sm:hidden"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                              alt=""
                            />
                            <h1
                              class="ml-3 text-2xl font-bold leading-7 text-cool-gray-900 sm:leading-9 sm:truncate"
                            >
                              Goedemorgen, Ezra Zeebregts
                            </h1>
                          </div>
                          <dl
                            class="flex flex-col mt-6 sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap"
                          >
                            <dt class="sr-only">Company</dt>
                            <dd
                              class="flex items-center text-sm font-medium leading-5 capitalize text-cool-gray-500 sm:mr-6"
                            >
                              <!-- Heroicon name: office-building -->
                              <svg
                                class="flex-shrink-0 mr-1.5 h-5 w-5 text-cool-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              Kaatsheuvel
                            </dd>
                            <dt class="sr-only">Account status</dt>
                            <dd
                              class="flex items-center mt-3 text-sm font-medium leading-5 capitalize text-cool-gray-500 sm:mr-6 sm:mt-0"
                            >
                              <!-- Heroicon name: check-circle -->
                              <svg
                                class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              Geverifieerd account
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                  <h2 class="text-lg font-medium leading-6 text-cool-gray-900">
                    Overzicht
                  </h2>
                  <div class="">
                    <h2
                      class="text-xs font-medium tracking-wide text-gray-500 uppercase"
                    >
                      Laatste zoekopdrachten
                    </h2>
                    <ul
                      class="grid grid-cols-1 gap-4 mt-3 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4"
                    >
                      <li class="relative flex col-span-1 rounded-md shadow-sm">
                        <div
                          class="flex items-center justify-center flex-shrink-0 w-16 text-sm font-medium leading-5 text-white bg-pink-600 rounded-l-md"
                        >
                          GS
                        </div>
                        <div
                          class="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md"
                        >
                          <div
                            class="flex-1 px-4 py-2 text-sm leading-5 truncate"
                          >
                            <a
                              href="#"
                              class="font-medium text-gray-900 transition duration-150 ease-in-out hover:text-gray-600"
                            >
                              Geschiedenis
                            </a>
                            <p class="text-gray-500">3412 GH</p>
                          </div>
                          <div class="flex-shrink-0 pr-2">
                            <button
                              id="pinned-project-options-menu-0"
                              aria-has-popup="true"
                              class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition duration-150 ease-in-out bg-transparent rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
                            >
                              <!-- Heroicon name: dots-vertical -->
                              <svg
                                class="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li class="relative flex col-span-1 rounded-md shadow-sm">
                        <div
                          class="flex items-center justify-center flex-shrink-0 w-16 text-sm font-medium leading-5 text-white bg-yellow-600 rounded-l-md"
                        >
                          WS
                        </div>
                        <div
                          class="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md"
                        >
                          <div
                            class="flex-1 px-4 py-2 text-sm leading-5 truncate"
                          >
                            <a
                              href="#"
                              class="font-medium text-gray-900 transition duration-150 ease-in-out hover:text-gray-600"
                            >
                              Wiskunde
                            </a>
                            <p class="text-gray-500">3412 GH</p>
                          </div>
                          <div class="flex-shrink-0 pr-2">
                            <button
                              id="pinned-project-options-menu-0"
                              aria-has-popup="true"
                              class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition duration-150 ease-in-out bg-transparent rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
                            >
                              <!-- Heroicon name: dots-vertical -->
                              <svg
                                class="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>

                      <!-- More project cards... -->
                    </ul>
                  </div>
                </div>

                <h2
                  class="max-w-6xl px-4 mx-auto mt-8 text-lg font-medium leading-6 text-cool-gray-900 sm:px-6 lg:px-8"
                >
                  Laatste activiteit
                </h2>

                <!-- Activity list (smallest breakopoint only) -->
                <div class="shadow sm:hidden">
                  <ul
                    class="mt-2 overflow-hidden divide-y shadow divide-cool-gray-200 sm:hidden"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-4 bg-white hover:bg-cool-gray-50"
                      >
                        <div class="flex items-center space-x-4">
                          <div class="flex flex-1 space-x-2 truncate">
                            <!-- Heroicon name: cash -->
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-cool-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <div class="text-sm truncate text-cool-gray-500">
                              <p class="truncate">
                                Les gehad van Anouk Sanders
                              </p>
                              <p>
                                <span class="font-medium text-cool-gray-900"
                                  >Geschiedenis</span
                                >
                              </p>
                              <p>11-07-2020</p>
                            </div>
                          </div>
                          <div>
                            <!-- Heroicon name: chevron-right -->
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-cool-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </li>

                    <!-- More items... -->
                  </ul>
                  <nav
                    class="flex items-center justify-between px-4 py-3 bg-white border-t border-cool-gray-200"
                  >
                    <div class="flex justify-between flex-1">
                      <a
                        href="#"
                        class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out bg-white border rounded-md border-cool-gray-300 text-cool-gray-700 hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700"
                      >
                        Vorige
                      </a>
                      <a
                        href="#"
                        class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium leading-5 transition duration-150 ease-in-out bg-white border rounded-md border-cool-gray-300 text-cool-gray-700 hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700"
                      >
                        Volgende
                      </a>
                    </div>
                  </nav>
                </div>

                <!-- Activity table (small breakopoint and up) -->
                <div class="hidden sm:block">
                  <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="flex flex-col mt-2">
                      <div
                        class="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg"
                      >
                        <table class="min-w-full divide-y divide-cool-gray-200">
                          <thead>
                            <tr>
                              <th
                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase bg-cool-gray-50 text-cool-gray-500"
                              >
                                Vorige lessen
                              </th>
                              <th
                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-right uppercase bg-cool-gray-50 text-cool-gray-500"
                              >
                                Les
                              </th>
                              <th
                                class="hidden px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase bg-cool-gray-50 text-cool-gray-500 md:block"
                              >
                                Status
                              </th>
                              <th
                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-right uppercase bg-cool-gray-50 text-cool-gray-500"
                              >
                                Datum
                              </th>
                            </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-cool-gray-200">
                            <tr class="bg-white">
                              <td
                                class="w-full px-6 py-4 text-sm leading-5 whitespace-no-wrap max-w-0 text-cool-gray-900"
                              >
                                <div class="flex">
                                  <a
                                    href="#"
                                    class="inline-flex space-x-2 text-sm leading-5 truncate group"
                                  >
                                    <!-- Heroicon name: cash -->
                                    <svg
                                      class="flex-shrink-0 w-5 h-5 transition duration-150 ease-in-out text-cool-gray-400 group-hover:text-cool-gray-500"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                    <p
                                      class="truncate transition duration-150 ease-in-out text-cool-gray-500 group-hover:text-cool-gray-900"
                                    >
                                      Les gehad van Anouk Sanders
                                    </p>
                                  </a>
                                </div>
                              </td>
                              <td
                                class="px-6 py-4 text-sm leading-5 text-right whitespace-no-wrap text-cool-gray-500"
                              >
                                Geschiedenis
                              </td>
                              <td
                                class="hidden px-6 py-4 text-sm leading-5 whitespace-no-wrap text-cool-gray-500 md:block"
                              >
                                <span
                                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800 capitalize"
                                >
                                  Afgerond
                                </span>
                              </td>
                              <td
                                class="px-6 py-4 text-sm leading-5 text-right whitespace-no-wrap text-cool-gray-500"
                              >
                                11-07-2020
                              </td>
                            </tr>

                            <!-- More rows... -->
                          </tbody>
                        </table>
                        <!-- Pagination -->
                        <nav
                          class="flex items-center justify-between px-4 py-3 bg-white border-t border-cool-gray-200 sm:px-6"
                        >
                          <div class="hidden sm:block">
                            <p class="text-sm leading-5 text-cool-gray-700">
                              Weergeeft
                              <span class="font-medium">1</span>
                              tot
                              <span class="font-medium">10</span>
                              van de
                              <span class="font-medium">20</span>
                              resultaten
                            </p>
                          </div>
                          <div
                            class="flex justify-between flex-1 sm:justify-end"
                          >
                            <a
                              href="#"
                              class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out bg-white border rounded-md border-cool-gray-300 text-cool-gray-700 hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700"
                            >
                              Vorige
                            </a>
                            <a
                              href="#"
                              class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium leading-5 transition duration-150 ease-in-out bg-white border rounded-md border-cool-gray-300 text-cool-gray-700 hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700"
                            >
                              Volgende
                            </a>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default { name: 'App', middleware: 'auth', layout: 'app' }
</script>
