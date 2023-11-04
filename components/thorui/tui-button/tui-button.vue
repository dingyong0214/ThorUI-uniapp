<template>
	<view class="tui-button__wrap"
		:class="[(width==='100%' || !width || width===true) && (!btnSize || btnSize===true)?'tui-btn__flex-1':'',getShapeClass(shape, plain),!disabled?'tui-button__hover':'']"
		:style="{width: getWidth, height: getHeight, margin: margin}">
		<button class="tui-btn" :class="[
				plain ? 'tui-' + type + '-outline' : 'tui-btn-' + (type || 'primary'),
				getDisabledClass(disabled, type, plain),
				getShapeClass(shape, plain),
				bold ? 'tui-text-bold' : '',
				link ? 'tui-btn__link' : ''
			]" :style="{ width: getWidth, height: getHeight, lineHeight: getHeight, fontSize: getSize + 'rpx',background:getBgColor(type,plain),color:getColor(type,plain),boxShadow:shadow?getShadow(type,plain):'none' }"
			:loading="loading" :form-type="formType" :open-type="openType" :app-parameter="appParameter"
			@getuserinfo="bindgetuserinfo" @getphonenumber="bindgetphonenumber" @contact="bindcontact"
			@error="binderror" @chooseavatar="bindchooseavatar" @launchapp="bindlaunchapp" :disabled="disabled"
			@tap="handleClick">
			<slot></slot>
		</button>
		<view class="tui-button__border" :class="[getShapeClass(shape, plain),getDisabledClass(disabled, type, plain)]"
			:style="{borderColor:getBgColor(type)}" v-if="!link && plain"></view>
	</view>
</template>

<script>
	export default {
		name: 'tuiButton',
		emits: ['click', 'getuserinfo', 'contact', 'getphonenumber', 'error','chooseavatar','launchapp'],
		// #ifdef MP-WEIXIN
		behaviors: ['wx://form-field-button'],
		// #endif
		// #ifdef MP-BAIDU || MP-QQ
		behaviors: ['uni://form-field'],
		// #endif
		props: {
			//样式类型 primary, white, danger, warning, green,blue, gray，black,brown,gray-primary,gray-danger,gray-warning,gray-green
			type: {
				type: String,
				default: 'primary'
			},
			//是否加阴影 移除
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
				default: ''
			},
			//medium 184*40 / small 120 40/ mini 58*32
			btnSize: {
				type: String,
				default: ''
			},
			//字体大小 rpx
			size: {
				type: [Number, String],
				default: 0
			},
			bold: {
				type: Boolean,
				default: false
			},
			margin: {
				type: String,
				default: '0'
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
			//link样式，去掉边框，结合plain一起使用
			link: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			//禁用后背景是否为灰色 （非空心button生效）
			disabledGray: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			},
			formType: {
				type: String,
				default: ''
			},
			openType: {
				type: String,
				default: ''
			},
			appParameter: {
				type: String,
				default: ''
			},
			index: {
				type: [Number, String],
				default: 0
			},
			//是否需要阻止重复点击【默认200ms】
			preventClick: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			getWidth() {
				//medium 184*40 / small 120 40/ mini 58*32
				let width = this.width;
				if (this.btnSize && this.btnSize !== true) {
					width = {
						'medium': '368rpx',
						'small': '240rpx',
						'mini': '116rpx'
					} [this.btnSize] || this.width
				}
				return width
			},
			getHeight() {
				//medium 184*40 / small 120 40/ mini 58*32
				let height = this.height || (uni && uni.$tui && uni.$tui.tuiButton.height) || '96rpx';
				if (this.btnSize && this.btnSize !== true) {
					height = {
						'medium': '80rpx',
						'small': '80rpx',
						'mini': '64rpx'
					} [this.btnSize] || '96rpx'
				}
				return height
			},
			getSize() {
				return this.size || (uni && uni.$tui && uni.$tui.tuiButton.size) || 32;
			}
		},
		data() {
			return {
				time: 0
			};
		},
		methods: {
			hexToRGB(hex) {
				if (hex.length === 4) {
					let text = hex.substring(1, 4);
					hex = '#' + text + text;
				}
				let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
				return result ? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16)
				} : {};
			},
			getColorByType(type, isText, plain) {
				const global = uni && uni.$tui && uni.$tui.color;
				let color = ''
				const colors = {
					'primary': (global && global.primary) || '#5677fc',
					'white': '#fff',
					'danger': (global && global.danger) || '#EB0909',
					'warning': (global && global.warning) || '#ff7900',
					'green': (global && global.success) || '#07c160',
					'blue': (global && global.blue) || '#007aff',
					'gray': '#bfbfbf',
					'black': '#333333',
					'brown': '#ac9157',
					'gray-primary': '#f2f2f2',
					'gray-danger': '#f2f2f2',
					'gray-warning': '#f2f2f2',
					'gray-green': '#f2f2f2'
				}
				if (isText) {
					if (type && ~type.indexOf('gray-')) {
						const tp = type.replace('gray-', '')
						color = colors[tp]
					} else if (type === 'white') {
						color = '#333'
					} else {
						if (plain) {
							color = colors[type]
						} else {
							color = '#fff'
						}
					}
				} else {
					color = colors[type] || colors.primary
				}
				return color;
			},
			getShadow(type, plain) {
				const color = this.getColorByType(type)
				if (plain || !color) return 'none';
				const rgb = this.hexToRGB(color)
				return `0 10rpx 14rpx 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`
			},
			getBgColor(type, plain) {
				return plain ? 'transparent' : this.getColorByType(type)
			},
			getColor(type, plain) {
				return this.getColorByType(type, true, plain)
			},
			handleClick() {
				if (this.disabled) return;
				if (this.preventClick) {
					if (new Date().getTime() - this.time <= 200) return;
					this.time = new Date().getTime();
					setTimeout(() => {
						this.time = 0;
					}, 200);
				}
				this.$emit('click', {
					index: Number(this.index)
				});
			},
			bindgetuserinfo({
				detail = {}
			} = {}) {
				this.$emit('getuserinfo', detail);
			},
			bindcontact({
				detail = {}
			} = {}) {
				this.$emit('contact', detail);
			},
			bindgetphonenumber({
				detail = {}
			} = {}) {
				this.$emit('getphonenumber', detail);
			},
			binderror({
				detail = {}
			} = {}) {
				this.$emit('error', detail);
			},
			bindchooseavatar({
				detail = {}
			} = {}) {
				this.$emit('chooseavatar', detail);
			},
			bindlaunchapp({
				detail = {}
			} = {}) {
				this.$emit('launchapp', detail);
			},
			getDisabledClass: function(disabled, type, plain) {
				let className = '';
				if (disabled && type != 'white' && type.indexOf('-') == -1) {
					let classVal = this.disabledGray ? 'tui-gray-disabled' : 'tui-dark-disabled';
					className = plain ? 'tui-dark-disabled-outline' : classVal;
				}
				return className;
			},
			getShapeClass: function(shape, plain) {
				let className = '';
				if (shape == 'circle') {
					className = plain ? 'tui-outline-fillet' : 'tui-fillet';
				} else if (shape == 'rightAngle') {
					className = plain ? 'tui-outline-rightAngle' : 'tui-rightAngle';
				}
				return className;
			},
			getHoverClass: function(disabled, type, plain) {
				let className = '';
				if (!disabled) {
					className = plain ? 'tui-outline-hover' : 'tui-' + (type || 'primary') + '-hover';
				}
				return className;
			}
		}
	};
</script>

<style scoped>
	.tui-button__wrap {
		position: relative;
	}

	.tui-button__hover:active::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.15);
		border-radius: 6rpx;
		pointer-events: none;
	}

	/* button start*/

	.tui-btn {
		width: 100%;
		position: relative;
		border: 0 !important;
		box-sizing: border-box;
		border-radius: 6rpx;
		padding-left: 0;
		padding-right: 0;
		overflow: visible;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-btn::after {
		border: 0;
	}

	.tui-btn__flex-1 {
		flex: 1;
	}

	.tui-button__border {
		position: absolute;
		width: 200%;
		height: 200%;
		transform-origin: 0 0;
		transform: scale(0.5, 0.5) translateZ(0);
		box-sizing: border-box;
		left: 0;
		top: 0;
		border-radius: 12rpx;
		border: 1px solid transparent;
		pointer-events: none;
	}

	.tui-text-bold {
		font-weight: bold;
	}

	.tui-dark-disabled {
		opacity: 0.6 !important;
		color: #fafbfc !important;
	}

	.tui-dark-disabled-outline {
		opacity: 0.5 !important;
	}

	.tui-gray-disabled {
		background: #f3f3f3 !important;
		color: #919191 !important;
		box-shadow: none;
	}

	/*圆角 */

	.tui-fillet {
		border-radius: 220rpx !important;
	}

	.tui-fillet::after {
		border-radius: 220rpx !important;
	}

	.tui-outline-fillet {
		border-radius: 220rpx !important;
	}

	.tui-outline-fillet::after {
		border-radius: 220rpx !important;
	}

	/*平角*/
	.tui-rightAngle {
		border-radius: 0 !important;
	}

	.tui-rightAngle::after {
		border-radius: 0 !important;
	}

	.tui-outline-rightAngle {
		border-radius: 0 !important;
	}

	.tui-outline-rightAngle::after {
		border-radius: 0 !important;
	}

	.tui-btn__link::after {
		border: 0 !important;
	}
</style>