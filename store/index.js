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
  requestHistory(_, getters) {
    return getters.request && getters.request.coachId === 77
  },
}

export const state = () => ({
  tutors: '',
  requests: [],
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
}
