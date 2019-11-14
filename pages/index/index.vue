<template>
	<view>
		<cu-custom bgColor="bg-white">
			<block slot="right" class="cu-bar search">
				<view class="action margin-left-sm">
					<text class="icon-dingwei"></text>
					<text class="text-black text-bold">南宁</text>
				</view>
				<view class="search-form round solids">
					<text class="icon-sousuo"></text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="首月5折,自住2个月"
					 confirm-type="search"></input>
				</view>
			</block>
		</cu-custom>
		<view class="bg-img" style="background-image: url('../../static/index-card.png')"></view>
		<view class="postcard padding-lr-sm">
			<!-- 往上定位 -->
			<view class="cu-card article" :class="isCard?'no-card':''">
				<view class="bg-white padding-sm">
					<view class="text-bold text-black">
						<image class="postcard-img" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-26">广西和园置业有限公司</view>
							<view class="text-40">李理</view>
							<view class="text-sm"><text class="icon-lianxi1"></text>12578462584</view>
							<view class="text-sm"><text class="icon-weixin"></text>12587496354</view>
						</view>
					</view>
					<view class="text-right text-sm text-gray">累计成交：1.5W</view>
				</view>
			</view>
			<view class="text-sm text-gray">展开全部名片信息<text class="cuIcon-unfold"></text></view>
			<view class="flex text-sm text-gray">
				<view><text class="icon-huaban"></text>100%房源放价</view>
				<view><text class="icon-huabanfuben20"></text>优质保洁/极速维修</view>
				<view><text class="icon-huabanfuben22"></text>品质房屋/放心呼吸</view>
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
	/* 卡片 */
	.bg-img{
		height: 374upx;
	}
	.postcard-img{
		width: 209upx;
		height: 195upx;
	}
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
