<template>
  <div v-if="show" class="border-b border-gray-700 md:hidden">
    <div class="px-2 py-3 space-y-1 sm:px-3">
      <a
        href="#"
        class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
        >Dashboard</a
      >

      <a
        href="#"
        class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >Team</a
      >

      <a
        href="#"
        class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >Projects</a
      >

      <a
        href="#"
        class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >Calendar</a
      >

      <a
        href="#"
        class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >Reports</a
      >
    </div>
    <div class="pt-4 pb-3 border-t border-gray-700">
      <div class="flex items-center px-5 space-x-3">
        <div class="flex-shrink-0">
          <img
            class="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div class="space-y-1">
          <div class="text-base font-medium leading-none text-white">
            Tom Cook
          </div>
          <div class="text-sm font-medium leading-none text-gray-400">
            tom@example.com
          </div>
        </div>
      </div>
      <div
        class="px-2 mt-3 space-y-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <a
          href="#"
          class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          role="menuitem"
          >Your Profile</a
        >

        <a
          href="#"
          class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          role="menuitem"
          >Settings</a
        >

        <a
          href="#"
          class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          role="menuitem"
          >Sign out</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
