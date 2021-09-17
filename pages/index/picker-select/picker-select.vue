<template>
	<view class="container">
		<view class="header">
			<view class="title">picker 联动选择</view>
			<view class="sub-title">联动选择，常用示例展示</view>
		</view>
		<view class="tui-btn-box">
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="picker(1)">picker三级联动</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="picker(2)">picker-view三级联动</tui-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		picker(type) {
			let url='../picker/picker'
			if(type==2){
				url='../picker-view/picker-view'
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
