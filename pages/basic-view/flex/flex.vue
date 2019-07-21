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
		},
		methods: {

		}
	}
</script>

<style>
	@import '../../../static/style/thorui.css';

	.header {
		padding: 80upx 60upx 40upx 60upx;
	}

	.title {
		font-size: 36upx;
		color: #333;
		font-weight: bold;
	}

	.sub-title {
		font-size: 28upx;
		color: #7A7A7A;
		padding-top: 18upx;
	}

	.tui-flex-box {
		padding: 0 30upx 80upx 30upx;
		box-sizing: border-box;
		font-size: 30upx;
	}

	.tui-center {
		padding: 18upx 0;
		margin-bottom: 12upx;
	}

	.mr {
		margin-right: 30upx
	}
</style>
