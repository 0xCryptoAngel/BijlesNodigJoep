<template>
  <div class="container post-part single">
    <prismic-rich-text
      class="mt-8 text-xl leading-8 text-gray-500"
      :field="slice.primary.text"
    />
  </div>
</template>

<script>
export default {
  name: 'TextSlice',
  props: ['slice'],
}
</script>
