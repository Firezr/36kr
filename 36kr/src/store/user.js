export default {
  state: {
    name: 'blue',
    age: 0
  },
  mutations: {
    setAge(state, arg){
      state.age=arg;
    }
  },
  actions: {
    setAge({commit}, arg){
      commit('setAge', arg);
    }
  },
  getters: {
  }
};
