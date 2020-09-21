export default {
    namespaced: true,
    state: {
        products: [],
        errorLoaded: false,
        modal: false,
        backColor: false,
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
        },
        BACKCOLOR(state) {
            state.backColor = !state.backColor;
        },
    },
    actions: {
        async getProducts({ commit }) {
            try {
                const products = await fetch(
                    'https://backendhackatonfinal.herokuapp.com/producto/'
                ).then((response) => response.json());
                console.log('responsive', products);
                commit('SET_ERROR_LOADED', false);
                commit('SET_PRODUCTS', products);
            } catch (error) {
                commit('SET_ERROR_LOADED', true);
            }
        },
        getModal({ commit }) {
            commit('BACKCOLOR');
            commit('MODALON');
        },
        getModalB({ commit }) {
            commit('MODALON');
        },
    },
    modules: {},
};