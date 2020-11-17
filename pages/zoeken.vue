<template>
  <div>
    <div class="relative flex items-center justify-between">
      <form class="flex w-full md:ml-0" @submit.prevent="searchTutors()">
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
            class="block w-full h-full py-4 pl-10 pr-3 text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 sm:text-sm"
            placeholder="Vul jouw postcode in"
            type="search"
          />
        </div>
      </form>
    </div>
    <div class="mx-auto mt-2 max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between flex-1 max-w-xl px-4">
        <div class="px-4 py-6 sm:px-0">
          <ul class="grid grid-cols-1 gap-6">
            <li
              v-for="(attribute, i) of attributes"
              :key="`${i}-${attribute.i}`"
              class="overflow-hidden bg-white border rounded-lg shadow-md"
            >
              <div class="flex">
                <div class="w-2/3">
                  <img
                    class="flex-shrink-0 object-cover w-full h-64 mx-auto bg-black"
                    :src="student.imageUrl"
                    :alt="student.imageAlt"
                  />
                </div>
                <div class="p-6">
                  <div
                    class="text-xs font-semibold leading-snug tracking-wide text-gray-500 uppercase"
                  >
                    {{ student.subject }} &bull; {{ student.age }} jaar
                  </div>
                  <h4 class="text-lg font-semibold leading-5 tracking-wide">
                    {{ student.name }}
                  </h4>
                  <div class="mt-2">
                    {{ student.hourlyRate }}€

                    <span class="text-sm text-gray-600">per uur</span>
                  </div>
                  <div class="mt-2">
                    <span class="font-semibold text-light-blue-800"
                      >{{ student.rating }}/5 sterren</span
                    >
                    <span class="text-sm text-gray-600 truncate">
                      (na {{ student.reviewCount }} reviews)
                    </span>
                  </div>
                  <div class="mt-2">{{ student.biography }}</div>
                  <div>
                    <div class="mt-4 text-sm font-semibold text-gray-600">
                      <span>MA</span>
                      <span
                        class="inline-block leading-7 text-center text-gray-100 bg-yellow-400 bg-opacity-50 w-7 h-7 rounded-xl"
                        >DI</span
                      >
                      <span>WO</span>
                      <span
                        class="inline-block leading-7 text-center text-gray-100 bg-yellow-400 bg-opacity-50 w-7 h-7 rounded-xl"
                        >DO</span
                      >
                      <span
                        class="inline-block leading-7 text-center text-gray-100 bg-yellow-400 bg-opacity-50 w-7 h-7 rounded-xl"
                        >VR</span
                      >
                      <span>ZA</span>
                      <span>ZO</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <pagination :pagination="pagination" :offset="4" @paginate="fetchUsers" />
  </div>
</template>

<script>
import axios from 'axios'
import Pagination from '~/components/Pagination'

export default {
  components: { pagination: Pagination },
  data: () => ({
    postcode: '',
    attributes: [],
    offset: 4,
    pagination: {},
    users: [],
    student: {
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60',
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
      age: '19',
      sex: 'Vrouw',
      biography:
        'Hoi, ik heet Elise en ben net klaar met mijn VWO. Op dit moment ...',
      name: 'Elise Bosveld',
      email: 'elise91xx@gmail.com',
      lastSeen: '14-11-2020',
      hourlyRate: '11',
      rating: '4.5',
      reviewCount: '67',
    },
  }),
  computed: {},
  created() {
    this.fetchUsers()
  },
  layout: 'app',
  middleware: 'auth',
  methods: {
    searchTutors() {
      const bearer = localStorage.getItem('undefined_token.local')

      const options = {
        headers: {
          Accept: 'application/json, text/plain',
          Authorization: bearer,
        },
      }

      axios
        .post(
          'http://notawanker.com/tutors/search',
          { postcode: this.postcode },
          options
        )
        .then(({ data }) => {
          this.attributes = data.map((item) => item.attributes)
        })
        .catch((error) => console.log(error))
    },
    fetchUsers() {
      // eslint-disable-next-line camelcase
      const current_page = this.pagination.current_page
      // eslint-disable-next-line camelcase
      const pageNum = current_page || 1

      axios
        .get(`http://notawanker.com/search/tutors?page=${pageNum}`)
        .then((response) => {
          this.pagination = response.data.pagination
          this.users = response.data.users
        })
        .catch((error) => console.log(error))
    },
  },
}
</script>
