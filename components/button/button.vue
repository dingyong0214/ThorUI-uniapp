<template>
	<button class="tui-btn-class tui-btn" :class="['tui-btn-'+size,plain?'tui-'+type+'-outline':'tui-'+(type || 'gradual'),getDisabledClass(disabled,type),getShapeClass(shape,plain)]"
	 :hover-class="getHoverClass(disabled,type,plain)" :loading="loading" :disabled="disabled" :open-type="openType" @tap="handleClick"
	 @getuserinfo="bindgetuserinfo" :form-type="formType" v-if="!hidden">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: "tuiButton",
		props: {
			// primary, white, danger, warning, green, gray,gradual
			type: {
				type: String,
				default: 'gradual'
			},
			// block, mini, small
			size: {
				type: String,
				default: 'block'
			},
			// circle, square，rightAngle
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
			},
			openType: {
				type: String,
				default: ''
			},
			formType: {
				type: String,
				default: ''
			},
			hidden: {
				type: Boolean,
				default: false
			},
			bottom: {
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
			bindgetuserinfo({
				detail = {}
			} = {}) {
				this.$emit('getuserinfo', detail);
			},
			getDisabledClass: function(disabled, type) {
				let className = '';
				if (disabled && type != 'white' && type != 'gray') {
					className = type == 'gradual' ? 'btn-gradual-disabled' : 'tui-dark-disabled';
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
					className = plain ? 'tui-outline-hover' : ('tui-' + (type || 'gradual') + '-hover');
				}
				return className;
			}
		}
	}
</script>

<style>
	/* color start*/

	.tui-primary {
		background: #5677fc !important;
		color: #fff;
	}

	.tui-danger {
		background: #EB0909 !important;
		color: #fff;
	}

	.tui-red {
		background: #e41f19 !important;
		color: #fff;
	}

	.tui-warning {
		background: #ff7900 !important;
		color: #fff;
	}

	.tui-green {
		background: #19be6b !important;
		color: #fff;
	}

	.tui-white {
		background: #fff !important;
		color: #333 !important;
	}

	.tui-gray {
		background: #ededed !important;
		color: #999 !important;
	}

	.tui-hover-gray {
		background: #f7f7f9 !important;
	}

	/* color end*/

	/* button start*/

	.tui-btn {
		width: 100%;
		position: relative;
		border: 0 !important;
		border-radius: 10rpx;
		display: inline-block;
	}

	.tui-btn::after {
		content: "";
		position: absolute;
		width: 200%;
		height: 200%;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scale(0.5, 0.5);
		transform: scale(0.5, 0.5);
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		left: 0;
		top: 0;
		border-radius: 20rpx;
	}

	.tui-btn-block {
		font-size: 36rpx;
		height: 90rpx;
		line-height: 90rpx;
	}

	.tui-white::after {
		border: 1px solid #eaeef1;
	}

	.tui-white-hover {
		background: #e5e5e5 !important;
		color: #2e2e2e !important;
	}

	.tui-dark-disabled {
		opacity: 0.6 !important;
		color: #fafbfc !important;
	}

	.tui-outline-hover {
		opacity: 0.5;
	}

	.tui-primary-hover {
		background: #4a67d6 !important;
		color: #e5e5e5 !important;
	}

	.tui-primary-outline::after {
		border: 1px solid #5677fc !important;
	}

	.tui-primary-outline {
		color: #5677fc !important;
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
		border: 1px solid #EB0909 !important;
	}

	.tui-red-hover {
		background: #c51a15 !important;
		color: #e5e5e5 !important;
	}

	.tui-red-outline {
		color: #e41f19 !important;
		background: none;
	}

	.tui-red-outline::after {
		border: 1px solid #e41f19 !important;
	}

	.tui-warning-hover {
		background: #e56d00 !important;
		color: #e5e5e5 !important;
	}

	.tui-warning-outline {
		color: #ff7900 !important;
		background: none;
	}

	.tui-warning-outline::after {
		border: 1px solid #ff7900 !important;
	}

	.tui-green-hover {
		background: #16ab60 !important;
		color: #e5e5e5 !important;
	}

	.tui-green-outline {
		color: #44cf85 !important;
		background: none;
	}

	.tui-green-outline::after {
		border: 1px solid #44cf85 !important;
	}

	.tui-gray-hover {
		background: #d5d5d5 !important;
		color: #898989;
	}

	.tui-gray-outline
	 {
		color: #999 !important;
		background: none !important;
	}
	.tui-white-outline{
		color: #fff !important;
		background: none !important;
	}

	.tui-gray-outline::after
	{
		border: 1px solid #ccc !important;
	}
	.tui-white-outline::after {
		border: 1px solid #fff !important;
	}

	/*圆角 */

	.tui-fillet {
		border-radius: 45rpx;
	}

	.tui-white.tui-fillet::after {
		border-radius: 90rpx;
	}

	.tui-outline-fillet::after {
		border-radius: 90rpx;
	}

	/*平角*/
	.tui-rightAngle {
		border-radius: 0;
	}

	.tui-white.tui-rightAngle::after {
		border-radius: 0;
	}

	.tui-outline-rightAngle::after {
		border-radius: 0;
	}

	/*渐变 */

	.tui-gradual {
		background: linear-gradient(-90deg, #5677fc, #5c8dff);
		border-radius: 45rpx;
		color: #fff;
	}

	.tui-gradual-hover {
		color: #d5d4d9 !important;
		background: linear-gradient(-90deg, #4a67d6, #4e77d9);
	}

	.btn-gradual-disabled {
		color: #fafbfc !important;
		border-radius: 45rpx;
		background: linear-gradient(-90deg, #cad8fb, #c9d3fb);
	}

	/*不同尺寸 */

	.tui-btn-mini {
		width: auto;
		font-size: 30rpx;
		height: 70rpx;
		line-height: 70rpx;
	}

	.tui-btn-small {
		width: auto;
		font-size: 30rpx;
		height: 60rpx;
		line-height: 60rpx;
	}

	/* button end*/
</style>
