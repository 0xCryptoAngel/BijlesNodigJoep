<template>
  <div>
    <breadcrumbs-app></breadcrumbs-app>

    <main class="py-10">
      <!-- Page header -->
      <div
        class="max-w-3xl px-4 mx-auto sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8"
      >
        <div class="flex items-center space-x-5">
          <div class="flex-shrink-0">
            <div class="relative">
              <img
                class="w-16 h-16 rounded-full"
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                alt=""
              />
              <span
                class="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></span>
            </div>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">{ fullName }</h1>
            <p class="text-sm font-medium text-gray-500">
              Laatst online gezien op
              <span class="text-gray-900"
                ><time datetime="2020-08-25">{ lastSeen }</time></span
              >
            </p>
          </div>
        </div>
        <div
          class="flex flex-col-reverse mt-6 space-y-4 space-y-reverse justify-stretch sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"
        >
          <!-- <button
            type="button"
            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          >
            Disqualify
          </button> -->
          <button
            type="button"
            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-light-blue-500"
          >
            Stuur een bericht
          </button>
          <button
            type="button"
            class="inline-flex items-center p-2 text-white border border-red-700 rounded-full shadow-sm bg-transparant hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
          >
            <!-- Heroicon name: heart -->
            <svg
              class="w-6 h-6 text-red-700"
              fill="white"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        class="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3"
      >
        <div class="space-y-6 lg:col-start-1 lg:col-span-2">
          <!-- Description list-->
          <section aria-labelledby="applicant-information-title">
            <div class="bg-white shadow sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6">
                <h2
                  id="applicant-information-title"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Profiel van { fullName }
                </h2>
                <p class="max-w-2xl mt-1 text-sm text-gray-500">
                  Persoonlijke details en beschikbaarheid
                </p>
              </div>
              <div class="px-4 py-5 border-t border-gray-200 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Geeft les in
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">{Subject}</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Leeftijd</dt>
                    <dd class="mt-1 text-sm text-gray-900">{age}</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Tarief</dt>
                    <dd class="mt-1 text-sm text-gray-900">{hourlyRate}</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Rating</dt>
                    <dd class="mt-1 text-sm text-gray-900">{rating}</dd>
                  </div>
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Over mij</dt>
                    <dd class="mt-1 text-sm text-gray-900">{Description}</dd>
                  </div>
                </dl>
              </div>
              <div>
                <a
                  href="#"
                  class="block px-4 py-4 text-sm font-medium text-center text-gray-500 bg-gray-50 hover:text-gray-700 sm:rounded-b-lg"
                  >Lees volledig profiel</a
                >
              </div>
            </div>
          </section>

          <!-- Comments-->
          <section aria-labelledby="notes-title">
            <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div class="px-4 py-5 sm:px-6">
                  <h2
                    id="notes-title"
                    class="text-lg font-medium text-gray-900"
                  >
                    Notes
                  </h2>
                </div>
                <div class="px-4 py-6 sm:px-6">
                  <ul class="space-y-8">
                    <li>
                      <div class="flex space-x-3">
                        <div class="flex-shrink-0">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div>
                          <div class="text-sm">
                            <a href="#" class="font-medium text-gray-900"
                              >Leslie Alexander</a
                            >
                          </div>
                          <div class="mt-1 text-sm text-gray-700">
                            <p>
                              Ducimus quas delectus ad maxime totam doloribus
                              reiciendis ex. Tempore dolorem maiores. Similique
                              voluptatibus tempore non ut.
                            </p>
                          </div>
                          <div class="mt-2 space-x-2 text-sm">
                            <span class="font-medium text-gray-500"
                              >4d ago</span
                            >
                            <span class="font-medium text-gray-500"
                              >&middot;</span
                            >
                            <button
                              type="button"
                              class="font-medium text-gray-900"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="flex space-x-3">
                        <div class="flex-shrink-0">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div>
                          <div class="text-sm">
                            <a href="#" class="font-medium text-gray-900"
                              >Michael Foster</a
                            >
                          </div>
                          <div class="mt-1 text-sm text-gray-700">
                            <p>
                              Et ut autem. Voluptatem eum dolores sint
                              necessitatibus quos. Quis eum qui dolorem
                              accusantium voluptas voluptatem ipsum. Quo facere
                              iusto quia accusamus veniam id explicabo et aut.
                            </p>
                          </div>
                          <div class="mt-2 space-x-2 text-sm">
                            <span class="font-medium text-gray-500"
                              >4d ago</span
                            >
                            <span class="font-medium text-gray-500"
                              >&middot;</span
                            >
                            <button
                              type="button"
                              class="font-medium text-gray-900"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="flex space-x-3">
                        <div class="flex-shrink-0">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div>
                          <div class="text-sm">
                            <a href="#" class="font-medium text-gray-900"
                              >Dries Vincent</a
                            >
                          </div>
                          <div class="mt-1 text-sm text-gray-700">
                            <p>
                              Expedita consequatur sit ea voluptas quo ipsam
                              recusandae. Ab sint et voluptatem repudiandae
                              voluptatem et eveniet. Nihil quas consequatur
                              autem. Perferendis rerum et.
                            </p>
                          </div>
                          <div class="mt-2 space-x-2 text-sm">
                            <span class="font-medium text-gray-500"
                              >4d ago</span
                            >
                            <span class="font-medium text-gray-500"
                              >&middot;</span
                            >
                            <button
                              type="button"
                              class="font-medium text-gray-900"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="px-4 py-6 bg-gray-50 sm:px-6">
                <div class="flex space-x-3">
                  <div class="flex-shrink-0">
                    <img
                      class="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <form action="#">
                      <div>
                        <label for="comment" class="sr-only">About</label>
                        <textarea
                          id="comment"
                          name="comment"
                          rows="3"
                          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                          placeholder="Add a note"
                        ></textarea>
                      </div>
                      <div class="flex items-center justify-between mt-3">
                        <a
                          href="#"
                          class="inline-flex items-start space-x-2 text-sm text-gray-500 group hover:text-gray-900"
                        >
                          <!-- Heroicon name: question-mark-circle -->
                          <svg
                            class="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span> Some HTML is okay. </span>
                        </a>
                        <button
                          type="submit"
                          class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                        >
                          Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section
          aria-labelledby="timeline-title"
          class="lg:col-start-3 lg:col-span-1"
        >
          <div class="px-4 py-5 bg-white shadow sm:rounded-lg sm:px-6">
            <h2 id="timeline-title" class="text-lg font-medium text-gray-900">
              Timeline
            </h2>

            <!-- Activity Feed -->
            <div class="flow-root mt-6">
              <ul class="-mb-8">
                <li>
                  <div class="relative pb-8">
                    <span
                      class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    ></span>
                    <div class="relative flex space-x-3">
                      <div>
                        <span
                          class="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full ring-8 ring-white"
                        >
                          <!-- Heroicon name: user -->
                          <svg
                            class="w-5 h-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                      <div
                        class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                      >
                        <div>
                          <p class="text-sm text-gray-500">
                            Laatst online gezien op
                            <span class="font-medium text-gray-900">
                              <time datetime="2020-09-20">Sep 20</time></span
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="relative pb-8">
                    <span
                      class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    ></span>
                    <div class="relative flex space-x-3">
                      <div>
                        <span
                          class="flex items-center justify-center w-8 h-8 rounded-full bg-light-blue-500 ring-8 ring-white"
                        >
                          <!-- Heroicon name: thumb-up -->
                          <svg
                            class="w-5 h-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div
                        class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                      >
                        <div>
                          <p class="text-sm text-gray-500">
                            Advanced to phone screening by
                            <a href="#" class="font-medium text-gray-900"
                              >Bethany Blake</a
                            >
                          </p>
                        </div>
                        <div
                          class="text-sm text-right text-gray-500 whitespace-nowrap"
                        >
                          <time datetime="2020-09-22">Sep 22</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="relative pb-8">
                    <span
                      class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    ></span>
                    <div class="relative flex space-x-3">
                      <div>
                        <span
                          class="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full ring-8 ring-white"
                        >
                          <!-- Heroicon name: check -->
                          <svg
                            class="w-5 h-5 text-white"
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
                        </span>
                      </div>
                      <div
                        class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                      >
                        <div>
                          <p class="text-sm text-gray-500">
                            Completed phone screening with
                            <a href="#" class="font-medium text-gray-900"
                              >Martha Gardner</a
                            >
                          </p>
                        </div>
                        <div
                          class="text-sm text-right text-gray-500 whitespace-nowrap"
                        >
                          <time datetime="2020-09-28">Sep 28</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="relative pb-8">
                    <span
                      class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    ></span>
                    <div class="relative flex space-x-3">
                      <div>
                        <span
                          class="flex items-center justify-center w-8 h-8 rounded-full bg-light-blue-500 ring-8 ring-white"
                        >
                          <!-- Heroicon name: thumb-up -->
                          <svg
                            class="w-5 h-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div
                        class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                      >
                        <div>
                          <p class="text-sm text-gray-500">
                            Advanced to interview by
                            <a href="#" class="font-medium text-gray-900"
                              >Bethany Blake</a
                            >
                          </p>
                        </div>
                        <div
                          class="text-sm text-right text-gray-500 whitespace-nowrap"
                        >
                          <time datetime="2020-09-30">Sep 30</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="relative pb-8">
                    <div class="relative flex space-x-3">
                      <div>
                        <span
                          class="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full ring-8 ring-white"
                        >
                          <!-- Heroicon name: check -->
                          <svg
                            class="w-5 h-5 text-white"
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
                        </span>
                      </div>
                      <div
                        class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                      >
                        <div>
                          <p class="text-sm text-gray-500">
                            Completed interview with
                            <a href="#" class="font-medium text-gray-900"
                              >Katherine Snyder</a
                            >
                          </p>
                        </div>
                        <div
                          class="text-sm text-right text-gray-500 whitespace-nowrap"
                        >
                          <time datetime="2020-10-04">Oct 4</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="flex flex-col mt-6 justify-stretch">
              <button
                type="button"
                class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
              >
                Advance to offer
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- <div class="w-full px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
      <div class="flex flex-wrap items-stretch self-start">
        <div class="relative w-full ml-0 mr-0 md:w-3/5">
          <div class="pt-10 pb-8">
            <h2 class="text-lg font-semibold leading-6 text-gray-900">
              Het profiel van {{ fullName }}
            </h2>
            <div
              class="text-xs font-semibold leading-snug tracking-wide text-gray-500 uppercase"
            >
              {{ subject }} &bull; {{ age }} jaar
            </div>
          </div>
          <div class="w-full py-6 md:w-2/3">
            <img
              class="flex-shrink-0 object-cover w-full h-64 mx-auto bg-gray-200"
              :src="tutor.profileImage"
              :alt="tutor.imageAlt"
            />
          </div>
          <div class="mt-2 mb-20 md:mb-0">
            <p class="text-sm leading-5 text-gray-600">{{ description }}</p>
            <div class="">
              <h2 class="mt-3 font-semibold">Vak</h2>
              <p class="text-sm font-normal leading-6 text-gray-500">
                Wiskunde, Natuurkunde, Economie
              </p>
            </div>
            <h2 class="mt-2 font-semibold">Beschikbaarheid</h2>
          </div>
        </div>
        <div
          class="fixed bottom-0 left-0 right-0 z-10 w-full mr-0 md:mt-10 md:ml-12 md:w-1/3 md:relative"
        >
          <div
            class="bg-white border min-h-80 md:border-gray-200 md:rounded-lg md:shadow-lg"
          >
            <div class="px-6 md:p-6">
              <div class="w-full h-full max-w-3xl mx-auto">
                <div class="py-3">
                  <div class="flex flex-row justify-between md:flex-col">
                    <div class="flex flex-row items-baseline justify-between">
                      <div
                        class="flex-col items-start justify-start flex-shrink mb-0 mr-5 md:flex md:flex-row md:w-full"
                      >
                        <div
                          class="flex flex-col items-start self-start w-full leading-normal md:mb-5"
                        >
                          <span
                            class="text-lg font-semibold leading-6 text-gray-800"
                          >
                            €{{ rate }}
                            <span
                              class="text-sm font-medium leading-4 text-gray-700"
                              >/ uur</span
                            >
                          </span>
                        </div>
                        <div class="mt-2 mb-0 md:mt-0 md:mb-5">
                          <span class="flex text-xs align-baseline">
                            <span
                              class="inline-flex self-center text-xs text-center"
                            >
                              <svg
                                class="w-4 h-4"
                                fill="red"
                                stroke="red"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1"
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                ></path>
                              </svg>
                            </span>
                            <button
                              class="relative flex flex-row w-full h-full p-0 m-0 align-baseline border-none outline-none cursor-pointer"
                            >
                              <span class="pl-1 font-semibold text-gray-800">
                                {{ rating }}
                              </span>
                              <span class="pl-1 font-light text-gray-500"
                                >(20)</span
                              >
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="flex-shrink-2 md:mt-2">
                      <button
                        class="inline-block w-auto px-6 py-4 m-0 font-semibold leading-4 text-center text-white border-none rounded-md outline-none cursor-pointer md:w-full bg-light-blue-700"
                      >
                        Stuur een bericht
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BreadcrumbsApp from '~/components/UI/BreadcrumbsApp.vue'

export default {
  name: 'TutorPage',
  components: { BreadcrumbsApp },
  /* eslint-disable vue/require-prop-types */
  layout: 'app',
  props: ['profileImage'],
  middleware: 'auth',
  data() {
    return {
      selectedTutor: [],
      id: null,
      tutor: {
        hourlyRate: 10,
        rating: `4,78`,
        description:
          'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebeks fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just',
        subject: 'Wiskunde',
        age: 19,
        profileImage:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80',
        imageAlt: 'Profielfoto Bijlesnodig',
      },
    }
  },
  computed: {
    ...mapState(['tutors']),
    fullName() {
      return this.selectedTutor.attributes.name
    },
    rate() {
      return this.tutor.hourlyRate
    },
    description() {
      return this.tutor.description
    },
    subject() {
      return this.tutor.subject
    },
    age() {
      return this.tutor.age
    },
    rating() {
      return this.tutor.rating
    },
  },
  created() {
    this.getUserData()
  },
  methods: {
    getUserData() {
      // Getting the tutor id and converting it to a number
      const idString = this.$route.params.id
      const idNum = parseInt(idString)
      this.id = idNum
      // Look trough the state for the id and set the correct tutor
      this.selectedTutor = this.$store.state.tutors.find(
        (tutor) => tutor.id === this.id
      )
    },
  },
}
</script>

<style></style>
