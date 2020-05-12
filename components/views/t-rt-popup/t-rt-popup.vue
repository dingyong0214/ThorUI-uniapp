<template>
	<view>
		<tui-bubble-popup :show="popupShow" @close="toggle" :maskBgColor="maskBgColor" right="8px" :top="popupTop" triangleRight="16px" triangleTop="-22rpx">
			<view
				class="tui-popup-item"
				:class="{ 'tui-start': index === 0, 'tui-last': index === itemList.length - 1 }"
				hover-class="tui-item-active"
				:hover-stay-time="150"
				@tap="handleClick(index)"
				v-for="(item, index) in itemList"
				:key="index"
			>
			    <tui-icon :name="item.icon" color="#fff" :size="20" v-if="item.icon && !isImage"></tui-icon>
				<image :src="item.icon" v-if="item.icon && isImage" :style="{width:width,height:height}"></image>
				<text class="tui-bubble-popup_title">{{ item.title }}</text>
			</view>
		</tui-bubble-popup>
	</view>
</template>

<script>
//右上角气泡弹层
export default {
	name: 'tRtPopup',
	props: {
		//如果图标是image，则icon传入图片地址
		itemList: {
			type: Array,
			default: () => {
				return [
					{
						title: '关闭',
						icon: 'close'
					}
				];
			}
		},
		//遮罩背景色
		maskBgColor: {
			type: String,
			default: 'transparent'
		},
		//图标是否为图片
		isImage:{
			type: Boolean,
			default: false
		},
		//图标宽度
		width:{
			type: String,
			default: '40rpx'
		},
		//图标高度
		height:{
			type: String,
			default: '40rpx'
		}
		
	},
	created() {
		// #ifdef H5
		this.popupTop = 44 + uni.upx2px(12) + 'px';
		// #endif
	},
	data() {
		return {
			popupShow: false,
			popupTop: '12rpx'
		};
	},
	methods: {
		handleClick(index) {
			this.$emit('click', { index: index });
			this.toggle()
		},
		toggle() {
			this.popupShow = !this.popupShow;
		}
	}
};
</script>

<style lang="scss" scoped>
.tui-popup-item {
	padding: 34rpx;
	display: flex;
	align-items: center;
	font-size: 34rpx;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #888;
		-webkit-transform: scaleY(0.5);
		transform: sc8aleY(0.5);
		bottom: 0;
		right: 0;
		left: 38rpx;
	}

	.tui-bubble-popup_title {
		padding-left: $uni-spacing-row-base;
	}
}

.tui-start {
	border-top-left-radius: 8rpx;
	border-top-right-radius: 8rpx;
}

.tui-last {
	border-bottom-left-radius: 8rpx;
	border-bottom-right-radius: 8rpx;
	&::after {
		border-bottom: 0 !important;
	}
}

.tui-item-active {
	background-color: #444;
}
</style>
