import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false

const tui = {
	toast: function(text, duration, success) {
		uni.showToast({
			title: text,
			icon: success ? 'success' : 'none',
			duration: duration || 2000
		})
	},
	constNum: function() {
		const res = uni.getSystemInfoSync();
		return res.platform.toLocaleLowerCase() == "android" ? 300 : 0;
	},
	px:function(num){
		return uni.upx2px(num)+'px';
	},
	interfaceUrl: function() {
		//接口地址
		return "http://39.108.124.252:12000/";
	},
	request: function(url, postData, method, type, hideLoading) {
		//接口请求
		if (!hideLoading) {
			uni.showLoading({
				mask: true,
				title: '请稍候...'
			})
		}
		return new Promise((resolve, reject) => {
			uni.request({
				url: this.interfaceUrl() + url,
				data: postData,
				header: {
					'content-type': type ? 'application/x-www-form-urlencoded' : 'application/json',
					'authorization': this.getToken(),
					'security': 1
				},
				method: method, //'GET','POST'
				dataType: 'json',
				success: (res) => {
					!hideLoading && uni.hideLoading()
					if (res.data && res.data.code === 403 && !postData.modalAbate) {
						uni.showModal({
							title: '登录',
							content: '您尚未登录，请先登录',
							showCancel: false,
							confirmColor: "#5677FC",
							confirmText: '确定',
							success(e) {
								uni.redirectTo({
									url: '/pages/login/login'
								})
							}
						})
					} else {
						resolve(res.data)
					}
				},
				fail: (res) => {
					if (!hideLoading) {
						this.toast("网络不给力，请稍后再试~")
						//uni.hideLoading()
					}
					reject(res)
				}
			})
		})
	},
	uploadFile: function(src) {
		const that = this
		uni.showLoading({
			title: '请稍候...'
		})
		return new Promise((resolve, reject) => {
			const uploadTask = uni.uploadFile({
				url: 'https://abc.cc',
				filePath: src,
				name: 'file',
				header: {
					'content-type': 'multipart/form-data'
				},
				formData: {},
				success: function(res) {
					uni.hideLoading()
					let d = JSON.parse(res.data)
					if (d.code === 1) {
						let fileObj = JSON.parse(d.data)[0];
						//文件上传成功后把图片路径数据提交到服务器，数据提交成功后，再进行下张图片的上传
						resolve(fileObj)
					} else {
						that.toast(res.message);
					}
				},
				fail: function(res) {
					reject(res)
					uni.hideLoading();
					that.toast(res.message);
				}
			})
		})
	},
	setToken: function(token) {
		uni.setStorageSync("token", token)
	},
	getToken() {
		return uni.getStorageSync("token")
	},
	isLogin: function() {
		return uni.getStorageSync("token") ? true : false
	}
}

Vue.prototype.tui = tui
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
