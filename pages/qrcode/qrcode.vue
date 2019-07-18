<template>
	<view class="container">
		<!-- #ifdef APP-PLUS || H5 -->
		<view class="header">
			<view>您共有</view>
			<view class="coupon-num">{{couponNum}}张</view>
			<view>可使用的优惠券</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP -->
		<cover-view class="header" v-if="show">
			<cover-view>您共有</cover-view>
			<cover-view class="coupon-num">{{couponNum}}张</cover-view>
			<cover-view>可使用的优惠券</cover-view>
		</cover-view>
		<!-- #endif -->

		<view class="coupon-list">
			<view class="coupon-item" v-for="(item,index) in couponList" :key="index">
				<view class="coupon">
					<image src="../../static/images/index/img_fuwuquan_blue@3x.png" class="coupon-img"></image>
					<view class="circle-left"></view>
					<view class="circle-right"></view>
					<view class="left-tit-box">
						<view class="tit">{{item.name}}</view>
						<view class="term">期限：{{item.invalidTime}}</view>
					</view>
					<view class="right-detail" @tap="spread" :data-index="index">
						<text class="detail-txt">查看详情</text>
						<image :src="'../../static/images/index/'+(item.spread?'home_icon_choose@3x':'icon_next@3x')+'.png'" :class="[item.spread?'spread':'arrow']"></image>
					</view>
				</view>
				<view class="hidden-box" v-show="item.spread">
					<view class="code-tit">验证码</view>
					<view class="code-num">{{item.code}}</view>
					<view class="qrcode-box">
						<view class="qrcode">
							<canvas :style="{width:qrcode_w+'px', height:qrcode_w+'px'}" :canvas-id="'couponQrcode'+index"></canvas>
						</view>
					</view>
					<view class="list-item">
						<view class="item-tit">券有效期</view>
						<view class="item-con">{{item.sendTime}}至{{item.invalidTime}}</view>
					</view>
					<view class="list-item">
						<view class="item-tit">适用商家</view>
						<view class="item-con">{{item.suitStore}}</view>
					</view>

					<view class="explain">使用说明</view>
					<view class="explain-text" v-for="(items,index) in item.useDescribe" :key="items">{{items}}</view>
				</view>

			</view>

		</view>
		<view class="none" v-show="couponNum==0">暂无可用洗车券~</view>
	</view>
</template>

<script>
	const util = require('../../utils/util.js')
	const qrCode = require('../../libs/weapp-qrcode.js');
	export default {
		data() {
			return {
				show: false,
				couponNum: 4,
				couponList: [{
					name: "购物券",
					code: "xyz0900100200",
					invalidTime: "2019-07-01",
					// #ifdef APP-PLUS || MP
					spread: true,
					// #endif
					// #ifdef H5
					spread: false,
					// #endif
					sendTime: "2019-06-01",
					suitStore: "全部",
					useDescribe: ["1、可在任何适用商家内消费", "2、解释权归Thor所有"]
				}, {
					name: "打车券",
					code: "xyz0900100300",
					invalidTime: "2019-07-01",
					spread: false,
					sendTime: "2019-06-01",
					suitStore: "滴滴打车",
					useDescribe: ["1、可在任何适用商家内消费", "2、解释权归Thor所有"]
				}, {
					name: "餐饮券",
					code: "xyz0900100400",
					invalidTime: "2019-07-01",
					spread: false,
					sendTime: "2019-06-01",
					suitStore: "麦当劳",
					useDescribe: ["1、可在任何适用商家内消费", "2、解释权归Thor所有"]
				}, {
					name: "服务券",
					code: "xyz0900100500",
					invalidTime: "2019-07-01",
					spread: false,
					sendTime: "2019-06-01",
					suitStore: "如家按摩店",
					useDescribe: ["1、可在任何适用商家内消费", "2、解释权归Thor所有"]
				}],
				qrcode_w: uni.upx2px(240)
			}
		},
		onLoad: function(options) {
			uni.getSystemInfo({ // 判断系统
				success: (res) => {
					if (res.system.indexOf('iOS') > -1 || res.platform.indexOf('ios') > -1) {
						this.show = true
					}
				}
			});
			//const W = uni.getSystemInfoSync().windowWidth;
			//const qrcode_w = uni.upx2px(260);
			//this.qrcode_w = qrcode_w;
			// #ifdef APP-PLUS || MP
			this.couponQrCode(this.couponList[0].code, "couponQrcode0")
			// #endif
		},
		methods: {
			spread: function(e) {
				let index = Number(e.currentTarget.dataset.index)
				let couponList = this.couponList
				if (!couponList[index].spread) {
					setTimeout(()=>{
						this.couponQrCode(couponList[index].code, "couponQrcode" + index)
					},50)
				}
				couponList[index].spread = !couponList[index].spread;
				this.couponList = couponList
			},
			// 二维码生成工具
			couponQrCode(text, canvasId) {
				new qrCode(canvasId, {
					text: text,
					width: this.qrcode_w,
					height: this.qrcode_w,
					colorDark: "#333333",
					colorLight: "#FFFFFF",
					correctLevel: qrCode.CorrectLevel.H
				});
				if (canvasId == "couponQrcode0") {
					setTimeout(() => {
						if (!this.show) {
							this.show = true
						}
					}, 0)
				}
			}
		}
	}
</script>

<style>
	page {
		background: #fff;
	}

	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.header {
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;
		font-size: 24upx;
		color: #999;
		height: 54upx;
		line-height: 54upx;
		background: #fff8d5;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		z-index: 999999
	}


	.coupon-num {
		color: #5677fc;
	}

	.coupon-list {
		width: 100%;
		padding: 54upx 50upx;
		box-sizing: border-box;
	}

	.coupon-item {
		margin-top: 20upx;
		width: 100%;
		box-shadow: 0 0 12upx 0 #eaeef1;
		border-radius: 2upx;

	}

	.coupon {
		height: 160upx;
		position: relative;
		display: flex;
		align-items: center;
		/* background: red */
	}

	.coupon-img {
		width: 100%;
		height: 160upx;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 0;
		background: #fff
	}

	.circle-left {
		position: absolute;
		left: -28upx;
		top: 64upx;
		height: 36upx;
		width: 36upx;
		border-radius: 18upx;
		background: #fff
	}

	.circle-right {
		position: absolute;
		top: 64upx;
		right: -25upx;
		height: 36upx;
		width: 36upx;
		border-radius: 18upx;
		background: #fff
	}

	.left-tit-box {
		width: 414upx;
		padding-left: 75upx;
		box-sizing: border-box;
		z-index: 10
	}

	.tit {
		width: 290upx;
		font-size: 30upx;
		color: #333;
		line-height: 42upx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.term {
		width: 228upx;
		font-size: 24upx;
		color: #999;
		line-height: 24upx;
		padding-top: 7upx;
		white-space: nowrap;
	}

	.right-detail {
		width: 236upx;
		text-align: center;
		height: 160upx;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10
	}

	.detail-txt {
		font-size: 24upx;
		color: #fff;
		padding-right: 12upx;
	}

	.arrow {
		width: 16upx;
		height: 24upx;
	}

	.spread {
		width: 24upx;
		height: 16upx;
	}

	.qrcode {
		width: 260upx;
		height: 260upx;
		margin: 45upx auto 43upx auto;
	}

	.hidden-box {
		padding: 35upx 40upx 27upx 40upx;
		box-sizing: border-box;
		color: #333;
		border-top: 1upx solid #EAEEF1;
	}

	.code-tit {
		font-size: 28upx;
		line-height: 28upx;
	}

	.code-num {
		font-size: 30upx;
		line-height: 30upx;
		padding-top: 23upx;
		font-weight: bold;
	}

	.qrcode-box {
		width: 100%;
		border-bottom: 1upx dashed #eaeef1;
		margin-bottom: 6upx;
	}

	.list-item {
		height: 90upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28upx;
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
		font-size: 28upx;
		line-height: 28upx;
		color: #666;
		padding: 33upx 0 25upx 0
	}

	.explain-text {
		font-size: 28upx;
		line-height: 41upx;
		color: #333;
	}

	.none {
		width: 100%;
		position: fixed;
		text-align: center;
		font-size: 30upx;
		color: #ccc;
		top: 49%;
	}
</style>
