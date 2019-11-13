<template>
	<view class="bottom">
		<cu-custom bgColor="bg-white">
			<block slot="right" class="cu-bar search">
				<view class="action">
					<text class="iconfont">&#xe617;</text>
					<text>南宁</text>
				</view>
				<view class="search-form round solids">
					<text class="iconfont">&#xe606;</text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="首月5折,自住2个月"
					 confirm-type="search"></input>
				</view>
			</block>
		</cu-custom>
		<view class="margin-bottom-xl">
			<view class="cu-bar tabbar bg-white margin-tb-sm">
				<view class="action flex-sub">
					<view class="cuIcon-cu-image">
						<image src="/static/tabbar/mifengicon-yizhuanqu_huabanfuben1.png"></image>
					</view>
					<view class="text-black">全部楼盘</view>
				</view>
				<view class="action flex-sub">
					<view class="cuIcon-cu-image">
						<image src="/static/tabbar/mifengicon-yizhuanqu_huabanfuben.png"></image>
					</view>
					<view class="text-black">在售楼盘</view>
				</view>
				<view class="action flex-sub">
					<view class="cuIcon-cu-image">
						<image src="/static/tabbar/mifengicon-yizhuanqu_huabanfuben2.png"></image>
					</view>
					<view class="text-black">即将开盘</view>
				</view>
				<view class="action flex-sub">
					<view class="cuIcon-cu-image">
						<image src="/static/tabbar/mifengicon-yizhuanqu_huabanfuben5.png"></image>
					</view>
					<view class="text-black">近期已推</view>
				</view>
				<view class="action flex-sub">
					<view class="cuIcon-cu-image">
						<image src="/static/tabbar/mifengicon-yizhuanqu_huabanfuben13.png"></image>
					</view>
					<view class="text-black">小面积</view>
				</view>
			</view>
			<!-- 轮播图位置 -->
			<view class="cu-card margin-tb">
				<image src="../../static/house-banner.png" class="padding-lr-sm response" mode="aspectFill" style="height:220upx;"></image>
			</view>
			<!-- 筛选 -->
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex no-pm margin-lr-sm text-df">
					<view class="cu-item flex-sub ">
						区域<view class="iconfont text-xs">&#xe64a;</view>
					</view>
					<view class="cu-item flex-sub">
						房型<view class="iconfont text-xs">&#xe64a;</view>
					</view>
					<view class="cu-item flex-sub">
						价格<view class="iconfont text-xs">&#xe64a;</view>
					</view>
					<view class="flex-sub flex justify-between line-H">
						<view>更多<view class="iconfont text-xs">&#xe64a;</view></view>
						<view class="iconfont text-df">&#xe64f;</view>
					</view>
				</view>
			</scroll-view>
			<view class="cu-card article no-card">
				<view class="cu-item shadow">
					<view class="content no-content solid-bottom" v-for="(item,index) in 3" :key="index">
						<image src="../../static/house-1.png" mode="aspectFill"></image>
						<view class="desc">
							<view class="text-xl">大唐·臻观</view>
							<view class="text-orange text-sm">￥<text class="text-xl">11000</text>/m²</view>
							<view class="line-gray text-sm">青秀 凤岭南 | 建面 87-256m²</view>
							<view>
								<view class="cu-tag line-gray light sm radius">大平层</view>
								<view class="cu-tag line-gray light sm radius">精装修</view>
							</view>
							<view class="text-xs flex justify-between">
								<view class="flex">
									<text class="radius tubiao cuIcon-hotfill text-white bg-orange"></text>
									<view class="">凤岭三中旁边大宅</view>
								</view>
								<view class="cuIcon-unfold text-gray"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
	    </view>
		<!-- 底部 -->
		<tab-bar :current="currentTabIndex" @click="tabClick"></tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTabIndex:1
			}
		},
		methods: {
			tabClick(index){
				console.log('返回tabBar索引' + index)
				this.currentTabIndex = index
			}
		}
	}
</script>
<!-- <script src='../../components/iconfont.js'></script> -->

<style>
	page {
		background-color: white;
	}
	/* 搜索 */
	.action>text{
		line-height: 25upx;
		font-size: 26upx;
	}
	.action.flex-sub .iconfont{
		color: rgb(255,186,1);
		padding-right: 10upx;
	}
	.search-form{
		width: 410upx;
	}
	.search-form>.iconfont{
		font-size: 18upx;
		margin:0 15upx 0 20upx;
	}
	/* 筛选 */
	.flex.no-pm view{
		padding: 0;
		margin: 0;
		line-height: 53upx;
		vertical-align: center;
		height: 53upx;
	}
	.no-pm>.flex-sub .iconfont{
		display: inline-block;
		margin-left: 9upx;
		font-size: 16upx;
	}
	.no-pm>.flex-sub.line-H>.iconfont{
		font-size: 28upx;
	}
	/* 操作调one */
	.cu-bar.tabbar .action.flex-sub .cuIcon-cu-image image {
		width: 71upx;
		height: 73upx;
		display: inline-block;
	}
	/* 商品的样式 */
	.gods-text{
		flex: 1.3;
		margin-left: 45rpx;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	.tubiao{
		line-height: 25rpx;
		width: 25rpx;
		text-align: center;
		margin-right: 10rpx;
	}
	.cu-card.article>.cu-item .content.no-content{
		padding: 30upx 0;
		margin: 0 20upx;
	}
	.cu-card.article.no-card>.cu-item {
		padding-bottom: 0;
	}
	.cu-card.article>.cu-item .content>image {
		flex: 1;
		width: 100%;
		height: 220upx;
		margin-right: 0;
		border-radius: 6upx;
	}
	.cu-card.article>.cu-item .content.no-content .desc {
		flex: 1.3;
		margin-left: 45rpx;
	}
	.bottom{
		margin-bottom: 100rpx;;
	}
</style>
