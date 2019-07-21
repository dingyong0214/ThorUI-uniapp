<template>
	<view class="container">

		<!--banner-->
		<view class="tui-banner-box">
			<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="150" class="tui-banner-swiper" :circular="true"
			 previous-margin="60rpx" next-margin="60rpx" @change="change">
				<swiper-item v-for="(item,index) in banner" :key="index" class="tui-banner-item">
					<image :src="'../../../static/images/mall/banner/'+item" class="tui-slide-image" :class="[current!=index?'tui-banner-scale':'']"
					 mode="scaleToFill" @tap="detail" />
				</swiper-item>
			</swiper>
		</view>
		<!--banner-->

		<!--headlines-->
		<view class="tui-rolling-news list-item">
			<tui-icon name="news" :size='22' color='#555'></tui-icon>
			<swiper :vertical="true" :autoplay="true" :circular="true" :interval="4000" class="tui-swiper">
				<swiper-item v-for="(item,index) in headlines" :key="index" class="tui-swiper-item">
					<view class="tui-news-item">{{item}}</view>
				</swiper-item>
			</swiper>
		</view>
		<!--headlines-->
		<!--classify-->
		<view class="tui-classify-box">
			<view class="tui-classify-item" v-for="(item,index) in classify" :key="index" @tap="more" :data-key="item.name">
				<image :src="'../../../static/images/classify/'+item.img+'.png'" class="tui-classify-img" />
				<view class="tui-classify-name">{{item.name}}</view>
			</view>
		</view>
		<!--classify-->
		<view class="tui-spike-box">
			<view class="tui-spike-title list-item">限时秒杀</view>
			<!--商品列表-->
			<swiper :indicator-dots="false" :autoplay="true" :interval="5000" :duration="400" :circular="true"
			 :display-multiple-items="2" :vertical="true" class="tui-spike-swiper">
				<swiper-item v-for="(item,index) in productList" :key="index">
					<view class="tui-pro-item list-item" hover-class="hover" :hover-start-time="150" @tap="detail">
						<image :src="'../../../static/images/mall/product/'+item.img+'.jpg'" class="tui-pro-img" mode="widthFix" />
						<view class="tui-pro-content">
							<view class="tui-pro-tit">{{item.name}}</view>
							<view class="tui-pro-btmbox">
								<view class="tui-pro-price">
									<text class="tui-sale-price">￥{{item.sale}}</text>
									<text class="tui-factory-price">￥{{item.factory}}</text>
								</view>
								<view class="tui-countdown">
									<view class="tui-countdown-text">剩余</view>
									<tui-countdown :time="item.time" color="#e41f19" bcolor="#e41f19" coloncolor="#e41f19" :scale="true"></tui-countdown>
									<view class="tui-countdown-text">结束</view>
								</view>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<!--商品列表-->

		</view>

	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiCountdown from "@/components/countdown/countdown"
	export default {
		components:{
			tuiIcon,
			tuiCountdown
		},
		data() {
			return {
				banner: [
					"1.jpg",
					"2.jpg",
					"3.jpg",
					"4.jpg",
					"5.jpg"
				],
				classify: [{
						img: "kongtiao",
						name: "空调"
					},
					{
						img: "Icewash",
						name: "冰洗"
					},
					{
						img: "heater",
						name: "热水器"
					},
					{
						img: "bed",
						name: "床"
					},
					{
						img: "boutique",
						name: "精品"
					}
				],
				current: 0,
				headlines: [
					"苹果XR对比华为Mate20你会选择谁",
					"格兰仕暗示拜访拼多多后遭天猫打压，拼多多高层赞其有勇气",
					"耐克没进前十，今年Q1全球受欢迎品牌榜"
				],
				productList: [{
						img: 1,
						name: "欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）",
						sale: 599,
						factory: 899,
						time: {
							hours: 0,
							minute: 20,
							second: 26
						}
					},
					{
						img: 2,
						name: "德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒",
						sale: 29,
						factory: 69,
						time: {
							hours: 0,
							minute: 30,
							second: 22
						}
					},
					{
						img: 3,
						name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
						sale: 299,
						factory: 699,
						time: {
							hours: 0,
							minute: 30,
							second: 56
						}
					},
					{
						img: 4,
						name: "百雀羚套装女补水保湿护肤品",
						sale: 1599,
						factory: 2899,
						time: {
							hours: 0,
							minute: 36,
							second: 12
						}
					},
					{
						img: 5,
						name: "百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋",
						sale: 599,
						factory: 899,
						time: {
							hours: 0,
							minute: 40,
							second: 40
						}
					},
					{
						img: 6,
						name: "短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤",
						sale: 599,
						factory: 899,
						time: {
							hours: 0,
							minute: 50,
							second: 20
						}
					},
					{
						img: 1,
						name: "欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜",
						sale: 599,
						factory: 899,
						time: {
							hours: 1,
							minute: 0,
							second: 38
						}
					},
					{
						img: 2,
						name: "德国DMK进口牛奶",
						sale: 29,
						factory: 69,
						time: {
							hours: 1,
							minute: 10,
							second: 4
						}
					},
					{
						img: 3,
						name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
						sale: 299,
						factory: 699,
						time: {
							hours: 1,
							minute: 30,
							second: 0
						}
					},
					{
						img: 4,
						name: "百雀羚套装女补水保湿护肤品",
						sale: 1599,
						factory: 2899,
						time: {
							hours: 1,
							minute: 40,
							second: 17
						}
					}
				]
			}
		},
		methods: {
			change: function(e) {
				this.current = e.detail.current
			},
			detail: function() {
				uni.navigateTo({
					url: '../productDetail/productDetail'
				})
			},
			more: function(e) {
				let key = e.currentTarget.dataset.key || "";
				uni.navigateTo({
					url: '../productList/productList?searchKey=' + key
				})
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: 100rpx;
		box-sizing: border-box;
	}

	/*banner*/

	.tui-banner-box {
		width: 100%;
		padding-top: 20rpx;
		box-sizing: border-box;
		background: #fff;
	}

	.tui-banner-swiper {
		width: 100%;
		height: 240rpx;
	}

	.tui-banner-item {
		padding: 0 16rpx;
		box-sizing: border-box;
	}

	.tui-slide-image {
		width: 100%;
		height: 240rpx;
		display: block;
		border-radius: 12rpx;
		/* transition: all 0.1s linear; */
	}

	.tui-banner-scale {
		transform: scaleY(0.9);
		transform-origin: center center;
	}

	/* #ifdef APP-PLUS || MP */
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
		background: rgba(255, 255, 255, 0.8);
		border-radius: 16rpx;
		overflow: hidden;
	}
	
	.tui-banner-swiper .wx-swiper-dot-active::before {
		background: #fff;
	}
	
	.tui-banner-swiper .wx-swiper-dot.wx-swiper-dot-active {
		width: 16rpx;
	}
	
	/* #endif */
	
	/* #ifdef H5 */
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
		background: rgba(255, 255, 255, 0.8);
		border-radius: 16rpx;
		overflow: hidden;
	}
	
	>>>.tui-banner-swiper .uni-swiper-dot-active::before {
		background: #fff;
	}
	
	>>>.tui-banner-swiper .uni-swiper-dot.uni-swiper-dot-active {
		width: 16rpx;
	}
	
	/* #endif */
	/*banner*/

	/*headlines*/

	.tui-rolling-news {
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
		background: #fff;
	}

	.tui-rolling-news::after {
		left: 0;
	}

	.tui-swiper {
		margin-left: 8rpx;
		font-size: 28rpx;
		height: 80rpx;
		flex: 1;
	}

	.tui-swiper-item {
		display: flex;
		align-items: center;
	}

	.tui-news-item {
		line-height: 28rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #555;
	}

	/*headlines*/

	/*classify*/

	.tui-classify-box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: 28rpx 0;
		background-color: #fff;
	}

	.tui-classify-item {
		width: 20%;
		text-align: center;
	}

	.tui-classify-img {
		width: 88rpx;
		height: 88rpx;
	}

	.tui-classify-name {
		font-size: 26rpx;
		line-height: 26rpx;
		padding-top: 8rpx;
		color: #555;
		white-space: nowrap;
	}

	/*classify*/

	/*spike*/

	.tui-spike-box {
		background: #fff;
		margin-top: 20rpx;
	}

	.tui-spike-title {
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		color: #333;
		font-weight: bold;
	}

	.tui-spike-title::after {
		left: 0;
	}

	.tui-spike-swiper {
		min-height: 440rpx;
	}

	.tui-pro-item {
		display: flex;
		width: 100%;
		background: #fff;
		box-sizing: border-box;
		border-radius: 12rpx;
		position: relative;
	}

	.tui-pro-item::after {
		left: 240rpx;
	}

	.tui-pro-img {
		width: 220rpx;
		height: 220rpx;
		display: block;
		flex-shrink: 0;
		border-radius: 12rpx;
	}

	.tui-pro-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 20rpx;
	}

	.tui-pro-tit {
		color: #2e2e2e;
		font-size: 26rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.tui-pro-btmbox {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-sale-price {
		font-size: 34rpx;
		font-weight: 500;
		color: #e41f19;
	}

	.tui-factory-price {
		font-size: 24rpx;
		color: #a0a0a0;
		text-decoration: line-through;
		padding-left: 12rpx;
	}

	.tui-countdown {
		display: flex;
		align-items: center;
	}

	.tui-countdown-text {
		padding: 0 8rpx;
		font-size: 24rpx;
		line-height: 24rpx;
		color: #555;
	}

	/*spike*/
</style>
