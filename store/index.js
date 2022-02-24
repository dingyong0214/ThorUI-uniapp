import fetch from '../common/httpRequest'

// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
// #endif

// #ifdef VUE3
import {
	createStore
} from 'vuex'
const store = createStore({
// #endif
	state: {
		//用户登录手机号
		mobile: uni.getStorageSync("thorui_mobile") || "echo.",
		//是否登录 项目中改为真实登录信息判断，如token
		isLogin: uni.getStorageSync("thorui_mobile") ? true : false,
		//登录后跳转的页面路径 + 页面参数
		returnUrl: "",
		//app版本
		version: "1.7.2",
		//当前是否有网络连接
		networkConnected: true,
		isOnline: true
	},
	mutations: {
		login(state, payload) {
			if (payload) {
				state.mobile = payload.mobile
			}
			state.isLogin = true
		},
		logout(state) {
			state.mobile = ""
			state.isLogin = false
			state.returnUrl = ""
		},
		setReturnUrl(state, returnUrl) {
			state.returnUrl = returnUrl
		},
		networkChange(state, payload) {
			state.networkConnected = payload.isConnected
		},
		setOnline(state, payload) {
			state.isOnline = state.isOnline
		}
	},
	actions: {
		getOnlineStatus: async function({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				// #ifndef MP-WEIXIN
				resolve(true)
				// #endif
				// #ifdef MP-WEIXIN
				if (state.isOnline) {
					resolve(state.isOnline)
				} else {
					fetch.request("/Home/GetStatus", "GET", {}, false, true, true).then((res) => {
						if (res.code == 100 && res.data == 1) {
							commit('setOnline', {
								isOnline: true
							})
							resolve(true)
						} else {
							commit('setOnline', {
								isOnline: false
							})
							resolve(false)
						}
					}).catch((res) => {
						reject(false)
					})
				}
				// #endif
			})
		}
	}
})

export default store
