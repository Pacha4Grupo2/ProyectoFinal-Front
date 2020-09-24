import router from "@/router/index";

export default {
  namespaced: true,
  state: {
    user: {},
    isLogin: false,
    errorLoaded: false,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_IS_LOGIN(state, isLogin) {
      state.isLogin = isLogin;
    },
    SET_ERROR_LOADED(state, stateError) {
      state.errorLoaded = stateError;
    },
  },
  actions: {
    async postLogin({ commit }, payload) {
      console.log("api logueo", payload);
      try {
        const loginResponse = await fetch(
          "https://backendhackatonfinal.herokuapp.com/loginCliente/",
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "content-Type": "application/json",
            },
          }
        ).then((response) => response.json());

        if (loginResponse.error) {
          alert(loginResponse.data);
        } else {
          const usuario = loginResponse.cliente[0];
          alert(`Bienvenido ${usuario.nombre}`);
          router.push("/")
        }

        // commit("SET_ERROR_LOADED", false);
        // commit("SET_USER", loginResponse);
        // commit("SET_IS_LOGIN", true);
      } catch (e) {
        commit("SET_ERROR_LOADED", true);
      }
    },
    async postRegister({ commit }, payload) {
      console.log("api logueo", commit, payload);
      try {
        await fetch("https://backendhackatonfinal.herokuapp.com/cliente", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "content-Type": "application/json",
          },
        }).then((response) => response.json());
        commit("SET_ERROR_LOADED", false);
        // commit("SET_USER", login);
        // commit("SET_IS_LOGIN", true);
      } catch (e) {
        commit("SET_ERROR_LOADED", true);
      }
    },
  },
  modules: {},
};
