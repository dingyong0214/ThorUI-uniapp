<template>
	<view class="container">
		<tui-tabs :tabs="tabs" :currentTab="currentTab" selectedColor="#E41F19" sliderBgColor="#E41F19" @change="change"
		 itemWidth="33.33333%" :isFixed="scrollTop>=0"></tui-tabs>
		<view class="tui-coupon-list" :class="{'tui-mtop':scrollTop>=0}">
			<view v-for="(item,i) in couponList" :key="i" v-show="currentTab==i">
				<view class="tui-coupon-item tui-top20" v-for="(coupon,j) in item.data" :key="j">
					<image :src="webURL+'/static/images/mall/coupon/bg_coupon_3x.png'" class="tui-coupon-bg" mode="widthFix"></image>
					<image :src="webURL+getSignUrl(i)" class="tui-coupon-sign" v-if="i>0"></image>
					<view class="tui-coupon-item-left">
						<view class="tui-coupon-price-box" :class="{'tui-color-grey':i>0}">
							<view class="tui-coupon-price-sign" v-if="coupon.type==2">￥</view>
							<!--tui-price-small 面值>4位数的时候为true-->
							<view class="tui-coupon-price" :class="{'tui-price-small':coupon.value.toString().length>4}">{{coupon.value}}</view>
							<view class="tui-coupon-price-sign" v-if="coupon.type==1">折</view>
						</view>
						<view class="tui-coupon-intro">{{coupon.condition}}</view>
					</view>
					<view class="tui-coupon-item-right">
						<view class="tui-coupon-content">
							<view class="tui-coupon-title-box">
								<view class="tui-coupon-btn" :class="{'tui-bg-grey':i>0}">{{coupon.range}}</view>
								<view class="tui-coupon-title">{{coupon.rangeDesc}}</view>
							</view>
							<view class="tui-coupon-rule">
								<view class="tui-rule-box tui-padding-btm">
									<view class="tui-coupon-circle"></view>
									<view class="tui-coupon-text">不可叠加使用</view>
								</view>
								<view class="tui-rule-box">
									<view class="tui-coupon-circle"></view>
									<view class="tui-coupon-text">{{j%2==0?"自领取之日起30天有效":"2019-11-01至2019-12-31"}}</view>
								</view>
							</view>
						</view>
					</view>
					<view class="tui-btn-box" v-if="i===0">
						<tui-button type="danger" width="152rpx" height="52rpx" :size="24" shape="circle" plain>立即使用</tui-button>
					</view>
				</view>

				<!--加载loading-->
				<tui-loadmore v-if="couponList[i].loading" :index="3" type="red"></tui-loadmore>
				<tui-nomore v-if="!couponList[i].pullUpOn"></tui-nomore>
				<!--加载loading-->
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [{
					name: "未使用"
				}, {
					name: "已使用"
				}, {
					name: "已过期"
				}],
				currentTab: 0,
				scrollTop: 0,
				//如果tabs数据是请求返回，则动态生成tabs数据
				couponList: [{
					loading: false,
					pullUpOn: true,
					pageIndex: 1,
					noData: false, //如果使用自定义无数据提示，则使用
					data: []
				}, {
					loading: false,
					pullUpOn: true,
					pageIndex: 1,
					noData: false,
					data: []
				}, {
					loading: false,
					pullUpOn: true,
					pageIndex: 1,
					noData: false,
					data: []
				}],
				//模拟请求返回数据
				requestData: [{
					type: 1, //1-折扣 2-面值
					range: "拼团券",
					rangeDesc: "限拼团可用",
					condition: "满38元可用",
					value: 9
				}, {
					type: 1,
					range: "全场券",
					rangeDesc: "全部商品可用",
					condition: "满200元可用",
					value: 5
				}, {
					type: 2,
					range: "全场券",
					rangeDesc: "全部商品可用",
					condition: "满200元可用",
					value: 100
				}, {
					type: 2,
					range: "品牌券",
					rangeDesc: "指定品牌可用",
					condition: "满200元可用",
					value: 200
				}, {
					type: 2,
					range: "品类券",
					rangeDesc: "指定品类可用",
					condition: "满8000元可用",
					value: 10000
				}, {
					type: 1,
					range: "拼团券",
					rangeDesc: "限拼团可用",
					condition: "满100元可用",
					value: 9
				}, {
					type: 1,
					range: "全场券",
					rangeDesc: "全部商品可用",
					condition: "满800元可用",
					value: 8
				}, {
					type: 2,
					range: "全场券",
					rangeDesc: "全部商品可用",
					condition: "满200元可用",
					value: 30
				}, {
					type: 2,
					range: "品牌券",
					rangeDesc: "指定品牌可用",
					condition: "满100元可用",
					value: 20
				}, {
					type: 2,
					range: "品类券",
					rangeDesc: "指定品类可用",
					condition: "满500元可用",
					value: 100
				}],
				webURL: "https://www.thorui.cn/wx"
			}
		},
		onLoad() {
			this.getCouponList(this.currentTab)
		},
		methods: {
			getSignUrl: function(index) {
				let url = "";
				if (index == 1) {
					url = "/static/images/mall/coupon/img_coupon_beused_3x.png"
				} else if (index == 2) {
					url = "/static/images/mall/coupon/img_coupon_failure_3x.png"
				}
				return url
			},
			change(e) {
				this.currentTab = e.index
				if (this.couponList[this.currentTab].pageIndex == 1) {
					this.getCouponList(this.currentTab)
				}
			},
			getCouponList(index, refresh) {
				let item = this.couponList[index]
				//请求参数  用信息默认header中加token
				let postData = {
					pageIndex: item.pageIndex,
					//pageMax: this.pageMax,
					status: index + 1 //1-未使用 2-已使用 3-已过期
				}
				if (!refresh) {
					item.loading = true;
				}

				// this.tui.request("/coupon/userCouponList","POST",postData).then((res)=>{

				// }).catch(()=>{})
				//延时只是模拟请求效果，实际项目中不需要
				setTimeout(() => {
					refresh && uni.stopPullDownRefresh();
					let couponsList = [...this.requestData];
					if (item.pageIndex == 1) {
						item.data = couponsList;
					} else {
						item.data = item.data.concat(couponsList);
					}
					if (item.pageIndex > 2) {
						item.pullUpOn = false;
					}
					item.pageIndex++;
					item.loading = false;
				}, 400)
			}
		},
		onPullDownRefresh() {
			let index = this.currentTab
			let item = this.couponList[index]
			item.pageIndex = 1;
			item.loading = false;
			item.pullUpOn = true;
			item.noData = false;
			this.getCouponList(index, true)
		},
		onReachBottom() {
			let index = this.currentTab
			if (!this.couponList[index].pullUpOn) return;
			this.getCouponList(index)
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-mtop {
		margin-top: 80rpx;
	}

	.tui-coupon-list {
		width: 100%;
		padding: 0 25rpx;
		box-sizing: border-box;
	}

	.tui-coupon-banner {
		width: 100%;
	}

	.tui-coupon-item {
		width: 100%;
		height: 210rpx;
		position: relative;
		display: flex;
		align-items: center;
		padding-right: 30rpx;
		box-sizing: border-box;
		overflow: hidden;
	}

	.tui-coupon-bg {
		width: 100%;
		height: 210rpx;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}

	.tui-coupon-sign {
		height: 110rpx;
		width: 110rpx;
		position: absolute;
		z-index: 9;
		top: -30rpx;
		right: 40rpx;
	}

	.tui-coupon-item-left {
		width: 218rpx;
		height: 210rpx;
		position: relative;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex-shrink: 0;
	}

	.tui-coupon-price-box {
		display: flex;
		color: #e41f19;
		align-items: flex-end;
	}

	.tui-coupon-price-sign {
		font-size: 30rpx;
	}

	.tui-coupon-price {
		font-size: 70rpx;
		line-height: 68rpx;
		font-weight: bold;
	}

	.tui-price-small {
		font-size: 58rpx !important;
		line-height: 56rpx !important;
	}


	.tui-coupon-intro {
		background: #F7F7F7;
		padding: 8rpx 10rpx;
		font-size: 26rpx;
		line-height: 26rpx;
		font-weight: 400;
		color: #666;
		margin-top: 18rpx;
	}

	.tui-coupon-item-right {
		flex: 1;
		height: 210rpx;
		position: relative;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 24rpx;
		box-sizing: border-box;
		overflow: hidden;
	}

	.tui-coupon-content {
		width: 82%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.tui-coupon-title-box {
		display: flex;
		align-items: center;
	}

	.tui-coupon-btn {
		padding: 6rpx;
		background: #FFEBEB;
		color: #e41f19;
		font-size: 25rpx;
		line-height: 25rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: scale(0.9);
		transform-origin: 0 center;
		border-radius: 4rpx;
		flex-shrink: 0;
	}

	.tui-color-grey {
		color: #888 !important;
	}

	.tui-bg-grey {
		background: #F0F0F0 !important;
		color: #888 !important;
	}

	.tui-coupon-title {
		width: 100%;
		font-size: 26rpx;
		color: #333;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tui-coupon-rule {
		padding-top: 52rpx;
	}

	.tui-rule-box {
		display: flex;
		align-items: center;
		transform: scale(0.8);
		transform-origin: 0 100%;
	}

	.tui-padding-btm {
		padding-bottom: 6rpx;
	}

	.tui-coupon-circle {
		width: 8rpx;
		height: 8rpx;
		background: rgb(160, 160, 160);
		border-radius: 50%;
	}

	.tui-coupon-text {
		font-size: 28rpx;
		line-height: 28rpx;
		font-weight: 400;
		color: #666;
		padding-left: 8rpx;
		white-space: nowrap;
	}

	.tui-top20 {
		margin-top: 20rpx;
	}

	.tui-coupon-title {
		font-size: 28rpx;
		line-height: 28rpx;
	}

	.tui-btn-box {
		position: absolute;
		width: 146rpx;
		height: 52rpx;
		right: 20rpx;
		bottom: 40rpx;
		z-index: 10;
	}
</style>
