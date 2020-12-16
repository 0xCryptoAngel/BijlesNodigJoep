<template>
  <div>
    <div class="relative flex items-center justify-between">
      <form class="flex w-full md:ml-0" @submit.prevent="fetchTutors">
        <label for="search_field" class="sr-only">Search</label>
        <div class="relative w-full text-gray-400 focus-within:text-gray-600">
          <div
            class="absolute inset-y-0 flex items-center pointer-events-none left-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
    <div class="mx-auto mt-2 max-w-8xl sm:px-6 lg:px-8">
      <div class="flex items-center flex-1 px-4 py-6">
        <h1 class="flex-1 text-2xl font-semibold leading-5">
          Alle zoekresultaten in de buurt van postcode
          <span
            class="inline-flex items-center cursor-pointer text-light-blue-600"
          >
            {{ postcode }}</span
          >
        </h1>
        <client-only
          ><div class="relative">
            <button
              id="sort-menu"
              type="button"
              class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <!-- Heroicon name: sort-ascending -->
              <svg
                class="w-5 h-5 mr-3 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
                />
              </svg>
              Sorteren
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
          </div></client-only
        >
      </div>
    </div>
    <base-grid>
      <ul id="tutors" class="grid grid-cols-2 gap-6">
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
          class="overflow-hidden bg-white border rounded-lg shadow-md"
        >
        </tutor-item>
      </ul>
    </base-grid>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import tutorItem from '~/components/tutors/tutorItem.vue'
import BaseGrid from '~/components/UI/BaseGrid.vue'

export default {
  name: 'Zoeken',
  components: { tutorItem, BaseGrid },

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
  },
  methods: {
    async fetchTutors() {
      const postcode = this.postcode
      await this.$store.dispatch('loadAllTutors', postcode)
    },
  },
  layout: 'app',
  middleware: 'auth',
}
</script>
