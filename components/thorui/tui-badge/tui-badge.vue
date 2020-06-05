<template>
	<view :class="[dot ? 'tui-badge-dot' : 'tui-badge', 'tui-' + type, !dot ? 'tui-badge-scale' : '']" :style="{ top: top, right: right, position: absolute ? 'absolute' : 'static', transform: getStyle, margin: margin }"
	 @tap="handleClick">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'tuiBadge',
		props: {
			//primary,warning,green,danger,white，black，gray,white_red
			type: {
				type: String,
				default: 'primary'
			},
			//是否是圆点
			dot: {
				type: Boolean,
				default: false
			},
			margin: {
				type: String,
				default: '0'
			},
			//是否绝对定位
			absolute: {
				type: Boolean,
				default: false
			},
			top: {
				type: String,
				default: '-8rpx'
			},
			right: {
				type: String,
				default: '0'
			},
			//缩放比例
			scaleRatio: {
				type: Number,
				default: 1
			},
			//水平方向移动距离
			translateX: {
				type: String,
				default: '0'
			}
		},
		computed: {
			getStyle() {
				return `scale(${this.scaleRatio}) translateX(${this.translateX})`;
			}
		},
		methods: {
			handleClick() {
				this.$emit('click', {});
			}
		}
	};
</script>

<style scoped>
	/* color start*/

	.tui-primary {
		background-color: #5677fc;
		color: #fff;
	}

	.tui-danger {
		background-color: #ed3f14;
		color: #fff;
	}

	.tui-red {
		background-color: #F74D54;
		color: #fff;
	}

	.tui-warning {
		background-color: #ff7900;
		color: #fff;
	}

	.tui-green {
		background-color: #19be6b;
		color: #fff;
	}

	.tui-white {
		background-color: #fff;
		color: #333;
	}

	.tui-white_red {
		background-color: #fff;
		color: #F74D54;
	}

	.tui-white_primary {
		background-color: #fff;
		color: #5677fc;
	}

	.tui-white_green {
		background-color: #fff;
		color: #19be6b;
	}

	.tui-white_warning {
		background-color: #fff;
		color: #ff7900;
	}

	.tui-black {
		background-color: #000;
		color: #fff;
	}

	.tui-gray {
		background-color: #ededed;
		color: #999;
	}

	/* color end*/

	/* badge start*/

	.tui-badge-dot {
		height: 8px;
		width: 8px;
		border-radius: 50%;
	}

	.tui-badge {
		font-size: 24rpx;
		line-height: 24rpx;
		height: 36rpx;
		min-width: 36rpx;
		padding: 0 10rpx;
		box-sizing: border-box;
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}

	.tui-badge-scale {
		transform-origin: center center;
	}

	/* badge end*/
</style>
