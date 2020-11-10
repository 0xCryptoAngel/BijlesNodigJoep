<template>
  <transition
    enter-active-class="duration-200 ease-out"
    enter-class="scale-95 opacity-0"
    enter-to-class="scale-100 opacity-100"
    leave-active-class="duration-300 ease-out"
    leave-class="scale-100 opacity-100"
    leave-to-class="scale-95 opacity-0"
  >
    <div
      v-if="show"
      class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
    >
      <div class="rounded-lg shadow-md">
        <div
          class="overflow-hidden bg-white rounded-lg shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="main-menu"
        >
          <div class="flex items-center justify-between px-5 pt-4">
            <div>
              <img
                class="w-auto h-8"
                src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                alt=""
              />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                aria-label="Close menu"
                @click="$emit('close')"
              >
                <svg
                  class="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3">
            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
              role="menuitem"
              >Product</a
            >
            <a
              href="#"
              class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
              role="menuitem"
              >Features</a
            >
            <a
              href="#"
              class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
              role="menuitem"
              >Marketplace</a
            >
            <a
              href="#"
              class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
              role="menuitem"
              >Company</a
            >
          </div>
          <div>
            <a
              href="#"
              class="block w-full px-5 py-3 font-medium text-center text-indigo-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700"
              role="menuitem"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
