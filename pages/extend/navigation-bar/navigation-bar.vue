<template>
	<view class="container">
		<tui-navigation-bar splitLine @init="initNavigation" @change="opcityChange" :scrollTop="scrollTop" title="NavBar自定义导航栏" backgroundColor="255,255,255" color="#333">
			<view class="tui-header-icon" :style="{ marginTop: top + 'px' }"><tui-icon name="arrowleft" :color="opcity > 0.85 ? '#333' : '#fff'" @click="back"></tui-icon></view>
		</tui-navigation-bar>
		<view class="tui-header-bg"><image src="/static/images/my/mine_bg_3x.png" class="tui-header-img"></image></view>
		<view class="header">
			<view class="title">NavBar</view>
			<view class="sub-title">自定义导航栏：默认固定在顶部，可设置渐变</view>
		</view>
		<view class="tui-title">非沉浸式</view>
		<tui-navigation-bar backgroundColor="255,255,255" :isFixed="false" :isOpcity="false" :isImmersive="false">
			<view class="tui-content-box">
				<view class="tui-avatar-box" @tap="href(1)"><image src="/static/images/news/2.jpg" class="tui-avatar"></image></view>
				<view class="tui-search-box" @tap="href(5)">
					<tui-icon name="search-2" :size="18" color="#bfbfbf"></tui-icon>
					<view class="tui-search-text">请输入搜索关键字</view>
				</view>
				<view class="tui-notice-box">
					<tui-icon name="message" color="#333" :size="32"></tui-icon>
					<tui-badge type="danger" absolute :scaleRatio="0.8" top="-4rpx">1</tui-badge>
				</view>
			</view>
		</tui-navigation-bar>

		<view class="tui-title">沉浸式(多出的空白区域为状态栏高度)</view>
		<tui-navigation-bar backgroundColor="255,255,255" :isFixed="false" :isOpcity="false">
			<view class="tui-content-box">
				<view class="tui-avatar-box" @tap="href(1)"><image src="/static/images/news/2.jpg" class="tui-avatar"></image></view>
				<view class="tui-search-box" @tap="href(5)">
					<tui-icon name="search-2" :size="18" color="#bfbfbf"></tui-icon>
					<view class="tui-search-text">请输入搜索关键字</view>
				</view>
				<view class="tui-notice-box">
					<tui-icon name="message" color="#333" :size="32"></tui-icon>
					<tui-badge type="danger" absolute :scaleRatio="0.8" top="-4rpx">1</tui-badge>
				</view>
			</view>
		</tui-navigation-bar>

		<view class="tui-title">换背景色</view>
		<tui-navigation-bar backgroundColor="235,9,9" :isFixed="false" :isOpcity="false" :isImmersive="false">
			<view class="tui-content-box">
				<view class="tui-avatar-box" @tap="href(1)"><image src="/static/images/news/2.jpg" class="tui-avatar"></image></view>
				<view class="tui-search-box tui-bg-white" @tap="href(5)">
					<tui-icon name="search-2" :size="18" color="#bfbfbf"></tui-icon>
					<view class="tui-search-text">请输入搜索关键字</view>
				</view>
				<view class="tui-notice-box">
					<tui-icon name="message" color="#fff" :size="32"></tui-icon>
					<tui-badge type="white_red" absolute :scaleRatio="0.8" top="-4rpx">1</tui-badge>
				</view>
			</view>
		</tui-navigation-bar>

		<view style="height: 800px"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			top: 0, //标题图标距离顶部距离
			opcity: 0,
			scrollTop: 0.5
		};
	},
	methods: {
		initNavigation(e) {
			this.opcity = e.opcity;
			this.top = e.top;
		},
		opcityChange(e) {
			this.opcity = e.opcity;
		},
		back() {
			uni.navigateBack();
		}
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	}
};
</script>

<style>
.container {
	padding-bottom: 120rpx;
	box-sizing: border-box;
}

.header {
	padding: 80rpx 90rpx 60rpx 90rpx;
	box-sizing: border-box;
}

.title {
	font-size: 34rpx;
	color: #333;
	font-weight: 500;
}

.sub-title {
	font-size: 24rpx;
	color: #7a7a7a;
	padding-top: 18rpx;
}
.tui-title {
	width: 100%;
	padding: 50rpx 30rpx 30rpx;
	box-sizing: border-box;
	font-weight: bold;
}
.tui-header-bg {
	width: 100%;
	margin: 0;
}
.tui-header-img {
	width: 100%;
	height: 440rpx;
	display: block;
}
.tui-header-icon {
	width: 100%;
	position: fixed;
	top: 0;
	padding: 0 12rpx;
	display: flex;
	align-items: center;
	height: 32px;
	transform: translateZ(0);
	z-index: 99999;
	box-sizing: border-box;
}

.tui-content-box {
	width: 100%;
	height: 44px;
	padding: 0 30rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
}
.tui-avatar-box {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #eaeef1;
	flex-shrink: 0;
}
.tui-avatar {
	width: 28px;
	height: 28px;
	border-radius: 50%;
}

.tui-search-box {
	width: 100%;
	height: 32px;
	margin: 0 28rpx;
	border-radius: 18px;
	font-size: 14px;
	background-color: #f1f1f1;
	padding: 0 12px;
	box-sizing: border-box;
	color: #bfbfbf;
	display: flex;
	align-items: center;
}

.tui-bg-white {
	background-color: #ffffff !important;
}
.tui-search-text {
	padding-left: 10rpx;
}

.tui-notice-box {
	position: relative;
	flex-shrink: 0;
	font-size: 44rpx;
	color: #fff;
}
</style>
