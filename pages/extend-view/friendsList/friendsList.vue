<template>
	<view class="tui-page">
		<scroll-view class="tui-scrollList" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight + 'px'}"
		 @scroll="onScroll">
			<!--searchbox-->
			<view class="tui-searchbox">
				<view class="tui-search-input" @tap="search">
					<!-- #ifdef APP-PLUS || MP -->
					<icon type="search" :size='15' color='#999'></icon>
					<!-- #endif -->
					<text class="tui-search-text">搜索</text>
				</view>
			</view>
			<tui-cell :last="true" @click="detail">
				<image src="../../../static/images/news/2.jpg" class="tui-img"></image>
				<view class="tui-name">新的朋友</view>
			</tui-cell>
			<!--searchbox-->
			<!--联系人列表-->
			<view class="tui-list city-list">
				<block v-for="(list,index) in lists" :key="index">
					<tui-sticky :scrollTop="scrollTop" stickyHeight="66rpx" v-if="list.data[0]">
						<template v-slot:header>
							<view class="tui-list-cell-divider" :id="list.letter">
								{{list.letter}}
							</view>
						</template>
						<template v-slot:content>
							<block v-for="(item,index2) in list.data" :key="index2">
								<tui-cell :last="last(list.data,index2)" @click="detail">
									<image :src="'../../../static/images/news/'+((index2%2===0 && index2!==0)?'avatar_1.jpg':'avatar_2.jpg')"
									 class="tui-img"></image>
									<view class="tui-name">{{item.name}}</view>
								</tui-cell>
							</block>
						</template>
					</tui-sticky>
				</block>
			</view>
			<!--联系人列表-->
			<view class="tui-footer">120位联系人</view>
			<view class="tui-safearea-bottom"></view>
		</scroll-view>
		<view class="tui-indexed-list-bar" :style="{height:indexBarHeight+'px'}" @touchstart.stop="touchStart"
		 @touchmove.stop="touchMove" @touchend.stop="touchEnd" @touchcancel.stop="touchCancel">
			<view v-for="(items,index3) in lists" :key="index3" class="tui-indexed-list-text" :style="{height:indexBarItemHeight+'px'}">
				{{items.letter=="well"?"#":items.letter}}
			</view>
		</view>
		<view class="tui-indexed-list-alert" v-if="touchmove && lists[touchmoveIndex].letter">
			<text>{{lists[touchmoveIndex].letter=="well"?"#":lists[touchmoveIndex].letter}}</text>
		</view>
	</view>
</template>

<script>
	const cityData = require('../../../utils/index.list.js')
	import tuiCell from "@/components/list-cell/list-cell"
	import tuiIcon from "@/components/icon/icon"
	import tuiSticky from "@/components/sticky/sticky"
	export default {
		components: {
			tuiCell,
			tuiIcon,
			tuiSticky
		},
		computed: {
			last() {
				return function(data, index) {
					return data.length - 1 == index ? true : false
				}
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
				scrollViewId: '', // scroll-view滚动到的子元素的id
				winHeight: 0,
				scrollTop: 0
			}
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
						that.lists = cityData.list
					}
				})
			}, 10)
		},
		methods: {
			touchStart(e) {
				this.touchmove = true
				let pageY = e.touches[0].pageY
				let index = Math.floor((pageY - this.titleHeight) / this.indexBarItemHeight)
				let item = this.lists[index]
				if (item) {
					this.scrollViewId = item.letter;
					this.touchmoveIndex = index
				}
			},
			touchMove(e) {
				let pageY = e.touches[0].pageY;
				let index = Math.floor((pageY - this.titleHeight) / this.indexBarItemHeight)
				let item = this.lists[index]
				if (item) {
					this.scrollViewId = item.letter;
					this.touchmoveIndex = index
				}
			},
			touchEnd() {
				this.touchmove = false;
				this.touchmoveIndex = -1
			},
			touchCancel() {
				this.touchmove = false;
				this.touchmoveIndex = -1
			},
			search: function() {
				uni.navigateTo({
					url: '../news-search/news-search'
				})
			},
			detail: function() {
				uni.navigateTo({
					url: '../chat/chat'
				})
			},
			//页面滚动执行方式
			onScroll(e) {
				this.scrollTop = e.detail.scrollTop
			}
		}
	}
</script>

<style>
	page {
		background: #f5f6fa;
		height: 100%;
		overflow: hidden;
	}

	.tui-page {
		height: 100%;
		overflow: hidden;
	}

	.tui-scrollList {
		flex: 1;
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
		background: #f5f6fa;
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

	/*searchbox*/

	.tui-cell-class::after {
		left: 140rpx !important;
	}

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
		background: #f5f6fa;
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		font-weight: bold;
	}

	.tui-indexed-list-bar {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		z-index: 9999;
		position: absolute;
		top: 132rpx;
		right: 0;
		padding-right: 10rpx;
		width: 44rpx;
		color: #555;
		font-weight: bold;
	}

	.tui-indexed-list-text {
		font-size: 22rpx;
	}

	.tui-indexed-list-alert {
		position: absolute;
		z-index: 20;
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

	.tui-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}
</style>
