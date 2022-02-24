<template>
	<view>
		<tui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></tui-skeleton>
		<view class="container tui-skeleton">
			<image src="https://www.thorui.cn/img/wait.gif" mode="widthFix" class="tui-banner tui-skeleton-rect"></image>
			<view class="tui-text">
				<text class=" tui-skeleton-rect">---我知道你会来，所以我会等。</text>
			</view>

			<view class="tui-view">
				<view class="tui-cell">
					<view class="tui-title tui-skeleton-rect">组件文档地址：</view>
					<view class="tui-link tui-skeleton-fillet" @tap="getLink" data-link="https://thorui.cn/doc/">https://thorui.cn/doc/</view>
				</view>
				<view class="tui-cell">
					<view class="tui-title tui-skeleton-rect">uni-app版本GitHub地址：</view>
					<view class="tui-link tui-skeleton-fillet" @tap="getLink" data-link="https://github.com/dingyong0214/ThorUI-uniapp F">https://github.com/dingyong0214/ThorUI-uniapp</view>
				</view>
				<view class="tui-cell">
					<view class="tui-title tui-skeleton-rect">uni-app版本插件市场地址：</view>
					<view class="tui-link tui-skeleton-fillet" @tap="getLink" data-link="https://ext.dcloud.net.cn/plugin?id=556">https://ext.dcloud.net.cn/plugin?id=556</view>
				</view>
				<view class="tui-cell">
					<view class="tui-title tui-skeleton-rect">小程序版本GitHub地址：</view>
					<view class="tui-link tui-skeleton-fillet" @tap="getLink" data-link="https://github.com/dingyong0214/ThorUI">https://github.com/dingyong0214/ThorUI</view>
				</view>
				<view class="tui-cell">
					<view class="tui-title tui-skeleton-rect">小程序版本插件市场地址：</view>
					<view class="tui-link tui-skeleton-fillet" @tap="getLink" data-link="https://ext.dcloud.net.cn/plugin?id=569">https://ext.dcloud.net.cn/plugin?id=569</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import thorui from "@/components/common/tui-clipboard/tui-clipboard.js"
	export default {
		data() {
			return {
				skeletonShow: true
			}
		},
		onLoad() {
			setTimeout(() => {
				this.skeletonShow = false
			}, 2200);
		},
		methods: {
			getLink(e) {
				let link = e.currentTarget.dataset.link
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
		height: 375rpx;
	}

	.tui-text {
		width: 100%;
		padding: 12rpx 30rpx 20rpx;
		box-sizing: border-box;
		color: #B3B3B3;
		font-size: 26rpx;
		text-align: right;
		margin-top: 8rpx
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
		padding: 0 8rpx;
		box-sizing: border-box;
		display: inline-block;
	}

	.tui-link {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0px 3rpx 20rpx rgba(183, 183, 183, 0.1);
		border-radius: 10rpx;
		color: #06c;
		margin-top: 20rpx;
		word-break: break-all;
	}
</style>
