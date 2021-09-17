<template>
	<view>
		<tui-bottom-popup :show="show" @close="close">
			<tui-list-cell :hover="false">
				<view class="tui-pay-item__title">
					<view>请选择支付方式</view>
					<view>支付金额：<text class="tui-pay-amuont">￥100.00</text></view>
				</view>
			</tui-list-cell>
			<radio-group>
				<tui-list-cell unlined :hover="false">
					<label class="tui-pay-item">
						<image src="/static/images/mall/pay/icon_pay_balance.png" class="tui-pay-logo"></image>
						<text>余额支付（余额0，余额不足）</text>
						<view class="tui-radio" v-if="false">
							<radio color="#EB0909" name="pay"></radio>
						</view>
						<view class="tui-recharge">去充值</view>
					</label>
				</tui-list-cell>
				<tui-list-cell unlined>
					<label class="tui-pay-item">
						<image src="/static/images/mall/pay/icon_pay_weixin.png" class="tui-pay-logo"></image>
						<text>微信支付</text>
						<view class="tui-radio">
							<radio color="#EB0909" name="pay"></radio>
						</view>
					</label>
				</tui-list-cell>
				<tui-list-cell unlined>
					<label class="tui-pay-item">
						<image src="/static/images/mall/pay/icon_pay_zhifubao.png" class="tui-pay-logo"></image>
						<text>支付宝支付</text>
						<view class="tui-radio">
							<radio color="#EB0909" name="pay"></radio>
						</view>
					</label>
				</tui-list-cell>
			</radio-group>
			<view class="tui-btn-pay">
				<tui-button height="88rpx" type="danger" shape="circle" shadow @click="btnPay">去付款</tui-button>
			</view>
		</tui-bottom-popup>
	</view>
</template>

<script>
	export default {
		name: 'tPayWay',
		emits: ['close'],
		props: {
			//控制显示
			show: {
				type: Boolean,
				default: false
			},
			page:{
				type:Number,
				default:1
			}
		},
		data() {
			return {

			};
		},
		methods: {
			close() {
				this.$emit("close",{})
			},
			btnPay(){
				this.close();
				this.tui.href("/pages/template/mall/success/success")
			}
		}
	}
</script>

<style scoped>
	.tui-pay-item__title {
		width: 100%;
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20rpx;
		box-sizing: border-box;
		font-size: 28rpx;
	}

	.tui-pay-amuont {
		color: #eb0909;
		font-weight: 500;
		font-size: 34rpx;
	}

	.tui-pay-item {
		width: 100%;
		height: 80rpx;
		display: flex;
		align-items: center;
		padding: 0 20rpx;
		box-sizing: border-box;
		font-size: 28rpx;
	}

	.tui-pay-logo {
		width: 48rpx;
		height: 48rpx;
		margin-right: 15rpx;
	}

	.tui-radio {
		margin-left: auto;
		transform: scale(0.8);
		transform-origin: 100% center;
	}

	.tui-btn-pay {
		width: 100%;
		padding: 68rpx 60rpx 50rpx;
		box-sizing: border-box;
	}

	.tui-recharge {
		color: #fc872d;
		margin-left: auto;
		padding: 12rpx 0;
	}
</style>
