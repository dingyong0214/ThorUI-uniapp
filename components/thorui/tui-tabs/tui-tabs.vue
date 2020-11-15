<template>
	<view
		class="tui-tabs-view"
		:class="[isFixed ? 'tui-tabs-fixed' : 'tui-tabs-relative', unlined ? 'tui-unlined' : '']"
		:style="{
			width: tabsWidth + 'px',
			height: height + 'rpx',
			padding: `0 ${padding}rpx`,
			background: backgroundColor,
			top: isFixed ? top + 'px' : 'auto',
			zIndex: isFixed ? zIndex : 'auto'
		}"
	>
		<view v-for="(item, index) in tabs" :key="index" class="tui-tabs-item" :style="{ width: itemWidth }" @tap.stop="swichTabs(index)">
			<view
				class="tui-tabs-title"
				:class="{ 'tui-tabs-active': currentTab == index, 'tui-tabs-disabled': item.disabled }"
				:style="{
					color: currentTab == index ? selectedColor : color,
					fontSize: size + 'rpx',
					lineHeight: size + 'rpx',
					fontWeight: bold && currentTab == index ? 'bold' : 'normal'
				}"
			>
				{{ item.name }}
			</view>
		</view>
		<view
			class="tui-tabs-slider"
			:style="{
				transform: 'translateX(' + scrollLeft + 'px)',
				width: sliderWidth + 'rpx',
				height: sliderHeight + 'rpx',
				borderRadius: sliderRadius,
				bottom: bottom,
				background: sliderBgColor,
				marginBottom: bottom == '50%' ? '-' + sliderHeight / 2 + 'rpx' : 0
			}"
		></view>
	</view>
</template>

<script>
export default {
	name: 'tuiTabs',
	props: {
		//标签页
		tabs: {
			type: Array,
			default() {
				return [];
			}
		},
		//tabs宽度，不传值则默认使用windowWidth，单位px
		width: {
			type: Number,
			default: 0
		},
		//rpx
		height: {
			type: Number,
			default: 80
		},
		//rpx 只对左右padding起作用，上下为0
		padding: {
			type: Number,
			default: 30
		},
		//背景色
		backgroundColor: {
			type: String,
			default: '#FFFFFF'
		},
		//是否固定
		isFixed: {
			type: Boolean,
			default: false
		},
		//px
		top: {
			type: Number,
			// #ifndef H5
			default: 0,
			// #endif
			// #ifdef H5
			default: 44
			// #endif
		},
		//是否去掉底部线条
		unlined: {
			type: Boolean,
			default: false
		},
		//当前选项卡
		currentTab: {
			type: Number,
			default: 0
		},
		//滑块宽度
		sliderWidth: {
			type: Number,
			default: 68
		},
		//滑块高度
		sliderHeight: {
			type: Number,
			default: 6
		},
		//滑块背景颜色
		sliderBgColor: {
			type: String,
			default: '#5677fc'
		},
		sliderRadius: {
			type: String,
			default: '50rpx'
		},
		//滑块bottom
		bottom: {
			type: String,
			default: '0'
		},
		//标签页宽度
		itemWidth: {
			type: String,
			default: '25%'
		},
		//字体颜色
		color: {
			type: String,
			default: '#666'
		},
		//选中后字体颜色
		selectedColor: {
			type: String,
			default: '#5677fc'
		},
		//字体大小
		size: {
			type: Number,
			default: 28
		},
		//选中后 是否加粗 ，未选中则无效
		bold: {
			type: Boolean,
			default: false
		},
		zIndex: {
			type: [Number, String],
			default: 996
		}
	},
	watch: {
		currentTab() {
			this.checkCor();
		},
		tabs() {
			this.checkCor();
		},
		width(val) {
			this.tabsWidth = val;
			this.checkCor();
		}
	},
	created() {
		// 高度自适应
		setTimeout(() => {
			uni.getSystemInfo({
				success: res => {
					this.winWidth = res.windowWidth;
					this.tabsWidth = this.width == 0 ? this.winWidth : this.width;
					this.checkCor();
				}
			});
		}, 0);
	},
	data() {
		return {
			winWidth: 0,
			tabsWidth: 0,
			scrollLeft: 0
		};
	},
	methods: {
		checkCor: function() {
			let tabsNum = this.tabs.length;
			let padding = (this.winWidth / 750) * this.padding;
			let width = this.tabsWidth - padding * 2;
			let left = (width / tabsNum - (this.winWidth / 750) * this.sliderWidth) / 2 + padding;
			let scrollLeft = left;
			if (this.currentTab > 0) {
				scrollLeft = scrollLeft + (width / tabsNum) * this.currentTab;
			}
			this.scrollLeft = scrollLeft;
		},
		// 点击标题切换当前页时改变样式
		swichTabs: function(index) {
			let item = this.tabs[index];
			if (item && item.disabled) return;
			if (this.currentTab == index) {
				return false;
			} else {
				this.$emit('change', {
					index: Number(index)
				});
			}
		}
	}
};
</script>

<style scoped>
.tui-tabs-view {
	width: 100%;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.tui-tabs-relative {
	position: relative;
}

.tui-tabs-fixed {
	position: fixed;
	left: 0;
}

.tui-tabs-fixed::before,
.tui-tabs-relative::before {
	content: '';
	position: absolute;
	border-bottom: 1rpx solid #eaeef1;
	-webkit-transform: scaleY(0.5) translateZ(0);
	transform: scaleY(0.5) translateZ(0);
	transform-origin: 0 100%;
	bottom: 0;
	right: 0;
	left: 0;
}

.tui-unlined::before {
	border-bottom: 0 !important;
}

.tui-tabs-item {
	display: flex;
	align-items: center;
	justify-content: center;
}

.tui-tabs-disabled {
	opacity: 0.6;
}

.tui-tabs-title {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	z-index: 2;
}

.tui-tabs-active {
	transition: all 0.15s ease-in-out;
}

.tui-tabs-slider {
	position: absolute;
	left: 0;
	transition: all 0.15s ease-in-out;
	z-index: 0;
	transform: translateZ(0);
}
</style>
