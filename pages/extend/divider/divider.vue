<template>
	<view class="container">
		<view class="header">
			<view class="title">Divider</view>
			<view class="sub-title">分隔符：可设置占据高度，线条宽度，颜色等</view>
		</view>

		<tui-divider>默认divider</tui-divider>
		<tui-divider dividerColor="red">改变线条颜色</tui-divider>
		<tui-divider dividerColor="#5677fc" color="#5677fc">改变所有颜色</tui-divider>
		<tui-divider width="80%">改变线条宽度</tui-divider>
		<tui-divider width="60%" divideColor="red">改变线条宽度</tui-divider>
		<tui-divider :gradual="true">渐变线条</tui-divider>
		<tui-divider width="60%" :gradual="true">渐变线条</tui-divider>
		<tui-divider :gradual="true" :gradualColor="gradualColor">渐变线条</tui-divider>
		<tui-divider :size="30">改变字体大小</tui-divider>
		<tui-divider :size="30"><tui-icon name="satisfied" :size="20"></tui-icon></tui-divider>
		<tui-divider :size="36">
			<image src="https://thorui.cn/images/basic/icon.png" class="tui-divider-img"></image>
			<text class="tui-text">猜你喜欢</text>
		</tui-divider>
	</view>
</template>

<script>
export default {
	data() {
		return {
			gradualColor: ['red', '#4a67d6']
		};
	},
	methods: {}
};
</script>

<style>
.container {
	padding-bottom: 100rpx;
	box-sizing: border-box;
}

.header {
	padding: 80rpx 90rpx 40rpx 90rpx;
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

.tui-text {
	padding-left: 10rpx;
	vertical-align: middle;
	font-size: 26rpx;
}

.tui-divider-img {
	width: 32rpx;
	height: 32rpx;
	vertical-align: middle;
}
</style>