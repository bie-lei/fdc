export function getToken() {
	return uni.getStorageSync('token')
}

export function setToken(token) {
	return uni.setStorageSync('token',token)
}

export function removeToken() {
  return uni.removeStorageSync('token')
}

export function getUserinfo(userinfo){
	return uni.getStorageSync('userinfo')
}

export function setUserinfo(userinfo){
	return uni.setStorageSync('userinfo',userinfo)
}

export function removeUserinfo() {
  return uni.removeStorageSync('userinfo')
}


