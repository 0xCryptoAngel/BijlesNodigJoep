export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
  request(state) {
    const coachId = 88
    return state.requests.filter((req) => req.coachId === coachId)
  },
  hasRequest(_, getters) {
    return getters.request && getters.request.length > 0
  },
  selectedTutor(state) {
    return state.selectedTutor
  },
  allMessages(state) {
    return state.messages
  },
  allUserList(state) {
    return state.userList
  },
}

export const state = () => ({
  tutors: [],
  requests: [],
  selectedTutor: {},
  messages: [],
  userList: [],
})

export const mutations = {
  SET_TUTORS(state, tutors) {
    if (tutors == null || tutors.update === undefined) {
      state.tutors = tutors
    } else {
      const update = tutors.update
      state.tutors = { ...state.tutors, ...update }
    }
  },
  addRequest(state, payload) {
    state.requests.push(payload)
    this.$cookies.set('requests', state.requests)
  },
  setSelectedTutor(state, selectedTutorId) {
    let selectedTutor
    if (selectedTutorId) {
      selectedTutor = state.tutors.find((x) => x.data.id === selectedTutorId)
      if (selectedTutor) {
        state.selectedTutor = selectedTutor
        this.$cookies.set('selectedTutor', state.selectedTutor)
      }
    }
  },
  initSelectedTutor(state, initSelectedTutor) {
    state.selectedTutor = initSelectedTutor
  },
  initRequests(state, initRequests) {
    state.requests = initRequests
  },
  setUserList(state, userList) {
    state.userList = userList
  },
  setMessages(state, messages) {
    state.messages = messages
  },
}

export const actions = {
  loadAllTutors({ commit }, postcode) {
    console.log(postcode)
    this.$axios
      .post('https://notawanker.com/tutors/search', {
        postcode,
      })

      .then(({ data }) => {
        commit(
          'SET_TUTORS',
          data.map((item) => item)
        )
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  },
  async getMessageUserList({ commit }, messageeid) {
    const data = JSON.stringify({
      messagee_id: messageeid,
      page_size: 1,
      page_number: 0,
    })
    /* const formData = new FormData()
    formData.append('messagee_id', messageeid) */
    await this.$axios
      .post('https://notawanker.com/messages/search', data)

      .then(({ data }) => {
        console.log(data, 'first api')
        // commit('setMessages', data.data)
        commit('setUserList', data.included)
        console.log(data)
      })
      .catch((error) => {
        this.$toast.error('Messages not found', { duration: 3000 })
        commit('setMessages', '')
        console.log(error)
      })
  },
  async fetchMesages({ commit }, messageeid) {
    console.log(messageeid)
    /* const messageData = JSON.stringify({
      messagee_id: messageeid,
      page_size: 1,
      page_number: 0,
    })

    const config = {
      method: 'post',
      url: 'https://notawanker.com/messages/search',
      headers: {
        'Content-Type': 'application/json',
      },
      messageData,
    }

    await this.$axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      }) */
    commit('setMessages', [])
    const data = JSON.stringify({
      messagee_id: parseInt(messageeid),
      page_size: 1,
      page_number: 0,
    })
    const config = {
      method: 'post',
      url: 'https://notawanker.com/messages/search',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }

    await this.$axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
        commit('setMessages', response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  // eslint-disable-next-line camelcase
  contactTutor({ commit }, message) {
    this.$axios
      .post('https://notawanker.com/messages', {
        message,
      })
      .then(({ data }) =>
        commit(
          'addRequest',
          data.map((item) => item)
        )
      )
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  },
  setSelectedTutor({ commit }, tutorId) {
    commit('setSelectedTutor', tutorId)
  },
  nuxtServerInit({ commit, dispatch }, { req }) {
    // Parse cookies with cookie-universal-nuxt
    const SelectedTutor = this.$cookies.get('selectedTutor')
    const Requests = this.$cookies.get('requests')
    // Check if Cookie selectedTutor exists to set them in 'cookies'
    if (SelectedTutor) {
      commit('initSelectedTutor', SelectedTutor)
    }
    // Check if Cookie requests exists to set them in 'cookies'
    if (Requests) {
      commit('initRequests', Requests)
    }
  },
}
