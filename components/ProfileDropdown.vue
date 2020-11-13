<template>
  <div class="relative ml-3">
    <div>
      <button
        id="user-menu"
        v-on-clickaway="close"
        class="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
        aria-label="User menu"
        aria-haspopup="true"
        @click="openMenu"
      >
        <img
          class="w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
          alt=""
        />
      </button>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-show="isProfileOpen"
        class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
      >
        <div class="py-1 bg-white rounded-md shadow-xs">
          <a
            href="/profile"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >Jouw Profiel</a
          >

          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >Instellingen</a
          >

          <a
            class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
            @click="logout"
            >Uitloggen</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],
  data() {
    return {
      isProfileOpen: false,
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    openMenu() {
      this.isProfileOpen = !this.isProfileOpen
    },
    close() {
      this.isProfileOpen = false
    },
  },
}
</script>

<style></style>
