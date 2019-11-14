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

			<view class="cu-bar bg-white margin-top solid-bottom">
				<view class="action">
					<text class="cuIcon-titles text-yellow"></text>
					<text class="text-xl text-bold">我的客户</text>
				</view>
			</view>
			<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
				<view class="cu-item solid" v-for="(item,index) in 5" :key="index">
					<view class="iconfont icon-mifengicon-yizhuanqu_huabanfuben8"></view>
					<text>客服管理</text>
				</view>
			</view>

			<view class="cu-bar bg-white margin-top solid-bottom">
				<view class="action">
					<text class="cuIcon-titles text-yellow"></text>
					<text class="text-xl text-bold">业绩看板</text>
				</view>
			</view>
			<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
				<view class="cu-item solid" v-for="(item,index) in 3" :key="index">
					<view class="iconfont icon-mifengicon-yizhuanqu_huabanfuben8"></view>
					<text>客服管理</text>
				</view>
			</view>

			<view class="cu-bar bg-white margin-top solid-bottom">
				<view class="action">
					<text class="cuIcon-titles text-yellow"></text>
					<text class="text-xl text-bold">拓客工具</text>
				</view>
			</view>
			<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
				<view class="cu-item solid" v-for="(item,index) in 2" :key="index">
					<view class="iconfont icon-mifengicon-yizhuanqu_huabanfuben8"></view>
					<text>客服管理</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gridCol: 3,
				gridBorder: false
			}
		},
		methods: {
			Gridchange(e) {
				this.gridCol = e.detail.value
			},
			Gridswitch(e) {
				this.gridBorder = e.detail.value
			}
		}
	}
</script>

<style>
.cu-list.grid.no-border>.cu-item {
	padding: 50upx;
}
.cu-list.grid.no-border {
	padding: 0
}
.cu-list.grid.no-border>.cu-item:after {
	border: 1upx solid rgba(0, 0, 0, 0.1);
	/* border-bottom: 2upx solid red; */
}

.cu-list.grid>.cu-item>.iconfont {
	font-size: 59upx
}
</style>
