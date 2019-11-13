import Vue from 'vue'
import Vuex from 'vuex'
import {
	getToken,
	getUserinfo,
	setToken,
	setUserinfo,
	removeToken,
	removeUserinfo
} from "@/utils/auth.js"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: getToken(),
		userinfo: getUserinfo(),
		xxtoken: ''
	},
	mutations: {
		login(state, userinfo) {
			setUserinfo(userinfo);
			setToken(userinfo.token);
			state.userinfo  = userinfo
			state.token  = userinfo.token
			
		},
		logout(state) {
			removeToken();
			removeUserinfo();
			state.token = ''
			state.userinfo = {}
		},
		setXXToken(state, xxtoken){
			state.xxtoken = xxtoken
		}
	},
	actions: {

	}
})

export default store
