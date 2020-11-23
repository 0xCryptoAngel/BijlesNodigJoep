<template>
  <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
  <div class="flex min-h-screen bg-white">
    <div
      class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="w-full max-w-sm mx-auto lg:w-96">
        <div v-if="steps == 1">
          <img
            class="w-auto h-12"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Maak een nieuw account aan
          </h2>
          <p class="mt-2 text-sm text-gray-600 max-w">
            Of
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start een proefperiode van 14 dagen
            </a>
          </p>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form autocomplete="off" class="space-y-6">
              <section v-if="steps == 1">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    E-mailadres
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Wachtwoord
                  </label>
                  <div class="mt-1">
                    <input
                      id="password"
                      v-model="form.password"
                      type="password"
                      required
                      class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div class="space-y-1">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Bevestig wachtwoord
                  </label>
                  <div class="mt-1">
                    <input
                      id="password"
                      v-model="form.confirmPassword"
                      type="password"
                      required
                      class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </section>

              <section v-if="steps == 2">
                <h2 class="mb-6 text-3xl font-extrabold text-gray-900">
                  Persoonlijke informatie
                </h2>
                <div>
                  <label
                    for="firstName"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Voornaam
                  </label>
                  <div class="mt-1">
                    <input
                      id="firstName"
                      v-model="form.firstName"
                      type="email"
                      required
                      autocomplete="off"
                      class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label
                    for="lastName"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Achternaam
                  </label>
                  <div class="mt-1">
                    <input
                      id="lastName"
                      v-model="form.lastName"
                      type="text"
                      required
                      class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div class="space-y-1">
                  <label
                    for="sex"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Geslacht
                  </label>
                  <div class="grid grid-cols-3 gap-1 mt-1">
                    <span>
                      <input
                        id="sex"
                        v-model="form.sex"
                        type="radio"
                        value="Vrouw"
                        required
                        class="w-4 h-4 text-indigo-600 border-gray-500 focus:ring-indigo-500"
                      /><label class="ml-2" for="one">Vrouw</label>
                    </span>
                    <span>
                      <input
                        id="sex"
                        v-model="form.sex"
                        type="radio"
                        value="Man"
                        required
                        class="w-4 h-4 text-indigo-600 border-gray-500 focus:ring-indigo-500"
                      /><label class="ml-2" for="one">Man</label>
                    </span>
                  </div>
                </div>
                <div class="space-y-1">
                  <label
                    for="zip"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Postcode
                  </label>
                  <div class="mt-1">
                    <input
                      id="zipcode"
                      v-model="form.zip"
                      type="text"
                      required
                      class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div class="space-y-1">
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Woonplaats
                  </label>
                  <div class="mt-1">
                    <input
                      id="city"
                      v-model="form.city"
                      type="text"
                      required
                      class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </section>

              <section v-if="steps == 3">
                <h2 class="mb-6 text-3xl font-extrabold text-gray-900">
                  Vul jouw profiel in
                </h2>
                <div>
                  <div class="sm:col-span-6">
                    <label
                      for="photo"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Profielfoto
                    </label>
                    <div class="flex items-center mt-2">
                      <span
                        class="overflow-hidden bg-gray-100 rounded-full w-14 h-14"
                      >
                        <svg
                          class="w-full h-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                      <button
                        type="button"
                        class="px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Wijzig
                      </button>
                    </div>
                  </div>
                  <div class="mt-4 sm:col-span-6">
                    <label
                      for="about"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Over jou
                    </label>
                    <div class="mt-1">
                      <textarea
                        id="about"
                        rows="3"
                        class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      ></textarea>
                    </div>
                  </div>
                  <div class="mt-1">
                    <label
                      for="price"
                      class="block text-sm font-medium text-gray-700"
                      >Tarief</label
                    >
                    <div class="relative mt-1 rounded-md shadow-sm">
                      <div
                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                      >
                        <span class="text-gray-500 sm:text-sm"> € </span>
                      </div>
                      <input
                        id="price"
                        type="text"
                        class="block w-full pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
                        placeholder="0.00"
                        aria-describedby="price-currency"
                      />
                      <div
                        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                      >
                        <span
                          id="price-currency"
                          class="text-gray-500 sm:text-sm"
                        >
                          EUR
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-1">
                    <label
                      for="location"
                      class="block text-sm font-medium text-gray-700"
                      >Vak</label
                    >
                    <select
                      id="location"
                      class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Wiskunde</option>
                      <option selected>Geschiedenis</option>
                      <option>Natuurkunde</option>
                    </select>
                  </div>
                </div>
              </section>

              <div class="grid grid-cols-2 gap-3 mt-6">
                <button
                  v-if="steps != 1"
                  type="submit"
                  class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  @click.prevent="previousStep"
                >
                  Vorige stap
                </button>
                <button
                  v-if="steps != totalSteps"
                  type="submit"
                  class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  @click.prevent="nextStep"
                >
                  Volgende stap
                </button>
                <button
                  v-if="steps == 3"
                  type="submit"
                  class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  @click.prevent="submitReg"
                >
                  Registreren
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex-1 hidden w-0 lg:block">
      <img
        class="absolute inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'webpage',
  data() {
    return {
      isNotification: false,
      steps: 1,
      totalSteps: 3,
      form: {
        email: null,
        password: null,
        confirmPassword: null,
        firstName: null,
        lastName: null,
        sex: null,
        zip: null,
        woonplaats: null,
      },
    }
  },
  mounted() {},
  methods: {
    registerUser(user) {
      this.$axios
        .post('http://notawanker.com/signup', {
          user,
        })
        .then(() => {
          this.isNotification = true
        })
    },
    nextStep() {
      this.steps++
    },
    previousStep() {
      this.steps--
    },
    submitReg() {
      alert('SEND REG')
    },
  },
}
</script>

<style></style>
