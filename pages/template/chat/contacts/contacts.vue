<template>
	<view class="container">
		<!--searchbox-->
		<view class="tui-searchbox">
			<view class="tui-search-input" @tap="search">
				<icon type="search" :size="15" color="#999"></icon>
				<text class="tui-search-text">搜索</text>
			</view>
		</view>
		<view class="tui-list-cell tui-cell-last" hover-class="tui-cell-hover" :hover-start-time="150" @tap="detail">
			<image src="/static/images/news/2.jpg" class="tui-img"></image>
			<view class="tui-name">新的朋友</view>
		</view>
		<!--searchbox-->
		<!--联系人列表-->
		<block v-for="(list, index) in lists" :key="index">
			<tui-sticky :recalc="1" :scrollTop="scrollTop" stickyHeight="66rpx" :index="index" @change="stickyChange">
				<!--tips:sticky组件中最好不要嵌套其他自定义组件-->
				<template v-slot:header>
					<view class="tui-list-cell-divider">{{ list.letter == 'well' ? '#' : list.letter }}</view>
				</template>
				<template v-slot:content>
					<view
						class="tui-list-cell"
						:class="{ 'tui-cell-last': last(list.data, index2) }"
						hover-class="tui-cell-hover"
						:hover-start-time="150"
						@tap="detail"
						v-for="(item, index2) in list.data"
						:key="index2"
					>
						<image :src="'/static/images/news/' + (index2 % 2 === 0 && index2 !== 0 ? 'avatar_1.jpg' : 'avatar_2.jpg')" class="tui-img"></image>
						<view class="tui-name">{{ item.name }}</view>
					</view>
				</template>
			</tui-sticky>
		</block>
		<!--联系人列表-->
		<view class="tui-footer" v-if="lists.length">120位联系人</view>
		<view class="tui-indexed-list-bar" :style="{ height: indexBarHeight + 'px' }">
			<view
				@touchstart.stop="touchStart"
				@touchmove.stop.prevent="touchMove"
				@touchend.stop="touchEnd"
				@touchcancel.stop="touchCancel"
				@tap="handleClick(index3)"
				v-for="(items, index3) in lists"
				:key="index3"
				class="tui-indexed-list-text"
				:style="{ height: indexBarItemHeight + 'px' }"
			>
				{{ items.letter == 'well' ? '#' : items.letter }}
			</view>
		</view>
		<view class="tui-indexed-list-alert" v-if="touchmove && lists[touchmoveIndex].letter">
			<text>{{ lists[touchmoveIndex].letter == 'well' ? '#' : lists[touchmoveIndex].letter }}</text>
		</view>
	</view>
</template>

<script>
import cityData from '@/utils/index.list.js'
export default {
	computed: {
		last() {
			return function(data, index) {
				return data.length - 1 == index ? true : false;
			};
		}
	},
	data() {
		return {
			lists: [],
			touchmove: false, // 是否在索引表上滑动
			touchmoveIndex: -1,
			titleHeight: 0, // A字距离窗口顶部的高度
			indexBarHeight: 0, // 索引表高度
			indexBarItemHeight: 0, // 索引表子项的高度
			winHeight: 0,
			scrollTop: 0
		};
	},
	onLoad: function(options) {
		const that = this;
		setTimeout(() => {
			uni.getSystemInfo({
				success: function(res) {
					let winHeight = res.windowHeight;
					let barHeight = winHeight - uni.upx2px(232);
					that.winHeight = winHeight;
					that.indexBarHeight = barHeight;
					that.indexBarItemHeight = barHeight / 25;
					that.titleHeight = uni.upx2px(132);
					that.lists = cityData.list;
				}
			});
		}, 10);
	},
	watch: {
		touchmoveIndex: function() {
			if (this.touchmoveIndex != -1) {
				uni.pageScrollTo({
					scrollTop: this.lists[this.touchmoveIndex].stickyTop + 1,
					duration: 10
				});
			}
		}
	},
	methods: {
		touchStart(e) {
			this.touchmove = true;
			let pageY = e.changedTouches[0].pageY - this.scrollTop;
			let index = Math.floor((pageY - this.titleHeight) / this.indexBarItemHeight);
			let item = this.lists[index];
			if (item) {
				this.touchmoveIndex = index;
			}
		},
		touchMove(e) {
			let pageY = e.changedTouches[0].pageY - this.scrollTop;
			let index = Math.floor((pageY - this.titleHeight) / this.indexBarItemHeight);
			let item = this.lists[index];
			if (item) {
				this.touchmoveIndex = index;
			}
		},
		touchEnd() {
			this.touchmove = false;
			this.touchmoveIndex = -1;
		},
		touchCancel() {
			this.touchmove = false;
			this.touchmoveIndex = -1;
		},
		handleClick(index){
			if(index===undefined || this.touchmove) return;
			let item = this.lists[index];
			if (item) {
				this.touchmoveIndex = index;
			}
		},
		stickyChange: function(e) {
			let index = e.index;
			this.lists[index].stickyTop = e.top;
		},
		search: function() {
			uni.navigateTo({
				url: '../../news/search/search'
			});
		},
		detail: function() {
			uni.navigateTo({
				url: '../chat/chat'
			});
		}
	},
	//页面滚动执行方式
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	}
};
</script>

<style>
.container {
	padding-bottom: env(safe-area-inset-bottom);
}

/*searchbox*/

.tui-searchbox {
	width: 100%;
	height: 100rpx;
	padding: 0 30rpx;
	box-sizing: border-box;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}

.tui-search-input {
	width: 100%;
	height: 72rpx;
	background-color: #fafafa;
	border-radius: 36rpx;
	font-size: 30rpx;
	color: #a8abb8;
	display: flex;
	align-items: center;
	justify-content: center;
}

.tui-search-text {
	padding-left: 16rpx;
}

.tui-list-cell {
	position: relative;
	width: 100%;
	padding: 26rpx 30rpx;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	align-items: center;
	background: #fff;
	font-size: 32rpx;
	color: #333;
}

.tui-cell-hover {
	background: #f7f7f9 !important;
}

.tui-list-cell::after {
	content: '';
	position: absolute;
	border-bottom: 1rpx solid #eaeef1;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
	bottom: 0;
	right: 0;
	left: 140rpx;
}

.tui-cell-last::after {
	border-bottom: 0 !important;
}

/*searchbox*/

.tui-img {
	width: 80rpx;
	height: 80rpx;
	border-radius: 50%;
}

.tui-name {
	width: 80%;
	padding-left: 30rpx;
	font-size: 34rpx;
	color: #333;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.tui-list-cell-divider {
	height: 66rpx;
	padding-left: 30rpx;
	font-size: 26rpx;
	color: #555;
	background-color: #fafafa;
	padding: 0 30rpx;
	display: flex;
	align-items: center;
	font-weight: bold;
	box-sizing: border-box;
}

.tui-indexed-list-bar {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	z-index: 999999;
	position: fixed;
	top: 132rpx;
	/* #ifdef H5 */
	top: 220rpx;
	/* #endif */
	right: 0;
	padding-right: 10rpx;
	width: 44rpx;
	color: #555;
	font-weight: 500;
}

.tui-indexed-list-text {
	font-size: 22rpx;
}

.tui-indexed-list-alert {
	position: fixed;
	width: 120rpx;
	height: 120rpx;
	right: 90rpx;
	top: 50%;
	margin-top: -60rpx;
	border-radius: 24rpx;
	font-size: 50rpx;
	color: #fff;
	background-color: rgba(0, 0, 0, 0.65);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	z-index: 9999999;
}

.tui-indexed-list-alert text {
	line-height: 50rpx;
}

.tui-footer {
	padding: 30rpx 0;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30rpx;
	color: #999;
}
</style>
