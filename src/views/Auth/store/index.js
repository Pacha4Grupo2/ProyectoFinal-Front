import router from "@/router/index";

export default {
  namespaced: true,
  state: {
    userToken: {},
    isLogin: false,
    errorLoaded: false,
    user:{}
  },
  mutations: {
    SET_USER_TOKEN(state, userToken) { // { nombre: "Andre", email: "",id: 12 }
      state.userToken = userToken;
    },
    SET_IS_LOGIN(state, isLogin) {
      state.isLogin = true;
      state.user= isLogin;
    },
    SET_ERROR_LOADED(state, stateError) {
      state.errorLoaded = stateError;
    },
  },
  actions: {
    async postLogin({ commit }, payload) {
      console.log("api logueo", payload);
      try {
        const form = new FormData()
        form.append("username", payload.username)
        form.append("password", payload.password)

        
        const loginResponse = await fetch(
          "https://backendhackatonfinal.herokuapp.com/api/token/",
          {
            method: "POST",
            body: form,
          }
        )
        const bodyResponse = await loginResponse.json();
        
        console.log(loginResponse)
        if(loginResponse.status !== 200) { // no ok
          alert(bodyResponse.detail)
        } else {
          bodyResponse.access

          // alert(`Bienvenido ${usuario.nombre}`);
          commit("SET_ERROR_LOADED", false);
          commit("SET_USER_TOKEN", bodyResponse.access);
          commit("SET_IS_LOGIN", loginResponse);
          router.push("/");
        }
      } catch (e) {
        commit("SET_ERROR_LOADED", true);
      }
    },
    async postRegister({ commit }, payload) {
      try {
        const registerResponse = await fetch(
          "https://backendhackatonfinal.herokuapp.com/cliente/",
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "content-Type": "application/json",
            },
          }
        ).then((response) => response.json());
        commit("SET_ERROR_LOADED", false);
        alert(`${registerResponse.nombre} se ha registado satisfactoriamente`);
        router.push("/auth/login");

      } catch (e) {
        commit("SET_ERROR_LOADED", true);
      }
    },
  },
  modules: {},
};
