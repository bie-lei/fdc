import {
	getToken,
	getXXToken
} from "@/utils/auth.js"
import store from '@/store'

export default {
  //请求地址
	config: {
		base: process.env.NODE_ENV === 'production' ? '' : ''
	},
	post(url, data) {
		return this.request(url, data, 'POST')
	},
	get(url, data) {
		return this.request(url, data, 'GET')
	},
	request(url, data, method) {
		return new Promise((resolve, reject) => {
			let token = {token:getToken()}
			data = {...data,...token}
			uni.request({
				url: this.config.base + url,
				method: method,
				data: data,
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
					// 'X-TOKEN': getToken(),
					// 'XX-TOKEN': store.state.xxtoken
				},
				success: res => {
					const {
						data,
						statusCode
					} = res
					if (statusCode === 200) {
						if (data.code == 1) {
							resolve(data.data)
						} else {
							reject(data)
						}
					}else if(statusCode === 401){
						uni.reLaunch({
							url:'/pages/auth/login'
						})
					} else {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						});
					}
				},
				fail: (msg) => {
					uni.showToast({
						title: '网络错误',
						icon: 'none'
					});
				}
			});
		})
	},
	uploadfile(url,data,tempFile){
		
		return new Promise((resolve, reject) => {
			let token = {token:getToken()},
			data = {...data,...token}
			uni.uploadFile({
				url: this.config.base + url,
				filePath: tempFile,
				name: 'file',
				formData: data,
				success: (res) => {
					console.log(res)
					let {
						data,
						statusCode
					} = res
					if (statusCode === 200) {
						data = JSON.parse(data);
						if (data.code == 1) {
							resolve(data.data)
						} else {
							reject(data)
						}
					} else {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						});
					}
				}
			});
		})
	}
}
