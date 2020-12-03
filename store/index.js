export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
}

export const state = () => ({
  tutors: '',
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
}
