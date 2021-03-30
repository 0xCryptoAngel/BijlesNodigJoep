<template>
  <div class="max-w-3xl mx-auto divide-y-2 divide-gray-700">
    <ul class="mt-6 space-y-6 divide-y divide-gray-700">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
    }
  },
  provide() {
    return { Accordion: this.Accordion }
  },
}
</script>

<style scoped></style>
