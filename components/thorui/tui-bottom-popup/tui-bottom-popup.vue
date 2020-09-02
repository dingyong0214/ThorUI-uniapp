<template>
	<view @touchmove.stop.prevent>
		<view class="tui-popup-class tui-bottom-popup" :class="{ 'tui-popup-show': show, 'tui-popup-radius': radius }" :style="{ backgroundColor: backgroundColor, height: height ? height + 'rpx' : 'auto', zIndex: zIndex,transform:`translate3d(0, ${show?translateY:'100%'}, 0)`}">
			<slot></slot>
		</view>
		<view class="tui-popup-mask" :class="[show ? 'tui-mask-show' : '']" :style="{ zIndex: maskZIndex }" v-if="mask" @tap="handleClose"></view>
	</view>
</template>

<script>
	export default {
		name: 'tuiBottomPopup',
		props: {
			//是否需要mask
			mask: {
				type: Boolean,
				default: true
			},
			//控制显示
			show: {
				type: Boolean,
				default: false
			},
			//背景颜色
			backgroundColor: {
				type: String,
				default: '#fff'
			},
			//高度 rpx
			height: {
				type: Number,
				default: 0
			},
			//设置圆角
			radius: {
				type: Boolean,
				default: true
			},
			zIndex: {
				type: [Number, String],
				default: 997
			},
			maskZIndex: {
				type: [Number, String],
				default: 996
			},
			//弹层显示时，垂直方向移动的距离
			translateY: {
				type: String,
				default: '0'
			}
		},
		methods: {
			handleClose() {
				if (!this.show) {
					return;
				}
				this.$emit('close', {});
			}
		}
	};
</script>

<style scoped>
	.tui-bottom-popup {
		width: 100%;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		transform: translate3d(0, 100%, 0);
		transform-origin: center;
		transition: all 0.3s ease-in-out;
		min-height: 20rpx;
	}

	.tui-popup-radius {
		border-top-left-radius: 24rpx;
		border-top-right-radius: 24rpx;
		padding-bottom: env(safe-area-inset-bottom);
		overflow: hidden;
	}

	.tui-popup-show {
		opacity: 1;
		/* transform: translate3d(0, 0, 0); */
	}

	.tui-popup-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		transition: all 0.3s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.tui-mask-show {
		opacity: 1;
		visibility: visible;
	}
</style>
