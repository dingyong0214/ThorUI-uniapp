<template>
	<view class="tui-tabs-view"
		:class="[isFixed ? 'tui-tabs-fixed' : 'tui-tabs-relative', unlined ? 'tui-unlined' : '']" :style="{
			width: tabsWidth + 'px',
			height: height + 'rpx',
			padding: `0 ${padding}rpx`,
			background: backgroundColor,
			top: isFixed ? top + 'px' : 'auto',
			zIndex: isFixed ? zIndex : 'auto'
		}" v-if="tabsWidth>0">
		<view v-for="(item, index) in tabs" :key="index" class="tui-tabs-item"
			:style="{ width: getItemWidth,height: height + 'rpx' }" @tap.stop="swichTabs(index)">
			<view class="tui-tabs-title" :class="{'tui-tabs-disabled': item.disabled }" :style="{
					color: currentTab == index ? getSelectedColor : color,
					fontSize: size + 'rpx',
					fontWeight: bold && currentTab == index ? 'bold' : 'normal',transform:`scale(${currentTab == index?scale:1})`
				}">
				{{ item.name }}
				<view :class="[item.isDot ? 'tui-badge__dot' : 'tui-tabs__badge']"
					:style="{ color: badgeColor, backgroundColor: getBadgeBgColor }" v-if="item.num || item.isDot">
					{{ item.isDot ? '' : item.num }}
				</view>
			</view>
		</view>
		<view v-if="isSlider" class="tui-tabs-slider" :style="{
				transform: 'translateX(' + scrollLeft + 'px)',
				width: sliderWidth + 'rpx',
				height: sliderHeight + 'rpx',
				borderRadius: sliderRadius,
				bottom: bottom,
				background: getSliderBgColor,
				marginBottom: bottom == '50%' ? '-' + sliderHeight / 2 + 'rpx' : 0
			}"></view>
	</view>
</template>

<script>
	export default {
		name: 'tuiTabs',
		emits: ['change'],
		props: {
			//标签页
			tabs: {
				type: Array,
				default () {
					return [];
				}
			},
			//tabs宽度，不传值则默认使用windowWidth，单位px
			width: {
				type: [Number,String],
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
			isSlider: {
				type: Boolean,
				default: true
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
				default: ''
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
				default: ''
			},
			//字体颜色
			color: {
				type: String,
				default: '#666'
			},
			//选中后字体颜色
			selectedColor: {
				type: String,
				default: ''
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
			//2.3.0+
			scale: {
				type: [Number, String],
				default: 1
			},
			//角标字体颜色
			badgeColor: {
				type: String,
				default: '#fff'
			},
			//角标背景颜色
			badgeBgColor: {
				type: String,
				default: ''
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
		computed: {
			getItemWidth() {
				let width = 100 / (this.tabs.length || 4) + '%'
				return this.itemWidth ? this.itemWidth : width
			},
			getSliderBgColor() {
				return this.sliderBgColor || (uni && uni.$tui && uni.$tui.color.primary) || '#5677fc';
			},
			getSelectedColor() {
				return this.selectedColor || (uni && uni.$tui && uni.$tui.color.primary) || '#5677fc';
			},
			getBadgeBgColor() {
				return this.badgeBgColor || (uni && uni.$tui && uni.$tui.color.pink) || '#f74d54';
			}
		},
		created() {
			// 高度自适应
			setTimeout(() => {
				uni.getSystemInfo({
					success: res => {
						this.winWidth = res.windowWidth;
						this.tabsWidth = this.width == 0 ? this.winWidth : Number(this.width);
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
				let padding = uni.upx2px(Number(this.padding));
				let width = this.tabsWidth - padding * 2;
				let left = (width / tabsNum - uni.upx2px(Number(this.sliderWidth))) / 2 + padding;
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
		overflow: visible;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.tui-tabs-disabled {
		opacity: 0.6;
	}

	.tui-tabs-title {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 3;
		overflow: visible;
		transition: all 0.15s ease-in-out;
	}

	.tui-tabs-slider {
		position: absolute;
		left: 0;
		transition: all 0.15s ease-in-out;
		z-index: 1;
		transform-style: preserve-3d;
	}

	.tui-tabs__badge {
		position: absolute;
		font-size: 24rpx;
		height: 32rpx;
		min-width: 20rpx;
		padding: 0 6rpx;
		border-radius: 40rpx;
		right: 0;
		top: 0;
		transform: translate(88%, -50%);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		z-index: 4;
		font-weight: normal !important;
	}

	.tui-badge__dot {
		position: absolute;
		height: 16rpx;
		width: 16rpx;
		border-radius: 50%;
		right: -10rpx;
		top: -10rpx;
		z-index: 4;
	}
</style>