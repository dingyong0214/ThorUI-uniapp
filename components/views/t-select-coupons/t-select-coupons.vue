<template>
	<view>
		<tui-bottom-popup :show="show" @close="close">
			<view class="tui-coupon__box">
				<view class="tui-coupon__title">
					<text>优惠券</text>
					<view class="tui-icon-close" @tap="close">
						<tui-icon name="shut" :size="22" color="#BFBFBF"></tui-icon>
					</view>
				</view>
				<scroll-view scroll-y class="tui-coupon__list">
					<radio-group>
						<label class="tui-not-used  tui-top20">
							<text>不使用优惠券</text>
							<radio value="-1" class="tui-coupon-radio" color="#e41f19" />
						</label>
						<label v-for="(item, index) in couponList" :key="index">
							<view class="tui-coupon-item tui-top20">
								<image :src="webURL + '/static/images/mall/coupon/bg_coupon_3x.png'" class="tui-coupon-bg" mode="widthFix"></image>
								<view class="tui-coupon-item-left">
									<view class="tui-coupon-price-box">
										<view class="tui-coupon-price-sign" v-if="index % 2 == 0">￥</view>
										<view class="tui-coupon-price" :class="{ 'tui-price-small': false }">{{ index % 2 == 0 ? 50 * (index + 1) : 2.5 }}</view>
										<view class="tui-coupon-price-sign" v-if="index % 2 != 0">折</view>
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
												<view class="tui-coupon-text">{{ index % 2 == 0 ? '自领取之日起30天有效' : '2019-11-01至2019-12-31' }}</view>
											</view>
										</view>
									</view>
									<radio value="1" class="tui-coupon-radio" color="#e41f19" :checked="index==0" />
								</view>
							</view>
						</label>
					</radio-group>
					<view class="tui-seat__box tui-top20"></view>
				</scroll-view>
				<view class="tui-btn-pay">
					<tui-button height="88rpx" type="danger" shape="circle" shadow @click="btnConfirm">确定</tui-button>
				</view>
			</view>
		</tui-bottom-popup>
	</view>
</template>

<script>
	export default {
		name: 'tSelectCoupons',
		emits: ['close'],
		props: {
			couponList: {
				type: Array,
				default () {
					return [{}, {}, {}, {}, {}];
				}
			},
			//控制显示
			show: {
				type: Boolean,
				default: false
			},
			page: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				webURL: "https://www.thorui.cn/wx"
			};
		},
		methods: {
			close() {
				this.$emit('close', {});
			},
			btnConfirm() {
				this.close();
			}
		}
	};
</script>

<style scoped>
	.tui-coupon__box {
		width: 100%;
	}

	.tui-coupon__title {
		width: 100%;
		padding: 40rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.tui-icon-close {
		position: absolute;
		right: 30rpx;
		top: 50%;
		transform: translateY(-50%);
	}

	.tui-coupon__list {
		width: 100%;
		height: 640rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		background-color: #FAFAFA;
	}
	.tui-not-used{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		color: #333333;
		background-color: #fff;
		padding:20rpx 30rpx;
		box-sizing: border-box;
		border-radius:6rpx;
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
		background: #f7f7f7;
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
		background: #ffebeb;
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
	.tui-seat__box {
		width: 100%;
		height: 1rpx;
	}

	.tui-btn-pay {
		width: 100%;
		padding: 20rpx 60rpx 40rpx;
		box-sizing: border-box;
	}
</style>
