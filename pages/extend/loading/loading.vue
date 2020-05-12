<template>
	<view class="container">
		<view class="tui-header">
			<view class="tui-title">Loading</view>
			<view class="tui-sub-title">加载中...</view>
		</view>

		<!--正在加载 start-->
		<tui-loadmore></tui-loadmore>
		<!--正在加载 end-->

		<!--正在加载 start-->
		<tui-loadmore :index="2"></tui-loadmore>
		<!--正在加载 end-->
		<!--正在加载 start-->
		<tui-loadmore :index="3"></tui-loadmore>
		<tui-loadmore :index="3" type="primary"></tui-loadmore>
		<tui-loadmore :index="3" type="red"></tui-loadmore>
		<tui-loadmore :index="3" type="orange"></tui-loadmore>
		<tui-loadmore :index="3" type="green"></tui-loadmore>
		<!--正在加载 end-->
		<!--没有更多了 start-->
		<tui-nomore></tui-nomore>
		<tui-divider>我是有底线的</tui-divider>
		<tui-nomore text="NO MORE"></tui-nomore>
		<tui-divider>NO MORE</tui-divider>
		<tui-divider width="60%" dividerColor="#f00" color="#f00">NO MORE</tui-divider>
		<!--没有更多了 end-->
		<!--没有更多了 start-->
		<tui-nomore :isDot="true"></tui-nomore>
		<!--没有更多了 end-->

		<!--加载框 start-->
		<tui-loading></tui-loading>
		<!--加载框 end-->

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
		padding: 20rpx 30rpx 40rpx 30rpx;
		box-sizing: border-box;
	}

	.tui-header {
		padding: 80rpx 60rpx 50rpx 60rpx;
	}

	.tui-title {
		font-size: 36rpx;
		color: #333;
		font-weight: bold;
	}

	.tui-sub-title {
		font-size: 28rpx;
		color: #7a7a7a;
		padding-top: 18rpx;
	}
</style>
