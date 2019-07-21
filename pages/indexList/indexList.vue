<template>
	<view class="page">
		<scroll-view class="scrollList" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight+'px'}">
			<view class="search-bar">
				<view class="search-bar-form">
					<view class="search-bar-box">
						<!-- #ifdef APP-PLUS || MP-->
						<icon class="icon-search-in-box" type="search" :size="16"></icon>
						<!-- #endif -->
						<input confirm-type="search" class="search-bar-input" placeholder="请输入搜索关键词" placeholder-class="phcolor" :value="inputVal"
						 @input="inputTyping" @confirm="searchCity" />
						<view class="icon-clear" v-if="inputShowed" @tap="clearInput">
							<!-- #ifdef APP-PLUS || MP-->
							<icon type="clear" :size="15"></icon>
							<!-- #endif -->
						</view>
					</view>
				</view>
				<button class="btn-primary" hover-class="btn-hover" @tap="searchCity">搜索</button>
			</view>
			<view class="tui-list search-result" v-if="inputShowed">
				<view class="tui-list-cell" hover-class="tui-list-cell-hover" v-for="(item,index) in searchResult" :key="index"
				 @tap="selectCity" :data-name="item" :hover-stay-time='150'>
					<view class="tui-list-cell-navigate">
						<image :src="'../../static/images/news/'+((index%2===0 && index!==0)?'avatar_2.jpg':'avatar_1.jpg')" class="img"></image>
						<view class="content">
							<view class="title">{{item.name}}</view>
							<view class="sub-title">{{item.mobile}}</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="!inputShowed">
				<view class="tui-list city-list">
					<block v-for="(list,index) in lists" :key="index" v-if="list.data[0]">
						<view class="tui-list-cell-divider" :id="list.letter">
							{{list.letter}}
						</view>
						<view class="tui-list-cell" hover-class="tui-list-cell-hover" v-for="(item,index2) in list.data" :key="index2"
						 @tap="selectCity" :data-name="item.name" :hover-stay-time='150'>
							<view class="tui-list-cell-navigate" :class="[list.data.length-1==index2?'last':'']">
								<image :src="'../../static/images/news/'+((index2%2===0 && index2!==0)?'avatar_1.jpg':'avatar_2.jpg')" class="img"></image>
								<view class="content">
									<view class="title">{{item.name}}</view>
									<view class="sub-title">{{item.mobile}}</view>
								</view>

							</view>
						</view>
					</block>
				</view>
			</view>
		</scroll-view>
		<view class="tui-indexed-list-bar" :style="{height:indexBarHeight+'px'}" @touchstart="touchStart" @touchmove.stop="touchMove"
		 @touchend.stop="touchEnd" @touchcancel.stop="touchCancel" v-if="!inputShowed">
			<text v-for="(items,index)  in lists" :key="index" class="tui-indexed-list-text" :style="{height:indexBarItemHeight+'px'}">
				{{items.letter=="well"?"#":items.letter}}
			</text>
		</view>
		<view class="tui-indexed-list-alert" v-if="touchmove && lists[touchmoveIndex].letter">
			{{lists[touchmoveIndex].letter=="well"?"#":lists[touchmoveIndex].letter}}
		</view>
	</view>
</template>

<script>
	const cityData = require('../../utils/index.list.js')
	export default {
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
				inputShowed: false, // 输入框是否显示
				inputVal: '', // 搜索框输入的内容
				searchResult: [] // 搜索结果
			}
		},
		onLoad: function(options) {
			const that = this;
			setTimeout(() => {
				uni.getSystemInfo({
					success: function(res) {
						let winHeight = res.windowHeight;
						let barHeight = winHeight - uni.upx2px(204);
						that.winHeight = winHeight;
						that.indexBarHeight = barHeight;
						that.indexBarItemHeight = barHeight / 25;
						that.titleHeight = uni.upx2px(128);
						that.lists = cityData.list
					}
				})
			}, 50)
		},
		methods: {
			clearInput() {
				this.inputVal = "";
				this.inputShowed = false;
				this.searchResult = [];
				uni.hideKeyboard() //强行隐藏键盘
			},
			inputTyping(e) {
				this.inputVal = e.detail.value
			},
			// 搜索城市
			searchCity() {
				if (!this.inputVal) {
					this.tui.toast("请输入搜索关键词")
					return
				}
				let result = []
				cityData.list.forEach((item1, index1) => {
					item1.data.forEach((item2, index2) => {
						if (item2.keyword.indexOf(this.inputVal.toLocaleUpperCase()) !== -1) {
							result.push({
								name: item2.name,
								mobile: item2.mobile
							})
						}
					})
				})
				this.inputShowed = true;
				this.searchResult = result;
			},
			// 选择城市
			selectCity(e) {
				//返回并刷新上一页面
			},
			touchStart(e) {
				this.touchmove = true
				let pageY = e.touches[0].pageY
				let index = Math.floor((pageY - this.titleHeight) / this.indexBarItemHeight)
				let item = this.lists[index]
				if (item) {
					this.scrollViewId = item.letter;
					this.touchmoveIndex = index;
				}
			},
			touchMove(e) {
				let pageY = e.touches[0].pageY;
				let index = Math.floor((pageY - this.titleHeight) / this.indexBarItemHeight)
				let item = this.lists[index]
				if (item) {
					this.scrollViewId = item.letter;
					this.touchmoveIndex = index;
				}
			},
			touchEnd() {
				this.touchmove = false;
				this.touchmoveIndex = -1
			},
			touchCancel() {
				this.touchmove = false;
				this.touchmoveIndex = -1
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		overflow: hidden;
	}

	.page {
		height: 100%;
		overflow: hidden;
	}

	.scrollList {
		flex: 1;
	}

	.search-bar {
		display: flex;
		align-items: center;
		position: relative;
		padding: 30upx 30upx 30upx;
		background-color: #fff;
		/* box-shadow: 0 2px 2px #ccc;*/
	}

	.search-bar-form {
		flex: 1;
		position: relative;
		border-radius: 32upx;
		background: #f2f5f7;
	}

	.search-bar-box {
		display: flex;
		align-items: center;
		position: relative;
		padding-left: 20upx;
		padding-right: 20upx;
		height: 64upx;
		z-index: 1;
	}

	.search-bar-input {
		line-height: normal;
		width: 100%;
		padding-left: 20upx;
		font-size: 30upx;
		color: #333;
	}

	.phcolor {
		font-size: 30upx;
	}

	.icon-clear {
		height: 38upx;
	}

	.icon-search {
		position: relative;
		height: 26upx;
		margin-right: 20upx;
		font-size: inherit;
	}

	.cancel-btn {
		padding-left: 30upx;
	}

	.btn-primary {
		height: 62upx;
		width: 122upx;
		font-size: 30upx;
		line-height: 62upx;
		margin-left: 30upx;
	}

	.search-result::before {
		display: none;
	}

	.search-result::after {
		display: none;
	}

	.tui-list-cell {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.tui-list-cell-hover {
		background-color: #eee !important;
	}

	.tui-list-cell-navigate {
		width: 100%;
		position: relative;
		padding: 25upx 0 25upx 30upx;
		font-size: 28upx;
		color: #333;
		display: flex;
		align-items: center;
	}

	.tui-list-cell-navigate::after {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 30upx;
	}

	.img {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}

	.content {
		width: 80%;
		padding-left: 30upx;
	}

	.title {
		width: 80%;
		font-size: 34upx;
		padding-bottom: 10upx;
		color: #333;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis
	}

	.sub-title {
		width: 80%;
		color: #7A7A7A;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 28upx;
	}

	.tui-list {
		background-color: #fff;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-list-cell-divider {
		height: 66upx;
		padding-left: 30upx;
		font-size: 26upx;
		color: #999;
		background: #f2f5f7;
		padding: 0 30upx;
		display: flex;
		align-items: center;
	}

	.tui-indexed-list-bar {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		z-index: 9999;
		position: absolute;
		top: 132upx;
		right: 0;
		padding-right: 10upx;
		width: 44upx;
	}

	.tui-indexed-list-text {
		font-size: 22upx;
	}

	.tui-indexed-list-bar.active {
		background-color: rgb(200, 200, 200);
	}

	.tui-indexed-list-alert {
		position: absolute;
		z-index: 20;
		width: 120upx;
		height: 120upx;
		right: 90upx;
		top: 50%;
		margin-top: -60upx;
		border-radius: 16upx;
		text-align: center;
		line-height: 120upx;
		font-size: 50upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
