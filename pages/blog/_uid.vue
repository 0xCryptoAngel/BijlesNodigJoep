<template>
  <div>
    <div class="outer-container">
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
              class="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-5xl"
            >
              {{ $prismic.asText(document.title) }}
            </h1>
            <p
              class="mt-3 mb-8 text-base font-light text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0"
            >
              Gepubliceerd op {{ formattedDate }}
            </p>
          </div>
        </div>
      </section>
      <div class="back">
        <nuxt-link to="/blog">back to list</nuxt-link>
      </div>
    </div>

    <div class="relative py-16 overflow-hidden bg-white">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          class="relative h-full mx-auto text-lg max-w-prose"
          aria-hidden="true"
        >
          <svg
            class="absolute transform translate-x-32 top-12 left-full"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            class="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="absolute transform translate-x-32 bottom-12 left-full"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="mx-auto text-lg max-w-prose">
          <p class="mt-8 text-xl leading-8 text-gray-500">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
            arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
            feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
            Eleifend egestas fringilla sapien.
          </p>
        </div>
        <div class="mx-auto mt-6 prose prose-lg text-gray-500 prose-light-blue">
          <p>
            Faucibus commodo massa rhoncus, volutpat.
            <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
            Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
            donec est. Odio penatibus risus viverra tellus varius sit neque erat
            velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
            risus enim. <a href="#">Mattis mauris semper</a> sed amet vitae sed
            turpis id.
          </p>
          <ul>
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>
              Cras cras lobortis vitae vivamus ultricies facilisis tempus.
            </li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>
            Quis semper vulputate aliquam venenatis egestas sagittis quisque
            orci. Donec commodo sit viverra aliquam porttitor ultrices gravida
            eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet,
            mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed
            elit interdum dignissim.
          </p>
          <h2>From beginner to expert in 30 days</h2>
          <p>
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
            in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum
            mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
            tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
            Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
            diam.
          </p>
          <blockquote>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
              urna sed consectetur neque tristique pellentesque. Blandit amet,
              sed aenean erat arcu morbi.
            </p>
          </blockquote>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit.
          </p>
          <figure>
            <img
              class="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
              alt=""
              width="1310"
              height="873"
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure>
          <h2>Everything you need to get up and running</h2>
          <p>
            Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>.
            Amet, massa quam varius orci dapibus volutpat cras. In amet eu
            ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
            viverra ridiculus non molestie. Gravida quis fringilla amet eget dui
            tempor dignissim. Facilisis auctor venenatis varius nunc, congue
            erat ac. Cras fermentum convallis quam.
          </p>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit.
          </p>
        </div>
      </div>
    </div>

    <web-footer></web-footer>

    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices" />
  </div>
</template>

<script>
// Importing all the slices components
import SlicesBlock from '~/components/SlicesBlock.vue'
import WebFooter from '~/components/webLayout/webFooter.vue'

export default {
  name: 'Post',
  components: {
    SlicesBlock,
    WebFooter,
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const post = (await $prismic.api.getByUID('post', params.uid)).data

      // Returns data to be used in template
      return {
        document: post,
        slices: post.body,
        formattedDate: Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }).format(new Date(post.date)),
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
