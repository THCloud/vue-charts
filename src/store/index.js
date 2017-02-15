import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import chart from './modules/chart';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    getters,
    modules: {
        chart
    },
    strict: debug
});
