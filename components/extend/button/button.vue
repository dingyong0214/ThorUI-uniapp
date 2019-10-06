<template>
	<button class="tui-btn-class tui-btn" :class="[plain?'tui-'+type+'-outline':'tui-btn-'+(type || 'primary'),getDisabledClass(disabled,type),getShapeClass(shape,plain),getShadowClass(type,shadow,plain)]"
	 :hover-class="getHoverClass(disabled,type,plain)" :style="{width:width,height:height,lineHeight:height,fontSize:size+'rpx'}"
	 :loading="loading" :disabled="disabled" @tap="handleClick">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: "tuiButton",
		props: {
			//样式类型 primary, white, danger, warning, green,blue, gray，black
			type: {
				type: String,
				default: 'primary'
			},
			//是否加阴影
			shadow: {
				type: Boolean,
				default: false
			},
			// 宽度 rpx或 %
			width: {
				type: String,
				default: '100%'
			},
			//高度 rpx
			height: {
				type: String,
				default: '94rpx'
			},
			//字体大小 rpx
			size: {
				type: Number,
				default: 32
			},
			//形状 circle(圆角), square(默认方形)，rightAngle(平角)
			shape: {
				type: String,
				default: 'square'
			},
			plain: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			handleClick() {
				if (this.disabled) {
					return false;
				}
				this.$emit('click', {})
			},
			getShadowClass: function(type, shadow,plain) {
				let className = '';
				if (shadow && type != 'white' && !plain) {
					className = 'tui-shadow-' + type;
				}
				return className;
			},
			getDisabledClass: function(disabled, type) {
				let className = '';
				if (disabled && type != 'white' && type != 'gray') {
					className = 'tui-dark-disabled';
				}
				return className;
			},
			getShapeClass: function(shape, plain) {
				let className = '';
				if (shape == 'circle') {
					className = plain ? 'tui-outline-fillet' : 'tui-fillet';
				} else if (shape == "rightAngle") {
					className = plain ? 'tui-outline-rightAngle' : 'tui-rightAngle';
				}
				return className;
			},
			getHoverClass: function(disabled, type, plain) {
				let className = '';
				if (!disabled) {
					className = plain ? 'tui-outline-hover' : ('tui-' + (type || 'primary') + '-hover');
				}
				return className;
			}
		}
	}
</script>

<style>
	.tui-btn-primary {
		background: #1582AD !important;
		color: #fff;
	}

	.tui-shadow-primary {
		box-shadow: 0 10rpx 14rpx 0 rgba(15, 96, 128, 0.14);
	}

	.tui-btn-danger {
		background: #EB0909 !important;
		color: #fff;
	}

	.tui-shadow-danger {
		box-shadow: 0 10rpx 14rpx 0 rgba(235, 9, 9, 0.2);
	}

	.tui-btn-warning {
		background: #fc872d !important;
		color: #fff;
	}

	.tui-shadow-warning {
		box-shadow: 0 10rpx 14rpx 0 rgba(252, 135, 45, 0.2);
	}

	.tui-btn-green {
		background: #35b06a !important;
		color: #fff;
	}

	.tui-shadow-green {
		box-shadow: 0 10rpx 14rpx 0 rgba(53,176,106, 0.2);
	}

	.tui-btn-blue {
		background: #5677fc !important;
		color: #fff;
	}

	.tui-shadow-blue {
		box-shadow: 0 10rpx 14rpx 0 rgba(86,119,252, 0.2);
	}

	.tui-btn-white {
		background: #fff !important;
		color: #333 !important;
	}

	.tui-btn-gray {
		background: #BFBFBF !important;
		color: #fff !important;
	}
	.tui-btn-black {
		background: #333 !important;
		color: #fff !important;
	}

	.tui-shadow-gray {
		box-shadow: 0 10rpx 14rpx 0 rgba(191,191,191, 0.2);
	}

	.tui-hover-gray {
		background: #f7f7f9 !important;
	}

	/* button start*/

	.tui-btn {
		width: 100%;
		position: relative;
		border: 0 !important;
		border-radius: 6rpx;
		padding-left: 0;
		padding-right: 0;
		overflow: visible;
	}

	.tui-btn::after {
		content: "";
		position: absolute;
		width: 200%;
		height: 200%;
		transform-origin: 0 0;
		transform: scale(0.5, 0.5) translateZ(0);
		box-sizing: border-box;
		left: 0;
		top: 0;
		border-radius: 12rpx;
		border: 0;
	}

	.tui-btn-white::after {
		border: 1rpx solid #BFBFBF;
	}

	.tui-white-hover {
		background: #e5e5e5 !important;
		color: #2e2e2e !important;
	}

	.tui-dark-disabled {
		opacity: 0.6 !important;
		color: #fafbfc !important;
	}

	.tui-dark-disabled.tui-btn-danger {
		opacity: 1 !important;
		background: #FC8888 !important;
	}

	.tui-outline-hover {
		opacity: 0.5;
	}

	.tui-primary-hover {
		background: #126f93 !important;
		color: #e5e5e5 !important;
	}

	.tui-primary-outline::after {
		border: 1rpx solid #1582AD !important;
	}

	.tui-primary-outline {
		color: #1582AD !important;
		background: none;
	}

	.tui-danger-hover {
		background: #c80808 !important;
		color: #e5e5e5 !important;
	}

	.tui-danger-outline {
		color: #EB0909 !important;
		background: none;
	}

	.tui-danger-outline::after {
		border: 1rpx solid #EB0909 !important;
	}

	.tui-warning-hover {
		background: #d67326 !important;
		color: #e5e5e5 !important;
	}

	.tui-warning-outline {
		color: #fc872d !important;
		background: none;
	}

	.tui-warning-outline::after {
		border: 1px solid #fc872d !important;
	}

	.tui-green-hover {
		background: #2d965a !important;
		color: #e5e5e5 !important;
	}

	.tui-green-outline {
		color: #35b06a !important;
		background: none;
	}

	.tui-green-outline::after {
		border: 1rpx solid #35b06a !important;
	}

	.tui-blue-hover {
		background: #4a67d6 !important;
		color: #e5e5e5 !important;
	}

	.tui-blue-outline {
		color: #5677fc !important;
		background: none;
	}

	.tui-blue-outline::after {
		border: 1rpx solid #5677fc !important;
	}

	.tui-gray-hover {
		background: #a3a3a3 !important;
		color: #898989;
	}

	.tui-gray-outline {
		color: #999 !important;
		background: none !important;
	}
	.tui-white-outline{
		color: #fff !important;
		background: none !important;
	}
	
	.tui-black-outline {
		background: none !important;
		color: #333 !important;
	}

	.tui-gray-outline::after {
		border: 1rpx solid #ccc !important;
	}
	.tui-white-outline::after {
		border: 1px solid #fff !important;
	}
	
	.tui-black-outline::after {
		border: 1px solid #333 !important;
	}

	/*圆角 */

	.tui-fillet {
		border-radius: 50rpx;
	}

	.tui-btn-white.tui-fillet::after {
		border-radius: 98rpx;
	}

	.tui-outline-fillet::after {
		border-radius: 98rpx;
	}

	/*平角*/
	.tui-rightAngle {
		border-radius: 0;
	}

	.tui-btn-white.tui-rightAngle::after {
		border-radius: 0;
	}

	.tui-outline-rightAngle::after {
		border-radius: 0;
	}
</style>
