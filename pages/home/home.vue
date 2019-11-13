<template>
	<view>
		<cu-custom>
			<block slot="right">
				<view class="iconfont icon-liaotian text-gray margin-left-sm"></view>
			</block>
		</cu-custom>
		<view class="">
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					<text class="cuIcon-titles text-yellow"></text>
					<text class="text-xl text-bold">我的提醒</text>
				</view>
			</view>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					<text class="cuIcon-titles text-yellow"></text>
					<text class="text-xl text-bold">我的客户</text>
				</view>
			</view>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					<text class="cuIcon-titles text-yellow"></text>
					<text class="text-xl text-bold">业绩看板</text>
				</view>
			</view>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					<text class="cuIcon-titles text-yellow"></text>
					<text class="text-xl text-bold">拓客工具</text>
				</view>
			</view>
		</view>
		<!-- <tab-bar :current="currentTabIndex" @click="tabClick"></tab-bar> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTabIndex: 2
			}
		},
		methods: {
			tabClick(index) {
				console.log('返回tabBar索引' + index)
				this.currentTabIndex = index
			}
		}
	}
</script>

<style>
</style>
