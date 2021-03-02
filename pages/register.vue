<template>
  <div>
    <web-header :title="title" :beschrijving="beschrijving"></web-header>
    <div class="relative py-16 m-4 bg-gray-100 rounded-2xl lg:overflow-hidden">
      <div class="px-4 mx-auto my-0 md:px-5 lg:px-8 xl:px-16 max-w-7xl">
        <div
          class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
        >
          <div class="w-full max-w-sm mx-auto lg:w-96">
            <div v-if="steps == 1">
              <p class="text-sm font-semibold text-gray-700">
                Schrijf je in als
              </p>
            </div>

            <div v-if="steps == 2">
              <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                Vul je persoonlijke informatie in
              </h2>
            </div>

            <div class="mt-8">
              <div class="mt-6">
                <form autocomplete="off" class="space-y-6">
                  <section v-if="steps == 1">
                    <ValidationObserver ref="obs1" v-slot="{ invalid }">
                      <ValidationProvider name="Type" rules="required">
                        <div class="grid grid-cols-2 gap-3 mt-1 text-center">
                          <button
                            type="button"
                            class="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-transparent rounded-md text-sky-blue-700 bg-sky-blue-100 hover:bg-sky-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-blue-500"
                            @click="form.type = 'Tutor'"
                          >
                            Bijlesgever
                          </button>

                          <button
                            type="button"
                            class="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-transparent rounded-md text-sky-blue-700 bg-sky-blue-100 hover:bg-sky-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-blue-500"
                            @click="form.type = 'Student'"
                          >
                            Bijleszoeker
                          </button>
                          <input
                            v-model="form.type"
                            class="hidden"
                            type="text"
                            required
                          />
                        </div>
                      </ValidationProvider>

                      <button
                        v-if="steps != totalSteps"
                        :disabled="invalid"
                        type="submit"
                        class="flex justify-center w-full px-4 py-2 mt-6 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                        @click.prevent="nextStep"
                      >
                        Volgende stap
                      </button>
                    </ValidationObserver>
                  </section>
                  <transition name="block">
                    <section v-if="steps == 2">
                      <ValidationObserver ref="obs2" v-slot="{ invalid }">
                        <div>
                          <label
                            for="email"
                            class="block text-sm font-medium text-gray-700"
                          >
                            E-mailadres
                          </label>
                          <div class="mt-1">
                            <ValidationProvider
                              v-slot="{ classes, errors }"
                              name="email"
                              rules="required|email"
                              ><div class="relative">
                                <input
                                  id="email"
                                  v-model.trim="form.email"
                                  type="email"
                                  :class="classes"
                                  class="text-gray-800"
                                />
                              </div>
                              <p
                                v-show="errors"
                                id="email-error"
                                class="mt-2 text-sm text-red-600"
                              >
                                {{ errors[0] }}
                              </p>
                            </ValidationProvider>
                          </div>
                        </div>
                        <ValidationObserver>
                          <div class="space-y-1">
                            <label
                              for="password"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Wachtwoord
                            </label>
                            <div class="mt-1">
                              <ValidationProvider
                                v-slot="{ classes, errors }"
                                name="Password"
                                :rules="{
                                  required: true,
                                  regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                                }"
                                vid="password"
                              >
                                <input
                                  id="password"
                                  ref="password"
                                  v-model.trim="form.password"
                                  type="password"
                                  required
                                  :class="classes"
                                  class="text-gray-800"
                                />
                                <p
                                  v-show="errors"
                                  id="email-error"
                                  class="mt-2 text-sm text-red-600"
                                >
                                  {{ errors[0] }}
                                </p>
                              </ValidationProvider>
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
                              <ValidationProvider
                                v-slot="{ classes, errors }"
                                name="confirm Password"
                                rules="required|confirmed:password"
                              >
                                <input
                                  id="confirmpassword"
                                  v-model.trim="form.password_confirmation"
                                  type="password"
                                  required
                                  :class="classes"
                                  class="text-gray-800"
                                />
                                <p
                                  v-show="errors"
                                  id="email-error"
                                  class="mt-2 text-sm text-red-600"
                                >
                                  {{ errors[0] }}
                                </p>
                              </ValidationProvider>
                            </div>
                          </div>
                        </ValidationObserver>
                        <div class="grid grid-cols-2 gap-3 mt-6">
                          <button
                            v-if="steps != 1"
                            type="submit"
                            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                            @click.prevent="previousStep"
                          >
                            Vorige stap
                          </button>
                          <button
                            v-if="steps != totalSteps"
                            :disabled="invalid"
                            type="submit"
                            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                            @click.prevent="nextStep"
                          >
                            Volgende stap
                          </button>
                        </div>
                      </ValidationObserver>
                    </section>
                  </transition>
                  <transition name="block">
                    <section v-if="steps == 3">
                      <ValidationObserver ref="obs3" v-slot="{ invalid }">
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
                            <ValidationProvider
                              v-slot="{ classes, errors }"
                              name="First Name"
                              rules="required|alpha_spaces"
                            >
                              <input
                                id="firstName"
                                v-model="form.firstName"
                                type="text"
                                autocomplete="off"
                                :class="classes"
                                class="text-gray-800"
                              />
                              <p
                                v-show="errors"
                                id="email-error"
                                class="mt-2 text-sm text-red-600"
                              >
                                {{ errors[0] }}
                              </p>
                            </ValidationProvider>
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
                            <ValidationProvider
                              v-slot="{ classes, errors }"
                              name="Last Name"
                              rules="required|alpha_spaces"
                            >
                              <input
                                id="lastName"
                                v-model="form.lastName"
                                type="text"
                                required
                                :class="classes"
                                class="text-gray-800"
                              />
                              <p
                                v-show="errors"
                                id="email-error"
                                class="mt-2 text-sm text-red-600"
                              >
                                {{ errors[0] }}
                              </p>
                            </ValidationProvider>
                          </div>
                        </div>
                        <div class="space-y-1">
                          <label
                            for="sex"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Geslacht
                          </label>
                          <ValidationProvider name="Sex" rules="required">
                            <div class="grid grid-cols-3 gap-1 mt-1">
                              <span>
                                <input
                                  id="sex"
                                  v-model="form.sex"
                                  type="radio"
                                  value="Vrouw"
                                  class="w-4 h-4 border-gray-500 text-light-blue-600 focus:ring-light-blue-500"
                                /><label class="ml-2 text-gray-800" for="one"
                                  >Vrouw</label
                                >
                              </span>
                              <span>
                                <input
                                  id="sex"
                                  v-model="form.sex"
                                  selected
                                  type="radio"
                                  value="Man"
                                  class="w-4 h-4 border-gray-500 text-light-blue-600 focus:ring-light-blue-500"
                                /><label class="ml-2 text-gray-800" for="one"
                                  >Man</label
                                >
                              </span>
                            </div>
                          </ValidationProvider>
                        </div>
                        <div class="space-y-1">
                          <label
                            for="zip"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Leeftijd
                          </label>
                          <div class="mt-1">
                            <ValidationProvider
                              v-slot="{ classes, errors }"
                              name="Age"
                              rules="required"
                            >
                              <input
                                id="age"
                                v-model.trim="form.age"
                                type="number"
                                :class="classes"
                                class="text-gray-800"
                                oninput="validity.valid||(value='');"
                                maxlength="2"
                                aria-describedby="age"
                                min="0"
                              />
                              <p
                                v-show="errors"
                                id="email-error"
                                class="mt-2 text-sm text-red-600"
                              >
                                {{ errors[0] }}
                              </p>
                            </ValidationProvider>
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
                            <ValidationProvider
                              v-slot="{ classes, errors }"
                              name="Zipcode"
                              rules="required|customRegex"
                            >
                              <input
                                id="zipcode"
                                v-model.trim="form.zip"
                                type="text"
                                :class="classes"
                                class="text-gray-800"
                                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                maxlength="6"
                                @input="
                                  form.zip = $event.target.value.toUpperCase()
                                "
                              />
                              <p
                                v-show="errors"
                                id="email-error"
                                class="mt-2 text-sm text-red-600"
                              >
                                {{ errors[0] }}
                              </p>
                            </ValidationProvider>
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
                            <ValidationProvider
                              v-slot="{ classes, errors }"
                              name="City"
                              rules="required|alpha_spaces"
                            >
                              <input
                                id="city"
                                v-model="form.city"
                                type="text"
                                :class="classes"
                                class="text-gray-800"
                              />
                              <p
                                v-show="errors"
                                id="email-error"
                                class="mt-2 text-sm text-red-600"
                              >
                                {{ errors[0] }}
                              </p>
                            </ValidationProvider>
                          </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3 mt-6">
                          <button
                            v-if="steps != 1"
                            type="submit"
                            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                            @click.prevent="previousStep"
                          >
                            Vorige stap
                          </button>
                          <button
                            v-if="steps != totalSteps"
                            :disabled="invalid"
                            type="submit"
                            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                            @click.prevent="nextStep"
                          >
                            Volgende stap
                          </button>
                        </div>
                      </ValidationObserver>
                    </section>
                  </transition>
                  <transition name="block">
                    <section v-if="steps == 4">
                      <ValidationObserver ref="obs4" v-slot="{ invalid }">
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
                              <div class="flex items-center">
                                <div
                                  class="object-cover object-center overflow-hidden bg-gray-100 rounded-full w-14 h-14"
                                >
                                  <img
                                    style=""
                                    :src="form.profile_image"
                                    alt=""
                                  />
                                  <svg
                                    v-if="form.profile_image == null"
                                    class="w-full h-full text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <ValidationProvider
                                    v-slot="{ errors }"
                                    ref="image_file"
                                    name="image"
                                    rules="required|image"
                                  >
                                    <input
                                      ref="file"
                                      type="file"
                                      accept="image/*"
                                      style="display: none"
                                      required
                                      data-vv-as="image"
                                      @change="selectImage"
                                    />

                                    <span>{{ errors[0] }}</span>
                                  </ValidationProvider>
                                  <button
                                    type="button"
                                    class="px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                                    @click="launchFilePicker()"
                                  >
                                    Uploaden
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            v-if="steps == 4 && form.type == 'Tutor'"
                            class="mt-4 sm:col-span-6"
                          >
                            <label
                              for="about"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Over jou
                            </label>
                            <div class="mt-1">
                              <ValidationProvider
                                name="biography"
                                rules="required|max:350"
                                mode="aggressive"
                              >
                                <textarea
                                  id="about"
                                  v-model="form.biography"
                                  rows="3"
                                  class="block w-full text-gray-800 border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                                ></textarea>
                                <p
                                  class="mt-1 text-xs font-medium text-gray-500"
                                >
                                  Je kunt nog {{ charactersRemaining }} tekens
                                  typen.
                                </p>
                              </ValidationProvider>
                            </div>
                          </div>
                          <div
                            v-if="steps == 4 && form.type == 'Tutor'"
                            class="mt-1"
                          >
                            <label
                              for="price"
                              class="block text-sm font-medium text-gray-700"
                              >Tarief</label
                            >
                            <div class="relative mt-1 rounded-md shadow-sm">
                              <div
                                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                              >
                                <span class="text-gray-500 sm:text-sm">
                                  €
                                </span>
                              </div>
                              <ValidationProvider rules="required">
                                <input
                                  id="price"
                                  v-model="form.hourly_rate"
                                  type="number"
                                  class="block w-full pr-12 text-gray-800 border-gray-300 rounded-md focus:ring-light-blue-500 focus:border-light-blue-500 pl-7 sm:text-sm"
                                  placeholder="0.00"
                                  aria-describedby="price-currency"
                                  min="0"
                                  oninput="validity.valid||(value='');"
                                />
                              </ValidationProvider>
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
                          <div
                            v-if="steps == 4 && form.type == 'Tutor'"
                            class="mt-1"
                          >
                            <label
                              for="location"
                              class="block text-sm font-medium text-gray-700"
                              >Vak</label
                            >
                            <ValidationProvider rules="required">
                              <select
                                id="location"
                                v-model="form.subject"
                                class="block w-full py-2 pl-3 pr-10 mt-1 text-base text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                              >
                                <option disabled value="">
                                  Selecteer een vak
                                </option>
                                <option>Wiskunde</option>
                                <option>Geschiedenis</option>
                                <option>Natuurkunde</option>
                              </select>
                            </ValidationProvider>
                          </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3 mt-6">
                          <button
                            v-if="steps != 1"
                            type="submit"
                            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                            @click.prevent="previousStep"
                          >
                            Vorige stap
                          </button>
                          <button
                            v-if="steps == 4"
                            :disabled="invalid"
                            type="submit"
                            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                            @click.prevent="registerUser"
                          >
                            Registreren
                          </button>
                        </div>
                      </ValidationObserver>
                    </section>
                  </transition>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import webHeader from '~/components/webLayout/webHeader'

export default {
  name: 'RegistrationPage',
  layout: 'webpage',
  middleware: 'auth',
  auth: 'guest',
  components: { ValidationProvider, ValidationObserver, webHeader },
  mixins: {},
  data() {
    return {
      title: 'Schrijf je in',
      beschrijving: 'Maak een account aan als bijleszoeker of bijlesgever',
      steps: 1,
      totalSteps: 4,
      maxCharacter: 350,
      form: {
        type: '',
        email: 'ty@12.com',
        password: 'qwQW12!!',
        password_confirmation: 'qwQW12!!',
        firstName: 'Dennis',
        lastName: 'Kraaijeveld',
        sex: 'Man',
        age: 29,
        zip: '7425NR',
        city: 'Deventer',
        subject: null,
        hourly_rate: null,
        biography: '',
        profile_image: null,
      },
    }
  },
  computed: {
    charactersRemaining() {
      return this.maxCharacter - this.form.biography.length
    },
  },
  mounted() {},
  methods: {
    launchFilePicker() {
      this.$refs.file.click()
    },
    selectImage(e) {
      const selectedImage = e.target.files[0] // get image
      if (selectedImage instanceof Blob) {
        this.createBase64Image(selectedImage)
      } else {
        console.log('Choose a image')
      }
    },

    createBase64Image(fileObject) {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.form.profile_image = e.target.result
      }
      reader.onerror = (err) => {
        alert(err)
      }
      if (fileObject) {
        reader.readAsDataURL(fileObject)
      }
    },
    registerUser() {
      const user = this.form

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

<style>
button.highlight {
  background: yellow;
}

.block-enter {
  opacity: 0;
}
.block-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
