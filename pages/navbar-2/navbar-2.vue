<template>
	<view class="container">
		<view class="tui-searchbox">
			<view class="tui-search-input" @tap="search">
				<!-- #ifdef APP-PLUS || MP -->
				<icon type="search" size='13' color='#999'></icon>
				<!-- #endif -->
				<text class="tui-search-text">搜索Thorui商品</text>
			</view>
		</view>

		<scroll-view scroll-y scroll-with-animation class="tab-view" :scroll-top="scrollTop" :style="{height:height+'px',top:top+'px'}">
			<view v-for="(item,index) in tabbar" :key="index" class="tab-bar-item" :class="[currentTab==index ? 'active' : '']"
			 :data-current="index" @tap.stop="swichNav">
				<text>{{item}}</text>
			</view>
		</scroll-view>
		<block v-for="(item,index) in tabbar" :key="index">
			<scroll-view scroll-y class="right-box" :style="{height:height+'px',top:top+'px'}" v-if="currentTab==index">
				<!--内容部分 start 自定义可删除-->
				<view class="page-view">
					<swiper indicator-dots autoplay circular :interval="5000" :duration="150" class="swiper">
						<swiper-item v-if="index%2===0" @tap.stop="detail">
							<image src="../../static/images/mall/banner/2.jpg" class="slide-image" />
						</swiper-item>
						<swiper-item @tap.stop="detail">
							<image src="../../static/images/mall/banner/4.jpg" class="slide-image" />
						</swiper-item>
						<swiper-item @tap.stop="detail">
							<image src="../../static/images/mall/banner/5.jpg" class="slide-image" />
						</swiper-item>
					</swiper>
					<view class="class-box">
						<view class="class-item">
							<view class="class-name">{{item}}</view>
							<view class="g-container">
								<view class="g-box" @tap.stop="productList" data-key="高价回收">
									<image src="../../static/images/product/11.jpg" class="g-image" />
									<view class="g-title">高价回收</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="好物优选">
									<image src="../../static/images/product/22.jpg" class="g-image" />
									<view class="g-title">好物优选</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="iphone X">
									<image src="../../static/images/product/33.jpg" class="g-image" />
									<view class="g-title">iphone X</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="电动牙刷" v-if="index%2===0">
									<image src="../../static/images/product/44.jpg" class="g-image" />
									<view class="g-title">电动牙刷</view>
								</view>
							</view>
						</view>

						<view class="class-item">
							<view class="class-name">专场推荐{{index+1}}</view>
							<view class="g-container">
								<view class="g-box" @tap.stop="productList" data-key="笔记本" v-if="index%2===0">
									<image src="../../static/images/product/11.jpg" class="g-image" />
									<view class="g-title">笔记本</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="电水壶">
									<image src="../../static/images/product/22.jpg" class="g-image" />
									<view class="g-title">电水壶</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="iphone X">
									<image src="../../static/images/product/33.jpg" class="g-image" />
									<view class="g-title">iphone X</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="电动牙刷">
									<image src="../../static/images/product/44.jpg" class="g-image" />
									<view class="g-title">电动牙刷</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="抽纸">
									<image src="../../static/images/product/55.jpg" class="g-image" />
									<view class="g-title">抽纸</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="笔记本">
									<image src="../../static/images/product/11.jpg" class="g-image" />
									<view class="g-title">笔记本</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="电水壶">
									<image src="../../static/images/product/22.jpg" class="g-image" />
									<view class="g-title">电水壶</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="iphone X" v-if="index%2===0">
									<image src="../../static/images/product/33.jpg" class="g-image" />
									<view class="g-title">iphone X</view>
								</view>
							</view>
						</view>

						<view class="class-item">
							<view class="class-name">专场推荐{{index+1}}</view>
							<view class="g-container">
								<view class="g-box" @tap.stop="productList" data-key="iphone X">
									<image src="../../static/images/product/33.jpg" class="g-image" />
									<view class="g-title">iphone X</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="电动牙刷">
									<image src="../../static/images/product/44.jpg" class="g-image" />
									<view class="g-title">电动牙刷</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="抽纸">
									<image src="../../static/images/product/55.jpg" class="g-image" />
									<view class="g-title">抽纸</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="笔记本">
									<image src="../../static/images/product/11.jpg" class="g-image" />
									<view class="g-title">笔记本</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="电水壶">
									<image src="../../static/images/product/22.jpg" class="g-image" />
									<view class="g-title">电水壶</view>
								</view>
								<view class="g-box" @tap.stop="productList" data-key="iphone X" v-if="index%2===0">
									<image src="../../static/images/product/33.jpg" class="g-image" />
									<view class="g-title">iphone X</view>
								</view>
							</view>
						</view>

					</view>
				</view>
				<!--内容部分 end 自定义可删除-->
			</scroll-view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbar: ["推荐分类", "进口超市", "国际名牌", "奢侈品", "海囤全球", "男装", "女装", "男鞋", "女鞋", "钟表珠宝", "手机数码", "电脑办公", "家用电器", "玩具乐器",
					"运动户外", "宠物生活", "特产馆"
				],
				height: 0, //scroll-view高度
				top: 0,
				currentTab: 0, //预设当前项的值
				scrollTop: 0 //tab标题的滚动条位置
			}
		},
		onLoad: function(options) {
			setTimeout(() => {
				uni.getSystemInfo({
					success: (res) => {
						let header = 92;
						let top = 0;
						//#ifdef H5
						top = 44;
						//#endif
						this.height = res.windowHeight - uni.upx2px(header)
						this.top = top + uni.upx2px(header)
					}
				});
			}, 50)
		},
		methods: {
			// 点击标题切换当前页时改变样式
			swichNav: function(e) {
				let cur = e.currentTarget.dataset.current;
				if (this.currentTab == cur) {
					return false;
				} else {
					this.currentTab = cur;
					this.checkCor();
				}
			},
			//判断当前滚动超过一屏时，设置tab标题滚动条。
			checkCor: function() {
				let that = this;
				//这里计算按照实际情况进行修改，动态数据要进行动态分析
				//思路：窗体高度/单个分类高度 200rpx 转px计算 =>得到一屏幕所显示的个数，结合后台传回分类总数进行计算
				//数据很多可以多次if判断然后进行滚动距离计算即可
				if (that.currentTab > 7) {
					that.scrollTop = 500
				} else {
					that.scrollTop = 0
				}
			},
			detail(e) {
				uni.navigateTo({
					url: '../extend-view/productDetail/productDetail'
				})
			},
			productList(e) {
				let key = e.currentTarget.dataset.key;
				uni.navigateTo({
					url: '../extend-view/productList/productList?searchKey=' + key
				})
			},
			search: function() {
				uni.navigateTo({
					url: '../extend-view/news-search/news-search'
				})
			}
		}
	}
</script>

<style>
	page {
		background: #fcfcfc;
	}

	/* 左侧导航布局 start*/

	/* 隐藏scroll-view滚动条*/

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	.tui-searchbox {
		width: 100%;
		height: 92upx;
		padding: 0 30upx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		left: 0;
		top: 0;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		z-index: 100;
	}

	.tui-searchbox::after {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #d2d2d2;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}

	.tui-search-input {
		width: 100%;
		height: 60upx;
		background: #f1f1f1;
		border-radius: 30upx;
		font-size: 26upx;
		color: #999;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-search-text {
		padding-left: 16upx;
	}

	.tab-view {
		/* height: 100%; */
		width: 200upx;
		position: fixed;
		left: 0;
		z-index: 10;
	}

	.tab-bar-item {
		width: 200upx;
		height: 110upx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26upx;
		color: #444;
		font-weight: 400;
	}

	.active {
		position: relative;
		color: #000;
		font-size: 30upx;
		font-weight: 600;
		background: #fcfcfc;
	}

	.active::before {
		content: "";
		position: absolute;
		border-left: 8upx solid #E41F19;
		height: 30upx;
		left: 0;
	}

	/* 左侧导航布局 end*/

	.right-box {
		width: 100%;
		position: fixed;
		padding-left: 220upx;
		box-sizing: border-box;
		left: 0;
	}

	.page-view {
		width: 100%;
		overflow: hidden;
		padding-top: 20upx;
		padding-right: 20upx;
		box-sizing: border-box;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.swiper {
		width: 100%;
		height: 220upx;
		border-radius: 12upx;
		overflow: hidden;
		transform: translateZ(0);
	}

	/* #ifdef APP-PLUS || MP */
	.swiper .wx-swiper-dot {
		width: 8upx;
		height: 8upx;
		display: inline-flex;
		background: none;
		justify-content: space-between;
	}

	.swiper .wx-swiper-dot::before {
		content: '';
		flex-grow: 1;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 16upx;
		overflow: hidden;
	}

	.swiper .wx-swiper-dot-active::before {
		background: #fff;
	}

	.swiper .wx-swiper-dot.wx-swiper-dot-active {
		width: 16upx;
	}

	/* #endif */

	/* #ifdef H5 */
	>>>.swiper .uni-swiper-dot {
		width: 8rpx;
		height: 8rpx;
		display: inline-flex;
		background: none;
		justify-content: space-between;
	}

	>>>.swiper .uni-swiper-dot::before {
		content: '';
		flex-grow: 1;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 16rpx;
		overflow: hidden;
	}

	>>>.swiper .uni-swiper-dot-active::before {
		background: #fff;
	}

	>>>.swiper .uni-swiper-dot.uni-swiper-dot-active {
		width: 16rpx;
	}

	/* #endif */

	.slide-image {
		width: 100%;
		height: 220upx;
	}

	.class-box {
		padding-top: 30upx;
	}

	.class-item {
		background: #fff;
		width: 100%;
		box-sizing: border-box;
		padding: 20upx;
		margin-bottom: 20upx;
		border-radius: 12upx;
	}

	.class-name {
		font-size: 22upx;
	}

	.g-container {
		/* padding-top: 20upx; */
		display: flex;
		display: -webkit-flex;
		justify-content: flex-start;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.g-box {
		width: 33.3333%;
		text-align: center;
		padding-top: 40upx;
	}

	.g-image {
		width: 120upx;
		height: 120upx;
	}

	.g-title {
		font-size: 22upx;
	}
</style>
