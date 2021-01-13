<template>
  <nuxt-link :to="link">
    <div class="blog-post">
      <h2>{{ $prismic.asText(post.data.title) }}</h2>
      <p class="blog-post-meta">
        <span class="created-at">{{ formattedDate }}</span>
      </p>
      <p>{{ getFirstParagraph(post) }}</p>
    </div>
  </nuxt-link>
</template>

<script>
/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
/* eslint-disable no-sequences */

import LinkResolver from '~/plugins/link-resolver.js'

export default {
  name: 'BlogWidget',
  props: ['post'],
  data() {
    return {
      link: '',
      formattedDate: '',
    }
  },
  created () {
    this.link = LinkResolver(this.post),
    this.formattedDate = Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(this.post.data.date))
  },
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph(post) {
      const textLimit = 300
      const slices = post.data.body
      let firstParagraph = ''
      let haveFirstParagraph = false

      slices.map(function (slice) {
        if (!haveFirstParagraph && slice.slice_type === 'text') {
          slice.primary.text.forEach(function (block) {
            if (block.type === 'paragraph' && !haveFirstParagraph) {
              firstParagraph += block.text
              haveFirstParagraph = true
            }
          })
        }
      })

      const limitedText = firstParagraph.substr(0, textLimit)

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...'
      } else {
        return firstParagraph
      }
    },
  },
}
</script>
