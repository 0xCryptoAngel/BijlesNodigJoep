<template>
  <li>
    <div>
      <a :href="emailLink">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
/* eslint-disable vue/require-prop-types */

export default {
  props: ['email', 'message'],
  computed: {
    emailLink() {
      return 'mailto:' + this.email
    },
  },
}
</script>

<style></style>
