<template>
  <form @click.prevent="submitForm">
    <div>
      <label for="email">Your E-Mail</label
      ><input
        id="email"
        v-model.trim="email"
        type="email"
        class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea
        id="message"
        v-model.trim="message"
        name="message"
        cols="30"
        rows="10"
        class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
      ></textarea>
    </div>
    <p v-if="!formIsValid" class="errors">FOUT</p>
    <div>
      <button
        class="inline-block w-auto px-6 py-4 m-0 font-semibold leading-4 text-center text-white border-none rounded-md outline-none cursor-pointer md:w-full bg-light-blue-700"
      >
        Send Message
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  layout: 'app',
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true

      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.formIsValid = false
      }
    },
  },
}
</script>

<style></style>
