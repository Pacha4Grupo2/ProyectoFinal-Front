import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import AuthStore from '@/views/Auth/store';

Vue.use(Vuex);
import HomeStore from '@/views/Home/store';

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: { HomeStore, AuthStore },
    plugins: [createPersistedState()],
});