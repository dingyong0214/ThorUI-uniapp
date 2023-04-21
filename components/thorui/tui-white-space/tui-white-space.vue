<template>
	<view class="tui-white__space" :class="['tui-whitespace__'+(getHeight?'':size)]" :style="getStyles"
		@tap="handleClick">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		emits: ['click'],
		name: "tuiWhiteSpace",
		props: {
			//small、default、large
			size: {
				type: String,
				default: 'default'
			},
			height: {
				type: [Number, String],
				default: 0
			},
			background: {
				type: String,
				default: 'transparent'
			}
		},
		computed: {
			getHeight() {
				let styles = ''
				const h = Number(this.height)
				if (h && h > 0) {
					styles += `height:${h}rpx;`
				}
				return styles
			},
			getStyles() {
				let styles = `background:${this.background};`
				styles += this.getHeight;
				return styles;
			}
		},
		methods: {
			handleClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style scoped>
	.tui-white__space {
		/* #ifndef APP-NVUE */
		width: 100%;
		box-sizing: border-box;
		/* #endif */
	}

	.tui-whitespace__small {
		height: 10rpx
	}

	.tui-whitespace__default {
		height: 20rpx
	}

	.tui-whitespace__large {
		height: 30rpx
	}
</style>