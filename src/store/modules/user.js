// state
const state = {
  currency: 'NGN',
};

// getters
const getters = {
  currency: state => state.loggedInUser,
};

// actions
const actions = {
  changeCurrency({ commit }) {
    const currency = 'USD';
    commit('changeCurrency', { currency });
  },
};

// mutations
const mutations = {
  changeCurrency(state, { currency }) {
    state.currency = currency;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
