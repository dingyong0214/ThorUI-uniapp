<template>
	<view>
		<view class="tui-alert-class tui-alert-box" :class="[show?'tui-alert-show':'']">
			<view class="tui-alert-content" :style="{fontSize:size+'rpx',color:color}">
				<slot></slot>
			</view>
			<view class="tui-alert-btn" :style="{color:btnColor}" hover-class="tui-alert-btn-hover" :hover-stay-time="150"
			 @tap.stop="handleClick">{{btnText}}</view>
		</view>
		<view class="tui-alert-mask" :class="[show?'tui-alert-mask-show':'']" @tap.stop="handleClickCancel"></view>
	</view>
</template>

<script>
	export default {
		name:"tuiAlert",
		emits: ['click','cancel'],
		props: {
			//控制显示
			show: {
				type: Boolean,
				default: false
			},
			//提示信息字体大小
			size: {
				type: Number,
				default: 30
			},
			//提示信息字体颜色
			color: {
				type: String,
				default: "#333"
			},
			//按钮字体颜色
			btnColor: {
				type: String,
				default: "#EB0909"
			},
			btnText:{
				type: String,
				default: "确定"
			},
			//点击遮罩 是否可关闭
			maskClosable: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			handleClick(e) {
				if (!this.show) return;
				this.$emit('click', {});
			},
			handleClickCancel() {
				if (!this.maskClosable) return;
				this.$emit('cancel');
			}
		}
	}
</script>

<style scoped>
	.tui-alert-box {
		position: fixed;
		width: 560rpx;
		left: 50%;
		top: 50%;
		background-color: #fff;
		transition: all 0.3s ease-in-out;
		transform: translate(-50%, -50%) scale(0);
		opacity: 0;
		border-radius: 6rpx;
		overflow: hidden;
		z-index: 99998;
	}

	.tui-alert-show {
		transform: translate(-50%, -50%) scale(1);
		opacity: 1;
	}

	.tui-alert-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 99996;
		transition: all 0.3s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.tui-alert-mask-show {
		visibility: visible;
		opacity: 1;
	}

	.tui-alert-content {
		text-align: center;
		color: #333333;
		padding: 98rpx 48rpx 92rpx 48rpx;
		box-sizing: border-box;
		word-break: break-all;
	}

	.tui-alert-btn {
		width: 100%;
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		box-sizing: border-box;
		position: relative;
		font-size: 32rpx;
		line-height: 32rpx;
	}

	.tui-alert-btn-hover {
		background-color: #f7f7f7;
	}

	.tui-alert-btn::before {
		width: 100%;
		content: "";
		position: absolute;
		border-top: 1rpx solid #E0E0E0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		left: 0;
		top: 0;
	}
</style>
