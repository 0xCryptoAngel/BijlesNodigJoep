export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
}

export const state = () => ({})

export const mutations = {
  SET_TUTORS(state, val) {
    if (val == null || val.update === undefined) {
      state.tutors = val
    } else {
      const update = val.update
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
          data.map((item) => item.attributes)
        )
      })
      .catch((error) => console.log(error))
  },
}
