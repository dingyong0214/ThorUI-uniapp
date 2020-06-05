<template>
	<view class="tui-cascade-selection">
		<scroll-view
			scroll-x
			scroll-with-animation
			:scroll-into-view="scrollViewId"
			:style="{ backgroundColor: headerBgColor }"
			class="tui-bottom-line"
			:class="{ 'tui-btm-none': !headerLine }"
		>
			<view class="tui-selection-header" :style="{ height: tabsHeight, backgroundColor: backgroundColor }">
				<view
					class="tui-header-item"
					:class="{ 'tui-font-bold': index === currentTab && bold }"
					:style="{ color: index === currentTab ? activeColor : color, fontSize: size + 'rpx' }"
					:id="`id_${index}`"
					@tap.stop="swichNav"
					:data-current="index"
					v-for="(item, index) in selectedArr"
					:key="index"
				>
					{{ item.text }}
					<view class="tui-active-line" :style="{ backgroundColor: lineColor }" v-if="index === currentTab && showLine"></view>
				</view>
			</view>
		</scroll-view>
		<swiper class="tui-selection-list" :current="currentTab" duration="300" @change="switchTab" :style="{ height: height, backgroundColor: backgroundColor }">
			<swiper-item v-for="(item, index) in selectedArr" :key="index">
				<scroll-view scroll-y :scroll-into-view="item.scrollViewId" class="tui-selection-item" :style="{ height: height }">
					<view class="tui-first-item" :style="{ height: firstItemTop }"></view>
					<view
						class="tui-selection-cell"
						:style="{ padding: padding, backgroundColor: backgroundColor }"
						:id="`id_${subIndex}`"
						v-for="(subItem, subIndex) in item.list"
						:key="subIndex"
						@tap="change(index, subIndex, subItem)"
					>
						<icon type="success_no_circle" v-if="item.index === subIndex" :color="checkMarkColor" :size="checkMarkSize" class="tui-icon-success"></icon>
						<image :src="subItem.src" v-if="subItem.src" class="tui-cell-img" :style="{ width: imgWidth, height: imgHeight, borderRadius: radius }"></image>
						<view
							class="tui-cell-title"
							:class="{ 'tui-font-bold': item.index === subIndex && textBold, 'tui-flex-shrink': nowrap }"
							:style="{ color: item.index === subIndex ? textActiveColor : textColor, fontSize: textSize + 'rpx' }"
						>
							{{ subItem.text }}
						</view>
						<view class="tui-cell-sub_title" :style="{ color: subTextColor, fontSize: subTextSize + 'rpx' }" v-if="subItem.subText">{{ subItem.subText }}</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	name: 'tuiCascadeSelection',
	props: {
		/**
			 * 如果下一级是请求返回，则为第一级数据，否则所有数据
			 * 数据格式
			  [{
				  src: "",
				  text: "",
				  subText: "",
				  value: 0,
				  children:[{
					  text: "",
					  subText: "",
					  value: 0,
					  children:[]
			   }]
			  }]
			 * */
		itemList: {
			type: Array,
			default: () => {
				return [];
			}
		},
		/*
		   初始化默认选中数据
		   [{
			text: "",//选中text
			subText: '',//选中subText
			value: '',//选中value
			src: '', //选中src，没有则传空或不传
			index: 0, //选中数据在当前layer索引
			list: [{src: "", text: "", subText: "", value: 101}] //所有layer数据集合
		  }];
		    
		   */
		defaultItemList: {
			type: Array,
			value: []
		},
		//是否显示header底部细线
		headerLine: {
			type: Boolean,
			default: true
		},
		//header背景颜色
		headerBgColor: {
			type: String,
			default: '#FFFFFF'
		},
		//顶部标签栏高度
		tabsHeight: {
			type: String,
			default: '88rpx'
		},
		//默认显示文字
		text: {
			type: String,
			default: '请选择'
		},
		//tabs 文字大小
		size: {
			type: Number,
			default: 28
		},
		//tabs 文字颜色
		color: {
			type: String,
			default: '#555'
		},
		//选中颜色
		activeColor: {
			type: String,
			default: '#5677fc'
		},
		//选中后文字加粗
		bold: {
			type: Boolean,
			default: true
		},
		//选中后是否显示底部线条
		showLine: {
			type: Boolean,
			default: true
		},
		//线条颜色
		lineColor: {
			type: String,
			default: '#5677fc'
		},
		//icon 大小
		checkMarkSize: {
			type: Number,
			default: 15
		},
		//icon 颜色
		checkMarkColor: {
			type: String,
			default: '#5677fc'
		},
		//item 图片宽度
		imgWidth: {
			type: String,
			default: '40rpx'
		},
		//item 图片高度
		imgHeight: {
			type: String,
			default: '40rpx'
		},
		//图片圆角
		radius: {
			type: String,
			default: '50%'
		},
		//item text颜色
		textColor: {
			type: String,
			default: '#333'
		},
		textActiveColor: {
			type: String,
			default: '#333'
		},
		//选中后字体是否加粗
		textBold: {
			type: Boolean,
			default: true
		},
		//item text字体大小
		textSize: {
			type: Number,
			default: 28
		},
		//text 是否不换行
		nowrap: {
			type: Boolean,
			default: false
		},
		//item subText颜色
		subTextColor: {
			type: String,
			default: '#999'
		},
		//item subText字体大小
		subTextSize: {
			type: Number,
			default: 24
		},
		// item padding
		padding: {
			type: String,
			default: '20rpx 30rpx'
		},
		//占位高度，第一条数据距离顶部距离
		firstItemTop: {
			type: String,
			default: '20rpx'
		},
		//swiper 高度
		height: {
			type: String,
			default: '300px'
		},
		//item  swiper 内容部分背景颜色
		backgroundColor: {
			type: String,
			default: '#FFFFFF'
		},
		//子集数据是否请求返回（默认false，一次性返回所有数据）
		request: {
			type: Boolean,
			default: false
		},
		//子级数据（当有改变时，默认当前选中项新增子级数据，request=true时生效）
		receiveData: {
			type: Array,
			default: () => {
				return [];
			}
		},
		//改变值则重置数据
		reset: {
			type: [Number, String],
			default: 0
		}
	},
	watch: {
		itemList(val) {
			this.initData(val, -1);
		},
		receiveData(val) {
			this.subLevelData(val, this.currentTab);
		},
		reset() {
			this.initData(this.itemList, -1);
		}
	},
	created() {
		let defaultItemList = this.defaultItemList || [];
		if (defaultItemList.length > 0) {
			defaultItemList.map(item => {
				item.scrollViewId = `id_${item.index}`;
			});
			this.selectedArr = defaultItemList;
			this.currentTab = defaultItemList.length - 1;
			this.$nextTick(() => {
				this.checkCor();
			});
		} else {
			this.initData(this.itemList, -1);
		}
	},
	data() {
		return {
			currentTab: 0,
			//tab栏scrollview滚动的位置
			scrollViewId: 'id__1',
			selectedArr: []
		};
	},
	methods: {
		initData(data, layer) {
			if (!data || data.length === 0) return;
			if (this.request) {
				//第一级数据
				this.subLevelData(data, layer);
			} else {
				let selectedValue = this.selectedValue || {};
				if (selectedValue.type) {
					this.setDefaultData(selectedValue);
				} else {
					this.subLevelData(this.getItemList(layer, -1), layer);
				}
			}
		},
		removeChildren(data) {
			let list = data.map(item => {
				delete item['children'];
				return item;
			});
			return list;
		},
		getItemList(layer, index) {
			let list = [];
			let arr = JSON.parse(JSON.stringify(this.itemList));
			if (layer == -1) {
				list = this.removeChildren(arr);
			} else {
				let value = this.selectedArr[0].index;
				value = value == -1 ? index : value;
				list = arr[value].children || [];
				if (layer > 0) {
					for (let i = 1; i < layer + 1; i++) {
						let val = layer === i ? index : this.selectedArr[i].index;
						list = list[val].children || [];
						if (list.length === 0) break;
					}
				}
				list = this.removeChildren(list);
			}
			return list;
		},
		//滚动切换
		switchTab: function(e) {
			this.currentTab = e.detail.current;
			this.checkCor();
		},
		//点击标题切换当
		swichNav: function(e) {
			let cur = e.currentTarget.dataset.current;
			if (this.currentTab != cur) {
				this.currentTab = cur;
			}
		},
		checkCor: function() {
			let item = this.selectedArr[this.currentTab];
			item.scrollViewId = 'id__1';
			this.$nextTick(() => {
				setTimeout(() => {
					let val = item.index < 2 ? 0 : Number(item.index - 2);
					item.scrollViewId = `id_${val}`;
				}, 2);
			});
			
			if (this.currentTab > 1) {
				this.scrollViewId = `id_${this.currentTab - 1}`;
			} else {
				this.scrollViewId = `id_0`;
			}
		},
		change(index, subIndex, subItem) {
			let item = this.selectedArr[index];
			if (item.index == subIndex) return;
			item.index = subIndex;
			item.text = subItem.text;
			item.value = subItem.value;
			item.subText = subItem.subText || '';
			item.src = subItem.src || '';

			this.$emit('change', {
				layer: index,
				subIndex: subIndex, //layer=> Array index
				...subItem
			});

			if (!this.request) {
				let data = this.getItemList(index, subIndex);
				this.subLevelData(data, index);
			}
		},
		//新增子级数据时处理
		subLevelData(data, layer) {
			if (!data || data.length === 0) {
				if (layer == -1) return;
				//完成选择
				let result = JSON.parse(JSON.stringify(this.selectedArr));
				let lastItem = result[result.length - 1] || {};
				let text = '';
				result.map(item => {
					text += item.text;
					delete item['list'];
					//delete item['index'];
					delete item['scrollViewId'];
					return item;
				});
				this.$emit('complete', {
					result: result,
					value: lastItem.value,
					text: text,
					subText: lastItem.subText,
					src: lastItem.src
				});
			} else {
				//重置数据（ >layer层级）
				let item = [
					{
						text: this.text,
						subText: '',
						value: '',
						src: '',
						index: -1,
						scrollViewId: 'id__1',
						list: data
					}
				];
				if (layer == -1) {
					this.selectedArr = item;
				} else {
					let retainArr = this.selectedArr.slice(0, layer + 1);
					this.selectedArr = retainArr.concat(item);
				}
				this.$nextTick(() => {
					this.currentTab = this.selectedArr.length - 1;
				});
			}
		}
	}
};
</script>

<style scoped>
.tui-cascade-selection {
	width: 100%;
	box-sizing: border-box;
}

.tui-selection-header {
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;
	box-sizing: border-box;
}

.tui-bottom-line {
	position: relative;
}

.tui-bottom-line::after {
	width: 100%;
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

.tui-btm-none::after {
	border-bottom: 0 !important;
}

.tui-header-item {
	max-width: 240rpx;
	padding: 15rpx 30rpx;
	box-sizing: border-box;
	flex-shrink: 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	position: relative;
}

.tui-font-bold {
	font-weight: bold;
}

.tui-active-line {
	width: 60rpx;
	height: 6rpx;
	border-radius: 4rpx;
	position: absolute;
	bottom: 0;
	right: 0;
	left: 50%;
	transform: translateX(-50%);
}

.tui-selection-cell {
	width: 100%;
	box-sizing: border-box;
	display: flex;
	align-items: center;
}

.tui-icon-success {
	margin-right: 12rpx;
}

.tui-cell-img {
	margin-right: 12rpx;
	flex-shrink: 0;
}

.tui-cell-title {
	word-break: break-all;
}

.tui-flex-shrink {
	flex-shrink: 0;
}

.tui-font-bold {
	font-weight: bold;
}

.tui-cell-sub_title {
	margin-left: 20rpx;
	word-break: break-all;
}
.tui-first-item {
	width: 100%;
}
</style>
