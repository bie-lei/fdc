<template>
	<view>
		<view>
			<view class="cu-bar tabbar bg-white foot padding-lr-sm">
				<navigator :url='item.url' class="action" open-type="reLaunch" v-for="(item,index) in tabbar" :key="index" @tap="switchTab(index)">
					<view class="iconfont" :class="currentTabIndex == index ? item.icon_on : item.icon"></view>
					<view :class="currentTabIndex == index ? 'text-orange' : 'text-grey'">{{item.text}}</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>  
    export default {  
        data() {
            return {  
				tabbar: [
				    {  
				        icon_on: 'icon-mifengicon-yizhuanqu_huabanfuben14 gradient',
						icon:"icon-mifengicon-yizhuanqu_huabanfuben17 text-grey",
						url:"../index/index",
				        text: '首页',  
				    },  
				    {  
				        icon_on: 'icon-mifengicon-yizhuanqu_huabanfuben15 gradient',
						icon:'icon-mifengicon-yizhuanqu_huabanfuben12 text-grey',
						url:"../house/house",
				        text: '房源',  
				    },  
				    {  
				        icon_on: 'icon-mifengicon-yizhuanqu_huabanfuben18 gradient',
						icon:"icon-mifengicon-yizhuanqu_huabanfuben23 text-grey",
						url:"../home/home",
				        text: '我的',  
				    }  
				],
                currentTabIndex: this.current  
            }
        },  
        props: {  
            current: { type: [Number, String], default: 0 },  
            color: { type: String, default: '#999' },  
            tintColor: { type: String, default: '#42b983' }  
        },  
        methods: {  
            switchTab(index){  
                this.currentTabIndex = index
                this.$emit('click', index)  
            }  
        },  
    }  
</script>

<style>
.cu-bar.tabbar .action{
	margin: 15upx;
}
.iconfont{
	width: 50upx;
	font-size: 50upx;
	margin-bottom: 5upx;
}
.action>view{
	text-align: center;
}
.gradient{
	background-image: linear-gradient(to bottom, rgb(255,109,0), rgb(255,200,0));
	-webkit-background-clip: text;
	color: transparent;
	-webkit-text-fill-color: transparent;
	text-fill-color: transparent;
}

</style>

