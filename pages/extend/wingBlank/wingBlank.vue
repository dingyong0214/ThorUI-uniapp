<template>
	<view class="container">
		<tui-section fontWeight="bold" title="WingBlank" descr="左右留白，布局组件，主要用于设置内容两侧留白的间距使用。"
			padding="80rpx 90rpx 60rpx 90rpx"></tui-section>

		<tui-wing-blank size="small">
			<view class="tui-placeholder">size = small 10rpx</view>
		</tui-wing-blank>

		<tui-wing-blank margin-top="24">
			<view class="tui-placeholder">size = default 20rpx</view>
		</tui-wing-blank>

		<tui-wing-blank margin-top="24" size="large">
			<view class="tui-placeholder">size = large 30rpx</view>
		</tui-wing-blank>

		<tui-wing-blank margin-top="24" :gap="64">
			<view class="tui-placeholder">自定义间距 64rpx</view>
		</tui-wing-blank>
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