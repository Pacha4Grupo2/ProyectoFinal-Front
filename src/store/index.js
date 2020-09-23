import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
import HomeStore from '@/views/Home/store';

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: { HomeStore },
    plugins: [createPersistedState()],
});