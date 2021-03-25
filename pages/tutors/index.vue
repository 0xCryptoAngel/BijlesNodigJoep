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
                <div class="w-full">
                  <form @submit.prevent="fetchTutors">
                    <div class="flex mt-1 rounded-md shadow-sm">
                      <div
                        class="relative flex items-stretch flex-grow focus-within:z-10"
                      >
                        <div
                          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        >
                          <!-- Heroicon name: location-marker -->
                          <svg
                            class="w-5 h-5 text-gray-500"
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
                        </div>

                        <input
                          id="search_field"
                          v-model="postcode"
                          type="search"
                          name="postcode_search"
                          class="block w-full pl-10 border-gray-300 rounded-none focus:ring-light-blue-500 focus:border-light-blue-500 rounded-l-md sm:text-sm"
                          placeholder="Jouw postcode"
                          autocomplete="off"
                        />
                      </div>
                      <button
                        class="relative inline-flex items-center px-4 py-2 -ml-px space-x-2 text-sm font-medium text-gray-700 border border-light-blue-700 rounded-r-md bg-light-blue-700 hover:bg-light-blue-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-light-blue-500"
                      >
                        <!-- Heroicon name: sort-ascending -->
                        <svg
                          class="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          />
                        </svg>
                      </button>
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
                            @click="openRangeSlider"
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

                          <!-- RANGE SLIDER  -->
                          <!-- <div
                            class="absolute left-0 z-40 p-2 mt-1 rounded-md shadow-lg w-60"
                          >
                            <VueSimpleRangeSlider
                              v-model="number"
                              style="width: 225px"
                              :min="5"
                              :max="50"
                            />
                          </div> -->
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
          </div>
          <div class="relative mx-auto px-14">
            <div class="pt-20">
              <section>
                <div>
                  <h1
                    v-if="tutors.length > 0"
                    class="text-3xl font-medium leading-5 text-sky-blue-800 whitespace-nowrap overflow-ellipsis"
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
                          :first-name="tutor.attributes.first_name"
                          :last-name="tutor.attributes.last_name"
                          :rate="tutor.attributes.hourly_rate"
                          :subject="tutor.attributes.subject"
                          :description="tutor.attributes.biography"
                          :profile-image="tutor.attributes.profile_image_path"
                          :age="tutor.attributes.age"
                          :star-rating="tutor.attributes.rating"
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
                  <GmapMap
                    ref="mapRef"
                    :center="center"
                    :zoom="11"
                    map-type-id="roadmap"
                    style="width: 100%; height: 100vh"
                    :options="{
                      zoomControl: true,
                      mapTypeControl: false,
                      scaleControl: false,
                      streetViewControl: false,
                      rotateControl: false,
                      fullscreenControl: true,
                      disableDefaultUi: false,
                      zoomControlOptions: { position: 1 },
                      streetViewControlOptions: { position: 5 },
                      scrollwheel: true,
                    }"
                    @zoom_changed="updateZoom"
                  >
                    <GmapMarker
                      v-for="(m, index) in markers"
                      :key="index"
                      :position="m.position"
                      :clickable="true"
                      :draggable="false"
                      :icon="!m.clicked ? markerOptions : markerClicked"
                      @click="markerInfoWindow(m, index)"
                    />

                    <gmap-info-window
                      :options="infoOptions"
                      :position="infoWindowPos"
                      :opened="infoWinOpen"
                    >
                    </gmap-info-window>
                  </GmapMap>
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
// import { gmapApi } from 'gmap-vue'
import { mixin as clickaway } from 'vue-clickaway'
// import VueSimpleRangeSlider from 'vue-simple-range-slider'
// import 'vue-simple-range-slider/dist/vueSimpleRangeSlider.css'

import tutorItem from '~/components/tutors/tutorItem.vue'
import BreadcrumbsApp from '~/components/UI/BreadcrumbsApp.vue'

export default {
  name: 'Zoeken',
  components: { tutorItem, BreadcrumbsApp },
  mixins: [clickaway],
  middleware: 'auth',
  data: () => ({
    range: [20, 1000],
    number: 10,
    center: { lat: 52.379189, lng: 4.899431 },
    searchLoading: false,
    afterLoading: false,
    circle_markers: [],
    current_position: { lat: null, lng: null },
    current_zoom: null,
    radius: null,
    markers: [
      {
        position: { lat: 52.379189, lng: 4.899431 },
        price: '$200',
        name: 'Bali Property for Sale – Chill House Hipster Retreat',
        image: 'property1.jpg',
        location: 'Canggu, Pererenan',
        clicked: false,
      },
      {
        position: { lat: 52.345999, lng: 4.821177 },
        price: '$1800',
        name: 'Flawless Uluwatu Villa Zsa Zsa Finally for Sale',
        image: 'property2.jpg',
        location: 'Canggu, Tabanan, Tanah Lot',
        clicked: false,
      },
      {
        position: { lat: 52.345999, lng: 4.821177 },
        price: '$1300',
        name: 'High Ranking Boutique Resort for Sale in Sanur',
        image: 'property3.jpg',
        location: 'Bukit, Ungasan',
        clicked: false,
      },
      {
        position: { lat: 52.335999, lng: 4.726177 },
        price: '$3900',
        name: 'Modern Bali Villa for Rent in Seminyak',
        image: 'property4.jpg',
        location: 'Ubud, Tegallalang',
        clicked: false,
      },
      {
        position: { lat: 52.395999, lng: 4.821197 },
        price: '$2200',
        name: 'Chic Serenity in Beach Lovers Paradise – Sanur.',
        image: 'property5.jpg',
        location: 'Canggu, Berawa',
        clicked: false,
      },
      {
        position: { lat: 52.355999, lng: 4.826177 },
        price: '$550',
        name: 'Breathtaking Exotic Sanur Residence',
        image: 'property6.jpg',
        location: 'Canggu, Mengwi, Tumbak',
        clicked: false,
      },
    ],

    infoWindowPos: null,
    infoWinOpen: false,
    isRangeOpen: false,
    currentMidx: null,

    infoOptions: {
      content: '',
      pixelOffset: {
        width: 0,
        height: -35,
      },
    },

    postcode: '',
    attributes: [],
    users: [],
    student: {
      imageUrl:
        'https://r9b7u4m2.stackpathcdn.com/prod/sites/eXfkOOiYH-uoddxClSi52viuasTF1mJ8olZ0u-tOtfFqK66gZCc90Ly_Uoc0VmR1eULwQ0uGf2JhPt4yPTts8A/themes/base/assets/images/avatar-1.png',
      imageAlt: 'Profielfoto Bijlesnodig',
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
        'Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they are actually proud of that shit. ',
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
    // google: gmapApi,
  },
  mounted() {
    this.current_position.lat = this.center.lat
    this.current_position.lng = this.center.lng
    this.radius = 30 * 1000 // 30 km
  },
  updated() {},
  methods: {
    async fetchTutors() {
      const postcode = this.postcode
      await this.$store.dispatch('loadAllTutors', postcode)
    },
    rad(x) {
      return (x * Math.PI) / 180
    },
    getDistance(p1, p2) {
      /* Haversine formula */
      const R = 6378137 // Earth’s mean radius in meter
      const dLat = this.rad(p2.lat() - p1.lat())
      const dLong = this.rad(p2.lng() - p1.lng())
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.rad(p1.lat())) *
          Math.cos(this.rad(p2.lat())) *
          Math.sin(dLong / 2) *
          Math.sin(dLong / 2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      const d = R * c
      return d // returns the distance in meter
    },
    getDistanceTo() {
      // eslint-disable-next-line camelcase
      const current_cursor = new this.google.maps.LatLng(
        this.current_position.lat,
        this.current_position.lng
      )
      // object map

      const restaurant = new this.google.maps.LatLng(
        this.current_distance.restaurant.lat,
        this.current_distance.restaurant.lng
      )
      const atm = new this.google.maps.LatLng(
        this.current_distance.atm.lat,
        this.current_distance.atm.lng
      )
      const cafe = new this.google.maps.LatLng(
        this.current_distance.cafe.lat,
        this.current_distance.cafe.lng
      )
      const pharmacy = new this.google.maps.LatLng(
        this.current_distance.pharmacy.lat,
        this.current_distance.pharmacy.lng
      )
      // eslint-disable-next-line camelcase
      const convenience_store = new this.google.maps.LatLng(
        this.current_distance.convenience_store.lat,
        this.current_distance.convenience_store.lng
      )

      this.distance_from.restaurant = (
        this.getDistance(current_cursor, restaurant) / 1000
      ).toFixed(2)
      this.distance_from.atm = (
        this.getDistance(current_cursor, atm) / 1000
      ).toFixed(2)
      this.distance_from.cafe = (
        this.getDistance(current_cursor, cafe) / 1000
      ).toFixed(2)
      this.distance_from.pharmacy = (
        this.getDistance(current_cursor, pharmacy) / 1000
      ).toFixed(2)
      this.distance_from.convenience_store = (
        this.getDistance(current_cursor, convenience_store) / 1000
      ).toFixed(2)
    },
    updateZoom(e) {
      this.current_zoom = e
    },
    updateCenter(e) {
      this.current_position.lat = e.lat()
      this.current_position.lng = e.lng()
    },
    updateData() {
      this.getDistanceTo()

      this.searchLoading = true
      setTimeout(() => {
        this.searchLoading = false

        if (this.current_zoom) {
          if (this.current_zoom <= 7) {
            this.circle_markers = []
            return false
          }
          if (this.current_zoom === 8) this.radius = 60 * 1000 // 60 km
          if (this.current_zoom === 9) this.radius = 50 * 1000 // 50 km
          if (this.current_zoom === 10) this.radius = 30 * 1000 // 30 km
          if (this.current_zoom === 11) this.radius = 20 * 1000 // 20 km
          if (this.current_zoom >= 12) this.radius = 10 * 1000 // 10 km
          if (this.current_zoom >= 13)
            this.radius = (30 * 1000) / this.current_zoom
        }

        // default radius in meters
        const searchArea = new this.google.maps.Circle({
          center: new this.google.maps.LatLng(
            this.current_position.lat,
            this.current_position.lng
          ),
          radius: this.radius,
        })

        this.circle_markers = []

        this.markers.map((x) => {
          // eslint-disable-next-line camelcase
          const marker_position = new this.google.maps.LatLng(
            x.position.lat,
            x.position.lng
          )
          if (
            this.google.maps.geometry.spherical.computeDistanceBetween(
              marker_position,
              searchArea.getCenter()
            ) <= searchArea.getRadius()
          ) {
            this.circle_markers.push(x)
          }
        })

        this.afterLoading = true
      }, 1000)
    },

    toggleInfoWindow(marker, idx) {
      const content = `
      <h6 class="font-weight-bold" style="padding:15px;padding-bottom:7px;"> 
        ${marker.price} 
      </h6>`

      this.infoWindowPos = marker.position
      this.infoOptions.content = content

      this.infoWinOpen = true
      this.currentMidx = idx
    },

    markerInfoWindow(marker, idx) {
      const content = `
      <img src="/properties/${marker.image}" class="img-marker">
      <div class="info">
        <div class="location text-truncate">
        <i class="mr-1 fal fa-map-marker-alt"></i> <span class="text-secondary">${marker.location}</span>
        </div>
        <div class="mt-2 title text-truncate">
          ${marker.name}
        </div>
        <div class="mt-1 mb-2 price">
          ${marker.price}
        </div>
        <span class="pl-0 mr-1 font-weight-normal bd-right badge">
          <i class="mr-2 far fa-bed fa-lg"></i><span style="font-size:14px;">2</span>
        </span>
        <span class="pl-0 mr-1 font-weight-normal bd-right badge">
          <i class="mr-2 far fa-bath fa-lg"></i><span style="font-size:14px;">2</span>
        </span>
        <span class="pl-0 mr-1 font-weight-normal bd-right badge">
          <i class="mr-2 far fa-expand-arrows fa-lg"></i><span style="font-size:14px;">2 are</span>
        </span>
        <span class="pl-0 mr-1 font-weight-normal bd-right badge">
          <i class="mr-2 far fa-home fa-lg"></i><span style="font-size:14px;">1300 m²</span>
        </span>
      </div>`

      this.infoWindowPos = marker.position
      this.infoOptions.content = content

      // check if its the same marker that was selected if yes toggle
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen
      }
      // if different marker set infowindow to open and reset current marker index
      else {
        marker.clicked = true
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    },

    openRangeSlider() {
      this.isRangeOpen = !this.isRangeOpen
    },
    close() {
      this.isRangeOpen = false
    },
  },
  layout: 'app',
}
</script>

<style>
.gm-ui-hover-effect {
  display: none !important;
}
.gm-style-iw-d {
  overflow: hidden !important;
}
.gm-style .gm-style-iw-t::after {
  top: 38px;
}
.gm-control-active.gm-fullscreen-control {
  border-radius: 8px !important;
}

.gm-style .gm-style-iw-c {
  padding: 0px;
  top: 40px;
  border-radius: 12px;
}
.map-search-title {
  font-weight: 600 !important;
  color: rgb(34, 34, 34) !important;
}
.btn-red-hot {
  background-color: #ff385c;
  color: #fff;
}
.btn-red-hot:hover {
  background-color: #ff385c;
  color: #fff;
}
.info {
  padding: 10px;
  text-align: left;
  overflow-wrap: break-word;
}
.info .location {
  font-size: 14px !important;
  max-width: 230px;
}
.info .title {
  font-weight: 400 !important;
  color: rgb(34, 34, 34) !important;
  font-size: 16px !important;
  padding-bottom: 5px;
  max-width: 230px;
}
.info .price {
  color: rgb(34, 34, 34) !important;
  font-weight: 800;
  font-size: 16px !important;
}
.img-marker {
  object-fit: cover;
  width: 250px;
  height: 200px;
}
.text-searching {
  z-index: 10;
  margin: 0 auto;
  top: 2rem;
  font-size: 1rem;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 20px;
  align-items: center !important;
  justify-content: center !important;
  background: rgb(255, 255, 255) !important;
  border-radius: 8px !important;
}
.gmnoprint > div {
  border-radius: 8px !important;
}
.map-sticky {
  position: sticky;
  top: 0px;
}
.main {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
}
.scroll-none {
  width: 100vw;
}
.main::-webkit-scrollbar {
  display: none;
}

.fs-14 {
  font-size: 14px;
}
</style>
