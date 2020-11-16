<template>
  <div class="px-4 py-6 sm:px-0">
    <div class="flex items-center justify-center h-64">
      <form @submit.prevent="searchTutors()">
        <input
          v-model="postcode"
          class="form-input sm:text-sm sm:leading-5 px-2.5 py-1.5"
          placeholder="Postcode"
          type="text"
        /><span>
          <button
            id="submitform"
            type="submit"
            class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-light-blue-600 hover:bg-light-blue-500 focus:outline-none focus:border-light-blue-700 focus:shadow-outline-indigo active:bg-light-blue-700 transition ease-in-out duration-150"
          >
            Zoeken
          </button>
        </span>
        <span class="inline-flex rounded-md shadow-sm"> </span>
      </form>
    </div>

    <div>
      <ul
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <li
          v-for="(attribute, i) of attributes"
          :key="`${i}-${attribute.i}`"
          class="overflow-hidden bg-white border rounded-lg shadow-md"
        >
          <img
            class="flex-shrink-0 object-cover w-full h-64 mx-auto bg-black"
            :src="student.imageUrl"
            :alt="student.imageAlt"
          />
          <div class="p-6">
            <div
              class="text-xs font-semibold leading-snug tracking-wide text-gray-500 uppercase"
            >
              {{ student.subject }} &bull; {{ student.age }} jaar
            </div>
            <h4 class="text-lg font-semibold leading-5">
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {},
  data: () => ({
    postcode: '',
    attributes: [],
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
      name: 'Elise Schaap',
      email: 'elise91xx@gmail.com',
      lastSeen: '14-11-2020',
      hourlyRate: '11',
      rating: '4.5',
      reviewCount: '67',
    },
  }),
  computed: {},
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
  },
}
</script>
