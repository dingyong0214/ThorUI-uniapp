<template>
	<view :class="[dot ? 'tui-badge-dot' : 'tui-badge', !dot ? 'tui-badge-scale' : '']"
		:style="{ top: top, right: right, position: absolute ? 'absolute' : 'static', transform: getStyle, margin: margin,background:getBackground,color:getColor }"
		@tap="handleClick">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'tuiBadge',
		emits: ['click'],
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
			},
			getBackground() {
				const global = uni && uni.$tui && uni.$tui.color;
				let color = {
					'primary': (global && global.primary) || '#5677fc',
					'green': (global && global.success) || '#07c160',
					'warning': (global && global.warning) || '#ff7900',
					'danger': (global && global.danger) || '#EB0909',
					'white': '#fff',
					'black': '#000',
					'gray': '#ededed',
					'red': (global && global.pink) || '#f74d54',
					'pink': (global && global.pink) || '#f74d54',
					'white_red': '#fff',
					'white_primary': '#fff',
					'white_green': '#fff',
					'white_warning': '#fff',
					'white_pink': '#fff'
				} [this.type]
				return color
			},
			getColor() {
				const global = uni && uni.$tui && uni.$tui.color;
				let color = {
					'primary': '#fff',
					'green': '#fff',
					'warning': '#fff',
					'danger': '#fff',
					'white': '#333',
					'black': '#fff',
					'gray': '#999',
					'red': '#fff',
					'pink': (global && global.pink) || '#f74d54',
					'white_red': (global && global.danger) || '#EB0909',
					'white_primary': (global && global.primary) || '#5677fc',
					'white_green': (global && global.success) || '#07c160',
					'white_warning': (global && global.warning) || '#ff7900',
					'white_pink': (global && global.pink) || '#f74d54',
				} [this.type]
				return color
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
</style>