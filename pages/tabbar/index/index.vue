<template>
	<view class="container">
		<view class="tui-page-hd">
			<view class="tui-page-title" @tap="doc">
				<image src="/static/images/index/logo.png" class="tui-logo"></image>
				<view class="tui-title">
					Thor UI
					<view class="tui-badge">文档</view>
				</view>
			</view>
			<view class="tui-page-desc">
				<text>ThorUI组件库，让开发效率倍速提升。更多功能请前往小程序</text>
				<text class="tui-link" @tap="openThorUI">ThorUI示例。</text>
			</view>
		</view>
		<view class="page_bd page_bd_spacing">
			<view class="kind-list">
				<block v-for="(item, index) in list" :key="item.id">
					<view class="kind-list_item">
						<view :id="item.id" class="tui-flex kind-list_item-hd"
							:class="{ 'kind-list_item-hd_show': item.open }" @tap="kindToggle">
							<view class="tui-flex_item">{{ item.name }}</view>
							<image class="kind-list_img" :class="['tui-img-' + index]"
								:src="'/static/images/index/' + item.id + '.png'"></image>
						</view>
						<view class="kind-list_item-bd" :class="{ 'kind-list_item-bd_show': item.open }">
							<view class="tui-cells" :class="{ 'tui-cells_show': item.open }">
								<block v-for="(page, index2) in item.pages" :key="index2">
									<navigator :url="page.page" class="tui-cell tui-cell_access">
										<view class="tui-cell_bd">{{ page.name }}</view>
										<view class="tui-cell_ft tui-cell_ft_in-access"></view>
									</navigator>
								</block>
							</view>
						</view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import thorui from '@/components/common/tui-clipboard/tui-clipboard.js'
	import {
		mapActions,
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				platform: 'uni-app',
				list: [],
				listOnline: [{
						id: 'basic',
						name: '基础组件',
						open: false,
						pages: [{
							name: '基础组件',
							page: '/pages/index/basic/basic'
						}]
					},
					{
						id: 'map',
						name: '地图',
						open: false,
						pages: [
							// #ifndef MP-QQ
							{
								name: '拖拽定位',
								page: '/pages/index/location/location'
							},
							{
								name: '周边兴趣点',
								page: '/pages/index/maps/maps'
							},
							// #endif
							{
								name: '地址解析',
								page: '/pages/index/longlat/longlat'
							},
							{
								name: '天气',
								page: '/pages/index/weather/weather'
							}
						]
					},
					{
						id: 'index',
						name: '索引列表',
						open: false,
						pages: [{
								name: '城市选择',
								page: '/pages/index/selectCity/selectCity'
							},
							{
								name: '索引列表',
								page: '/pages/index/indexList/indexList'
							},
							{
								name: '索引&吸顶效果',
								page: '/pages/template/chat/contacts/contacts'
							}
						]
					},
					{
						id: 'nav',
						name: '三级联动',
						open: false,
						pages: [
							// #ifndef MP-ALIPAY
							{
								name: 'picker三级联动',
								page: '/pages/index/picker/picker'
							},
							// #endif
							{
								name: 'picker-view三级联动',
								page: '/pages/index/picker-view/picker-view'
							}
						]
					},
					{
						id: 'canvas',
						name: '二维码生成',
						open: false,
						pages: [{
							name: '二维码生成',
							page: '/pages/index/qrcode/qrcode'
						}]
					},
					{
						id: 'drawer',
						name: 'drawer抽屉',
						open: false,
						pages: [{
							name: 'drawer抽屉',
							page: '/pages/index/drawer/drawer'
						}]
					},
					{
						id: 'swipe',
						name: '滑动菜单',
						open: false,
						pages: [{
							name: '滑动菜单',
							page: '/pages/index/swipe-action/swipe-action'
						}]
					},
					{
						id: 'class',
						name: '分类菜单',
						open: false,
						pages: [{
								name: '顶部选项卡',
								page: '/pages/index/navbar/navbar'
							},
							{
								name: '垂直分类',
								page: '/pages/template/mall/classify/classify'
							},
							{
								name: '垂直分类联动',
								page: '/pages/index/classify/classify'
							}
						]
					},
					{
						id: 'refresh',
						name: '上拉加载下拉刷新',
						open: false,
						pages: [{
								name: '新闻列表',
								page: '/pages/index/news/news'
							},
							{
								name: '商品列表',
								page: '/pages/index/product/product'
							}, // #ifdef APP-PLUS
							{
								name: '商品列表Nvue',
								page: '/pages/index/productNvue/productNvue'
							}
							// #endif
						]
					},
					{
						id: 'template',
						name: '会员模板',
						open: false,
						pages: [{
								name: '商城模板',
								page: '/pages/template/mall/mall/mall'
							},
							{
								name: '新闻模板',
								page: '/pages/template/mall/mall/mall'
							},
							{
								name: '聊天模板',
								page: '/pages/template/mall/mall/mall'
							},
							{
								name: '登录模板',
								page: '/pages/template/mall/mall/mall'
							}
						]
					}
				]
			};
		},
		computed: {
			...mapState(['networkConnected', 'isOnline'])
		},
		watch: {
			networkConnected(isConnected) {
				if (isConnected) {
					this.menuHandle();
				}
			},
			isOnline(val) {
				if (val) {
					this.menuHandle();
				}
			}
		},
		onLoad() {
			// #ifdef MP
			this.platform = '小程序';
			// #endif
			uni.$on('emit', data => {
				setTimeout(() => {
					this.tui.toast('您选择了：' + data);
				}, 350);
			});
			setTimeout(() => {
				this.menuHandle();
			}, 50);
			
			
		},
		methods: {
			...mapActions(['getOnlineStatus']),
			async menuHandle() {
				let list = [...this.listOnline];
				this.list = list.splice(0, 7);
				let isOnline = await this.getOnlineStatus();
				if (isOnline) {
					this.list = this.listOnline;
				}
			},
			kindToggle: function(e) {
				var id = e.currentTarget.id,
					list = this.list;
				for (var i = 0, len = list.length; i < len; ++i) {
					if (list[i].id == id) {
						list[i].open = !list[i].open;
					} else {
						list[i].open = false;
					}
				}
				this.list = list;
			},
			github: function(event) {
				//event 当需要异步请求返回数据再进行复制时，需要传入此参数，或者异步方法转为同步方法（H5端）
				thorui.getClipboardData('https://github.com/dingyong0214/ThorUI-uniapp', res => {
					// #ifdef H5 || MP-ALIPAY
					if (res) {
						this.tui.toast('链接复制成功');
					} else {
						this.tui.toast('链接复制失败');
					}
					// #endif
				}, event);
			},
			mall: function() {
				if (this.list.length < 8) return;
				uni.navigateTo({
					url: '../../template/mall/mall/mall'
				});
			},
			doc: function() {
				uni.navigateTo({
					url: '../../doc/doc/doc'
				});
			},
			openThorUI() {
				// #ifdef MP-WEIXIN
				wx.navigateToMiniProgram({
					appId: 'wxd3c1da92cb8fcf40'
				});
				// #endif

				// #ifndef  MP-WEIXIN
				if (this.sweixin) {
					this.sweixin.launchMiniProgram({
						id: 'gh_78d54c9830d3'
					});
				} else {
					uni.previewImage({
						urls: ['https://thorui.cn/img/applets_extend.jpg']
					});
				}
				// #endif
			}
		}
	};
</script>

<style>
	.container {
		width: 100%;
		padding-bottom: 30rpx;
	}

	.tui-page-title {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 70rpx 0 30rpx 0;
	}

	.tui-logo {
		height: 108rpx;
		width: 108rpx;
		border-radius: 50%;
	}

	.tui-title {
		font-size: 64rpx;
		padding-left: 20rpx;
		color: #333;
		position: relative;
	}

	.tui-link {
		color: #5677fc;
	}

	.tui-cell {
		padding: 10px 15px;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.tui-cell:before {
		content: ' ';
		position: absolute;
		top: 0;
		right: 0;
		border-top: 1px solid #eaeef1;
		color: #eaeef1;
		left: 15px;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
	}

	.tui-cell:first-child:before {
		display: none;
	}

	.tui-cell_active {
		background-color: #f7f7f9;
	}

	.tui-cell_bd {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}

	.tui-cell_ft {
		text-align: right;
		color: #999;
	}

	.tui-cell_access {
		color: inherit;
	}

	.tui-cell_ft_in-access {
		padding-right: 13px;
		position: relative;
	}

	.tui-cell_ft_in-access:after {
		content: ' ';
		height: 11px;
		width: 11px;
		border-width: 2px 2px 0 0;
		border-color: #b2b2b2;
		border-style: solid;
		-webkit-transform: matrix(0.5, 0.5, -0.5, 0.5, 0, 0);
		transform: matrix(0.5, 0.5, -0.5, 0.5, 0, 0);
		position: absolute;
		top: 50%;
		margin-top: -7px;
		right: 2px;
	}

	.tui-form-preview_item {
		overflow: hidden;
	}

	.tui-flex {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
	}

	.tui-flex_item {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}

	.tui-page-desc {
		width: 100%;
		color: #666;
		font-size: 28rpx;
		text-align: center;
		padding: 0 80rpx 50rpx;
		box-sizing: border-box;
	}

	.tui-link {
		color: #586c94;
	}

	.tui-flex {
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.tui-cells {
		margin-top: 0;
		opacity: 0;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		-webkit-transition: 0.3s;
		transition: 0.3s;
	}

	.tui-cells:before,
	.tui-cells:after {
		display: none;
	}

	.tui-cells_show {
		opacity: 1;
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}

	.tui-cell:before {
		right: 15px;
	}

	.kind-list_item {
		margin: 10px 0;
		background-color: #fff;
		border-radius: 2px;
		overflow: hidden;
	}

	.kind-list_item:first-child {
		margin-top: 0;
	}

	.kind-list_img {
		width: 30px;
		height: 30px;
	}

	.tui-img-1,
	.tui-img-2,
	.tui-img-8 {
		width: 32px !important;
		height: 32px !important;
	}

	.tui-img-7 {
		width: 28px !important;
		height: 28px !important;
	}

	.kind-list_item-hd {
		padding: 20px;
		-webkit-transition: opacity 0.3s;
		transition: opacity 0.3s;
	}

	.kind-list_item-hd_show {
		opacity: 0.4;
	}

	.kind-list_item-bd {
		height: 0;
		overflow: hidden;
	}

	.kind-list_item-bd_show {
		height: auto;
	}

	.tui-badge {
		position: absolute;
		width: 80rpx;
		height: 30rpx;
		border-radius: 30rpx 30rpx 30rpx 0;
		color: #fff;
		background: #eb0909;
		font-size: 25rpx;
		font-weight: 400;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: scale(0.8) translateX(100%);
		transform-origin: center center;
		top: -8rpx;
		right: 0;
	}
</style>
