<template>
  <section class="home">
    <article>
      <div
        class="blog-avatar"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <!-- Template for page title -->
      <h1 class="blog-title">
        {{ $prismic.asText(homepageContent.headline) }}
      </h1>
      <!-- Template for page description -->
      <p class="blog-description">
        {{ $prismic.asText(homepageContent.description) }}
      </p>

      <!-- Check blog posts exist -->
      <div v-if="posts.length !== 0" class="blog-main">
        <!-- Template for blog posts -->
        <section
          v-for="post in posts"
          :key="post.id"
          :post="post"
          class="blog-post"
        >
          <!-- Here :post="post" passes the data to the component -->
          <blog-widget :post="post"></blog-widget>
        </section>
      </div>
      <!-- If no blog posts return message -->
      <div v-else class="blog-main">
        <p>No Posts published at this time.</p>
      </div>
    </article>
  </section>
</template>

<script>
// Importing blog posts widget
import BlogWidget from '~/components/BlogWidget.vue'

export default {
  name: 'Home',
  components: {
    BlogWidget,
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get blog home content
      const homepageContent = (await $prismic.api.getSingle('blog_home')).data

      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]' }
      )

      // Returns data to be used in template
      return {
        homepageContent,
        posts: blogPosts.results,
        image: homepageContent.image.url,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: 'Prismic Nuxt.js Blog',
    }
  },
}
</script>
