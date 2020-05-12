<template>
	<view class="container">
		<tui-tabs :tabs="tabs" :isFixed="scrollTop>=0" :currentTab="currentTab" selectedColor="#E41F19" sliderBgColor="#E41F19"
		 @change="change" itemWidth="20%"></tui-tabs>
		<!--选项卡逻辑自己实现即可，此处未做处理-->
		<view :class="{'tui-order-list':scrollTop>=0}">
			<view class="tui-order-item" v-for="(model,orderIndex) in 3" :key="orderIndex">
				<tui-list-cell :hover="false" :lineLeft="false">
					<view class="tui-goods-title">
						<view>订单号：T201910000</view>
						<view class="tui-order-status">已完成</view>
					</view>
				</tui-list-cell>
				<block v-for="(item,index) in 2" :key="index">
					<tui-list-cell padding="0" @click="detail">
						<view class="tui-goods-item">
							<image :src="`/static/images/mall/product/${index+3}.jpg`" class="tui-goods-img"></image>
							<view class="tui-goods-center">
								<view class="tui-goods-name">欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）</view>
								<view class="tui-goods-attr">黑色，50ml</view>
							</view>
							<view class="tui-price-right">
								<view>￥298.00</view>
								<view>x2</view>
							</view>
						</view>
					</tui-list-cell>
				</block>
				<tui-list-cell :hover="false" unlined>
					<view class="tui-goods-price">
						<view>共4件商品 合计：</view>
						<view class="tui-size-24">￥</view>
						<view class="tui-price-large">1192</view>
						<view class="tui-size-24">.00</view>
					</view>
				</tui-list-cell>
				<view class="tui-order-btn">
					<view class="tui-btn-ml">
						<tui-button type="black" plain width="152rpx" height="56rpx" :size="26" shape="circle">查看发票</tui-button>
					</view>
					<view class="tui-btn-ml">
						<tui-button type="black" plain width="152rpx" height="56rpx" :size="26" shape="circle">评价晒单</tui-button>
					</view>
					<view class="tui-btn-ml">
						<tui-button type="danger" plain width="152rpx" height="56rpx" :size="26" shape="circle">再次购买</tui-button>
					</view>
				</view>
			</view>

			<view class="tui-order-item">
				<tui-list-cell :hover="false" :lineLeft="false">
					<view class="tui-goods-title">
						<view>订单号：T201910000</view>
						<view class="tui-order-status">已取消</view>
					</view>
				</tui-list-cell>
				<block v-for="(item,index) in 1" :key="index">
					<tui-list-cell padding="0" @click="detail">
						<view class="tui-goods-item">
							<image :src="`/static/images/mall/product/${index+3}.jpg`" class="tui-goods-img"></image>
							<view class="tui-goods-center">
								<view class="tui-goods-name">欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）</view>
								<view class="tui-goods-attr">黑色，50ml</view>
							</view>
							<view class="tui-price-right">
								<view>￥298.00</view>
								<view>x2</view>
							</view>
						</view>
					</tui-list-cell>
				</block>
				<tui-list-cell :hover="false" unlined>
					<view class="tui-goods-price">
						<view>共4件商品 合计：</view>
						<view class="tui-size-24">￥</view>
						<view class="tui-price-large">596</view>
						<view class="tui-size-24">.00</view>
					</view>
				</tui-list-cell>
				<view class="tui-order-btn">
					<view class="tui-btn-ml">
						<tui-button type="black" plain width="152rpx" height="56rpx" :size="26" shape="circle">删除订单</tui-button>
					</view>
					<view class="tui-btn-ml">
						<tui-button type="danger" plain width="152rpx" height="56rpx" :size="26" shape="circle">再次购买</tui-button>
					</view>
				</view>
			</view>

		</view>
		<!--加载loadding-->
		<tui-loadmore v-if="loadding" :index="3" type="red"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn" backgroundColor="#fafafa"></tui-nomore>
		<!--加载loadding-->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [{
					name: "全部"
				}, {
					name: "待付款"
				}, {
					name: "待发货"
				}, {
					name: "待收货"
				}, {
					name: "待评价"
				}],
				currentTab: 0,
				pageIndex: 1,
				loadding: false,
				pullUpOn: true,
				scrollTop: 0
			}
		},
		methods: {
			change(e) {
				this.currentTab = e.index
			},
			detail() {
				uni.navigateTo({
					url: '../orderDetail/orderDetail'
				})
			}
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 200);
		},
		onReachBottom() {
			//只是测试效果，逻辑以实际数据为准
			this.loadding = true
			this.pullUpOn = true
			setTimeout(() => {
				this.loadding = false
				this.pullUpOn = false
			}, 1000)
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

	.tui-order-list {
		margin-top: 80rpx;
	}

	.tui-order-item {
		margin-top: 20rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.tui-goods-title {
		width: 100%;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-order-status {
		color: #888;
		font-size: 26rpx;
	}

	.tui-goods-item {
		width: 100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}

	.tui-goods-img {
		width: 180rpx;
		height: 180rpx;
		display: block;
		flex-shrink: 0;
	}

	.tui-goods-center {
		flex: 1;
		padding: 20rpx 8rpx;
		box-sizing: border-box;
	}

	.tui-goods-name {
		max-width: 310rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 26rpx;
		line-height: 32rpx;
	}

	.tui-goods-attr {
		font-size: 22rpx;
		color: #888888;
		line-height: 32rpx;
		padding-top: 20rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.tui-price-right {
		text-align: right;
		font-size: 24rpx;
		color: #888888;
		line-height: 30rpx;
		padding-top: 20rpx;
	}

	.tui-color-red {
		color: #E41F19;
		padding-right: 30rpx;
	}

	.tui-goods-price {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		font-size: 24rpx;
	}

	.tui-size-24 {
		font-size: 24rpx;
		line-height: 24rpx;
	}

	.tui-price-large {
		font-size: 32rpx;
		line-height: 30rpx;
		font-weight: 500;
	}

	.tui-order-btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background: #fff;
		padding: 10rpx 30rpx 20rpx;
		box-sizing: border-box;
	}

	.tui-btn-ml {
		margin-left: 20rpx;
	}
</style>
