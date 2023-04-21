<template>
	<view class="container">
		<tui-section fontWeight="bold" title="WhiteSpace" descr="上下留白，布局组件，主要用于设置内容之间间距使用。"
			padding="80rpx 90rpx 60rpx 90rpx"></tui-section>

		<view class="tui-placeholder">size = small 10rpx</view>
		<tui-white-space size="small"></tui-white-space>
		<view class="tui-placeholder">size = default 20rpx</view>
		<tui-white-space></tui-white-space>
		<view class="tui-placeholder">size = large 30rpx</view>
		<tui-white-space size="large"></tui-white-space>
		<view class="tui-placeholder">自定义间距 64rpx</view>
		<tui-white-space :height="64"></tui-white-space>
		<view class="tui-placeholder">ThorUI</view>
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
	.container {
		padding: 20rpx 0 120rpx;
		box-sizing: border-box;
		overflow: hidden;
	}

	.tui-placeholder {
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;
		background: #f2f2f2;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		color: #999;
	}
</style>