<template>
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
          <div class="mt-2">
            {{ rate }}€

            <span class="text-sm text-gray-600">per uur</span>
          </div>
          <div class="mt-2">
            <span class="font-semibold text-light-blue-800"
              >{{ rating }}/5 sterren</span
            >
            <span class="text-sm text-gray-600 truncate">
              (na {{ totalReviews }} reviews)
            </span>
          </div>
          <div class="mt-2">{{ description }}</div>
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
      <div class="mt-8 mb-2">
        <div class="border-item"></div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  /* eslint-disable vue/require-prop-types */

  name: 'TutorItem',
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
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    tutorsDetailsLink() {
      return this.$route.path + '/' + this.id
    },
  },
}
</script>

<style></style>
