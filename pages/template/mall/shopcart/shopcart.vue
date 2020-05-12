<template>
	<view class="container">
		<!-- #ifdef MP || H5-->
		<view class="tui-edit-goods">
			<view>购物车共<text class="tui-goods-num">2</text>件商品</view>
			<view>
				<tui-button type="gray" :plain="true" shape="circle" width="160rpx" height="60rpx" :size="24" @click="editGoods">{{isEdit?"完成":"编辑商品"}}</tui-button>
			</view>
		</view>
		<!-- #endif -->
		<checkbox-group @change="buyChange">
			<view class="tui-cart-cell  tui-mtop" v-for="(item,index) in dataList" :key="index">
				<view class="tui-activity" v-if="index%2==0">
					<view class="tui-bold">满3件享受优惠</view>
					<view class="tui-buy">去凑单<tui-icon name="arrowright" :size="18" color="#333"></tui-icon>
					</view>
				</view>
				<tui-swipe-action :actions="actions" @click="handlerButton" :params="item">
					<template v-slot:content>
						<view class="tui-goods-item">
							<label class="tui-checkbox">
								<checkbox :value="item.id" :checked="item.selected" color="#fff"></checkbox>
							</label>
							<image :src="'/static/images/mall/product/'+(index%2==0?'1.jpg':'4.jpg')" class="tui-goods-img" />
							<view class="tui-goods-info">
								<view class="tui-goods-title">
									{{index%2==0?"欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜彩粉嫩透亮修颜霜透亮修颜霜透亮修颜霜":"百雀羚套装女补水保湿护肤品"}}
								</view>
								<view class="tui-goods-model">
									<view class="tui-model-text">{{index%2==0?"440ml;10件;套装":"500ml;2支"}}</view>
									<tui-icon name="arrowdown" :size="16" color="#333"></tui-icon>
								</view>
								<view class="tui-price-box">
									<view class="tui-goods-price">￥{{item.price | getPrice}}</view>
									<view class="tui-scale">
										<tui-numberbox :value="item.buyNum" :height="40" :width="74" :min="1" :index="index" @change="changeNum"></tui-numberbox>
									</view>
								</view>
							</view>
						</view>
					</template>
				</tui-swipe-action>
				<view class="tui-sub-info" v-if="index%2==0">赠品：柔色尽情丝柔口红唇膏1支柔色尽情丝柔口红唇膏1支</view>
			</view>
		</checkbox-group>

		<!--商品失效-->
		<view class="tui-cart-cell  tui-mtop">
			<view class="tui-activity">
				<view class="tui-bold">失效商品</view>
				<view class="tui-buy">
					<tui-button type="gray" :plain="true" shape="circle" width="200rpx" height="56rpx" :size="24">清空失效商品</tui-button>
				</view>
			</view>
			<view :class="{'tui-invalid-ptop':index!==0}" v-for="(item,index) in 2" :key="index">
				<tui-swipe-action :actions="actions2">
					<template v-slot:content>
						<view class="tui-goods-item">
							<view class="tui-checkbox tui-invalid-pr">
								<view class="tui-invalid-text">失效</view>
							</view>
							<image src="/static/images/mall/product/4.jpg" class="tui-goods-img opcity" />
							<view class="tui-goods-info">
								<view class="tui-goods-title tui-gray">
									欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜彩粉嫩透亮修颜霜透亮修颜霜透亮修颜霜
								</view>
								<view class="tui-price-box tui-flex-center">
									<view class="tui-goods-invalid">产品失效</view>
									<view class="tui-btn-alike">
										<tui-button type="white" :plain="true" shape="circle" width="120rpx" height="48rpx" :size="24">找相似</tui-button>
									</view>
								</view>
							</view>
						</view>
					</template>
				</tui-swipe-action>
			</view>
		</view>

		<!--猜你喜欢-->

		<tui-divider :size="28" :bold="true" color="#333" width="50%">
			<tui-icon name="like" :size="18" color="#e41f19"></tui-icon>
			<text class="tui-youlike">猜你喜欢</text>
		</tui-divider>
		<view class="tui-product-list">
			<view class="tui-product-container">
				<block v-for="(item,index) in productList" :key="index" v-if="(index+1)%2!=0">
					<!--商品列表-->
					<view class="tui-pro-item" hover-class="hover" :hover-start-time="150" @tap="detail">
						<image :src="'/static/images/mall/product/'+item.img+'.jpg'" class="tui-pro-img" mode="widthFix" />
						<view class="tui-pro-content">
							<view class="tui-pro-tit">{{item.name}}</view>
							<view>
								<view class="tui-pro-price">
									<text class="tui-sale-price">￥{{item.sale}}</text>
									<text class="tui-factory-price">￥{{item.factory}}</text>
								</view>
								<view class="tui-pro-pay">{{item.payNum}}人付款</view>
							</view>
						</view>
					</view>
					<!--商品列表-->
					<!-- <template is="productItem" data="{{item,index:index}}" /> -->
				</block>
			</view>
			<view class="tui-product-container">
				<block v-for="(item,index) in productList" :key="index" v-if="(index+1)%2==0">
					<!--商品列表-->
					<view class="tui-pro-item" hover-class="hover" :hover-start-time="150" @tap="detail">
						<image :src="'/static/images/mall/product/'+item.img+'.jpg'" class="tui-pro-img" mode="widthFix" />
						<view class="tui-pro-content">
							<view class="tui-pro-tit">{{item.name}}</view>
							<view>
								<view class="tui-pro-price">
									<text class="tui-sale-price">￥{{item.sale}}</text>
									<text class="tui-factory-price">￥{{item.factory}}</text>
								</view>
								<view class="tui-pro-pay">{{item.payNum}}人付款</view>
							</view>
						</view>
					</view>
				</block>
			</view>
		</view>

		<!--tabbar-->
		<view class="tui-tabbar">
			<view class="tui-checkAll">
				<checkbox-group @change="checkAll">
					<label class="tui-checkbox">
						<checkbox :checked="isAll" color="#fff"></checkbox>
						<text class="tui-checkbox-pl">全选</text>
					</label>
				</checkbox-group>
				<view class="tui-total-price" v-if="!isEdit">合计:<text class="tui-bold">￥{{totalPrice | getPrice}}</text> </view>
			</view>
			<view>
				<tui-button width="200rpx" height="70rpx" :size="30" type="danger" shape="circle" v-if="!isEdit" @click="btnPay">去结算({{buyNum}})</tui-button>
				<tui-button width="200rpx" height="70rpx" :size="30" type="danger" shape="circle" :plain="true" v-else>删除</tui-button>
			</view>
		</view>
		<!--加载loadding-->
		<tui-loadmore v-if="loadding" :index="3" type="red"></tui-loadmore>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [{
					id: "t2020003120",
					buyNum: 2,
					price: 299.5,
					selected: false
				}, {
					id: 't1020003120',
					buyNum: 1,
					price: 499,
					selected: false
				}],
				isAll: false,
				totalPrice: 0,
				buyNum: 0,
				cartIds: [], //购物车id
				actions: [{
						name: '收藏',
						width: 64,
						color: '#fff',
						fontsize: 28,
						background: '#FFC600'
					},
					{
						name: '看相似',
						color: '#fff',
						fontsize: 28,
						width: 64,
						background: '#FF7035'
					},
					{
						name: '删除',
						color: '#fff',
						fontsize: 28,
						width: 64,
						background: '#F82400'
					}
				],
				actions2: [{
						name: '看相似',
						color: '#fff',
						fontsize: 28,
						width: 64,
						background: '#FF7035'
					},
					{
						name: '删除',
						color: '#fff',
						fontsize: 28,
						width: 64,
						background: '#F82400'
					}
				],
				isEdit: false,
				productList: [{
						img: 1,
						name: "欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）",
						sale: 599,
						factory: 899,
						payNum: 2342
					},
					{
						img: 2,
						name: "德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒",
						sale: 29,
						factory: 69,
						payNum: 999
					},
					{
						img: 3,
						name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
						sale: 299,
						factory: 699,
						payNum: 666
					},
					{
						img: 4,
						name: "百雀羚套装女补水保湿护肤品",
						sale: 1599,
						factory: 2899,
						payNum: 236
					},
					{
						img: 5,
						name: "百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋",
						sale: 599,
						factory: 899,
						payNum: 2399
					},
					{
						img: 6,
						name: "短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤",
						sale: 599,
						factory: 899,
						payNum: 2399
					},
					{
						img: 1,
						name: "欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜",
						sale: 599,
						factory: 899,
						payNum: 2342
					},
					{
						img: 2,
						name: "德国DMK进口牛奶",
						sale: 29,
						factory: 69,
						payNum: 999
					},
					{
						img: 3,
						name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
						sale: 299,
						factory: 699,
						payNum: 666
					},
					{
						img: 4,
						name: "百雀羚套装女补水保湿护肤品",
						sale: 1599,
						factory: 2899,
						payNum: 236
					}
				],
				pageIndex: 1,
				loadding: false,
				pullUpOn: true
			}
		},
		filters: {
			getPrice(price) {
				price = price || 0;
				return price.toFixed(2)
			}
		},
		methods: {
			calcHandle() {
				let buyNum = 0;
				let totalPrice = 0;
				let selectedNum = 0;
				this.dataList.map((item) => {
					if (item.selected) {
						buyNum += item.buyNum;
						totalPrice += item.price * item.buyNum;
						selectedNum++
					}
				})
				this.isAll = selectedNum === this.dataList.length
				this.buyNum = buyNum
				this.totalPrice = totalPrice
			},
			changeNum: function(e) {
				this.dataList[e.index].buyNum = e.value
				setTimeout(() => {
					this.calcHandle()
				}, 0)
			},
			handlerButton: function(e) {
				let index = e.index;
				let item = e.item;
				this.tui.toast(`商品id：${item.id}，按钮index：${index}`);
			},
			editGoods: function() {
				// #ifdef H5 || MP
				this.isEdit = !this.isEdit;
				// #endif
			},
			detail: function() {
				uni.navigateTo({
					url: '../productDetail/productDetail'
				})
			},
			btnPay() {
				uni.navigateTo({
					url: '../submitOrder/submitOrder'
				})
			},
			buyChange(e) {
				this.cartIds = e.detail.value;
				this.dataList.map(item => {
					//如果购物车id为数字统一转成字符串
					if (~this.cartIds.indexOf(item.id)) {
						item.selected = true;
					} else {
						item.selected = false;
					}
				})
				setTimeout(() => {
					this.calcHandle()
				}, 0)
			},
			checkAll(e) {
				this.isAll = !this.isAll;
				let buyNum = 0;
				let totalPrice = 0;
				this.dataList.map((item) => {
					item.selected = this.isAll;
					if (this.isAll) {
						buyNum += item.buyNum;
						totalPrice += item.price * item.buyNum;
					}
				})
				this.totalPrice = totalPrice;
				this.buyNum = buyNum;
			}
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 200)
		},
		onPullDownRefresh: function() {
			let loadData = JSON.parse(JSON.stringify(this.productList));
			loadData = loadData.splice(0, 10)
			this.productList = loadData;
			this.pageIndex = 1;
			this.pullUpOn = true;
			this.loadding = false
			uni.stopPullDownRefresh()
		},
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			if (this.pageIndex == 4) {
				this.loadding = false;
				this.pullUpOn = false
			} else {
				let loadData = JSON.parse(JSON.stringify(this.productList));
				loadData = loadData.splice(0, 10)
				if (this.pageIndex == 1) {
					loadData = loadData.reverse();
				}
				this.productList = this.productList.concat(loadData);
				this.pageIndex = this.pageIndex + 1;
				this.loadding = false
			}
		},
		onNavigationBarButtonTap(e) {
			this.isEdit = !this.isEdit;
			let text = this.isEdit ? "完成" : "编辑";
			// #ifdef APP-PLUS
			let webView = this.$mp.page.$getAppWebview();
			webView.setTitleNViewButtonStyle(0, {
				text: text
			});
			// #endif
		}
	}
</script>

<style>
	.container {
		padding-bottom: 120rpx;
	}

	.tui-mtop {
		margin-top: 24rpx;
	}

	.tui-edit-goods {
		width: 100%;
		border-radius: 12rpx;
		overflow: hidden;
		padding: 24rpx 30rpx 0 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #333;
		font-size: 24rpx;
	}

	.tui-goods-num {
		font-weight: bold;
		color: #e41f19;
	}

	.tui-cart-cell {
		width: 100%;
		border-radius: 12rpx;
		background: #FFFFFF;
		padding: 40rpx 0;
		overflow: hidden;
	}

	.tui-goods-item {
		display: flex;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.tui-checkbox {
		min-width: 70rpx;
		display: flex;
		align-items: center;
	}

	/* #ifdef MP-WEIXIN */
	.tui-checkbox .wx-checkbox-input {
		width: 40rpx;
		height: 40rpx;
		margin-right: 0 !important;
		border-radius: 50% !important;
		transform: scale(0.8);
		border-color: #d1d1d1 !important;
	}

	.tui-checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		background: #eb0909;
		width: 44rpx !important;
		height: 44rpx !important;
		border: none;
	}

	/* #endif */
	/* #ifndef MP-WEIXIN */

	>>>.tui-checkbox .uni-checkbox-input {
		width: 40rpx;
		height: 40rpx;
		margin-right: 0 !important;
		border-radius: 50% !important;
		transform: scale(0.8);
		border-color: #d1d1d1 !important;
	}

	>>>.tui-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
		background: #eb0909;
		width: 45rpx !important;
		height: 45rpx !important;
		border: none;
	}

	/* #endif */
	.tui-goods-img {
		width: 220rpx;
		height: 220rpx !important;
		border-radius: 12rpx;
		flex-shrink: 0;
		display: block;
	}

	.tui-goods-info {
		width: 100%;
		padding-left: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		box-sizing: border-box;
		overflow: hidden;
	}

	.tui-goods-title {
		white-space: normal;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
		color: #333;
	}

	.tui-goods-model {
		max-width: 100%;
		color: #333;
		background: #F5F5F5;
		border-radius: 40rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16rpx;
		box-sizing: border-box;
	}

	.tui-model-text {
		max-width: 100%;
		transform: scale(0.9);
		transform-origin: 0 center;
		font-size: 24rpx;
		line-height: 32rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tui-price-box {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}

	.tui-goods-price {
		font-size: 34rpx;
		font-weight: 500;
		color: #e41f19;
	}

	.tui-scale {
		transform: scale(0.8);
		transform-origin: 100% 100%;
	}

	.tui-activity {
		font-size: 24rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx 20rpx 100rpx;
		box-sizing: border-box;
	}

	.tui-buy {
		display: flex;
		align-items: center
	}

	.tui-bold {
		font-weight: bold;
	}

	.tui-sub-info {
		max-width: 532rpx;
		font-size: 24rpx;
		line-height: 24rpx;
		padding: 20rpx 30rpx 10rpx 30rpx;
		box-sizing: border-box;
		color: #333;
		transform: scale(0.8);
		transform-origin: 100% center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-left: auto
	}

	.tui-invalid-text {
		width: 66rpx;
		margin-right: 4rpx;
		text-align: center;
		font-size: 24rpx;
		color: #fff;
		background: rgba(0, 0, 0, .3);
		transform: scale(0.8);
		transform-origin: center center;
		border-radius: 4rpx;
		flex-shrink: 0;
	}

	.tui-gray {
		color: #B2B2B2 !important;
	}

	.tui-goods-invalid {
		color: #555;
		font-size: 24rpx;
	}

	.tui-flex-center {
		align-items: center !important;
	}

	.tui-invalid-ptop {
		padding-top: 40rpx;
	}

	.tui-tabbar {
		width: 100%;
		height: 100rpx;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		z-index: 99999;
	}

	.tui-tabbar::before {
		content: '';
		width: 100%;
		border-top: 1rpx solid #d9d9d9;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-checkAll {
		display: flex;
		align-items: center;
	}

	.tui-checkbox-pl {
		padding-left: 12rpx;
	}

	.tui-total-price {
		padding-left: 30rpx;
		font-size: 30rpx !important;
	}

	/*猜你喜欢*/
	.tui-youlike {
		padding-left: 12rpx
	}

	.tui-product-list {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
	}

	.tui-product-container {
		flex: 1;
		margin-right: 2%;
	}

	.tui-product-container:last-child {
		margin-right: 0;
	}

	.tui-pro-item {
		width: 100%;
		margin-bottom: 4%;
		background: #fff;
		box-sizing: border-box;
		border-radius: 12rpx;
		overflow: hidden;
	}

	.tui-pro-img {
		width: 100%;
		display: block;
	}

	.tui-pro-content {
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

	.tui-pro-price {
		padding-top: 18rpx;
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

	.tui-pro-pay {
		padding-top: 10rpx;
		font-size: 24rpx;
		color: #656565;
	}
</style>
