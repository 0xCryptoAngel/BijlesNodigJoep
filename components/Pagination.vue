<template>
  <div class="px-2 py-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
    <nav
      class="flex items-center justify-between px-4 border-t border-gray-200 sm:px-0"
    >
      <div v-if="pagination.current_page > 1" class="flex flex-1 w-0">
        <a
          href="#"
          class="inline-flex items-center pt-4 pr-1 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400"
          @click.prevent="change(pagination.current_page - 1)"
        >
          <!-- Heroicon name: arrow-narrow-left -->
          <svg
            class="w-5 h-5 mr-3 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Vorige
        </a>
      </div>
      <div v-for="page in pages" :key="page" class="hidden md:flex">
        <a
          href="#"
          class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400"
          @click.stop="change(page)"
        >
          {{ page }}
        </a>
        <a
          href="#"
          class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 transition duration-150 ease-in-out border-t-2 text-light-blue-600 border-light-blue-500 focus:outline-none focus:text-light-blue-800 focus:border-light-blue-700"
        >
          2
        </a>
        <a
          href="#"
          class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400"
        >
          3
        </a>
        <span
          class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 border-t-2 border-transparent"
        >
          ...
        </span>
        <a
          href="#"
          class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400"
        >
          8
        </a>
        <a
          href="#"
          class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400"
        >
          9
        </a>
        <a
          href="#"
          class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400"
        >
          10
        </a>
      </div>
      <div
        v-if="pagination.current_page < pagination.last_page"
        class="flex justify-end flex-1 w-0"
      >
        <a
          href="#"
          class="inline-flex items-center pt-4 pl-1 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400"
          @click.prevent="change(pagination.current_page + 1)"
        >
          Volgende
          <!-- Heroicon name: arrow-narrow-right -->
          <svg
            class="w-5 h-5 ml-3 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true,
    },
    offset: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    pages() {
      if (!this.pagination.to) {
        return null
      }

      let from = this.pagination.current_page - this.offset
      if (from < 1) {
        from = 1
      }
      let to = from + this.offset * 2
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page
      }
      const pages = []
      for (let page = from; page <= to; page++) {
        pages.push(page)
      }
      return pages
    },
  },
  methods: {
    change(page) {
      this.pagination.current_page = page
      this.$emit('paginate')
    },
  },
}
</script>

<style></style>
