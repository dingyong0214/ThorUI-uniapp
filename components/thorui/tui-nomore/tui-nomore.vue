<template>
	<view class="tui-nomore-class tui-loadmore-none">
		<view :class="[isDot?'tui-nomore-dot':'tui-nomore']">
			<view :style="{backgroundColor:backgroundColor}" :class="[isDot?'tui-dot-text':'tui-nomore-text']">{{isDot?dotText:text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tuiNomore",
		props: {
			//当前页面背景颜色
			backgroundColor: {
				type: String,
				default: "#fafafa"
			},
			//是否以圆点代替 "没有更多了"
			isDot: {
				type: Boolean,
				default: false
			},
			//isDot为false时生效
			text: {
				type: String,
				default: "没有更多了"
			}
		},
		data() {
			return {
				dotText: "●"
			};
		}
	}
</script>

<style scoped>
	.tui-loadmore-none {
		width: 50%;
		margin: 1.5em auto;
		line-height: 1.5em;
		font-size: 24rpx;
		display: flex;
		justify-content: center;
	}

	.tui-nomore {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: center;
		margin-top: 10rpx;
		padding-bottom: 6rpx;
	}

	.tui-nomore::before {
		content: ' ';
		position: absolute;
		border-bottom: 1rpx solid #e5e5e5;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		width: 100%;
		top: 18rpx;
		left: 0;
	}

	.tui-nomore-text {
		color: #999;
		font-size: 24rpx;
		text-align: center;
		padding: 0 18rpx;
		height: 36rpx;
		line-height: 36rpx;
		position: relative;
		z-index: 1;
	}

	.tui-nomore-dot {
		position: relative;
		text-align: center;
		-webkit-display: flex;
		display: flex;
		-webkit-justify-content: center;
		justify-content: center;
		margin-top: 10rpx;
		padding-bottom: 6rpx;
	}

	.tui-nomore-dot::before {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #e5e5e5;
		-webkit-transform: scaleY(0.5)  translateX(-50%);
		transform: scaleY(0.5)  translateX(-50%);
		width: 360rpx;
		top: 18rpx;
		left: 50%;
	}

	.tui-dot-text {
		position: relative;
		color: #e5e5e5;
		font-size: 10px;
		text-align: center;
		width: 50rpx;
		height: 36rpx;
		line-height: 36rpx;
		-webkit-transform: scale(0.8);
		transform: scale(0.8);
		-webkit-transform-origin: center center;
		transform-origin: center center;
		z-index: 1;
	}
</style>
