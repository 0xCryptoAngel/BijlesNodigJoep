export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
  request(state) {
    const coachId = state.auth.user.user.id
    return state.requests.filter((req) => req.coachId === coachId)
  },
  hasRequest(_, getters) {
    return getters.request && getters.request.length > 0
  },
  selectedTutor(state) {
    return state.selectedTutor
  },
}

export const state = () => ({
  tutors: [],
  requests: [],
  selectedTutor: {},
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
      selectedTutor = state.tutors.find((x) => x.id === selectedTutorId)
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
}

export const actions = {
  loadAllTutors({ commit }, postcode) {
    this.$axios
      .post('http://notawanker.com/tutors/search', {
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
  contactTutor(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      message: payload.message,
    }
    context.commit('addRequest', newRequest)
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
