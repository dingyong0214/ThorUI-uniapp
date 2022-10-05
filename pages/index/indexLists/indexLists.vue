<template>
	<view class="container">
		<view class="header">
			<view class="title">index-list</view>
			<view class="sub-title">索引列表，常用示例展示</view>
		</view>
		<view class="tui-btn-box">
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="indexList(1)">城市选择</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="indexList(2)">索引列表</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="indexList(3)">索引+吸顶效果</tui-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		indexList(type) {
			let url='../selectCity/selectCity'
			if(type==2){
				url='../indexList/indexList'
			}else if(type==3){
				url='/pages/template/chat/contacts/contacts'
			}
			this.tui.href(url)
		}
	}
};
</script>

<style>
.container {
	padding: 20rpx 0 120rpx 0;
	box-sizing: border-box;
}

.header {
	padding: 80rpx 90rpx 60rpx 90rpx;
	box-sizing: border-box;
}

.title {
	font-size: 34rpx;
	color: #333;
	font-weight: 500;
}

.sub-title {
	font-size: 24rpx;
	color: #7a7a7a;
	padding-top: 18rpx;
}

.tui-btn-box {
	width: 100%;
	padding: 10rpx 40rpx;
	box-sizing: border-box;
}

</style>
