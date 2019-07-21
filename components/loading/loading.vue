<template>
	<view class="tui-loading-init" v-if="visible">
		<view class="tui-loading-center"></view>
		<view class="tui-loadmore-tips">{{text}}</view>
	</view>
</template>

<script>
	export default {
		name: "tuiLoading",
		props: {
			text: {
				type: String,
				default: "正在加载..."
			},
			visible: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style>
	.tui-loading-init {
		min-width: 200upx;
		min-height: 200upx;
		max-width: 500upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 9999;
		font-size: 26upx;
		color: #fff;
		background: rgba(0, 0, 0, 0.7);
		border-radius: 10upx;
	}

	.tui-loading-center {
		width: 50upx;
		height: 50upx;
		border: 3px solid #fff;
		border-radius: 50%;
		margin: 0 6px;
		display: inline-block;
		vertical-align: middle;
		clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 40%);
		animation: rotate 1s linear infinite;
		margin-bottom: 36upx;
	}

	.tui-loadmore-tips {
		text-align: center;
		padding: 0 20upx;
		box-sizing: border-box;
	}

	@-webkit-keyframes rotate {
		from {
			transform: rotatez(0deg);
		}

		to {
			transform: rotatez(360deg);
		}
	}

	@keyframes rotate {
		from {
			transform: rotatez(0deg);
		}

		to {
			transform: rotatez(360deg);
		}
	}
</style>
