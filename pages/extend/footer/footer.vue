<template>
	<view class="container">
		<view class="header">
			<view class="title">Footer</view>
			<view class="sub-title">页脚 </view>
		</view>
		<tui-footer :fixed="false" :copyright="copyright"></tui-footer>
		<tui-footer :fixed="false" :copyright="copyright" :navigate="navigate" tui-footer-class="tui-custom"></tui-footer>
		<tui-footer :fixed="false" :copyright="copyright" :navigate="navigate2" tui-footer-class="tui-custom"></tui-footer>
		<tui-footer :fixed="false" :copyright="copyright" :navigate="navigate3" tui-footer-class="tui-custom"></tui-footer>
		<tui-footer copyright="Copyright © 2020 ThorUI All Rights Reserved." :navigate="navigate" backgroundColor="#fafafa"></tui-footer>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				navigate: [{
					url: "/pages/tabbar/index/index",
					type: "switchTab",
					text: "ThorUI首页"
				}],
				navigate2: [{
					url: "/pages/tabbar/index/index",
					type: "switchTab",
					text: "返回首页",
					color: "#5677fc"
				}, {
					url: "/pages/tabbar/my/my",
					type: "switchTab",
					text: "个人中心",
					color: "#5677fc",
					size: 30
				}],
				navigate3: [{
					url: "/pages/tabbar/index/index",
					type: "switchTab",
					text: "返回首页"
				}, {
					url: "/pages/tabbar/my/my",
					type: "switchTab",
					text: "个人中心"
				}, {
					url: "/pages/common/about/about",
					type: "navigate",
					text: "Thor UI"
				}],
				copyright: " Copyright © 2014-2019 Thor UI."
			}
		},
		methods: {
			
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
		font-size: 36rpx;
		color: #333;
		font-weight: bold;
	}

	.sub-title {
		font-size: 28rpx;
		color: #7a7a7a;
		padding-top: 18rpx;
	}

	.tui-custom {
		margin-top: 30rpx;
	}
</style>
