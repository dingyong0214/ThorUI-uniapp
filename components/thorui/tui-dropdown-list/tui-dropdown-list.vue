<template>
	<view>
		<view class="tui-selected-class tui-dropdown-list"
			:style="{ height: selectHeight ? selectHeight + 'rpx' : 'auto' }">
			<slot name="selectionbox"></slot>
			<view class="tui-dropdown-view" :class="[show ? 'tui-dropdownlist-show' : '']"
				:style="{ backgroundColor: backgroundColor, height: show ? height + 'rpx' : 0, top: top + 'rpx' }">
				<slot name="dropdownbox"></slot>
			</view>
		</view>
		<view class="tui-dropdown__mask" :style="{backgroundColor:maskBackground}" v-if="isMask && show"
			@tap.stop="maskClick">
		</view>
	</view>
</template>

<script>
	export default {
		name: 'tuiDropdownList',
		emits: ['close'],
		props: {
			//控制显示
			show: {
				type: Boolean,
				default: false
			},
			//背景颜色
			backgroundColor: {
				type: String,
				default: 'transparent'
			},
			//top  rpx
			top: {
				type: Number,
				default: 0
			},
			//下拉框高度 rpx
			height: {
				type: Number,
				default: 0
			},
			//选择框高度 单位rpx
			selectHeight: {
				type: Number,
				default: 0
			},
			isMask: {
				type: Boolean,
				default: false
			},
			maskBackground: {
				type: String,
				default: 'transparent'
			}
		},
		methods: {
			maskClick() {
				this.$emit('close', {})
			}
		}
	};
</script>

<style scoped>
	.tui-dropdown-list {
		position: relative;
		z-index: 12;
	}

	.tui-dropdown-view {
		width: 100%;
		overflow: hidden;
		position: absolute;
		z-index: -99;
		left: 0;
		opacity: 0;
		/* visibility: hidden; */
		transition: all 0.2s ease-in-out;
	}

	.tui-dropdownlist-show {
		opacity: 1;
		z-index: 996;
		/* visibility: visible; */
	}

	.tui-dropdown__mask {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .1);
		z-index: 5;
	}
</style>