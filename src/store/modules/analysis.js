const state = {
  condition: {
    train_mode: '',
    train_number: ''
  }
}

const mutations = {
  SET_CONDITION: (state, condition) => {
    state.condition = condition
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
