<template>
	<view class="container">
		<view class="header">
			<view class="title">Flex</view>
			<view class="sub-title">Flex布局</view>
		</view>
		<view class="tui-flex-box">
			<view class="tui-flex">
				<view class="tui-center tui-light-green tui-col-12">12：100%</view>
			</view>
			<view class="tui-flex">
				<view class="tui-center tui-light-green tui-col-6">6：50%</view>
				<view class="tui-center tui-light-blue tui-col-6">6：50%</view>
			</view>
			<view class="tui-flex">
				<view class="tui-center tui-light-green tui-col-4">4：33.33%</view>
				<view class="tui-center tui-light-blue tui-col-4">4：33.33%</view>
				<view class="tui-center tui-light-orange tui-col-4">4：33.33%</view>
			</view>
			<view class="tui-flex">
				<view class="tui-center tui-light-green tui-col-4">3：25%</view>
				<view class="tui-center tui-light-blue tui-col-4">3：25%</view>
				<view class="tui-center tui-light-orange tui-col-4">3：25%</view>
				<view class="tui-center tui-light-brownish tui-col-4">3：25%</view>
			</view>
			<view class="tui-flex">
				<view class="tui-center tui-light-green tui-col-8">8：66.66%</view>
				<view class="tui-center tui-light-blue tui-col-4">4：33.33%</view>
			</view>

			<view class="tui-flex">
				<view class="tui-center tui-light-blue tui-flex-1">Thor UI</view>
			</view>
			<view class="tui-flex">
				<view class="tui-center tui-light-green tui-flex-1">Thor UI</view>
				<view class="tui-center tui-light-brownish tui-flex-1">Thor UI</view>
			</view>
			<view class="tui-flex">
				<view class="tui-center tui-light-green tui-flex-1">Thor UI</view>
				<view class="tui-center tui-light-brownish tui-flex-1">Thor UI</view>
				<view class="tui-center tui-light-orange tui-flex-1">Thor UI</view>
			</view>
			<view class="tui-flex tui-align-between">
				<view class="tui-center tui-light-green tui-col-4">col-4</view>
				<view class="tui-center tui-light-brownish tui-col-4">col-4</view>
			</view>
			<view class="tui-flex tui-align-right">
				<view class="tui-center tui-light-green tui-col-4">col-4</view>
				<view class="tui-center tui-light-brownish tui-col-4">col-4</view>
			</view>
			<view class="tui-flex tui-align-center">
				<view class="tui-center tui-light-green tui-col-6">col-6</view>
				<view class="tui-center tui-light-brownish tui-col-4">col-4</view>
			</view>
			<view class="tui-flex tui-align-between">
				<view class="tui-center tui-light-green tui-col-3 ">Thor UI</view>
				<view class="tui-center tui-light-brownish  tui-col-3">Thor UI</view>
				<view class="tui-center tui-light-orange tui-col-3">Thor UI</view>
			</view>
			<view class="tui-flex tui-align-between">
				<view class="tui-center tui-light-green tui-col-6 mr">col-6 </view>
				<view class="tui-center tui-light-brownish  tui-col-6 ">col-6</view>
			</view>
			<view class="tui-flex tui-align-between">
				<view class="tui-center tui-light-green tui-col-4 mr">col-4</view>
				<view class="tui-center tui-light-brownish  tui-col-4 mr">col-4</view>
				<view class="tui-center tui-light-orange tui-col-4">col-4</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	@import '../../../static/style/thorui.css';

	.header {
		padding: 80rpx 60rpx 40rpx 60rpx;
	}

	.title {
		font-size: 36rpx;
		color: #333;
		font-weight: bold;
	}

	.sub-title {
		font-size: 28rpx;
		color: #7A7A7A;
		padding-top: 18rpx;
	}

	.tui-flex-box {
		padding: 0 30rpx 80rpx 30rpx;
		box-sizing: border-box;
		font-size: 30rpx;
	}

	.tui-center {
		padding: 18rpx 0;
		margin-bottom: 12rpx;
	}

	.mr {
		margin-right: 30rpx
	}
</style>
