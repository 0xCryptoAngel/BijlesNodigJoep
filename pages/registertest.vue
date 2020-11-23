<template>
  <div>
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
            Maak een account aan
          </h2>
        </div>
        <!--
    <RegisterForm :registersubmit="registerUser" />
    <NotificationMessage
      :show="isNotification"
      @close="isNotification = false"
    /> -->

        <form autocomplete="off">
          <section v-if="steps == 1">
            <input
              id="email"
              v-model="form.email"
              aria-label="Email address"
              name="email"
              type="text"
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="E-mailadres"
              autocomplete="off"
            />
            <input
              id="password"
              v-model="form.password"
              aria-label="Password"
              name="password"
              type="password"
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Wachtwoord"
              autocomplete="off"
            />
          </section>
          <section v-if="steps == 2">
            <h3>STAP 2</h3>
            <input type="text" placeholder="TEST" />
          </section>
          <div class="flex justify-between mt-8">
            <button
              v-if="steps != 1"
              class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click.prevent="previousStep"
            >
              Vorige stap</button
            ><button
              v-if="steps != totalSteps"
              class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click.prevent="nextStep"
            >
              Volgende stap
            </button>
            <button
              v-if="steps == 2"
              class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click.prevent="submitReg"
            >
              Verzenden
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import RegisterForm from '~/components/loginregistration/RegisterForm'

export default {
  name: 'Login',
  layout: 'webpage',
  components: {
    //  RegisterForm,
  },
  data() {
    return {
      isNotification: false,
      steps: 1,
      totalSteps: 2,
      form: {
        email: null,
        password: null,
        firstName: null,
        lastName: null,
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
