<template>
  <div>
    <div>
      <breadcrumbs-app></breadcrumbs-app>
    </div>

    <div class="relative min-h-calc">
      <div>
        <div class="relative z-20 w-left">
          <div class="pt-10">
            <!-- search form -->
            <div class="flex items-center mx-12 my-0">
              <div class="flex flex-grow flex-shrink w-full">
                <div
                  class="relative z-10 flex items-center w-full h-16 py-0 pr-0 border-b-0"
                >
                  <form
                    class="flex w-full md:ml-0"
                    @submit.prevent="fetchTutors"
                  >
                    <label for="search_field" class="sr-only">Search</label>
                    <div
                      class="relative w-full text-gray-400 focus-within:text-gray-600"
                    >
                      <div
                        class="absolute inset-y-0 flex items-center pointer-events-none left-2"
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
                        v-model="postcode"
                        class="block w-full h-full py-4 pl-10 pr-3 text-gray-900 placeholder-gray-500 border-none shadow-sm focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                        placeholder="Vul jouw postcode in"
                        type="search"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="flex items-center mx-12 my-0">
              <div class="flex flex-grow flex-shrink w-full">
                <div
                  class="relative z-10 flex items-center w-full h-16 py-0 pr-0 border-b-0"
                >
                  <div class="flex justify-between w-full">
                    <div class="flex items-center">
                      <client-only>
                        <div class="pr-4">
                          <button
                            id="sort-menu"
                            type="button"
                            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <!-- Heroicon name: location-marker -->
                            <svg
                              class="w-5 h-5 mr-3 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                            </svg>
                            Afstand
                            <!-- Heroicon name: chevron-down -->
                            <svg
                              class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
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
                        <div class="pr-4">
                          <button
                            id="sort-menu"
                            type="button"
                            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <!-- Heroicon name: book-open -->
                            <svg
                              class="w-5 h-5 mr-3 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              ></path>
                            </svg>
                            Vak
                            <!-- Heroicon name: chevron-down -->
                            <svg
                              class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
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

                        <div class="pr-4">
                          <button
                            id="sort-menu"
                            type="button"
                            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <!-- Heroicon name: currency-euro -->
                            <svg
                              class="w-5 h-5 mr-3 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            Tarief
                            <!-- Heroicon name: chevron-down -->
                            <svg
                              class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
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
                      </client-only>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div
            class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div
              class="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="sort-menu"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                >Name</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                >Date modified</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                >Date created</a
              >
            </div>
          </div> -->
          </div>
          <div class="relative mx-auto px-14">
            <div class="pt-20">
              <section>
                <div>
                  <h1
                    v-if="tutors.length > 0"
                    class="text-3xl font-medium leading-5 text-orange-500 whitespace-nowrap overflow-ellipsis"
                  >
                    <b class="text-black">{{ tutorCount }}</b> Bijlesgevers
                    <span class="text-black outline-none">op postcode</span>
                    <span v-if="postcode.length > 0">{{ currentZip }}</span>
                    <span v-else>****</span>
                  </h1>
                  <div v-else class="p-4 rounded-md bg-light-blue-50">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: information-circle -->
                        <svg
                          class="w-5 h-5 text-light-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="flex-1 ml-3 md:flex md:justify-between">
                        <p class="text-sm text-light-blue-700">
                          Geen resultaten gevonden. Vul je postcode in.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="min-h-screen overflow-hidden">
            <div class="overflow-anchor-none">
              <div>
                <div
                  v-if="tutors.length > 0"
                  class="relative px-10 mx-auto bg-transparant"
                >
                  <div>
                    <div>
                      <ul id="tutors" class="p-0 -mx-3">
                        <div class="mt-4 mb-7">
                          <div class="border-item"></div>
                        </div>
                        <tutor-item
                          v-for="tutor in tutors"
                          :id="tutor.id"
                          :key="tutor.id"
                          :name="tutor.attributes.name"
                          :rate="student.hourlyRate"
                          :subject="student.subject"
                          :description="student.biography"
                          :profile-image="student.imageUrl"
                          :image-alt="student.imageAlt"
                          :age="student.age"
                          :rating="student.rating"
                          :total-reviews="student.reviewCount"
                          class="inline-block w-full whitespace-normal align-top"
                        >
                        </tutor-item>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-0 left-auto block w-right inset-map">
        <aside class="sticky top-0 w-full h-screen pt-32 -mt-32">
          <div class="relative w-full h-full">
            <div class="relative w-full h-full overflow-hidden bg-black">
              <div class="top-0 left-0 w-full h-full overflow-hidden bg-black">
                <div class="top-0 z-0 w-full h-full p-0 m-0 border-0 l-0">
                  <iframe
                    class="absolute top-0 left-0 w-full h-full"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=nl&amp;q=Spuistraat%20210,%201012%20VT%20Amsterdam,%20Netherlands+(Mijn%20bedrijfsnaam)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe
                  ><a
                    href="https://www.mapsdirections.info/nl/cirkel-straal-kaart/"
                    >Straal op kaart Google</a
                  >
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import tutorItem from '~/components/tutors/tutorItem.vue'
import BreadcrumbsApp from '~/components/UI/BreadcrumbsApp.vue'

export default {
  name: 'Zoeken',
  components: { tutorItem, BreadcrumbsApp },

  data: () => ({
    postcode: '',
    attributes: [],
    offset: 4,
    pagination: {},
    users: [],
    student: {
      imageUrl:
        'https://r9b7u4m2.stackpathcdn.com/prod/sites/eXfkOOiYH-uoddxClSi52viuasTF1mJ8olZ0u-tOtfFqK66gZCc90Ly_Uoc0VmR1eULwQ0uGf2JhPt4yPTts8A/themes/base/assets/images/avatar-1.png',
      imageAlt: 'Profielfoto BijlesNodig',
      availability: {
        Monday: true,
        Dinsdag: true,
        Woensdag: false,
        Donderdag: false,
        Vrijdag: false,
        Zaterdag: true,
        Zondag: true,
      },
      subject: 'Wiskunde',
      firstName: 'Dennis',
      lastName: 'Kraaijeveld',
      age: '19',
      sex: 'Vrouw',
      biography:
        'Hoi, ik heet Elise en ben net klaar met mijn VWO. Op dit moment ...',
      email: 'elise91xx@gmail.com',
      lastSeen: '14-11-2020',
      hourlyRate: '11',
      rating: '4.5',
      reviewCount: '67',
    },
  }),

  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    ...mapState(['tutors']),
    tutorCount() {
      return this.tutors.length
    },
    currentZip() {
      return this.postcode
    },
  },
  methods: {
    async fetchTutors() {
      const postcode = this.postcode
      await this.$store.dispatch('loadAllTutors', postcode)
    },
  },
  head() {
    return {
      title: 'Bijlesgevers',
    }
  },
  layout: 'app',
  middleware: 'auth',
}
</script>
