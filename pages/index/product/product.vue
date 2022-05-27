<template>
	<view class="container">
		<view class="product-list">
			<!--商品列表-->
			<view class="pro-item" @tap="detail" v-for="(item,index) in productList" :key="index">
				<image :src="'/static/images/product/'+item.img+'.jpg'" class="pro-img" mode="widthFix"></image>
				<view class="pro-content">
					<view class="pro-tit">{{item.name}}</view>
					<view>
						<view class="pro-price">
							<text class="sale-price">￥{{item.sale}}</text>
							<text class="factory-price">￥{{item.factory}}</text>
						</view>
						<view class="pro-pay">{{item.payNum}}人付款</view>
					</view>
				</view>
			</view>
			<!--商品列表-->
		</view>
		<!--加载loadding-->
		<tui-loadmore v-if="loadding" :index="3" type="primary"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn"></tui-nomore>
		<!--加载loadding-->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageIndex: 1,
				productList: [{
						img: 1,
						name: "利物浦官方 独家出品纪念版沙发",
						sale: 599,
						factory: 899,
						payNum: 2342
					},
					{
						img: 2,
						name: "好看好养活的绿色养眼小盆栽，超级实惠",
						sale: 29,
						factory: 69,
						payNum: 999
					},
					{
						img: 3,
						name: "利物浦官方 独家出品大红床上用品三件套",
						sale: 299,
						factory: 699,
						payNum: 666
					},
					{
						img: 4,
						name: "利物浦官方 独家出品花花碎花床上用品三件套",
						sale: 1599,
						factory: 2899,
						payNum: 236
					},
					{
						img: 5,
						name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						sale: 599,
						factory: 899,
						payNum: 2399
					}, {
						img: 1,
						name: "独家出品纪念版沙发",
						sale: 599,
						factory: 899,
						payNum: 2342
					},
					{
						img: 2,
						name: "好看好养活的绿色养眼小盆栽，超级实惠",
						sale: 29,
						factory: 69,
						payNum: 999
					},
					{
						img: 3,
						name: "利物浦官方 独家出品大红床上用品三件套",
						sale: 299,
						factory: 699,
						payNum: 666
					},
					{
						img: 4,
						name: "利物浦官方 独家出品花花碎花床上用品三件套",
						sale: 1599,
						factory: 2899,
						payNum: 236
					},
					{
						img: 5,
						name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						sale: 599,
						factory: 899,
						payNum: 2399
					}
				],
				loadData: [{
						img: 1,
						name: "利物浦官方 独家出品纪念版沙发",
						sale: 599,
						factory: 899,
						payNum: 2342
					},
					{
						img: 2,
						name: "好看好养活的绿色养眼小盆栽，超级实惠",
						sale: 29,
						factory: 69,
						payNum: 999
					},
					{
						img: 3,
						name: "利物浦官方 独家出品大红床上用品三件套",
						sale: 299,
						factory: 699,
						payNum: 666
					},
					{
						img: 4,
						name: "利物浦官方 独家出品花花碎花床上用品三件套",
						sale: 1599,
						factory: 2899,
						payNum: 236
					},
					{
						img: 5,
						name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						sale: 599,
						factory: 899,
						payNum: 2399
					}, {
						img: 1,
						name: "利物浦官方 独家出品纪念版沙发",
						sale: 599,
						factory: 899,
						payNum: 2342
					},
					{
						img: 2,
						name: "好看好养活的绿色养眼小盆栽，超级实惠",
						sale: 29,
						factory: 69,
						payNum: 999
					},
					{
						img: 3,
						name: "大红床上用品三件套",
						sale: 299,
						factory: 699,
						payNum: 666
					},
					{
						img: 4,
						name: "利物浦官方 独家出品花花碎花床上用品三件套",
						sale: 1599,
						factory: 2899,
						payNum: 236
					},
					{
						img: 5,
						name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						sale: 599,
						factory: 899,
						payNum: 2399
					}
				],
				loadding: false,
				pullUpOn: true
			}
		},
		methods: {
			detail(e) {
				uni.navigateTo({
					url: '/pages/template/mall/productDetail/productDetail'
				})
			}
		},
		onPullDownRefresh: function() {
			//延时为了看效果
			setTimeout(() => {
				this.productList = this.loadData;
				this.pageIndex = 1;
				this.pullUpOn = true;
				this.loadding = false;
				uni.stopPullDownRefresh();
				this.tui.toast("刷新成功")
			}, 200)
		},
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			if (this.pageIndex == 3) {
				this.loadding = false;
				this.pullUpOn = false
			} else {
				this.productList = this.productList.concat(this.loadData);
				this.pageIndex = this.pageIndex + 1;
				this.loadding = false
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.product-list {
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding: 30rpx 30rpx 0 30rpx;
		background: #fff;
	}

	.pro-item {
		background: #fff;
		box-sizing: border-box;
		width: 49%;
		position: relative;
		margin-bottom: 2%;
	}

	.pro-item::after {
		content: '';
		position: absolute;
		height: 200%;
		width: 200%;
		border: 1rpx solid #eaeef1;
		transform-origin: 0 0;
		-webkit-transform-origin: 0 0;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		left: 0;
		top: 0;
	}

	.pro-img {
		width: 100%;
		display: block;
	}

	.pro-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 20rpx;
		height: 230rpx;
	}

	.pro-tit {
		color: #2e2e2e;
		font-size: 26rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.pro-price {
		padding-top: 18rpx;
	}

	.sale-price {
		font-size: 34rpx;
		font-weight: 500;
		color: #ea1500;
	}

	.factory-price {
		font-size: 24rpx;
		color: #a0a0a0;
		text-decoration: line-through;
		padding-left: 12rpx;
	}

	.pro-pay {
		padding-top: 10rpx;
		font-size: 24rpx;
		color: #656565;
	}
</style>
