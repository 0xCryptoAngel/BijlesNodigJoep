<template>
  <div class="container post-part single">
    <prismic-rich-text class="textslice" :field="slice.primary.text" />
  </div>
</template>

<script>
export default {
  name: 'TextSlice',
  props: ['slice'],
}
</script>
