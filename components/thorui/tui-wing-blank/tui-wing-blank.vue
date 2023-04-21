<template>
	<view class="tui-wing__blank" :class="[radius?'tui-wingblank__hidden':'',getPadding?'':`tui-wingblank__${size}`]"
		:style="getStyles" @tap="handleClick">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "tuiWingBlank",
		emits: ['click'],
		props: {
			//small、default、large
			size: {
				type: String,
				default: 'default'
			},
			gap: {
				type: [Number, String],
				default: 0
			},
			background: {
				type: String,
				default: 'transparent'
			},
			radius: {
				type: [Number, String],
				default: 0
			},
			marginTop: {
				type: [Number, String],
				default: 0
			},
			marginBottom: {
				type: [Number, String],
				default: 0
			}
		},
		computed: {
			getPadding() {
				let styles = '';
				const padding = Number(this.gap)
				if (padding && padding > 0) {
					styles += `padding:0 ${padding}rpx;`
				}
				return styles
			},
			getStyles() {
				let styles =
					`background:${this.background};border-radius:${this.radius}rpx;margin-top:${this.marginTop}rpx;margin-bottom:${this.marginBottom}rpx;`;
				styles += this.getPadding;
				return styles
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
	.tui-wing__blank {
		/* #ifndef APP-NVUE */
		width: 100%;
		box-sizing: border-box;
		/* #endif */
	}

	.tui-wingblank__hidden {
		overflow: hidden;
	}

	.tui-wingblank__small {
		padding: 0 10rpx;
	}

	.tui-wingblank__default {
		padding: 0 20rpx;
	}

	.tui-wingblank__large {
		padding: 0 30rpx;
	}
</style>