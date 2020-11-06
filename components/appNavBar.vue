<template>
  <div>
    <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
    <div class="flex h-screen overflow-hidden bg-gray-100">
      <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
      <div :class="[SidebarOpen ? '' : 'hidden', 'md:hidden']">
        <div class="fixed inset-0 z-40 flex">
          <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
          <transition
            enter-active-class="transition-opacity duration-300 ease-linear"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300 ease-linear"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div class="fixed inset-0">
              <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
          </transition>
          <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
          <transition
            enter-active-class="transition duration-300 ease-in-out transform"
            enter-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition duration-300 ease-in-out transform"
            leave-class="translate-x-0"
            leave-to-class="-translate-x-full"
          >
            <div
              class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-800"
            >
              <div class="absolute top-0 right-0 p-1 -mr-14">
                <button
                  class="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
                  aria-label="Close sidebar"
                  @click="toggleSidebar"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
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
              <div class="flex items-center flex-shrink-0 px-4">
                <img
                  class="w-auto h-8"
                  src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"
                  alt="Workflow"
                />
              </div>
              <div class="flex-1 h-0 mt-5 overflow-y-auto">
                <nav class="px-2 space-y-1">
                  <NuxtLink
                    to="/"
                    class="flex items-center px-2 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-900 rounded-md group focus:outline-none focus:bg-gray-700"
                  >
                    <!-- Heroicon name: home -->
                    <svg
                      class="w-6 h-6 mr-4 text-gray-300 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Dashboard
                  </NuxtLink>

                  <NuxtLink
                    to="/lessen"
                    class="flex items-center px-2 py-2 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    <!-- Heroicon name: users -->
                    <svg
                      class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    Lessen
                  </NuxtLink>

                  <NuxtLink
                    to="/zoeken"
                    class="flex items-center px-2 py-2 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    <!-- Heroicon name: folder -->
                    <svg
                      class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    Zoeken
                  </NuxtLink>

                  <NuxtLink
                    to="/berichten"
                    class="flex items-center px-2 py-2 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    <!-- Heroicon name: calendar -->
                    <svg
                      class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Berichten
                  </NuxtLink>

                  <NuxtLink
                    to="/geschiedenis"
                    class="flex items-center px-2 py-2 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    <!-- Heroicon name: inbox -->
                    <svg
                      class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    Geschiedenis
                  </NuxtLink>
                </nav>
              </div>
            </div>
          </transition>
          <div class="flex-shrink-0 w-14">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>

      <!-- Static sidebar for desktop -->
      <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div class="flex flex-col flex-1 h-0">
            <div class="flex items-center flex-shrink-0 h-16 px-4 bg-gray-900">
              <img
                class="w-auto h-8"
                src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"
                alt="Workflow"
              />
            </div>
            <div class="flex flex-col flex-1 overflow-y-auto">
              <nav class="flex-1 px-2 py-4 space-y-1 bg-gray-800">
                <NuxtLink
                  to="/"
                  class="flex items-center px-2 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-900 rounded-md group focus:outline-none focus:bg-gray-700"
                >
                  <!-- Heroicon name: home -->
                  <svg
                    class="w-6 h-6 mr-3 text-gray-300 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Dashboard
                </NuxtLink>

                <NuxtLink
                  to="/lessen"
                  class="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <!-- Heroicon name: users -->
                  <svg
                    class="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Lessen
                </NuxtLink>

                <NuxtLink
                  to="/zoeken"
                  class="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <!-- Heroicon name: folder -->
                  <svg
                    class="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  Zoeken
                </NuxtLink>

                <NuxtLink
                  to="/berichten"
                  class="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <!-- Heroicon name: calendar -->
                  <svg
                    class="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Berichten
                </NuxtLink>

                <NuxtLink
                  to="/geschiedenis"
                  class="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <!-- Heroicon name: inbox -->
                  <svg
                    class="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  Geschiedenis
                </NuxtLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-1 w-0 overflow-hidden">
        <div class="relative z-10 flex flex-shrink-0 h-16 bg-white shadow">
          <button
            class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
            aria-label="Open sidebar"
            @click="toggleSidebar"
          >
            <svg
              :class="[SidebarOpen ? 'hidden' : 'block', 'w-6 h-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <div class="flex justify-between flex-1 px-4">
            <div class="flex flex-1">
              <form class="flex w-full md:ml-0" action="#" method="GET">
                <label for="search_field" class="sr-only">Search</label>
                <div
                  class="relative w-full text-gray-400 focus-within:text-gray-600"
                >
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="search_field"
                    class="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 rounded-md focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                    placeholder="Zoek op postcode"
                    type="search"
                  />
                </div>
              </form>
            </div>

            <!-- Notification slide-over -->

            <div class="flex items-center ml-4 md:ml-6">
              <div class="relative">
                <div>
                  <button
                    id="notifications"
                    class="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500"
                    aria-label="Notifications"
                    @click="toggleNotifications"
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
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  v-show="NotificationsOpen"
                  class="fixed inset-0 z-50 overflow-hidden"
                >
                  <div class="absolute inset-0 overflow-hidden">
                    <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
                    <transition
                      enter-active-class="duration-1000 ease-in-out"
                      enter-class="opacity-0"
                      enter-to-class="opacity-100"
                      leave-active-class="duration-1000 ease-in-out"
                      leave-class="opacity-100"
                      leave-to-class="opacity-0"
                    >
                      <div
                        class="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                      ></div>
                    </transition>
                    <section
                      class="absolute inset-y-0 right-0 flex max-w-full pl-10"
                    >
                      <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
                      <transition
                        enter-active-class="transition duration-500 ease-in-out transform sm:duration-700"
                        enter-class="translate-x-full"
                        enter-to-class="translate-x-0"
                        leave-active-class="transition duration-500 ease-in-out transform sm:duration-700"
                        leave-class="translate-x-0"
                        leave-to-class="translate-x-full"
                      >
                        <div class="relative w-screen max-w-md">
                          <!--
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        -->
                          <transition
                            enter-active-class="duration-500 ease-in-out"
                            enter-class="opacity-0"
                            enter-to-class="opacity-100"
                            leave-active-class="duration-500 ease-in-out"
                            leave-class="opacity-100"
                            leave-to-class="opacity-0"
                          >
                            <div
                              class="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4"
                            >
                              <button
                                aria-label="Close panel"
                                class="text-gray-300 transition duration-150 ease-in-out hover:text-white"
                                @click="closeNotifications"
                              >
                                <!-- Heroicon name: x -->
                                <svg
                                  class="w-6 h-6"
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
                          </transition>
                          <div
                            class="flex flex-col h-full py-6 space-y-6 overflow-y-scroll bg-white shadow-xl"
                          >
                            <header class="px-4 sm:px-6">
                              <h2
                                class="text-lg font-medium leading-7 text-gray-900"
                              >
                                Notificaties
                              </h2>
                            </header>
                            <div class="relative flex-1 px-4 sm:px-6">
                              <!-- Replace with your content -->
                              <div class="absolute inset-0 px-4 sm:px-6">
                                <div
                                  class="h-full border-2 border-gray-200 border-dashed"
                                ></div>
                              </div>
                              <!-- /End replace -->
                            </div>
                          </div>
                        </div>
                      </transition>
                    </section>
                  </div>
                </div>
              </div>
              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <div>
                  <button
                    id="user-menu"
                    v-on-clickaway="closeMenu"
                    class="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:shadow-outline"
                    aria-label="User menu"
                    aria-haspopup="true"
                    @click="toggle"
                  >
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <div
                    v-show="isOpen"
                    class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
                  >
                    <div
                      class="py-1 bg-white rounded-md shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <div class="px-4 py-3">
                        <p class="text-sm leading-5">Signed in as</p>
                        <p
                          class="text-sm font-medium leading-5 text-gray-900 truncate"
                        >
                          tom@example.com
                        </p>
                      </div>
                      <div class="border-t border-gray-300"></div>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                        role="menuitem"
                        >Your Profile</a
                      >

                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                        role="menuitem"
                        >Settings</a
                      >

                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                        role="menuitem"
                        >Sign out</a
                      >
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>

        <main
          class="relative flex-1 overflow-y-auto focus:outline-none"
          tabindex="0"
        >
          <div class="pt-2 pb-6 md:py-6">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <h1 class="text-2xl font-semibold text-gray-900">Pagina Titel</h1>
            </div>
            <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <nuxt />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      SidebarOpen: false,
      NotificationsOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    closeMenu() {
      this.isOpen = false
    },
    toggleSidebar() {
      this.SidebarOpen = !this.SidebarOpen
    },
    toggleNotifications() {
      this.NotificationsOpen = !this.NotificationsOpen
    },
    closeNotifications() {
      this.NotificationsOpen = false
    },
  },
}
</script>

<style></style>
