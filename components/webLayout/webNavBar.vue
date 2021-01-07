<template>
  <div>
    <div class="relative bg-white">
      <div class="relative z-20 shadow">
        <div
          class="flex items-center justify-between px-4 py-5 mx-auto max-w-7xl sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10"
        >
          <div>
            <a href="#" class="flex">
              <span class="sr-only">Workflow</span>
              <img
                class="w-auto h-8 sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: menu -->
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
          <div
            class="hidden md:flex-1 md:flex md:items-center md:justify-between"
          >
            <nav class="flex space-x-10">
              <div class="relative">
                <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                <button
                  type="button"
                  class="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span>Hoe werkt het?</span>
                  <!--
                Heroicon name: chevron-down

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
              </div>
              <a
                href="#"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Prijzen
              </a>
              <a
                href="#"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                FAQ
              </a>
              <div class="relative">
                <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                <button
                  type="button"
                  class="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span>Meer</span>
                  <!--
                Heroicon name: chevron-down

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
              </div>
            </nav>
            <div class="flex items-center md:ml-12">
              <a
                href="#"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Log in
              </a>
              <a
                href="#"
                class="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
              >
                Registreren
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Solutions menu -->
      <!--
    'Solutions' flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 -translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 -translate-y-1"
  -->
      <div
        v-if="flyOverMenu"
        class="absolute inset-x-0 z-10 hidden transform shadow-lg md:block"
      >
        <div class="bg-white">
          <div
            class="grid px-4 py-6 mx-auto max-w-7xl gap-y-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"
          >
            <a
              href="#"
              class="flex flex-col justify-between p-3 -m-3 rounded-lg hover:bg-gray-50"
            >
              <div class="flex md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <span
                    class="inline-flex items-center justify-center w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12"
                  >
                    <!-- Heroicon name: chart-bar -->
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4"
                >
                  <div>
                    <p class="text-base font-medium text-gray-900">Analytics</p>
                    <p class="mt-1 text-sm text-gray-500">
                      Get a better understanding of where your traffic is coming
                      from.
                    </p>
                  </div>
                  <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </div>
            </a>

            <a
              href="#"
              class="flex flex-col justify-between p-3 -m-3 rounded-lg hover:bg-gray-50"
            >
              <div class="flex md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <span
                    class="inline-flex items-center justify-center w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12"
                  >
                    <!-- Heroicon name: cursor-click -->
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
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4"
                >
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      Engagement
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Speak directly to your customers in a more meaningful way.
                    </p>
                  </div>
                  <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </div>
            </a>

            <a
              href="#"
              class="flex flex-col justify-between p-3 -m-3 rounded-lg hover:bg-gray-50"
            >
              <div class="flex md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <span
                    class="inline-flex items-center justify-center w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12"
                  >
                    <!-- Heroicon name: shield-check -->
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4"
                >
                  <div>
                    <p class="text-base font-medium text-gray-900">Security</p>
                    <p class="mt-1 text-sm text-gray-500">
                      Your customers&#039; data will be safe and secure.
                    </p>
                  </div>
                  <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </div>
            </a>

            <a
              href="#"
              class="flex flex-col justify-between p-3 -m-3 rounded-lg hover:bg-gray-50"
            >
              <div class="flex md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <span
                    class="inline-flex items-center justify-center w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12"
                  >
                    <!-- Heroicon name: view-grid -->
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
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4"
                >
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      Integrations
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Connect with third-party tools that you&#039;re already
                      using.
                    </p>
                  </div>
                  <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="bg-gray-50">
          <div
            class="px-4 py-5 mx-auto space-y-6 max-w-7xl sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8"
          >
            <div class="flow-root">
              <a
                href="#"
                class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              >
                <!-- Heroicon name: play -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="ml-3">Watch Demo</span>
              </a>
            </div>

            <div class="flow-root">
              <a
                href="#"
                class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              >
                <!-- Heroicon name: check-circle -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="ml-3">View All Products</span>
              </a>
            </div>

            <div class="flow-root">
              <a
                href="#"
                class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              >
                <!-- Heroicon name: phone -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span class="ml-3">Contact Sales</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- More menu -->
      <!--
    'More' flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 -translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 -translate-y-1"
  -->
      <div
        v-if="flyOverMenu"
        class="absolute inset-x-0 z-10 hidden transform shadow-lg md:block"
      >
        <div class="absolute inset-0 flex">
          <div class="w-1/2 bg-white"></div>
          <div class="w-1/2 bg-gray-50"></div>
        </div>
        <div class="relative grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
          <nav
            class="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
          >
            <div>
              <h3
                class="text-sm font-medium tracking-wide text-gray-500 uppercase"
              >
                Company
              </h3>
              <ul class="mt-5 space-y-6">
                <li class="flow-root">
                  <a
                    href="#"
                    class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <!-- Heroicon name: information-circle -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span class="ml-4">About</span>
                  </a>
                </li>

                <li class="flow-root">
                  <a
                    href="#"
                    class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <!-- Heroicon name: office-building -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span class="ml-4">Customers</span>
                  </a>
                </li>

                <li class="flow-root">
                  <a
                    href="#"
                    class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <!-- Heroicon name: newspaper -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                    <span class="ml-4">Press</span>
                  </a>
                </li>

                <li class="flow-root">
                  <a
                    href="#"
                    class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <!-- Heroicon name: briefcase -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="ml-4">Careers</span>
                  </a>
                </li>

                <li class="flow-root">
                  <a
                    href="#"
                    class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <!-- Heroicon name: shield-check -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span class="ml-4">Privacy</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3
                class="text-sm font-medium tracking-wide text-gray-500 uppercase"
              >
                Resources
              </h3>
              <ul class="mt-5 space-y-6">
                <li class="flow-root">
                  <a
                    href="#"
                    class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <!-- Heroicon name: user-group -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span class="ml-4">Community</span>
                  </a>
                </li>

                <li class="flow-root">
                  <a
                    href="#"
                    class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <!-- Heroicon name: globe-alt -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <span class="ml-4">Partners</span>
                  </a>
                </li>

                <li class="flow-root">
                  <a
                    href="#"
                    class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <!-- Heroicon name: bookmark-alt -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="ml-4">Guides</span>
                  </a>
                </li>

                <li class="flow-root">
                  <a
                    href="#"
                    class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    <!-- Heroicon name: desktop-computer -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="ml-4">Webinars</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="px-4 py-8 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
            <div>
              <h3
                class="text-sm font-medium tracking-wide text-gray-500 uppercase"
              >
                From the blog
              </h3>
              <ul class="mt-6 space-y-6">
                <li class="flow-root">
                  <a
                    href="#"
                    class="flex p-3 -m-3 rounded-lg hover:bg-gray-100"
                  >
                    <div class="flex-shrink-0 hidden sm:block">
                      <img
                        class="object-cover w-32 h-20 rounded-md"
                        src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80"
                        alt=""
                      />
                    </div>
                    <div class="flex-1 w-0 sm:ml-8">
                      <h4 class="text-base font-medium text-gray-900 truncate">
                        Boost your conversion rate
                      </h4>
                      <p class="mt-1 text-sm text-gray-500">
                        Eget ullamcorper ac ut vulputate fames nec mattis
                        pellentesque elementum. Viverra tempor id mus.
                      </p>
                    </div>
                  </a>
                </li>
                <li class="flow-root">
                  <a
                    href="#"
                    class="flex p-3 -m-3 rounded-lg hover:bg-gray-100"
                  >
                    <div class="flex-shrink-0 hidden sm:block">
                      <img
                        class="object-cover w-32 h-20 rounded-md"
                        src="https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                        alt=""
                      />
                    </div>
                    <div class="flex-1 w-0 sm:ml-8">
                      <h4 class="text-base font-medium text-gray-900 truncate">
                        How to use search engine optimization to drive traffic
                        to your site
                      </h4>
                      <p class="mt-1 text-sm text-gray-500">
                        Eget ullamcorper ac ut vulputate fames nec mattis
                        pellentesque elementum. Viverra tempor id mus.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-6 text-sm font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-500">
                View all posts <span aria-hidden="true">&rarr;</span></a
              >
            </div>
          </div>
        </div>
      </div>

      <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
      <div
        class="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
      >
        <div
          class="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50"
        >
          <div class="px-5 pt-5 pb-6 sm:pb-8">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="w-auto h-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: x -->
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6 sm:mt-8">
              <nav>
                <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <a
                    href="#"
                    class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12"
                    >
                      <!-- Heroicon name: chart-bar -->
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Analytics
                    </div>
                  </a>

                  <a
                    href="#"
                    class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12"
                    >
                      <!-- Heroicon name: cursor-click -->
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
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Engagement
                    </div>
                  </a>

                  <a
                    href="#"
                    class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12"
                    >
                      <!-- Heroicon name: shield-check -->
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Security
                    </div>
                  </a>

                  <a
                    href="#"
                    class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12"
                    >
                      <!-- Heroicon name: view-grid -->
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
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Integrations
                    </div>
                  </a>
                </div>
                <div class="mt-8 text-base">
                  <a
                    href="#"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View all products <span aria-hidden="true">&rarr;</span></a
                  >
                </div>
              </nav>
            </div>
          </div>
          <div class="px-5 py-6">
            <div class="grid grid-cols-2 gap-4">
              <a
                href="#"
                class="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
              >
                Pricing
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
              >
                Docs
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
              >
                Company
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
              >
                Resources
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
              >
                Blog
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
              >
                Contact Sales
              </a>
            </div>
            <div class="mt-6">
              <a
                href="#"
                class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </a>
              <p class="mt-6 text-base font-medium text-center text-gray-500">
                Existing customer?
                <a href="#" class="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- testest -->
    <div class="relative overflow-hidden bg-light-blue-700">
      <div class="max-w-screen-xl mx-auto">
        <div
          class="relative z-10 pb-8 bg-light-blue-700 lg:max-w-2xl lg:w-full"
        >
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
                  class="px-8 py-3 ml-8 font-medium transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md text-light-blue-700 focus:outline-none focus:ring-indigo hover:text-light-blue-600 focus:border-indigo-300 md:py-3 md:text-lg md:px-6"
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
