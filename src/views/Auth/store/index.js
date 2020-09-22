export default {
  namespaced: true,
  state: {
    user: {},
    isLogin: false,
  },
  mutations: {},
  actions: {
    async postLogin({ commit }, payload) {
      console.log("api logueo", commit, payload);
    },
    async postRegister({ commit }, payload) {
      console.log("api logueo", commit, payload);
    },
  },
  modules: {},
};
