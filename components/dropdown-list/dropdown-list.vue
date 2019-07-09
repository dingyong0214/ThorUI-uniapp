<template>
	<view class="tui-selected-class tui-dropdown-list" :style="{height:selectHeight?px(selectHeight):'auto'}">
		<slot name="selectionbox"></slot>
		<view class="tui-dropdown-view" :class="[show?'tui-dropdownlist-show':'']" :style="{background:bgcolor,height:px(show?height:0),top:px(top)}">
			<slot name="dropdownbox"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tuiDropdownList",
		props: {
			//控制显示
			show: {
				type: Boolean,
				default: false
			},
			//背景颜色
			bgcolor: {
				type: String,
				default: "none"
			},
			//top  rpx
			top: {
				type: Number,
				default: 0
			},
			//下拉框高度 upx
			height: {
				type: Number,
				default: 0
			},
			//选择框高度 单位upx
			selectHeight: {
				type: Number,
				default: 0
			}
		},
		methods: {
			px(num){
				return uni.upx2px(num) + 'px'
			}
		}
	}
</script>

<style>
	.tui-dropdown-list {
		position: relative;
	}

	.tui-dropdown-view {
		width: 100%;
		overflow: hidden;
		position: absolute;
		z-index: 9999;
		left: 0;
		/* opacity: 0; */
		visibility: hidden;
		transition: all 0.2s ease-in-out;

	}

	.tui-dropdownlist-show {
		/* opacity: 1; */
		visibility: visible;
	}
</style>
