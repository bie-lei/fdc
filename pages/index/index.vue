<template>
	<view>
		<cu-custom bgColor="bg-white">
			<block slot="right" class="cu-bar search">
				<view class="action margin-left-sm">
					<text class="iconfont icon-dingwei"></text>
					<text class="text-black text-bold">南宁</text>
				</view>
				<view class="search-form round solids">
					<text class="iconfont">&#xe606;</text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="首月5折,自住2个月"
					 confirm-type="search"></input>
				</view>
			</block>
		</cu-custom>
		<view class="padding-lr-sm card-img padding-bottom bg-white">
			<view class="postcard bg-img text-bold" style="background-image: url(../../static/index-card.png);height: 375upx;">
				<view class="postcard_tent text-black">
					<view class="text-df">广西和园置业有限责任公司</view>
					<view class="text-xl margin-top-lg">李理<view class="cu-tag text-16 bg-orange sm radius margin-left-xs">普通用户</view></view>
					<view class="margin-top-xs text-22"><text class="iconfont icon-lianxi1"></text>15785412587</view>
					<view class="margin-top-xs text-22"><text class="iconfont icon-weixin"></text>15785412587</view>
				</view>
				<view class="postcard_xl">累计成交：1.5w</view>
			</view>
			<view class="flex justify-between padding-xs text-xs text-gray"> 
				<view class="cu-item">
					<text class="iconfont icon-mifengicon-yizhuanqu_huaban"></text> 100%房源房价
				</view>
				<view class="cu-item">
					<text class="iconfont icon-mifengicon-yizhuanqu_huabanfuben20"></text> 优质保洁/急速维修
				</view>
				<view class="cu-item">
					<text class="iconfont icon-mifengicon-yizhuanqu_huabanfuben22"></text>品质房源/放心呼吸
				</view>
			</view>
		</view>
		<!-- 我的推荐 -->
		<view class="padding-bottom-sm">
			<view class="gods-S padding-top margin-bottom-sm">
				<image src="../../static/title-wdtj.png"></image>
				<view class=""></view>
			</view>
			<scroll-view scroll-x class="nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="gods-item flex flex-direction" v-for="(item,index) in 5" :key="index">
					<image src="../../static/house-2.png" mode="aspectFill"></image>
					<view class="flex justify-between flex-direction gods-text margin-top">
						<view class="text-xl">大唐·臻观</view>
						<view class="line-gray text-xs">青秀 凤岭南</view>
						<view class="text-orange text-xs">￥<text class="text-xl">11000</text>/m²</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 蜂群优选 -->
		<view class="cu-card article no-card bg-white">
			<view class="cu-item shadow">
				<view class="content no-content solid-bottom" v-for="(item,index) in 3" :key="index">
					<image src="../../static/house-1.png" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-xl">大唐·臻观</view>
						<view class="text-orange text-sm">￥<text class="text-xl">11000</text>/m²</view>
						<view class="line-gray text-22">青秀 凤岭南 | 建面 87-256m²</view>
						<view class="text-16">
							<view class="cu-tag line-gray light sm radius">大平层</view>
							<view class="cu-tag line-gray light sm radius">精装修</view>
						</view>
						<view class="text-xs flex justify-between" style="align-items:baseline">
							<view>
								<text class="cuIcon-hotfill bg-gradual-orange margin-right-xs"></text>
								<text>凤岭三中旁纯大宅</text>
							</view>
							<text class="cuIcon-unfold text-gray"></text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style>
	/* 图标 */
	.card-img .iconfont{
		display: inline-block;
		font-size: 24upx;
		margin: 0 10rpx;
	}
	/* 搜索 */
	.cu-bar.search .action>text{
		line-height: 25upx;
		font-size: 26upx;
	}
	.action .iconfont.icon-dingwei{
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
	/* 明信片 */
	.postcard{
		position: relative;
	}
	.postcard_tent{
		position: absolute;
		right: 58upx;
		top: 101upx;
	}
	.postcard_xl{
		position: absolute;
		bottom: 34upx;
		right: 20upx;
		font-size: 16upx;
	}
	.cu-tag.text-16{
		font-weight:lighter;
		 height: 27upx;
	}
	/* 标题 */
	.gods-S>image{
		width: 200upx;
		height: 68upx;
		margin-left: 20upx;
	}
	.nav .gods-item {
		display: inline-block;
		line-height: 90upx;
		margin: 0 15upx;
		width: 281upx;
		height: 360upx;
	}
	.gods-item>image{
		height:216upx;
		display: block;
		width: 100%;
	}
	.gods-text{
		line-height: 1;
		height: 112upx;
	}
	/* 商品 */
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
	.search-form{
		width: 410upx;
	}
	.cuIcon-hotfill{
		padding: 2upx;
		border-radius: 5upx;
	}
</style>
