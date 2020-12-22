<template>
  <div>
    <div class="w-full h-full px-4 pt-3 pb-4">
      <li>
        <div class="relative z-10 flex h-full">
          <div class="w-2/3">
            <img
              class="flex-shrink-0 object-cover w-full h-64 mx-auto bg-gray-200"
              :src="profileImage"
              :alt="imageAlt"
            />
          </div>
          <div class="p-6">
            <div
              class="text-xs font-semibold leading-snug tracking-wide text-gray-500 uppercase"
            >
              {{ subject }} &bull; {{ age }} jaar
            </div>
            <NuxtLink :to="'/tutors/' + id">
              <h4 class="text-lg font-semibold leading-5 tracking-wide">
                {{ name }}
              </h4>
            </NuxtLink>

            <div class="flex items-end flex-grow mt-2">
              <div class="mr-4">
                <span class="flex items-center">
                  <svg
                    class="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    stroke="currentColor"
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

                  <span class="text-sm font-semibold text-light-blue-800">{{
                    rating
                  }}</span>
                  <span class="text-sm text-gray-600">
                    ({{ totalReviews }})
                  </span>
                </span>
              </div>
              <div class="ml-auto">
                {{ rate }}€

                <span class="text-sm text-gray-600">per uur</span>
              </div>
            </div>

            <div class="mt-2">{{ description }}</div>
            <div>
              <div class="mt-4 text-sm font-semibold text-gray-600">
                <span>MA</span>
                <span
                  class="inline-block leading-7 text-center text-gray-100 bg-orange-400 bg-opacity-50 w-7 h-7 rounded-xl"
                  >DI</span
                >
                <span>WO</span>
                <span
                  class="inline-block leading-7 text-center text-gray-100 bg-orange-400 bg-opacity-50 w-7 h-7 rounded-xl"
                  >DO</span
                >
                <span
                  class="inline-block leading-7 text-center text-gray-100 bg-orange-400 bg-opacity-50 w-7 h-7 rounded-xl"
                  >VR</span
                >
                <span>ZA</span>
                <span>ZO</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 mb-2">
          <div class="border-item"></div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable vue/require-prop-types */

  name: 'TutorItem',
  components: {},
  props: [
    'id',
    'firstName',
    'lastName',
    'name',
    'rate',
    'subject',
    'age',
    'rating',
    'totalReviews',
    'description',
    'profileImage',
    'imageAlt',
  ],
  data() {
    return {}
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    tutorsDetailsLink() {
      return this.$route.path + '/' + this.id
    },
  },
  methods: {},
}
</script>

<style></style>
