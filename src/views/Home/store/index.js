import store from "../../../store/";
import router from "../../../router";
export default {
  namespaced: true,
  state: {
    products: [],
    producto: {
      categoria: "",
      descripcion: "",
      descuento: "",
      id: "",
      igv: "",
      imagen: "",
      imagen_card: "",
      nombre: "",
      precio: "",
    },
    errorLoaded: false,
    modal: false,
    backColor: false,
    totalProducts: [],
    ListPurchases: [],
    totalPrice: 0,
    cuponActive: false,
    cupon: {},
    desCupon: 0,
  },
  mutations: {
    SET_TOTAL_PRICE(state) {
      if (state.cuponActive) {
        const total = state.totalProducts.reduce((num, { precio }) => {
          return num + parseInt(precio);
        }, 0);
        state.totalPrice = total - state.desCupon;
      } else {
        const total = state.totalProducts.reduce((num, { precio }) => {
          return num + parseInt(precio);
        }, 0);
        state.totalPrice = total;
      }
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCTO(state, producto) {
      state.producto = producto;
    },
    SET_DESCUENTO(state, cupon) {
      state.cupon = cupon;
      let num = state.cupon.descuento;
      let convertir = parseInt(num) / 100;
      let des = state.totalPrice * convertir;
      state.desCupon = des;
      state.cuponActive = true;

      store.commit("HomeStore/SET_TOTAL_PRICE");

      //   location.reload();
      //   console.log(state.desCupon);
    },
    ELIMINARCUPON(state, eliminar) {
      state.cuponActive = eliminar;
      store.commit("HomeStore/SET_TOTAL_PRICE");
    },
    SET_ERROR_LOADED(state, stateError) {
      state.errorLoaded = stateError;
      setTimeout(() => {
        state.errorLoaded = false;
      }, 5000);
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
      state.totalProducts = state.totalProducts.filter((currentProduct) => {
        console.log(currentProduct.id);
        return currentProduct.id !== product;
      });
      state.totalPrice = state.totalProducts.reduce((num, { precio }) => {
        return num + parseInt(precio);
      }, 0);
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const products = await fetch(
          "https://backendhackatonfinal.herokuapp.com/producto/"
        ).then((response) => response.json());
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
    getPriceTotal({ commit }) {
      commit("SET_TOTAL_PRICE");
    },
    eliminar({ commit }, producto) {
      commit("REMOVE_PRODUCT", producto);
    },
    async getProducto({ commit }, id) {
      try {
        const producto = await fetch(
          `https://backendhackatonfinal.herokuapp.com/producto/${id}`
        ).then((response) => response.json());
        commit("SET_ERROR_LOADED", false);
        commit("SET_PRODUCTO", producto);
      } catch (error) {
        commit("SET_ERROR_LOADED", true);
      }
    },
    async getCupon({ commit }, payload) {
      try {
        const cupon = await fetch(
          `https://backendhackatonfinal.herokuapp.com/cupon/?codigo=${payload}`,
          {
            method: "GET",
            // body: JSON.stringify(payload),
          }
        ).then((response) => response.json());
        commit("SET_ERROR_LOADED", false);
        console.log(cupon);
        commit("SET_DESCUENTO", cupon[0]);
      } catch (error) {
        commit("SET_ERROR_LOADED", true);
      }
    },
    eliminarCupon({ commit }) {
      commit("ELIMINARCUPON", false);
    },
    // async paymentCulqui({ commit }, formData) {
    //   fetch("https://925c87f44515.ngrok.io/charges/", {
    //     method: "POST",
    //     body: JSON.stringify(formData),
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization:
    //         "Bearer " +
    //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAxMDI2MDMxLCJqdGkiOiJlMzNhZDA0OWM3Mjg0MWJhOWUwNWI1YjQyNDYyODgyYyIsInVzZXJfaWQiOjF9.QP7_8wdoAhLd6J08ydvO43U7tMrvpj5weQAnnYVP9JY",
    //     },
    //   });
    // },
    /* eslint-disable */
    async paymentCulqui({ commit }, formData) {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAxMDI2MDMxLCJqdGkiOiJlMzNhZDA0OWM3Mjg0MWJhOWUwNWI1YjQyNDYyODgyYyIsInVzZXJfaWQiOjF9.QP7_8wdoAhLd6J08ydvO43U7tMrvpj5weQAnnYVP9JY"
      );
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow",
      };
      fetch("https://925c87f44515.ngrok.io/charges/", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          router.push("/pago/resumen");
        })
        .catch((error) => alert("No se pudo realizar la compra"));
    },
  },
  modules: {},
};
