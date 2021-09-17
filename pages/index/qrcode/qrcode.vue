<template>
	<view class="container">
		<!-- #ifdef APP-PLUS || H5 -->
		<view class="header">
			<view>您共有</view>
			<view class="coupon-num">{{ couponNum }}张</view>
			<view>可使用的优惠券</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP -->
		<cover-view class="header" v-if="show">
			<cover-view>您共有</cover-view>
			<cover-view class="coupon-num">{{ couponNum }}张</cover-view>
			<cover-view>可使用的优惠券</cover-view>
		</cover-view>
		<!-- #endif -->

		<view class="coupon-list">
			<view class="coupon-item" v-for="(item, index) in couponList" :key="index">
				<view class="coupon">
					<image src="/static/images/index/img_fuwuquan_blue_3x.png" class="coupon-img"></image>
					<view class="left-tit-box">
						<view class="tit">{{ item.name }}</view>
						<view class="term">期限：{{ item.invalidTime }}</view>
					</view>
					<view class="right-detail" @tap="spread(index)">
						<text class="detail-txt">查看详情</text>
						<image src="/static/images/index/icon_next_3x.png" class="arrow" :class="{ 'tui-rotate_90': item.spread }"></image>
					</view>
				</view>
				<view class="hidden-box" v-show="item.spread">
					<view class="code-tit">验证码</view>
					<view class="code-num">{{ item.code }}</view>
					<view class="qrcode-box">
						<view class="qrcode">
							<canvas
								:class="{ 'my-canvas': !item.spread }"
								:style="{ width: qrcode_w + 'px', height: qrcode_w + 'px' }"
								:canvas-id="'couponQrcode' + index"
								:id="'couponQrcode' + index"
							></canvas>
						</view>
					</view>
					<view class="list-item">
						<view class="item-tit">券有效期</view>
						<view class="item-con">{{ item.sendTime }}至{{ item.invalidTime }}</view>
					</view>
					<view class="list-item">
						<view class="item-tit">适用商家</view>
						<view class="item-con">{{ item.suitStore }}</view>
					</view>

					<view class="explain">使用说明</view>
					<view class="explain-text" v-for="(items, index) in item.useDescribe" :key="items">{{ items }}</view>
				</view>
			</view>
		</view>
		<view class="none" v-show="couponNum == 0">暂无可用洗车券~</view>
	</view>
</template>

<script>
import util from '@/utils/util.js'
import qrCode from '@/libs/weapp-qrcode.js';
export default {
	data() {
		return {
			show: false,
			couponNum: 4,
			couponList: [
				{
					name: '购物券',
					code: 'xyz0900100200',
					invalidTime: '2019-07-01',
					// #ifdef APP-PLUS || MP
					spread: true,
					// #endif
					// #ifdef H5
					spread: false,
					// #endif
					sendTime: '2019-06-01',
					suitStore: '全部',
					useDescribe: ['1、可在任何适用商家内消费', '2、解释权归Thor所有']
				},
				{
					name: '打车券',
					code: 'xyz0900100300',
					invalidTime: '2019-07-01',
					spread: false,
					sendTime: '2019-06-01',
					suitStore: '滴滴打车',
					useDescribe: ['1、可在任何适用商家内消费', '2、解释权归Thor所有']
				},
				{
					name: '餐饮券',
					code: 'xyz0900100400',
					invalidTime: '2019-07-01',
					spread: false,
					sendTime: '2019-06-01',
					suitStore: '麦当劳',
					useDescribe: ['1、可在任何适用商家内消费', '2、解释权归Thor所有']
				},
				{
					name: '服务券',
					code: 'xyz0900100500',
					invalidTime: '2019-07-01',
					spread: false,
					sendTime: '2019-06-01',
					suitStore: '如家按摩店',
					useDescribe: ['1、可在任何适用商家内消费', '2、解释权归Thor所有']
				}
			],
			qrcode_w: uni.upx2px(240)
		};
	},
	onLoad: function(options) {
		if (!this.tui.isAndroid()) {
			this.show = true;
		}
		//const W = uni.getSystemInfoSync().windowWidth;
		//const qrcode_w = uni.upx2px(260);
		//this.qrcode_w = qrcode_w;
		// #ifdef APP-PLUS || MP
		setTimeout(() => {
			this.couponQrCode(this.couponList[0].code, 'couponQrcode0');
		}, 60);
		// #endif
	},
	methods: {
		spread: function(index) {
			let couponList = this.couponList;
			if (!couponList[index].spread) {
				setTimeout(() => {
					this.couponQrCode(couponList[index].code, 'couponQrcode' + index);
				}, 60);
			}
			couponList[index].spread = !couponList[index].spread;
			this.couponList = couponList;
		},
		// 二维码生成工具
		couponQrCode(text, canvasId) {
			new qrCode(canvasId, {
				text: text,
				width: this.qrcode_w,
				height: this.qrcode_w,
				colorDark: '#333333',
				colorLight: '#FFFFFF',
				correctLevel: qrCode.CorrectLevel.H
			});
			if (canvasId == 'couponQrcode0') {
				setTimeout(() => {
					if (!this.show) {
						this.show = true;
					}
				}, 0);
			}
		}
	}
};
</script>

<style>
/* #ifdef MP-ALIPAY */
.my-canvas {
	position: fixed;
	left: -200px;
	top: 0;
}

/* #endif */

.container {
	padding-bottom: env(safe-area-inset-bottom);
}

.header {
	width: 100%;
	padding: 0 30rpx;
	box-sizing: border-box;
	font-size: 24rpx;
	color: #999;
	height: 54rpx;
	line-height: 54rpx;
	background: #fff;
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	/* #ifdef H5 */
	top: 44px;
	/* #endif */
	z-index: 999999;
}

.coupon-num {
	color: #5677fc;
}

.coupon-list {
	width: 100%;
	padding: 54rpx 50rpx;
	box-sizing: border-box;
}

.coupon-item {
	margin-top: 20rpx;
	width: 100%;
	box-shadow: 0 8rpx 10rpx -8rpx #eaeef1;
	border-radius: 2rpx;
}

.coupon {
	height: 160rpx;
	position: relative;
	display: flex;
	align-items: center;
}

.coupon-img {
	width: 100%;
	height: 160rpx;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 0;
}

.left-tit-box {
	width: 414rpx;
	padding-left: 75rpx;
	box-sizing: border-box;
	z-index: 10;
}

.tit {
	width: 290rpx;
	font-size: 30rpx;
	color: #333;
	line-height: 42rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.term {
	width: 228rpx;
	font-size: 24rpx;
	color: #999;
	line-height: 24rpx;
	padding-top: 7rpx;
	white-space: nowrap;
}

.right-detail {
	width: 236rpx;
	text-align: center;
	height: 160rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
}

.detail-txt {
	font-size: 24rpx;
	color: #fff;
	padding-right: 12rpx;
}

.arrow {
	width: 16rpx;
	height: 24rpx;
	transition: all 0.15s ease;
}

.spread {
	width: 24rpx;
	height: 16rpx;
}

.qrcode {
	width: 260rpx;
	height: 260rpx;
	margin: 45rpx auto 43rpx auto;
}

.hidden-box {
	padding: 35rpx 40rpx 27rpx 40rpx;
	box-sizing: border-box;
	color: #333;
	border-top: 1rpx solid #eaeef1;
	background: #fff;
}

.code-tit {
	font-size: 28rpx;
	line-height: 28rpx;
}

.code-num {
	font-size: 30rpx;
	line-height: 30rpx;
	padding-top: 23rpx;
	font-weight: bold;
}

.qrcode-box {
	width: 100%;
	border-bottom: 1rpx dashed #eaeef1;
	margin-bottom: 6rpx;
}

.list-item {
	height: 90rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 28rpx;
}

.list-item::after {
	left: 0;
}

.item-tit {
	color: #666;
}

.item-con {
	color: #333;
}

.explain {
	font-size: 28rpx;
	line-height: 28rpx;
	color: #666;
	padding: 33rpx 0 25rpx 0;
}

.explain-text {
	font-size: 28rpx;
	line-height: 41rpx;
	color: #333;
}

.none {
	width: 100%;
	position: fixed;
	text-align: center;
	font-size: 30rpx;
	color: #ccc;
	top: 49%;
}
.tui-rotate_90 {
	transform: rotate(90deg);
}
</style>
