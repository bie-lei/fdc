<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true"><block slot="backText">返回</block>
			<block slot="content">轮播图</block>
		</cu-custom>
		<swiper class="screen-swiper" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: '../../static/house-3.png'
				}, {
					id: 1,
					type: 'image',
					url: '../../static/house-3.png',
				}, {
					id: 2,
					type: 'image',
					url: '../../static/house-3.png',
				}]
			};
		},
		methods: {
		}
	}
</script>

<style>
.screen-swiper{
	height: 576upx;
}
</style>
