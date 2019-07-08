<template>
	<view class="tui-nomore-class tui-loadmore" v-if="visible">
		<view :class="[isDot?'tui-nomore-dot':'tui-nomore']">
			<view :style="{background:bgcolor}" :class="[isDot?'tui-dot-text':'tui-text']">{{isDot?dotText:text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "nomore",
		props: {
			//是否可见
			visible: {
				type: Boolean,
				default: false
			},
			//当前页面背景颜色
			bgcolor: {
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

<style>
	.tui-loadmore {
		width: 48%;
		margin: 1.5em auto;
		line-height: 1.5em;
		font-size: 24upx;
		text-align: center;
	}

	.tui-nomore {
		position: relative;
		text-align: center;
		display: flex;
		justify-content: center;
		margin-top: 10upx;
		padding-bottom: 44upx;
	}

	.tui-nomore::before {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #e5e5e5;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		width: 360upx;
		top: 18upx;
	}

	.tui-text {
		position: absolute;
		color: #999;
		font-size: 24upx;
		text-align: center;
		padding: 0 18upx;
		height: 36upx;
		line-height: 36upx;
		z-index: 1;
	}

	.tui-nomore-dot {
		position: relative;
		text-align: center;
		display: flex;
		justify-content: center;
		margin-top: 10upx;
		padding-bottom: 40upx;
	}

	.tui-nomore-dot::before {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #e5e5e5;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		width: 360upx;
		top: 18upx;
	}

	.tui-dot-text {
		position: absolute;
		color: #e5e5e5;
		font-size: 10px;
		text-align: center;
		width: 50upx;
		height: 36upx;
		line-height: 36upx;
		transform: scale(0.8);
		transform-origin: center center;
		z-index: 1;
	}
</style>
