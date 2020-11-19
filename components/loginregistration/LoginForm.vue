<template>
  <div
    class="flex items-center justify-center px-4 py-12 bg-gray-50 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md">
      <div>
        <img
          class="w-auto h-12 mx-auto"
          src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
          alt="Workflow"
        />
        <h2
          class="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900"
        >
          Log in op je account
        </h2>
        <p class="mt-2 text-sm leading-5 text-center text-gray-600">
          Of
          <a
            href="/register"
            class="font-medium transition duration-150 ease-in-out text-light-blue-600 hover:text-light-blue-500 focus:outline-none focus:underline"
          >
            maak hier een nieuw account aan
          </a>
        </p>
      </div>
      <form class="mt-8" @submit.prevent="handleSubmit">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm">
          <div>
            <input
              id="email"
              v-model="userInfo.email"
              aria-label="Email address"
              name="email"
              type="email"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Email address"
            />
          </div>
          <div class="-mt-px">
            <input
              id="password"
              v-model="userInfo.password"
              aria-label="Password"
              name="password"
              type="password"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between mt-6">
          <div class="flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              class="w-4 h-4 transition duration-150 ease-in-out text-light-blue-600 form-checkbox"
            />
            <label
              for="remember_me"
              class="block ml-2 text-sm leading-5 text-gray-900"
            >
              Onthoudt mij
            </label>
          </div>

          <div class="text-sm leading-5">
            <a
              href="#"
              class="font-medium transition duration-150 ease-in-out text-light-blue-600 hover:text-light-blue-500 focus:outline-none focus:underline"
            >
              Wachtwoord vergeten?
            </a>
          </div>
        </div>

        <div class="mt-6">
          <button
            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-light-blue-600 group hover:bg-light-blue-500 focus:outline-none focus:border-light-blue-700 focus:shadow-outline-light-blue active:bg-light-blue-700"
            @click="loginsubmit(userInfo)"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                class="w-5 h-5 transition duration-150 ease-in-out text-light-blue-500 group-hover:text-light-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Inloggen
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  components: {},
  mixins: [],
  // eslint-disable-next-line vue/require-prop-types
  props: ['loginsubmit'],
  data() {
    return {
      userInfo: {
        email: '',
        password: '',
        error: null,
      },
      submitted: false,
    }
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true
      // stop here if form is invalid
    },
  },
}
</script>
