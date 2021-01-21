<template>
  <div>
    <section
      class="pt-8 pb-24 m-4 bg-gradient-to-br from-orange-200 via-light-blue-300 to-orange-200 rounded-2xl"
    >
      <div class="px-16 mx-auto my-0 max-w-7xl">
        <header class="bg-white rounded-lg shadow-lg">
          <nav class="flex flex-row items-center px-5">
            <div class="w-auto h-16 px-0">
              <a
                href="/"
                aria-label="Home"
                class="flex items-center h-full pl-5 -ml-5"
              >
                <span class="mr-20 text-2xl font-bold">Bijlesnodig</span>
              </a>
            </div>
            <ul
              class="static flex flex-row justify-between flex-grow h-full py-0 text-sm bg-transparant"
            >
              <div class="flex justify-center flex-grow">
                <li class="flex items-center">
                  <a
                    href="/prijzen"
                    class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
                  >
                    Features
                  </a>
                </li>
                <li class="flex items-center">
                  <a
                    href="/prijzen"
                    class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
                  >
                    Prijzen
                  </a>
                </li>
                <li class="flex items-center">
                  <a
                    href="/prijzen"
                    class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
                  >
                    FAQ
                  </a>
                </li>
                <li class="flex items-center">
                  <a
                    href="/prijzen"
                    class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
                  >
                    Over ons
                  </a>
                </li>
                <li class="flex items-center">
                  <a
                    href="/blog"
                    class="flex items-center justify-center flex-shrink-0 h-8 pl-4 m-0 mx-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-900"
                  >
                    Blog
                  </a>
                </li>
              </div>
              <div class="flex">
                <li class="flex items-center">
                  <a
                    href="/login"
                    class="flex items-center justify-center flex-shrink-0 h-8 px-4 my-0 ml-0 mr-4 font-medium text-gray-800 transition-colors bg-gray-200 rounded-md hover:bg-gray-300"
                    >Login</a
                  >
                </li>
                <li class="flex items-center">
                  <a
                    href="/login"
                    class="flex items-center justify-center flex-shrink-0 h-8 px-4 m-0 font-medium text-gray-100 transition-colors bg-gray-900 rounded-md hover:bg-gray-800"
                    >Registreren</a
                  >
                </li>
              </div>
            </ul>
          </nav>
        </header>
      </div>
      <div class="px-16 mx-auto my-0 max-w-7xl">
        <div
          class="flex flex-col items-center max-w-6xl pt-24 mx-auto my-0 text-center"
        >
          <div
            class="blog-avatar"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          ></div>
          <img :src="image" alt="" />
          <h1
            class="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl"
          >
            {{ $prismic.asText(homepageContent.headline) }}
          </h1>
          <p
            class="mt-3 mb-8 text-base font-light text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0"
          >
            {{ $prismic.asText(homepageContent.description) }}
          </p>
        </div>
      </div>
    </section>
    <section class="home">
      <article>
        <section class="pb-16 m-4 bg-gray-100 rounded-2xl">
          <div class="px-16 mx-auto my-0 max-w-7xl">
            <div class="max-w-6xl px-0 pt-20 pb-6 mx-auto my-0">
              <!-- Check blog posts exist -->
              <div
                v-if="posts.length !== 0"
                class="grid max-w-lg mx-auto mt-12 gap-7 lg:grid-cols-2 lg:max-w-none"
              >
                <!-- Template for blog posts -->
                <section
                  v-for="post in posts"
                  :key="post.id"
                  :post="post"
                  class="flex flex-col overflow-hidden"
                >
                  <!-- Here :post="post" passes the data to the component -->
                  <blog-widget :post="post"></blog-widget>
                </section>
              </div>
              <!-- If no blog posts return message -->
              <div v-else class="blog-main">
                <p>No Posts published at this time.</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </section>
    <web-footer></web-footer>
  </div>
</template>

<script>
// Importing blog posts widget
import BlogWidget from '~/components/BlogWidget.vue'
import WebFooter from '~/components/webLayout/webFooter.vue'

export default {
  name: 'Home',
  components: {
    BlogWidget,
    WebFooter,
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
      title: 'BijlesNodig Blog',
    }
  },
}
</script>
