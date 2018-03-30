import Vue from 'vue'
import Vuex from 'vuex'
import login from '../components/login/Login'
import header from '../components/header/header'
import footer from '../components/footer/footer'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
    	login,
    	header,
    	footer
    }
})