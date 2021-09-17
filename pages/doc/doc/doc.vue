<template>
	<view class="container">
		<image src="https://www.thorui.cn/img/wait.gif" mode="widthFix" class="tui-banner"></image>
		<view class="tui-text">---我知道你会来，所以我会等。</view>

		<view class="tui-view">
			<view class="tui-cell">
				<view class="tui-title">组件文档地址：</view>
				<view class="tui-link" @tap="getLink('https://thorui.cn/doc/')">https://thorui.cn/doc/</view>
			</view>
			<view class="tui-cell">
				<view class="tui-title">uni-app版本GitHub地址：</view>
				<view class="tui-link" @tap="getLink('https://github.com/dingyong0214/ThorUI-uniapp')">
					https://github.com/dingyong0214/ThorUI-uniapp</view>
			</view>
			<view class="tui-cell">
				<view class="tui-title">uni-app版本插件市场地址：</view>
				<view class="tui-link" @tap="getLink('https://ext.dcloud.net.cn/plugin?id=556')">
					https://ext.dcloud.net.cn/plugin?id=556</view>
			</view>
			<view class="tui-cell">
				<view class="tui-title">小程序版本GitHub地址：</view>
				<view class="tui-link" @tap="getLink('https://github.com/dingyong0214/ThorUI')">
					https://github.com/dingyong0214/ThorUI</view>
			</view>
			<view class="tui-cell">
				<view class="tui-title">小程序版本插件市场地址：</view>
				<view class="tui-link" @tap="getLink('https://ext.dcloud.net.cn/plugin?id=569')">
					https://ext.dcloud.net.cn/plugin?id=569</view>
			</view>
		</view>

	</view>
</template>

<script>
	import thorui from '@/components/common/tui-clipboard/tui-clipboard.js'
	export default {
		data() {
			return {

			}
		},
		methods: {
			getLink: function(link) {
				thorui.getClipboardData(link, (res) => {
					// #ifdef H5 || MP-ALIPAY
					if (res) {
						this.tui.toast("链接复制成功")
					} else {
						this.tui.toast("链接复制失败")
					}
					// #endif
				})
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: 80rpx;
	}

	.tui-banner {
		width: 100%;
		height: 375rpx
	}

	.tui-text {
		width: 100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		color: #B3B3B3;
		font-size: 26rpx;
		text-align: right;
	}

	.tui-view {
		width: 100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
	}


	.tui-cell {
		padding: 24rpx 0;
		color: #555;
	}

	.tui-title {
		width: 100%;
		padding: 0 8rpx;
		box-sizing: border-box;
	}

	.tui-link {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0px 3rpx 20rpx rgba(183, 183, 183, 0.1);
		border-radius: 10rpx;
		color: #0066cc;
		margin-top: 20rpx;
		word-break: break-all;
	}
</style>
