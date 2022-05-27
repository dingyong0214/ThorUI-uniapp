<template>
	<view class="container">
		<view class="tui-box">
			<progress :percent="percent" show-info stroke-width="3" activeColor="#5677fc" active-mode="forwards"></progress>
			<view class="tui-text">正在更新，请耐心等待...</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			percent: 0
		};
	},
	onLoad(options) {
		// #ifdef APP-PLUS
		this.update(options.url || '');
		// #endif
	},
	onBackPress() {
		return true;
	},
	methods: {
		update(downUrl) {
			let that = this;
			this.percent = 5;
			const downloadTask = uni.downloadFile({
				url: downUrl,
				success: downloadResult => {
					if (downloadResult.statusCode === 200) {
						plus.runtime.install(
							downloadResult.tempFilePath,
							{
								force: true
							},
							function() {
								plus.runtime.restart();
							},
							function(e) {
								that.showModal();
							}
						);
					}
				},
				fail: () => {
					that.showModal();
				}
			});
			downloadTask.onProgressUpdate(res => {
				that.percent = res.progress;
			});
		},
		showModal() {
			this.tui.model('温馨提示', '升级失败，请稍后再试', false, res => {
				plus.runtime.restart();
			});
		}
	}
};
</script>

<style lang="scss">
page {
	width: 100%;
	height: 100%;
	background-color: $uni-bg-color;
}
.container {
	width: 100%;
	height: 100%;
	background-color: $uni-bg-color;

	.tui-box {
		position: fixed;
		width: 100%;
		top: 50%;
		padding: 0 45rpx;
		margin-top: -50rpx;
		box-sizing: border-box;
		text-align: center;

		.tui-text {
			font-size: $uni-font-size-base;
			color: $uni-text-color;
			padding-top: 18rpx;
		}
	}
}
</style>
