export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state, users) {
    state.token = users
  },
  clearToken(state) {
    state.token = null
  }
};

export const actions = {
  async login({commit}) {
    commit('setToken', 'truetoken')
  },
  logout({commit}) {
    commit('clearToken')
  }
};

export const getters = {
  hasToken: s => !!s.token
};
