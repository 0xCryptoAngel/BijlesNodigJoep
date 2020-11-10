<template>
  <div class="relative ml-3">
    <div>
      <button
        id="user-menu"
        class="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
        aria-label="User menu"
        aria-haspopup="true"
        @click="isUserMenuOpen = !isUserMenuOpen"
      >
        <img
          class="w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
        v-show="isUserMenuOpen"
        class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
      >
        <div class="py-1 bg-white rounded-md shadow-xs">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >Your Profile</a
          >

          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >Settings</a
          >

          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >Sign out</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
      isUserMenuOpen: false,
    }
  },
}
</script>

<style></style>
