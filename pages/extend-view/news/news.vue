<template>
	<view class="tui-container">
		<view class="tui-searchbox">
			<view class="tui-rolling-search">
				<!-- #ifdef APP-PLUS || MP -->
				<icon type="search" :size='13' color='#999'></icon>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<view class="tui-icon-box">
					<tui-icon name="search" :size='16' color='#999'></tui-icon>
				</view>
				<!-- #endif -->
				<swiper vertical autoplay circular interval="8000" class="tui-swiper">
					<swiper-item v-for="(item,index) in hotSearch" :key="index" class="tui-swiper-item" @tap="search">
						<view class="tui-hot-item">大家正在搜：{{item}}</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!--banner-->
		<swiper indicator-dots autoplay circular :interval="5000" :duration="150" indicator-color="rgba(255, 255, 255, 0.9)"
		 indicator-active-color="#5677fc" class="tui-banner-swiper">
			<swiper-item v-for="(item,index) in banner" :key="index" @tap.stop="bannerDetail">
				<view class="tui-banner-title">{{item.title}}</view>
				<image :src="'../../../static/images/news/'+item.img" class="tui-slide-image" mode="widthFix" />
			</swiper-item>
		</swiper>

		<!--新闻列表-->
		<view class="tui-news-view">
			<block v-for="(item,index) in newsList" :key="index">
				<tui-list-cell :index="index" @click="detail" :last="count==index">
					<view class="tui-news-flex" :class="[item.isVideo || item.imgNum>1 ?  'tui-flex-column':'tui-flex-start']">
						<view class="tui-news-picbox" :class="[item.isVideo || item.imgNum>1?'tui-w-full':'tui-w220 tui-h165',item.imgNum>1?'tui-flex-between':'']"
						 v-if="item.imgNum>0">
							<block v-for="(items,index2) in item.img" :key="index2">
								<image :src="'../../../static/images/news/'+items" mode="widthFix" class="tui-block" :class="[item.imgNum>1?'tui-one-third':'',item.isVideo?'tui-w-full':'']"></image>
							</block>
							<view class="tui-btm-badge" v-if="item.isVideo || item.imgNum>3">{{item.isVideo?item.time:item.imgNum+'图'}}</view>
							<view class="tui-video" v-if="item.isVideo">
								<tui-icon name="play" color="#fff" :size="24"></tui-icon>
							</view>
						</view>
						<view class="tui-news-tbox tui-flex-column tui-flex-between" :class="[item.imgNum===1 && !item.isVideo?'tui-h165 tui-pl-20':'']">
							<view class="tui-news-title" :class="[(!item.isVideo && item.imgNum===1)|| item.imgNum===0?'':'tui-pt20']">{{item.title}}</view>
							<view class="tui-sub-box" :class="[!item.isVideo && item.imgNum===1?'':'tui-pt20']">
								<view class="tui-sub-source">{{item.source}}</view>
								<view class="tui-sub-cmt">
									<view>{{item.cmtsNum}}评论</view>
									<view class="tui-scale">
										<tui-tag size="small" :plain="true" shape="circleRight" v-if="item.isTop">置顶</tui-tag>
									</view>
								</view>
							</view>
						</view>
					</view>
				</tui-list-cell>
			</block>

		</view>
		<tui-tips ref="toast"></tui-tips>
		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="primary"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn" bgcolor="#f2f2f2"></tui-nomore>
		<!--加载loadding-->
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	import tuiTips from "@/components/tips/tips"
	export default {
		components: {
			tuiIcon,
			tuiTag,
			tuiListCell,
			tuiLoadmore,
			tuiNomore,
			tuiTips
		},
		computed: {
			count() {
				return this.newsList.length - 1
			}
		},
		data() {
			return {
				hotSearch: [
					"早安D站",
					"2019退役球星",
					"卡拉斯科"
				],
				banner: [{
					img: "banner_1.jpg",
					title: "山东官方：德尔加多已完成全部手续办理，具备上场比赛资格"
				}, {
					img: "banner_2.jpg",
					title: "这个世界上，或许没有真正的托黑"
				}, {
					img: "banner_3.jpg",
					title: "金童再见！西班牙前锋托雷斯宣布退役"
				}],
				newsList: [],
				dataSources: [{
					title: "卡拉斯科：俱乐部一些人的态度令我不解；需要解决出现的问题",
					source: "手机中国网",
					cmtsNum: 2019,
					isTop: true,
					isVideo: false,
					time: "00:00",
					img: ["list_1.jpg"],
					imgNum: 1
				}, {
					title: "荷兰媒体：德利赫特接近加盟尤文，转会费7000万，年薪2000万",
					source: "央视网新闻",
					cmtsNum: 3620,
					isTop: true,
					isVideo: false,
					time: "00:00",
					img: ["list_2.jpg"],
					imgNum: 1
				}, {
					title: "申花客场1-0江苏终结九轮不胜，莫雷诺争议进球经VAR判罚有效",
					source: "体坛大精汇",
					cmtsNum: 5230,
					isTop: true,
					isVideo: false,
					time: "00:00",
					img: [],
					imgNum: 0
				}, {
					title: "卡拉斯科：俱乐部一些人的态度令我不解；需要解决出现的问题",
					source: "体坛大精汇",
					cmtsNum: 7690,
					isTop: true,
					isVideo: false,
					time: "00:00",
					img: ["list_3.jpg", "list_2.jpg", "list_1.jpg"],
					imgNum: 20
				}, {
					title: "敲锣鼓、放鞭炮！本周国际赛事MVP提名揭晓",
					source: "体坛大精汇",
					cmtsNum: 2019,
					isTop: true,
					isVideo: false,
					time: "00:00",
					img: ["list_3.jpg"],
					imgNum: 1
				}, {
					title: "申花客场1-0江苏终结九轮不胜，莫雷诺争议进球经VAR判罚有效",
					source: "手机中国网",
					cmtsNum: 2019,
					isTop: true,
					isVideo: false,
					time: "00:00",
					img: ["list_4.jpg"],
					imgNum: 1
				}, {
					title: "荷兰媒体：德利赫特接近加盟尤文，转会费7000万，年薪2000万",
					source: "手机中国网",
					cmtsNum: 2019,
					isTop: true,
					isVideo: true,
					time: "00:58",
					img: ["banner_2.jpg"],
					imgNum: 1
				}, {
					title: "敲锣鼓、放鞭炮！本周国际赛事MVP提名揭晓",
					source: "体坛大精汇",
					cmtsNum: 5230,
					isTop: true,
					isVideo: false,
					time: "00:00",
					img: [],
					imgNum: 0
				}, {
					title: "卡拉斯科：俱乐部一些人的态度令我不解；需要解决出现的问题",
					source: "体坛大精汇",
					cmtsNum: 7690,
					isTop: true,
					isVideo: false,
					time: "00:00",
					img: ["list_3.jpg", "list_2.jpg", "list_4.jpg"],
					imgNum: 8
				}, {
					title: "申花客场1-0江苏终结九轮不胜，莫雷诺争议进球经VAR判罚有效",
					source: "手机中国网",
					cmtsNum: 2019,
					isTop: true,
					isVideo: true,
					time: "00:49",
					img: ["banner_1.jpg"],
					imgNum: 1
				}],
				pageIndex: 1,
				loadding: false,
				pullUpOn: true
			}
		},
		onLoad: function(options) {
			this.newsList = this.dataSources
		},
		methods: {
			search: function() {
				uni.navigateTo({
					url: '../news-search/news-search'
				})
			},
			bannerDetail: function() {
				uni.navigateTo({
					url: '../newsDetail/newsDetail'
				})
			},
			detail(e) {
				let index = e.index;
				let url = "../newsDetail/newsDetail";
				if (this.newsList[index].isVideo) {
					url = "../news-video/news-video";
				}
				uni.navigateTo({
					url: url
				})
			}
		},
		//页面相关事件处理函数--监听用户下拉动作
		onPullDownRefresh: function() {
			this.newsList = this.dataSources;
			this.pageIndex = 1;
			this.pullUpOn = true;
			this.loadding = false;
			uni.stopPullDownRefresh();
			let options = {
				msg: "刷新成功，为你更新了10条数据",
				duration: 2000,
				type: "translucent"
			};
			setTimeout(() => {
				this.$refs.toast.showTips(options);
			}, 300);
		},

		// 页面上拉触底事件的处理函数
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			if (this.pageIndex == 3) {
				this.loadding = false;
				this.pullUpOn = false
			} else {
				let arr = JSON.parse(JSON.stringify(this.dataSources));
				if (this.pageIndex >= 1) {
					for (let item of arr) {
						item.isTop = false;
					}
				}
				this.newsList = this.newsList.concat(arr);
				this.pageIndex = this.pageIndex + 1;
				this.loadding = false
			}
		}
	}
</script>

<style>
	page {
		background: #f2f2f2;
	}

	.tui-container {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-searchbox {
		padding: 16rpx 20rpx;
		box-sizing: border-box;
	}

	.tui-rolling-search {
		width: 100%;
		height: 60rpx;
		border-radius: 35rpx;
		padding: 0 40rpx 0 30rpx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		color: #999;
	}

	.tui-swiper {
		font-size: 26rpx;
		height: 60rpx;
		flex: 1;
		padding-left: 12rpx;
	}

	.tui-swiper-item {
		display: flex;
		align-items: center;
	}

	.tui-hot-item {
		line-height: 26rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tui-banner-swiper {
		width: 100%;
		height: 300rpx;
		position: relative;
	}

	.tui-slide-image {
		width: 100%;
		height: 300rpx;
		display: block;
	}

	.tui-banner-title {
		width: 100%;
		height: 100rpx;
		position: absolute;
		z-index: 9999;
		color: #fff;
		bottom: 0;
		padding: 0 30rpx;
		padding-top: 25rpx;
		font-size: 34rpx;
		font-weight: bold;
		background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
		box-sizing: border-box;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* #ifdef APP-PLUS || MP */
	.tui-banner-swiper .wx-swiper-dots.wx-swiper-dots-horizontal {
		width: 100%;
		top: 280rpx;
		text-align: right;
		padding-right: 30rpx;
		box-sizing: border-box;
	}

	.tui-banner-swiper .wx-swiper-dot {
		width: 8rpx;
		height: 8rpx;
		display: inline-flex;
		background: none;
		justify-content: space-between;
	}

	.tui-banner-swiper .wx-swiper-dot::before {
		content: '';
		flex-grow: 1;
		background: rgba(255, 255, 255, 0.9);
		border-radius: 8rpx;
	}

	.tui-banner-swiper .wx-swiper-dot-active::before {
		background: #5677fc;
	}

	.tui-banner-swiper .wx-swiper-dot.wx-swiper-dot-active {
		width: 18rpx;
	}

	/* #endif */

	/* #ifdef H5 */
	>>>.tui-banner-swiper .uni-swiper-dots.uni-swiper-dots-horizontal {
		width: 100%;
		top: 280rpx;
		text-align: right;
		padding-right: 30rpx;
		box-sizing: border-box;
	}

	>>>.tui-banner-swiper .uni-swiper-dot {
		width: 8rpx;
		height: 8rpx;
		display: inline-flex;
		background: none;
		justify-content: space-between;
	}

	>>>.tui-banner-swiper .uni-swiper-dot::before {
		content: '';
		flex-grow: 1;
		background: rgba(255, 255, 255, 0.9);
		border-radius: 8rpx;
	}

	>>>.tui-banner-swiper .uni-swiper-dot-active::before {
		background: #5677fc;
	}

	>>>.tui-banner-swiper .uni-swiper-dot.uni-swiper-dot-active {
		width: 18rpx;
	}

	/* #endif */

	.tui-news-flex {
		width: 100%;
		display: flex;
	}

	.tui-flex-start {
		align-items: flex-start !important;
	}

	.tui-flex-center {
		align-items: center !important;
	}

	.tui-flex-column {
		flex-direction: column !important;
	}

	.tui-flex-between {
		justify-content: space-between !important;
	}

	.tui-news-cell {
		display: flex;
		padding: 20rpx 30rpx;
	}

	.tui-news-tbox {
		flex: 1;
		width: 100%;
		box-sizing: border-box;
		display: flex;
	}

	.tui-news-picbox {
		display: flex;
		position: relative;
	}

	.tui-w220 {
		width: 220rpx;
	}

	.tui-h165 {
		height: 165rpx;
	}

	.tui-block {
		display: block;
	}

	.tui-w-full {
		width: 100%;
	}

	.tui-one-third {
		width: 33%;
	}

	.tui-news-title {
		width: 100%;
		font-size: 34rpx;
		word-break: break-all;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		box-sizing: border-box;
	}

	.tui-pl-20 {
		padding-left: 20rpx;
	}

	.tui-pt20 {
		padding-top: 20rpx;
	}

	.tui-sub-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #999;
		box-sizing: border-box;
		line-height: 24rpx;
	}

	.tui-sub-source {
		font-size: 26rpx;
	}

	.tui-sub-cmt {
		font-size: 24rpx;
		line-height: 24rpx;
		display: flex;
		align-items: center;
	}

	.tui-tag {
		padding: 2rpx 6rpx !important;
		margin-left: 10rpx;
	}

	.tui-scale {
		transform: scale(0.6);
		transform-origin: center center;
	}

	.tui-btm-badge {
		position: absolute;
		right: 0;
		bottom: 0;
		font-size: 24rpx;
		color: #fff;
		padding: 2rpx 12rpx;
		background: rgba(0, 0, 0, 0.6);
		z-index: 20;
		transform: scale(0.8);
		transform-origin: 100% 100%;
	}

	.tui-video {
		position: absolute;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		transform-origin: 0 0;
	}

	.tui-icon {
		background: rgba(0, 0, 0, 0.5);
		border-radius: 50%;
		padding: 26rpx;
	}

	.tui-icon-box .tui-icon {
		background: none;
		padding: 0;
		border-radius: 0;
	}
</style>
