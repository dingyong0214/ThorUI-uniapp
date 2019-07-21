<template>
	<view class="container">
		<view class="header">
			<view class="title">回到顶部</view>
			<view class="sub-title">可设置bottom，right值，可设置距离顶部多少距离显示，向下滑动页面查看效果 </view>
		</view>
		<view class="tui-bottom-text">到达底部~</view>
		<tui-scroll-top :scrollTop="scrollTop"></tui-scroll-top>
	</view>
</template>

<script>
	import tuiScrollTop from "@/components/scroll-top/scroll-top"
	export default {
		components: {
			tuiScrollTop
		},
		data() {
			return {
				scrollTop: 0
			}
		},
		methods: {

		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	}
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
		padding-bottom: 800px;
	}

	.tui-bottom-text {
		text-align: center;
		font-size: 24rpx;
		color: #7a7a7a;
	}
</style>
