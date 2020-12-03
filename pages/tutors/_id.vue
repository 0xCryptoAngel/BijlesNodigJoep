<template>
  <div class="w-full px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
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
            :alt="imageAlt"
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
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TutorPage',
  components: {},
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
