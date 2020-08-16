<template>
	<view class="tui-tag" :hover-class="hover ? 'tui-tag-opcity' : ''" :hover-stay-time="150" :class="[originLeft ? 'tui-origin-left' : '', originRight ? 'tui-origin-right' : '', getClassName(shape, plain), getTypeClass(type, plain)]"
	 :style="{ transform: `scale(${scaleMultiple})`, padding: padding, margin: margin, fontSize: size, lineHeight: size }"
	 @tap="handleClick">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'tuiTag',
		props: {
			type: {
				type: String,
				default: 'primary'
			},
			//padding
			padding: {
				type: String,
				default: '16rpx 26rpx'
			},
			margin: {
				type: String,
				default: '0'
			},
			//文字大小 rpx
			size: {
				type: String,
				default: '28rpx'
			},
			// circle, square，circleLeft，circleRight
			shape: {
				type: String,
				default: 'square'
			},
			//是否空心
			plain: {
				type: Boolean,
				default: false
			},
			//点击效果
			hover: {
				type: Boolean,
				default: false
			},
			//缩放倍数
			scaleMultiple: {
				type: Number,
				default: 1
			},
			originLeft: {
				type: Boolean,
				default: false
			},
			originRight: {
				type: Boolean,
				default: false
			},
			index: {
				type: Number,
				default: 0
			}
		},
		methods: {
			handleClick() {
				this.$emit('click', {
					index: this.index
				});
			},
			getTypeClass: function(type, plain) {
				return plain ? 'tui-' + type + '-outline' : 'tui-' + type;
			},
			getClassName: function(shape, plain) {
				//circle, square，circleLeft，circleRight
				var className = plain ? 'tui-tag-outline ' : '';
				if (shape != 'square') {
					if (shape == 'circle') {
						className = className + (plain ? 'tui-tag-outline-fillet' : 'tui-tag-fillet');
					} else if (shape == 'circleLeft') {
						className = className + 'tui-tag-fillet-left';
					} else if (shape == 'circleRight') {
						className = className + 'tui-tag-fillet-right';
					}
				}
				return className;
			}
		}
	};
</script>

<style scoped>
	/* color start*/

	.tui-primary {
		background-color: #5677fc !important;
		color: #fff;
	}

	.tui-light-primary {
		background-color: #5c8dff !important;
		color: #fff;
	}

	.tui-dark-primary {
		background-color: #4a67d6 !important;
		color: #fff;
	}

	.tui-dLight-primary {
		background-color: #4e77d9 !important;
		color: #fff;
	}

	.tui-danger {
		background-color: #ed3f14 !important;
		color: #fff;
	}

	.tui-red {
		background-color: #ff201f !important;
		color: #fff;
	}

	.tui-warning {
		background-color: #ff7900 !important;
		color: #fff;
	}

	.tui-green {
		background-color: #19be6b !important;
		color: #fff;
	}

	.tui-high-green {
		background-color: #52dcae !important;
		color: #52dcae;
	}

	.tui-black {
		background-color: #000 !important;
		color: #fff;
	}

	.tui-white {
		background-color: #fff !important;
		color: #333 !important;
	}

	.tui-translucent {
		background-color: rgba(0, 0, 0, 0.7);
	}

	.tui-light-black {
		background-color: #333 !important;
	}

	.tui-gray {
		background-color: #ededed !important;
	}

	.tui-phcolor-gray {
		background-color: #ccc !important;
	}

	.tui-divider-gray {
		background-color: #eaeef1 !important;
	}

	.tui-btn-gray {
		background-color: #ededed !important;
		color: #999 !important;
	}

	.tui-hover-gray {
		background-color: #f7f7f9 !important;
	}

	.tui-bg-gray {
		background-color: #fafafa !important;
	}

	.tui-light-blue {
		background-color: #ecf6fd;
		color: #4dabeb !important;
	}

	.tui-light-brownish {
		background-color: #fcebef;
		color: #8a5966 !important;
	}

	.tui-light-orange {
		background-color: #fef5eb;
		color: #faa851 !important;
	}

	.tui-light-green {
		background-color: #e8f6e8;
		color: #44cf85 !important;
	}

	.tui-primary-outline::after {
		border: 1px solid #5677fc !important;
	}

	.tui-primary-outline {
		color: #5677fc !important;
		background-color: none;
	}

	.tui-danger-outline {
		color: #ed3f14 !important;
		background-color: none;
	}

	.tui-danger-outline::after {
		border: 1px solid #ed3f14 !important;
	}

	.tui-red-outline {
		color: #ff201f !important;
		background-color: none;
	}

	.tui-red-outline::after {
		border: 1px solid #ff201f !important;
	}

	.tui-warning-outline {
		color: #ff7900 !important;
		background-color: none;
	}

	.tui-warning-outline::after {
		border: 1px solid #ff7900 !important;
	}

	.tui-green-outline {
		color: #44cf85 !important;
		background-color: none;
	}

	.tui-green-outline::after {
		border: 1px solid #44cf85 !important;
	}

	.tui-high-green-outline {
		color: #52dcae !important;
		background-color: none;
	}

	.tui-high-green-outline::after {
		border: 1px solid #52dcae !important;
	}

	.tui-gray-outline {
		color: #999 !important;
		background-color: none;
	}

	.tui-gray-outline::after {
		border: 1px solid #ccc !important;
	}

	.tui-black-outline {
		color: #333 !important;
		background-color: none;
	}

	.tui-black-outline::after {
		border: 1px solid #333 !important;
	}

	.tui-white-outline {
		color: #fff !important;
		background-color: none;
	}

	.tui-white-outline::after {
		border: 1px solid #fff !important;
	}

	/* color end*/

	/* tag start*/

	.tui-tag {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 6rpx;
		flex-shrink: 0;
	}

	.tui-tag-outline {
		position: relative;
		background-color: none;
		color: #5677fc;
	}

	.tui-tag-outline::after {
		content: ' ';
		position: absolute;
		width: 200%;
		height: 200%;
		transform: scale(0.5) translateZ(0);
		transform-origin: 0 0;
		box-sizing: border-box;
		left: 0;
		top: 0;
		border-radius: 12rpx;
	}

	.tui-tag-fillet {
		border-radius: 50rpx;
	}

	.tui-white.tui-tag-fillet::after {
		border-radius: 80rpx;
	}

	.tui-tag-outline-fillet::after {
		border-radius: 80rpx;
	}

	.tui-tag-fillet-left {
		border-radius: 50rpx 0 0 50rpx;
	}

	.tui-tag-fillet-right {
		border-radius: 0 50rpx 50rpx 0;
	}

	.tui-tag-fillet-left.tui-tag-outline::after {
		border-radius: 100rpx 0 0 100rpx;
	}

	.tui-tag-fillet-right.tui-tag-outline::after {
		border-radius: 0 100rpx 100rpx 0;
	}

	/* tag end*/
	.tui-origin-left {
		transform-origin: 0 center;
	}

	.tui-origin-right {
		transform-origin: 100% center;
	}

	.tui-tag-opcity {
		opacity: 0.5;
	}
</style>
