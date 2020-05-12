<template>
	<view class="container">
		<view class="header">
			<view class="title">复制文本</view>
			<view class="sub-title">clipboard，复制到剪贴板，兼容H5，APP和小程序依然使用平台自带api </view>
			<view class="sub-title tui-primary">ThorUI QQ交流群3：605135318</view>
		</view>
		<view class="tui-btn-box">
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="clipboard('605135318')">复制QQ群号：605135318</tui-button>
			</view>
		</view>
	</view>
</template>

<script>
	const thorui = require("@/components/common/tui-clipboard/tui-clipboard.js")
	export default {
		data() {
			return {

			}
		},
		methods: {
			clipboard: function(data) {
				thorui.getClipboardData(data, (res) => {
					// #ifdef H5 || MP-ALIPAY
					if (res) {
						this.tui.toast("复制成功")
					} else {
						this.tui.toast("复制失败")
					}
					// #endif
				})
			}
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
	}

	.tui-primary {
		color: #5677FC;
	}

	.tui-btn-box {
		padding: 30rpx 40rpx;
		box-sizing: border-box;
	}

	.tui-btn-btm {
		margin-bottom: 36rpx;
	}
</style>
