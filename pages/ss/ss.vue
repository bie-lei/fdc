<template>
	<view class="bg-gradual-blue">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block>
			<block slot="content">全屏抽屉</block>
		</cu-custom>	
		<button class="cu-btn bg-green shadow" @tap="showModal" data-target="ChooseModal">Choose</button>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex no-pm margin-lr-sm text-df">
				<view class="cu-item flex-sub">
					区域<text class="cuIcon-triangledownfill"></text>
				</view>
				<view class="cu-item flex-sub" @tap="showModal" data-target="ChooseModal">
					房型<text class="cuIcon-triangledownfill"></text>
				</view>
				<view class="cu-item flex-sub">
					价格<text class="cuIcon-triangledownfill"></text>
				</view>
				<view class="flex-sub flex justify-between line-H">
					<view>更多<text class="cuIcon-triangledownfill"></text></view>
					<view class="iconfont icon-shangxia"></view>
				</view>
			</view>
		</scroll-view>
		<!-- 房型 -->
		<view class="cu-modal" :class="modalName=='ChooseModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<view class="cu-list menu" @tap.stop="">
					<view class="cu-item" v-for="(item,index) in checkbox" :key="index">
						<view class="content flex justify-between" :class="item.checked?'text-yellow':'text-black'" @tap="ChooseCheckbox" :data-value="item.value">
							<text>{{item.name}}</text>
							<text :class="item.checked? 'cuIcon-squarecheckfill':'cuIcon-square text-gray'"></text>
						</view>
					</view>
				</view>
				<view class="cu-bar btn-group padding-sm" style="margin-top:220upx">
					<view class="cu-btn bg-yellow radius lg response" @tap="hideModal">确认</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				modalName: null,
				checkbox: [{
					value: 0,
					name: '不限',
					checked: false,
				}, {
					value: 1,
					name: '一室',
					checked: true,
				}, {
					value: 2,
					name: '两室',
					checked: true,
				}, {
					value: 3,
					name: '三室',
					checked: false,
				}, {
					value: 4,
					name: '四室',
					checked: false,
				}, {
					value: 5,
					name: '五室及以上',
					checked: false,
				}],
				navT: 0
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			ChooseCheckbox(e) {
				let items = this.checkbox;
				let values = e.currentTarget.dataset.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						items[i].checked = !items[i].checked;
						break
					}
				}
			},
			navSeat(){
				const navH =uni.createSelectorQuery().select(".nav")
				const cuModal = uni.createSelectorQuery().select(".cu-modal")
				var cuModalTop = 0;
				navH.boundingClientRect(data=>{
					console.log(data)
					cuModalTop=data.top;
				}).exec()
				console.log(cuModalTop)
			}
		},
	}
</script>

<style>
	/* 筛选 */
	.flex.no-pm view{
		padding: 0;
		margin: 0;
		line-height: 53upx;
		vertical-align: center;
		height: 53upx;
	}
	.no-pm .flex-sub .cuIcon-triangledownfill{
		font-size: 30upx;
	}
	/* 弹出层 */
	.cu-modal{
		/* top: 200upx; */
	}
</style>
