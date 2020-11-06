<template>
  <ul
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
  >
    <li class="flex flex-col col-span-1 text-center bg-white rounded-lg shadow">
      <div class="flex flex-col flex-1 p-8">
        <img
          class="flex-shrink-0 w-32 h-32 mx-auto bg-black rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt=""
        />
        <h3 class="mt-6 text-sm font-medium leading-5 text-gray-900">
          Jane Cooper
        </h3>
        <dl class="flex flex-col justify-between flex-grow mt-1">
          <dt class="sr-only">Title</dt>
          <dd class="text-sm leading-5 text-gray-500">
            Paradigm Representative
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span
              class="px-2 py-1 text-xs font-medium leading-4 text-teal-800 bg-teal-100 rounded-full"
              >Admin</span
            >
          </dd>
        </dl>
      </div>
      <div class="border-t border-gray-200">
        <div class="flex -mt-px">
          <div class="flex flex-1 w-0 border-r border-gray-200">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: mail -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="flex flex-1 w-0 -ml-px">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: phone -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>

    <li class="flex flex-col col-span-1 text-center bg-white rounded-lg shadow">
      <div class="flex flex-col flex-1 p-8">
        <img
          class="flex-shrink-0 w-32 h-32 mx-auto bg-black rounded-full"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt=""
        />
        <h3 class="mt-6 text-sm font-medium leading-5 text-gray-900">
          Cody Fisher
        </h3>
        <dl class="flex flex-col justify-between flex-grow mt-1">
          <dt class="sr-only">Title</dt>
          <dd class="text-sm leading-5 text-gray-500">
            Lead Security Associate
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span
              class="px-2 py-1 text-xs font-medium leading-4 text-teal-800 bg-teal-100 rounded-full"
              >Admin</span
            >
          </dd>
        </dl>
      </div>
      <div class="border-t border-gray-200">
        <div class="flex -mt-px">
          <div class="flex flex-1 w-0 border-r border-gray-200">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: mail -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="flex flex-1 w-0 -ml-px">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: phone -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>

    <li class="flex flex-col col-span-1 text-center bg-white rounded-lg shadow">
      <div class="flex flex-col flex-1 p-8">
        <img
          class="flex-shrink-0 w-32 h-32 mx-auto bg-black rounded-full"
          src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt=""
        />
        <h3 class="mt-6 text-sm font-medium leading-5 text-gray-900">
          Esther Howard
        </h3>
        <dl class="flex flex-col justify-between flex-grow mt-1">
          <dt class="sr-only">Title</dt>
          <dd class="text-sm leading-5 text-gray-500">
            Assurance Administrator
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span
              class="px-2 py-1 text-xs font-medium leading-4 text-teal-800 bg-teal-100 rounded-full"
              >Admin</span
            >
          </dd>
        </dl>
      </div>
      <div class="border-t border-gray-200">
        <div class="flex -mt-px">
          <div class="flex flex-1 w-0 border-r border-gray-200">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: mail -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="flex flex-1 w-0 -ml-px">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: phone -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>

    <li class="flex flex-col col-span-1 text-center bg-white rounded-lg shadow">
      <div class="flex flex-col flex-1 p-8">
        <img
          class="flex-shrink-0 w-32 h-32 mx-auto bg-black rounded-full"
          src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt=""
        />
        <h3 class="mt-6 text-sm font-medium leading-5 text-gray-900">
          Jenny Wilson
        </h3>
        <dl class="flex flex-col justify-between flex-grow mt-1">
          <dt class="sr-only">Title</dt>
          <dd class="text-sm leading-5 text-gray-500">
            Chief Accountability Analyst
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span
              class="px-2 py-1 text-xs font-medium leading-4 text-teal-800 bg-teal-100 rounded-full"
              >Admin</span
            >
          </dd>
        </dl>
      </div>
      <div class="border-t border-gray-200">
        <div class="flex -mt-px">
          <div class="flex flex-1 w-0 border-r border-gray-200">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: mail -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="flex flex-1 w-0 -ml-px">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: phone -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>

    <li class="flex flex-col col-span-1 text-center bg-white rounded-lg shadow">
      <div class="flex flex-col flex-1 p-8">
        <img
          class="flex-shrink-0 w-32 h-32 mx-auto bg-black rounded-full"
          src="https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt=""
        />
        <h3 class="mt-6 text-sm font-medium leading-5 text-gray-900">
          Kristin Watson
        </h3>
        <dl class="flex flex-col justify-between flex-grow mt-1">
          <dt class="sr-only">Title</dt>
          <dd class="text-sm leading-5 text-gray-500">
            Investor Data Orchestrator
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span
              class="px-2 py-1 text-xs font-medium leading-4 text-teal-800 bg-teal-100 rounded-full"
              >Admin</span
            >
          </dd>
        </dl>
      </div>
      <div class="border-t border-gray-200">
        <div class="flex -mt-px">
          <div class="flex flex-1 w-0 border-r border-gray-200">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: mail -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="flex flex-1 w-0 -ml-px">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: phone -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>

    <li class="flex flex-col col-span-1 text-center bg-white rounded-lg shadow">
      <div class="flex flex-col flex-1 p-8">
        <img
          class="flex-shrink-0 w-32 h-32 mx-auto bg-black rounded-full"
          src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt=""
        />
        <h3 class="mt-6 text-sm font-medium leading-5 text-gray-900">
          Cameron Williamson
        </h3>
        <dl class="flex flex-col justify-between flex-grow mt-1">
          <dt class="sr-only">Title</dt>
          <dd class="text-sm leading-5 text-gray-500">
            Product Infrastructure Executive
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span
              class="px-2 py-1 text-xs font-medium leading-4 text-teal-800 bg-teal-100 rounded-full"
              >Admin</span
            >
          </dd>
        </dl>
      </div>
      <div class="border-t border-gray-200">
        <div class="flex -mt-px">
          <div class="flex flex-1 w-0 border-r border-gray-200">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: mail -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="flex flex-1 w-0 -ml-px">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: phone -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>

    <li class="flex flex-col col-span-1 text-center bg-white rounded-lg shadow">
      <div class="flex flex-col flex-1 p-8">
        <img
          class="flex-shrink-0 w-32 h-32 mx-auto bg-black rounded-full"
          src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt=""
        />
        <h3 class="mt-6 text-sm font-medium leading-5 text-gray-900">
          Courtney Henry
        </h3>
        <dl class="flex flex-col justify-between flex-grow mt-1">
          <dt class="sr-only">Title</dt>
          <dd class="text-sm leading-5 text-gray-500">
            Investor Factors Associate
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span
              class="px-2 py-1 text-xs font-medium leading-4 text-teal-800 bg-teal-100 rounded-full"
              >Admin</span
            >
          </dd>
        </dl>
      </div>
      <div class="border-t border-gray-200">
        <div class="flex -mt-px">
          <div class="flex flex-1 w-0 border-r border-gray-200">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: mail -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="flex flex-1 w-0 -ml-px">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: phone -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>

    <li class="flex flex-col col-span-1 text-center bg-white rounded-lg shadow">
      <div class="flex flex-col flex-1 p-8">
        <img
          class="flex-shrink-0 w-32 h-32 mx-auto bg-black rounded-full"
          src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt=""
        />
        <h3 class="mt-6 text-sm font-medium leading-5 text-gray-900">
          Theresa Webb
        </h3>
        <dl class="flex flex-col justify-between flex-grow mt-1">
          <dt class="sr-only">Title</dt>
          <dd class="text-sm leading-5 text-gray-500">
            Global Division Officer
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span
              class="px-2 py-1 text-xs font-medium leading-4 text-teal-800 bg-teal-100 rounded-full"
              >Admin</span
            >
          </dd>
        </dl>
      </div>
      <div class="border-t border-gray-200">
        <div class="flex -mt-px">
          <div class="flex flex-1 w-0 border-r border-gray-200">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: mail -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="flex flex-1 w-0 -ml-px">
            <a
              href="#"
              class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              <!-- Heroicon name: phone -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style></style>
