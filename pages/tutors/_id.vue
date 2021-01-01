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
          <section aria-labelledby="messages-title">
            <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div class="px-4 py-5 sm:px-6">
                  <h2
                    id="notes-title"
                    class="text-lg font-medium text-gray-900"
                  >
                    Berichten
                  </h2>
                </div>
                <div class="px-4 py-6 sm:px-6">
                  <ul class="space-y-8">
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
                              >4d geleden</span
                            >
                            <span class="font-medium text-gray-500"
                              >&middot;</span
                            >
                            <button
                              type="button"
                              class="font-medium text-gray-900"
                            >
                              Beantwoorden
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
                        <label for="message" class="sr-only">About</label>
                        <textarea
                          id="message"
                          v-model.trim="message"
                          name="message"
                          rows="3"
                          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                          placeholder="Schrijf een bericht"
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
                          @click.prevent="submitForm"
                        >
                          Verstuur bericht
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
          aria-labelledby="calender-title"
          class="lg:col-start-3 lg:col-span-1"
        >
          <div class="px-4 py-5 bg-white shadow sm:rounded-lg sm:px-6">
            <h2 id="timeline-title" class="text-lg font-medium text-gray-900">
              Beschikbaar op
            </h2>

            <!-- Calender Feed -->
            <div class="flow-root mt-6">
              <ul class="-mb-8">
                {calenderAvailability}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
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
      message: '',
      formIsValid: true,
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
    submitForm() {
      this.formisValid = true

      if (this.message === '') {
        this.formIsValid = false
        return
      }

      this.$store.dispatch('contactTutor', {
        message: this.message,
        coachId: 39,
      })
      this.$router.push('/berichten')
    },
  },
}
</script>

<style></style>
