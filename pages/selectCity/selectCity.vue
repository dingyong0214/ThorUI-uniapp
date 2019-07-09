<template>
	<view class="page">
		<scroll-view class="scrollList" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight+'px'}">
			<view class="search-bar">
				<view class="search-bar-form">
					<view class="search-bar-box">
						<!-- <icon class="icon-search-in-box" type="search" size="16"></icon> -->
						<input confirm-type="search" class="search-bar-input" placeholder="输入城市名称或首字母查询" placeholder-class="phcolor"
						 :value="inputVal" :focus="inputShowed" @input="inputTyping" />
						<view class="icon-clear" v-if="inputVal" @tap="clearInput">
							<!-- #ifdef APP-PLUS || MP -->
							<icon type="clear" :size="15"></icon>
							<!-- #endif -->
						</view>
					</view>
					<label class="search-bar-label" v-if="!inputShowed" @tap="showInput">
						<!-- <icon class="icon-search" type="search" size="16"></icon> -->
						<view class="search-bar-text">输入城市名称或首字母查询</view>
					</label>
				</view>
			</view>
			<view class="tui-list search-result" v-if="inputShowed">
				<view class="tui-list-cell" hover-class="tui-list-cell-hover" v-for="(item,index) in searchResult" :key="index"
				 @tap="selectCity" :data-name="item" :hover-stay-time='150'>
					<view class="tui-list-cell-navigate">
						{{item}}
					</view>
				</view>
			</view>
			<view v-if="!inputVal">
				<view class="current-city">
					<view class="title">定位城市</view>
					<view class="city-name">
						<tui-icon  name="position-fill" color="#5677fc" :size="18"></tui-icon>
						{{localCity}}
					</view>
				</view>
				<view class="hot-city">
					<view class="title">热门城市</view>
					<view class="city-names">
						<view class="city-name-item" v-for="(item,index) in hotCity" :key="index" hover-class="tap-city" :hover-stay-time="150"
						 @tap="selectCity" :data-name="item">
							{{item}}
						</view>
					</view>
				</view>
				<view class="tui-list city-list">
					<block v-for="(list,index) in lists" :key="index" v-if="list.data[0]">
						<view class="tui-list-cell-divider" :id="index === 0 ? 'suoyin' : list.letter">
							{{list.letter}}
						</view>
						<view class="tui-list-cell" hover-class="tui-list-cell-hover" v-for="(item,index2) in list.data" :key="index2" @tap="selectCity"
						 :data-name="item.cityName" :hover-stay-time='150'>
							<view class="tui-list-cell-navigate" :class="[list.data.length-1==index?'last':'']">
								{{item.cityName}}
							</view>
						</view>
					</block>
				</view>
			</view>
		</scroll-view>
		<view class="tui-indexed-list-bar" :style="{height:indexBarHeight+'px'}" @touchstart="touchStart" @touchmove.stop="touchMove"
		 @touchend.stop="touchEnd" @touchcancel.stop="touchCancel" v-if="!inputVal">
			<text v-for="(items,index) in lists" :key="index" class="tui-indexed-list-text" :style="{height:indexBarItemHeight+'px'}">
				{{index==0?"索引":items.letter}}
			</text>
		</view>
		<view class="tui-indexed-list-alert" v-if="touchmove && lists[touchmoveIndex].letter">
			{{lists[touchmoveIndex].letter}}
		</view>
	</view>
</template>

<script>
	const cityData = require('../../utils/city.js')
	import tuiIcon from "@/components/icon/icon"
	export default {
		components: {
			tuiIcon
		},
		data() {
			return {
				lists: [],
				touchmove: false, // 是否在索引表上滑动
				touchmoveIndex: -1,
				titleHeight: 0, // 索引二字距离窗口顶部的高度
				indexBarHeight: 0, // 索引表高度
				indexBarItemHeight: 0, // 索引表子项的高度
				scrollViewId: '', // scroll-view滚动到的子元素的id
				winHeight: 0,
				inputShowed: false, // 输入框是否显示
				inputVal: '', // 搜索框输入的内容
				hotCity: ['北京', '上海', '广州', '深圳', '杭州', '长沙', '武汉', '厦门', '西安', '昆明', '成都', '重庆'], // 热门城市
				searchResult: [], // 搜索城市的结果
				localCity: ''
			}
		},
		onLoad: function(options) {
			const that = this;
			that.localCity = options.currentCity || "深圳";
			setTimeout(() => {
				uni.getSystemInfo({
					success: function(res) {
						let winHeight = res.windowHeight
						let barHeight = winHeight - uni.upx2px(204);
						that.winHeight = winHeight;
						that.indexBarHeight = barHeight;
						that.indexBarItemHeight = barHeight / 25;
						that.titleHeight = uni.upx2px(132);
						that.lists = cityData.list
					}
				})
			}, 50)
		},
		methods: {
			showInput() {
				this.inputShowed = true
			},
			clearInput() {
				this.inputVal = "";
				this.inputShowed = false;
				this.searchResult = [];
				uni.hideKeyboard() //强行隐藏键盘
			},
			inputTyping(e) {
				this.inputVal = e.detail.value;
				this.searchCity()
			},
			// 搜索城市
			searchCity() {
				let result = []
				cityData.list.forEach((item1, index1) => {
					item1.data.forEach((item2, index2) => {
						if (item2.keyword.indexOf(this.inputVal.toLocaleUpperCase()) !== -1) {
							result.push(item2.cityName)
						}
					})
				})
				this.searchResult = result
			},
			// 选择城市
			selectCity(e) {
				let cityName = e.currentTarget.dataset.name;
				//返回并刷新上一页面
				this.$eventHub.$emit('emit', cityName)
				uni.navigateBack({
					delta: 1
				})
			},
			touchStart(e) {
				this.touchmove = true
				let pageY = e.touches[0].pageY
				let index = Math.floor((pageY - this.titleHeight) / this.indexBarItemHeight)
				let item = this.lists[index === 0 ? 1 : index]
				if (item) {
					this.scrollViewId = item.letter;
					this.touchmoveIndex = index;
				}
			},
			touchMove(e) {
				let pageY = e.touches[0].pageY;
				let index = Math.floor((pageY - this.titleHeight) / this.indexBarItemHeight)
				let item = this.lists[index === 0 ? 1 : index]
				if (item) {
					this.scrollViewId = item.letter;
					this.touchmoveIndex = index
				}
			},
			touchEnd() {
				this.touchmove = false;
				this.touchmoveIndex = -1;
			},
			touchCancel() {
				this.touchmove = false;
				this.touchmoveIndex = -1;
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
		padding: 27upx 30upx 35upx;
		background-color: #fff;
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

	.search-bar-label {
		height: 64upx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 2;
		border-radius: 32upx;
		color: #ccc;
		background: #f2f5f7;
	}

	.icon-search {
		position: relative;
		height: 26upx;
		margin-right: 20upx;
		font-size: inherit;
	}

	.search-bar-text {
		font-size: 30upx;
		line-height: 32upx;
	}

	.cancel-btn {
		padding-left: 30upx;
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
		padding: 30upx 0 30upx 30upx;
		font-size: 28upx;
		color: #333;
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

	.current-city {
		padding: 0 30upx 30upx;
		background: #fff;
	}

	.tui-icon-class {
		margin-right: 10upx;
	}

	.current-city .title {
		font-size: 24upx;
		line-height: 24upx;
		color: #999;
	}

	.city-name {
		display: flex;
		align-items: center;
		margin-top: 17upx;
		font-size: 30upx;
		font-weight: bold;
		line-height: 30upx;
		color: #333;
	}

	.hot-city .title {
		height: 48upx !important;
		padding-left: 30upx;
		font-size: 24upx !important;
		line-height: 48upx !important;
		color: #999;
		background: #f2f5f7 !important;
	}

	.city-names {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: space-between;
		width: 630upx;
		padding: 12upx 90upx 26upx 30upx;
		background: #fff;
	}

	.city-name-item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 140upx;
		height: 56upx;
		margin-top: 16upx;
		/* border: solid 1upx #ccc; */
		border-radius: 28upx;
		font-size: 28upx;
		color: #333;
		position: relative;
	}

	.city-name-item::before {
		content: "";
		position: absolute;
		width: 200%;
		height: 200%;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scale(0.5, 0.5);
		transform: scale(0.5, 0.5);
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		left: 0;
		top: 0;
		border-radius: 56upx;
		border: 1px solid #ccc;
	}

	.tap-city {
		color: #fff;
		background: #5677fc;
		/* border: solid 1upx #5677fc; */
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
		height: 48upx;
		padding-left: 30upx;
		font-size: 24upx;
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
		white-space: nowrap;
	}

	.tui-indexed-list-bar.active {
		background-color: rgb(200, 200, 200);
	}

	.tui-indexed-list-alert {
		position: absolute;
		z-index: 20;
		width: 160upx;
		height: 160upx;
		left: 50%;
		top: 50%;
		margin-left: -80upx;
		margin-top: -80upx;
		border-radius: 80upx;
		text-align: center;
		line-height: 160upx;
		font-size: 70upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
