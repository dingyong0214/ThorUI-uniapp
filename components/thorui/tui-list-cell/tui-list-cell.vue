<template>
	<view class="tui-list-class tui-list-cell" :class="[
			radius && radius!='0' ? 'tui-radius' : '',
			hover ? 'tui-cell-hover' : ''
		]" :style="{ backgroundColor: backgroundColor, fontSize: getSize + 'rpx', color: getColor, padding: getPadding,borderRadius:radius+'rpx',marginTop:marginTop+'rpx',marginBottom:marginBottom+'rpx' }"
		@tap="handleClick">
		<slot></slot>
		<view class="tui-cell__line"
			:style="{borderBottomColor:getLineColor,left:getLineLeft+'rpx',right:lineRight+'rpx'}" v-if="!unlined">
		</view>
		<view class="tui-cell__arrow" :style="{borderColor:getArrowColor,right:arrowRight+'rpx'}" v-if="arrow"></view>
	</view>
</template>

<script>
	export default {
		name: 'tuiListCell',
		emits: ['click'],
		// #ifdef MP-WEIXIN
		options: {
			virtualHost: true
		},
		// #endif
		props: {
			//是否有箭头
			arrow: {
				type: Boolean,
				default: false
			},
			//V2.3.0+
			arrowColor: {
				type: String,
				default: ''
			},
			//是否有点击效果
			hover: {
				type: Boolean,
				default: true
			},
			//隐藏线条
			unlined: {
				type: Boolean,
				default: false
			},
			//V2.3.0+
			lineColor: {
				type: String,
				default: ''
			},
			//线条左偏移距离
			lineLeft: {
				type: [Number, String],
				default: -1
			},
			//线条右偏移距离
			lineRight: {
				type: [Number, String],
				default: 0
			},
			padding: {
				type: String,
				default: ''
			},
			marginTop: {
				type: [Number, String],
				default: 0
			},
			marginBottom: {
				type: [Number, String],
				default: 0
			},
			//背景颜色
			backgroundColor: {
				type: String,
				default: '#fff'
			},
			//字体大小
			size: {
				type: Number,
				default: 0
			},
			//字体颜色
			color: {
				type: String,
				default: ''
			},
			//圆角值
			radius: {
				type: [Number, String],
				default: 0
			},
			//箭头偏移距离
			arrowRight: {
				type: [Number, String],
				default: 30
			},
			index: {
				type: Number,
				default: 0
			}
		},
		computed: {
			getArrowColor() {
				return this.arrowColor || (uni && uni.$tui && uni.$tui.tuiListCell.arrowColor) || '#c0c0c0';
			},
			getLineColor() {
				return this.lineColor || (uni && uni.$tui && uni.$tui.tuiListCell.lineColor) || '#eaeef1';
			},
			getLineLeft() {
				let left = this.lineLeft;
				if (left === -1) {
					left = (uni && uni.$tui && uni.$tui.tuiListCell.lineLeft);
				}
				return left === undefined || left === null ? 30 : left;
			},
			getPadding() {
				return this.padding || (uni && uni.$tui && uni.$tui.tuiListCell.padding) || '26rpx 30rpx';
			},
			getColor() {
				return this.color || (uni && uni.$tui && uni.$tui.tuiListCell.color) || '#333';
			},
			getSize() {
				return this.size || (uni && uni.$tui && uni.$tui.tuiListCell.size) || 28;
			}
		},
		methods: {
			handleClick() {
				this.$emit('click', {
					index: this.index
				});
			}
		}
	};
</script>

<style scoped>
	.tui-list-cell {
		position: relative;
		width: 100%;
		box-sizing: border-box;
	}

	.tui-radius {
		overflow: hidden;
	}

	.tui-cell-hover:active {
		background-color: rgba(0, 0, 0, 0.1) !important;
	}

	.tui-cell__line {
		position: absolute;
		border-bottom: 1px solid #eaeef1;
		-webkit-transform: scaleY(0.5) translateZ(0);
		transform: scaleY(0.5) translateZ(0);
		transform-origin: 0 100%;
		bottom: 0;
		right: 0;
		left: 0;
		pointer-events: none;
		z-index: 1;
	}

	.tui-cell__arrow {
		height: 10px;
		width: 10px;
		border-width: 2px 2px 0 0;
		border-color: #c0c0c0;
		border-style: solid;
		-webkit-transform: matrix(0.5, 0.5, -0.5, 0.5, 0, 0);
		transform: matrix(0.5, 0.5, -0.5, 0.5, 0, 0);
		position: absolute;
		top: 50%;
		margin-top: -6px;
		right: 30rpx;
	}
</style>