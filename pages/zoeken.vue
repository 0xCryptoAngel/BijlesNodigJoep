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
        <li class="overflow-hidden bg-white border rounded-lg shadow-md">
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
            <div class="mt-2 truncate">{{ student.biography }}</div>
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

        <li
          v-for="(attribute, i) of attributes"
          :key="`${i}-${attribute.i}`"
          class="flex flex-col col-span-1 text-center bg-white rounded-lg shadow"
        >
          <div class="flex flex-col flex-1 p-8">
            <img
              class="flex-shrink-0 w-32 h-32 mx-auto bg-black rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
              alt=""
            />
            <h2 class="mt-6 text-xl font-medium leading-5 text-gray-900">
              {{ attribute.name }} <span>({{ attribute.age }})</span>
            </h2>

            <dl class="flex flex-col justify-between flex-grow mt-1">
              <dt class="sr-only">Title</dt>
              <dd class="text-sm leading-5 text-gray-500">
                {{ attribute.email }}
              </dd>
              <dt class="sr-only">Role</dt>
              <dd class="mt-3">
                <span
                  class="px-2 py-1 text-xs font-medium leading-4 text-teal-800 bg-teal-100 rounded-full"
                  >{{ attribute.email }}</span
                >
              </dd>
            </dl>
          </div>
          <div class="border-t border-gray-200">
            <div class="flex -mt-px">
              <div class="flex flex-1 w-0 border-r border-gray-200">
                <a
                  href="#"
                  class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
                >
                  <!-- Heroicon name: mail -->
                  <svg
                    class="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    />
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    />
                  </svg>
                  <span class="ml-3">Chat</span>
                </a>
              </div>
              <div class="flex flex-1 w-0 -ml-px">
                <a
                  href="#"
                  class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
                >
                  <!-- Heroicon name: phone -->
                  <svg
                    class="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                  <span class="ml-3">Bellen</span>
                </a>
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
        'Hoi, ik heet Elise en ben net klaar met mijn VWO. Op dit moment heb ik een tussenjaar en zou graag scholieren willen helpen die problemen hebben met wiskunde. Laat een berichtje anders en hopelijk tot snel! :)',
      name: 'Elise Schaap',
      email: 'elise91xx@gmail.com',
      lastSeen: '14-11-2020',
      hourlyRate: '11',
      rating: '4.5',
      reviewCount: '67',
    },
  }),
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
