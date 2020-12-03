<template>
  <div>
    <div>
      <main>
        <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
            <div class="border-4 border-gray-200 border-dashed rounded-lg h-96">
              <p>Berichten</p>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  layout: 'app',
  computed: { ...mapGetters(['isAuthenticated', 'loggedInUser']) },
}
</script>
