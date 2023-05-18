<template>
	<view class="tui-tag" :hover-class="hover ? 'tui-tag-opcity' : ''" :hover-stay-time="150"
		:class="[originLeft ? 'tui-origin-left' : '', originRight ? 'tui-origin-right' : '', getClassName(shape, plain), getTypeClass(type, plain)]"
		:style="{ transform: `scale(${scaleMultiple})`, padding: padding, margin: margin, fontSize: size, lineHeight: size,background:getBgColor(type,plain),color:getColor(type,plain) }"
		@tap="handleClick">
		<slot></slot>
		<view class="tui-tag__border" :class="[getClassName(shape, plain)]" :style="{borderColor:getBgColor(type)}"
			v-if="plain"></view>
	</view>
</template>

<script>
	export default {
		name: 'tuiTag',
		emits: ['click'],
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
				//primary， white， danger， warning， green， gray，black，light-blue，light-brownish，light-orange，light-green
				const global = uni && uni.$tui && uni.$tui.color;
				let color = ''
				const _primary = this.hexToRGB((global && global.primary) || '#5677fc')
				const _blue = this.hexToRGB((global && global.blue) || '#007aff')
				const _warning = this.hexToRGB((global && global.warning) || '#ff7900')
				const _danger = this.hexToRGB((global && global.danger) || '#EB0909')
				const _green = this.hexToRGB((global && global.success) || '#07c160')
				const colors = {
					'primary': (global && global.primary) || '#5677fc',
					'white': '#fff',
					'danger': (global && global.danger) || '#EB0909',
					'red': (global && global.pink) || '#f74d54',
					'pink': (global && global.pink) || '#f74d54',
					'warning': (global && global.warning) || '#ff7900',
					'orange': (global && global.warning) || '#ff7900',
					'green': (global && global.success) || '#07c160',
					'blue': (global && global.blue) || '#007aff',
					'gray': '#ededed',
					'btn-gray': '#ededed',
					'black': '#000',
					'light-primary': `rgba(${_primary.r}, ${_primary.g}, ${_primary.b}, 0.08)`,
					'light-blue': `rgba(${_blue.r}, ${_blue.g}, ${_blue.b}, 0.08)`,
					'brownish': '#8a5966',
					'light-brownish': '#fcebef',
					'light-danger': `rgba(${_danger.r}, ${_danger.g}, ${_danger.b}, 0.08)`,
					'light-orange': `rgba(${_warning.r}, ${_warning.g}, ${_warning.b}, 0.08)`,
					'light-warning': `rgba(${_warning.r}, ${_warning.g}, ${_warning.b}, 0.08)`,
					'light-green': `rgba(${_green.r}, ${_green.g}, ${_green.b}, 0.08)`,
					'light-black': '#333',
					'translucent': 'rgba(0, 0, 0, 0.7)'
				}
				if (isText) {
					if (type && ~type.indexOf('light-') && type !== 'light-black') {
						const tp = type.replace('light-', '')
						color = colors[tp]
					} else if (type === 'white') {
						color = plain ? '#fff' : '#333'
					} else if (type === 'btn-gray') {
						color = '#999'
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
			getBgColor(type, plain) {
				return plain ? 'transparent' : this.getColorByType(type)
			},
			getColor(type, plain) {
				return this.getColorByType(type, true, plain)
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
	.tui-tag {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 6rpx;
		flex-shrink: 0;
		position: relative;
	}

	.tui-tag__border {
		position: absolute;
		width: 200%;
		height: 200%;
		transform: scale(0.5) translateZ(0);
		transform-origin: 0 0;
		box-sizing: border-box;
		left: 0;
		top: 0;
		border-radius: 12rpx;
		border: 1px solid;
		pointer-events: none;
	}

	.tui-tag-fillet {
		border-radius: 100rpx;
	}

	.tui-white.tui-tag-fillet {
		border-radius: 160rpx;
	}

	.tui-tag-outline-fillet {
		border-radius: 160rpx;
	}

	.tui-tag-fillet-left {
		border-radius: 100rpx 0 0 100rpx;
	}

	.tui-tag-fillet-right {
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