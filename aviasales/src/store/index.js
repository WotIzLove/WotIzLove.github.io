import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ticket from './modules/ticket'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    modules: {
        ticket
    }
})