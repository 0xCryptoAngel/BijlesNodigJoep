<template>
  <div>
    <main>
      <web-header :title="title" :beschrijving="beschrijving"></web-header>
    </main>
  </div>
</template>

<script>
import webHeader from '~/components/webLayout/webHeader.vue'
export default {
  components: { webHeader },
  data() {
    return {
      title: 'Veelgestelde vragen',
      beschrijving:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Uitleg over hoe alles werkt voor de student en bijlesgever',
    }
  },
  layout: 'webpage',
  middleware: 'auth',
  auth: 'guest',
}
</script>

<style></style>
