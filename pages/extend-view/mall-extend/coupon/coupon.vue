<template>
	<view class="container">
		<image src="https://www.thorui.cn/wx/static/images/mall/coupon/banner_coupon.png" mode="widthFix" class="tui-coupon-banner"></image>
		<view class="tui-coupon-list">
			<radio-group>
				<label v-for="(item,index) in 2" :key="index">
					<view class="tui-coupon-item tui-top20">
						<image src="https://www.thorui.cn/wx/static/images/mall/coupon/bg_coupon_3x.png" class="tui-coupon-bg" mode="widthFix"></image>
						<view class="tui-coupon-item-left">
							<view class="tui-coupon-price-box">
								<view class="tui-coupon-price-sign" v-if="index%2==0">￥</view>
								<view class="tui-coupon-price" :class="{'tui-price-small':false}">{{index%2==0?50*(index+1):2.5}}</view>
								<view class="tui-coupon-price-sign" v-if="index%2!=0">折</view>
							</view>
							<view class="tui-coupon-intro">满38元可用</view>
						</view>
						<view class="tui-coupon-item-right">
							<view class="tui-coupon-content">
								<view class="tui-coupon-title-box">
									<view class="tui-coupon-btn">全场券</view>
									<view class="tui-coupon-title">全部商品可用</view>
								</view>
								<view class="tui-coupon-rule">
									<view class="tui-rule-box tui-padding-btm">
										<view class="tui-coupon-circle"></view>
										<view class="tui-coupon-text">不可叠加使用</view>
									</view>
									<view class="tui-rule-box">
										<view class="tui-coupon-circle"></view>
										<view class="tui-coupon-text">{{index%2==0?"自领取之日起30天有效":"2019-11-01至2019-12-31"}}</view>
									</view>
								</view>
							</view>
							<radio value="1" class="tui-coupon-radio" color="#e41f19" :checked="index%2==0" />
						</view>
					</view>
				</label>
			</radio-group>


			<view class="tui-coupon-item tui-top20" v-for="(item,index) in 5" :key="index">
				<image src="https://www.thorui.cn/wx/static/images/mall/coupon/bg_coupon_3x.png" class="tui-coupon-bg" mode="widthFix"></image>
				<image :src="getSignUrl(index)" class="tui-coupon-sign" v-if="index!=0 && index !=2"></image>
				<view class="tui-coupon-item-left">
					<view class="tui-coupon-price-box" :class="{'tui-color-grey':index>2}">
						<view class="tui-coupon-price-sign" v-if="index%2==0">￥</view>
						<!--tui-price-small 面值>4位数的时候为true-->
						<view class="tui-coupon-price" :class="{'tui-price-small':false}">{{index%2==0?100*(index+1):9}}</view>
						<view class="tui-coupon-price-sign" v-if="index%2!=0">折</view>
					</view>
					<view class="tui-coupon-intro">满38元可用</view>
				</view>
				<view class="tui-coupon-item-right">
					<view class="tui-coupon-content">
						<view class="tui-coupon-title-box">
							<view class="tui-coupon-btn" :class="{'tui-bg-grey':index>2}">全场券</view>
							<view class="tui-coupon-title">全部商品可用</view>
						</view>
						<view class="tui-coupon-rule">
							<view class="tui-rule-box tui-padding-btm">
								<view class="tui-coupon-circle"></view>
								<view class="tui-coupon-text">不可叠加使用</view>
							</view>
							<view class="tui-rule-box">
								<view class="tui-coupon-circle"></view>
								<view class="tui-coupon-text">{{index%2==0?"自领取之日起30天有效":"2019-11-01至2019-12-31"}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="tui-btn-box" v-if="index<=2">
					<tui-button type="danger" width="146rpx" height="52rpx" :size="24" shape="circle" :plain="index%2!=0">{{index%2!=0?'立即使用':'立即领取'}}</tui-button>
				</view>
			</view>

		</view>

		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn" bgcolor="#f5f5f5"></tui-nomore>
		<!--加载loadding-->
	</view>
</template>

<script>
	import tuiButton from "@/components/extend/button/button"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	export default {
		components: {
			tuiButton,
			tuiLoadmore,
			tuiNomore
		},
		data() {
			return {
				loadding: false,
				pullUpOn: true
			}
		},
		methods: {
			getSignUrl: function(index) {
				let url = "";
				if (index === 1) {
					url = "/static/images/mall/coupon/img_couponcentre_received_3x.png"
				} else if (index == 3) {
					url = "/static/images/mall/coupon/img_coupon_beused_3x.png"
				} else if (index == 4) {
					url = "/static/images/mall/coupon/img_coupon_failure_3x.png"
				}
				return this.tui.webURL() + url
			}
		},
		onPullDownRefresh() {
			setTimeout(() => {
				this.pullUpOn = true
				uni.stopPullDownRefresh()
			}, 200);
		},
		onReachBottom() {
			//只是测试效果，逻辑以实际数据为准
			if (!this.pullUpOn) return;
			this.loadding = true
			setTimeout(() => {
				this.loadding = false
				this.pullUpOn = false
			}, 1000)
		}
	}
</script>

<style>
	page {
		background: #F5F5F5;
	}

	.container {
		padding-bottom: env(safe-area-inset-bottom);
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


	.tui-coupon-radio {
		transform: scale(0.7);
		transform-origin: 100% center;
	}

	.tui-btn-box {
		position: absolute;
		width: 146rpx;
		height: 52rpx;
		right: 20rpx;
		bottom: 40rpx;
		z-index: 10;
	}

	/* #ifdef APP-PLUS || MP */
	.wx-radio-input {
		margin-right: 0 !important;
	}

	/* #endif */

	/* #ifdef H5 */
	>>>uni-radio .uni-radio-input {
		margin-right: 0 !important;
	}

	/* #endif */
</style>
