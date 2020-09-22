export default {
  namespaced: true,
  state: {
    products: [],
    errorLoaded: false,
    modal: false,
    backColor: false,
    totalProducts: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_ERROR_LOADED(state, stateError) {
      state.errorLoaded = stateError;
    },
    MODALON(state) {
      state.modal = !state.modal;
      state.backColor = !state.backColor;
    },
    BACKCOLOR(state) {
      state.backColor = !state.backColor;
    },
    ADD_PRODUCT(state, product) {
      const found = state.totalProducts.find(
        (currentProduct) => currentProduct.id === product.id
      );
      const index = state.totalProducts
        .map((currentProduct) => currentProduct.id)
        .indexOf(product.id);

      console.log("found", found);
      console.log("index", index);

      if (!found) {
        product.total = 1;
        state.totalProducts.push(product);
      } else {
        // console.log(" existe!!");
        // state.totalProducts[index].total = state.totalProducts[index].total + 1;
        // state.totalProducts = [...state.totalProducts];
      }
    },
    REMOVE_PRODUCT(state, product) {
      state.totalProducts = state.totalProducts.filter(
        (currentProduct) => currentProduct.id !== product.id
      );
    },
  
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const products = await fetch(
          "https://backendhackatonfinal.herokuapp.com/producto/"
        ).then((response) => response.json());
        console.log("responsive", products);
        commit("SET_ERROR_LOADED", false);
        commit("SET_PRODUCTS", products);
      } catch (error) {
        commit("SET_ERROR_LOADED", true);
      }
    },
    getModal({ commit }) {
      // commit('BACKCOLOR');
      commit("MODALON");
    },
    getModalB({ commit }) {
      commit("MODALON");
    },
    addProduct({ commit }, product) {
      commit("ADD_PRODUCT", product);
    },
    removeProduct({ commit }, product) {
      commit("REMOVE_PRODUCT", product);
    },
  },
  modules: {},
};
