<template>
	<view @touchmove.stop.prevent="stop">
		<view class="tui-bottom-navigation" :class="{ 'tui-navigation-fixed': isFixed, 'tui-remove-splitLine': unlined }">
			<view
				class="tui-navigation-item"
				:class="{ 'tui-item-after_height': splitLineScale, 'tui-last-item': index == itemList.length - 1 }"
				:style="{ backgroundColor: isDarkMode ? '#202020' : backgroundColor }"
				v-for="(item, index) in itemList"
				:key="index"
			>
				<view class="tui-item-inner" @tap="menuClick(index, item.parameter, item.type)">
					<image
						:src="getIcon(current,index, item)"
						class="tui-navigation-img"
						v-if="item.iconPath || (current == index && item.selectedIconPath && item.type == 1)"
					></image>
					<text
						class="tui-navigation-text"
						:style="{
							color: isDarkMode ? '#fff' : current == index && item.type == 1 ? selectedColor : item.color || color,
							fontWeight: current == index && bold && item.type == 1 ? 'bold' : 'normal',
							fontSize: fontSize
						}"
					>
						{{ item.text }}
					</text>
				</view>
				<view
					class="tui-navigation-popup"
					:class="{ 'tui-navigation-popup_show': showMenuIndex == index }"
					:style="{ backgroundColor: isDarkMode ? '#4c4c4c' : subMenuBgColor, left: item.popupLeft || '50%' }"
					v-if="item.itemList"
				>
					<view
						class="tui-popup-cell"
						:class="{ 'tui-first-cell': subIndex === 0, 'tui-last-cell': subIndex === item.itemList.length - 1 }"
						:hover-class="subMenuHover ? (isDarkMode ? 'tui-item-dark_hover' : 'tui-item-hover') : ''"
						:hover-stay-time="150"
						v-for="(subItem, subIndex) in item.itemList || []"
						:key="subIndex"
						@tap="subMenuClick(index, item.type, subIndex, subItem.parameter || '')"
					>
						<text class="tui-ellipsis" :style="{ color: isDarkMode ? '#fff' : subMenuColor, fontSize: subMenufontSize, lineHeight: subMenufontSize }">
							{{ subItem.text }}
						</text>
					</view>
					<view class="tui-popup-triangle" :style="{ borderTopColor: isDarkMode ? '#4c4c4c' : subMenuBgColor }"></view>
				</view>
			</view>
		</view>
		<view class="tui-navigation-mask" :class="{ 'tui-navigation-mask_show': showMenuIndex != -1 }" @tap="handleClose"></view>
	</view>
</template>

<script>
export default {
	name: 'tuiBottomNavigation',
	emits: ['click'],
	props: {
		//当前索引
		current: {
			type: Number,
			default: 0
		},
		/**
		 * {
				text: 'ThorUI',
				iconPath: '/static/images/common/icon_menu_gray.png',
				selectedIconPath: '/static/images/common/icon_menu_gray.png',
				color: '#666',
				//1-选中切换，2-跳转、请求、其他操作，3-菜单
				type: 3,
				//自定义参数，类型自定义
				parameter: null,
				//子菜单left值,不传默认50%,当菜单贴近左右两边可用此参数调整
				popupLeft: '',
				itemList: [
					{
						//不建议超过6个字，请自行控制
						text: '自定义参',
						//自定义参数，类型自定义
						parameter: null
					},
					{
						text: '自定义参数',
						//自定义参数，类型自定义
						parameter: null
					}
				]
			}
		 * 
		 * */
		itemList: {
			type: Array,
			default: () => {
				return [];
			}
		},
		//颜色
		color: {
			type: String,
			default: '#666'
		},
		//选中颜色
		selectedColor: {
			type: String,
			default: '#5677fc'
		},
		fontSize: {
			type: String,
			default: '28rpx'
		},
		//选中后字体是否加粗
		bold: {
			type: Boolean,
			default: true
		},
		//导航条背景颜色
		backgroundColor: {
			type: String,
			default: '#F8F8F8'
		},
		//item分割线高度是否缩小
		splitLineScale: {
			type: Boolean,
			default: true
		},
		//二级菜单字体颜色
		subMenuColor: {
			type: String,
			default: '#333'
		},
		//二级菜单字体大小
		subMenufontSize: {
			type: String,
			default: '28rpx'
		},
		//二级菜单背景色  深色：#4c4c4c
		subMenuBgColor: {
			type: String,
			default: '#fff'
		},
		//二级菜单是否有点击效果
		subMenuHover: {
			type: Boolean,
			default: true
		},
		//是否固定在底部
		isFixed: {
			type: Boolean,
			default: true
		},
		//去除导航栏顶部的线条
		unlined: {
			type: Boolean,
			default: false
		},
		//是否暗黑模式 (true：所有设置颜色失效)
		isDarkMode: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			showMenuIndex: -1 //显示的菜单index
		};
	},
	methods: {
		getIcon: function(current, index, item) {
			let url = item.iconPath;
			if (item.type == 1) {
				url = current == index ? item.selectedIconPath || item.iconPath : item.iconPath;
			}
			return url;
		},
		stop() {
			return false;
		},
		handleClose() {
			this.showMenuIndex = -1;
		},
		menuClick(index, parameter, type) {
			//type：1-选中切换，2-跳转、请求、其他操作，3-菜单
			if (type == 3) {
				this.showMenuIndex = this.showMenuIndex == index ? -1 : index;
			} else {
				this.showMenuIndex = -1;
				this.$emit('click', {
					menu: 'main', //main,sub 主菜单，子菜单
					type: type,
					index: index,
					parameter: parameter || ''
				});
			}
		},
		subMenuClick(index, type, subIndex, parameter) {
			this.showMenuIndex = -1;
			this.$emit('click', {
				menu: 'sub', //main,sub 主菜单，子菜单
				type: type,
				index: index,
				subIndex: subIndex,
				parameter: parameter || ''
			});
		}
	}
};
</script>

<style scoped>
.tui-bottom-navigation {
	width: 100%;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	z-index: 999;
}

.tui-navigation-fixed {
	position: fixed !important;
	left: 0;
	bottom: 0;
	padding-bottom: env(safe-area-inset-bottom);
}

.tui-bottom-navigation::after {
	content: '';
	width: 100%;
	border-top: 1px solid #bfbfbf;
	position: absolute;
	top: 0;
	left: 0;
	transform: scaleY(0.5) translateZ(0);
	transform-origin: 0 0;
	z-index: 1000;
}
.tui-remove-splitLine::before {
	border-top: 0 !important;
}

.tui-navigation-item {
	flex: 1;
	height: 100rpx;
	position: relative;
	box-sizing: border-box;
}

.tui-item-inner {
	width: 100%;
	height: 100rpx;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
}

.tui-navigation-item::after {
	height: 100%;
	content: '';
	position: absolute;
	border-right: 1px solid #bfbfbf;
	transform: scaleX(0.5) translateZ(0);
	right: 0;
	top: 0;
}

.tui-item-after_height::after {
	height: 40% !important;
	top: 30% !important;
}

.tui-last-item::after {
	border-right: 0 !important;
}

.tui-navigation-img {
	width: 32rpx;
	height: 32rpx;
	margin-right: 8rpx;
}

.tui-navigation-popup {
	max-width: 160%;
	width: auto;
	position: absolute;
	border-radius: 8rpx;
	visibility: hidden;
	opacity: 0;
	transform: translate3d(-50%, 0, 0);
	transform-origin: center;
	transition: all 0.12s ease-in-out;
	bottom: 0;
	z-index: -1;
}

.tui-navigation-popup_show {
	transform: translate3d(-50%, -124rpx, 0);
	visibility: visible;
	opacity: 1;
}

.tui-popup-triangle {
	position: absolute;
	width: 0;
	height: 0;
	border-left: 9rpx solid transparent;
	border-right: 9rpx solid transparent;
	border-top: 18rpx solid;
	left: 50%;
	bottom: -18rpx;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
	z-index: 997;
}

.tui-popup-cell {
	width: 100%;
	padding: 32rpx 20rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	position: relative;
}

.tui-ellipsis {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.tui-popup-cell::after {
	content: '';
	position: absolute;
	border-bottom: 1rpx solid #eaeef1;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
	bottom: 0;
	right: 24rpx;
	left: 24rpx;
}

.tui-item-hover {
	background-color: #f1f1f1;
}

.tui-item-dark_hover {
	background-color: #555;
}

.tui-first-cell {
	border-top-left-radius: 8rpx;
	border-top-right-radius: 8rpx;
}

.tui-last-cell {
	border-bottom-left-radius: 8rpx;
	border-bottom-right-radius: 8rpx;
}

.tui-last-cell::after {
	border-bottom: 0 !important;
}

.tui-navigation-mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 995;
	transition: all 0.3s ease-in-out;
	opacity: 0;
	visibility: hidden;
	background-color: rgba(0, 0, 0, 0);
}

.tui-navigation-mask_show {
	opacity: 1;
	visibility: visible;
}
</style>
