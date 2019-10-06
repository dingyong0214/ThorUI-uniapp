<template>
	<view class="container">
		<view class="page_hd">
			<view class="page_title" @tap="mall">
				<image src="../../static/images/index/logo.png" class="logo"></image>
				<text class="title">Thor UI</text>
			</view>
			<view class="page_desc">uni-app<text class="link" @tap="mall">代码片段</text>分享，源码可去<text class="link" @tap="github">GitHub</text>下载</view>
		</view>
		<view class="page_bd page_bd_spacing">
			<view class="kind-list">
				<block v-for="(item,index) in list" :key="item.id">
					<view class="kind-list_item">
						<view :id="item.id" class="tui-flex kind-list_item-hd" :class="{'kind-list_item-hd_show':item.open}" @tap="kindToggle">
							<view class="tui-flex_item">{{item.name}}</view>
							<image class="kind-list_img" :class="'tui-img'+index" :src="'../../static/images/index/'+item.id+'.png'"></image>
						</view>
						<view class="kind-list_item-bd" :class="{'kind-list_item-bd_show':item.open}">
							<view class="tui-cells" :class="{'tui-cells_show':item.open}">
								<block v-for="page in item.pages">
									<navigator :url="getPageUrl(page.page)" class="tui-cell tui-cell_access">
										<view class="tui-cell_bd">{{page.name}}</view>
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
	export default {
		data() {
			return {
				list: [{
						id: 'basic',
						name: '基础组件',
						open: false,
						pages: [{
							name: "基础组件",
							page: "basic"
						}]
					},
					// #ifdef APP-PLUS || MP
					{
						id: 'map',
						name: '地图',
						open: false,
						pages: [{
							name: "拖拽定位",
							page: "location"
						}, {
							name: "周边兴趣点",
							page: "maps"
						}, {
							name: "地址解析",
							page: "longlat"
						}, {
							name: "天气",
							page: "weather"
						}]
					},
					// #endif

					{
						id: 'index',
						name: '索引列表',
						open: false,
						pages: [{
							name: "城市选择",
							page: "selectCity"
						}, {
							name: "索引列表",
							page: "indexList"
						}, {
							name: "吸顶效果",
							page: "friendsList"
						}]
					},
					{
						id: 'nav',
						name: '三级联动',
						open: false,
						pages: [{
							name: "picker三级联动",
							page: "picker"
						}, {
							name: "picker-view三级联动",
							page: "picker-view"
						}]
					},
					{
						id: 'canvas',
						name: '二维码生成',
						open: false,
						pages: [{
							name: "二维码生成",
							page: "qrcode"
						}]
					},
					{
						id: 'drawer',
						name: 'drawer抽屉',
						open: false,
						pages: [{
							name: "drawer抽屉",
							page: "drawer"
						}]
					},
					{
						id: 'swipe',
						name: '滑动菜单',
						open: false,
						pages: [{
							name: "滑动菜单",
							page: "swipe-action"
						}]
					},
					{
						id: 'class',
						name: '分类菜单',
						open: false,
						pages: [{
								name: "顶部选项卡",
								page: "navbar-1"
							},
							{
								name: "垂直分类",
								page: "navbar-2"
							}
						]
					},
					{
						id: 'refresh',
						name: '上拉加载下拉刷新',
						open: false,
						pages: [{
								name: "新闻列表",
								page: "news"
							}, {
								name: "商品列表",
								page: "product"
							} // #ifdef APP-PLUS
							, {
								name: "商品列表Nvue",
								page: "productNvue"
							}
							// #endif
						]
					}
				]
			}
		},
		onLoad() {
			this.$eventHub.$on('emit', (data) => {
				setTimeout(() => {
					this.tui.toast("您选择了：" + data)
				}, 350)
			});
		},
		methods: {
			kindToggle: function(e) {
				var id = e.currentTarget.id,
					list = this.list;
				for (var i = 0, len = list.length; i < len; ++i) {
					if (list[i].id == id) {
						list[i].open = !list[i].open
					} else {
						list[i].open = false
					}
				}
				this.list = list
			},
			github: function() {
				const that = this
				uni.setClipboardData({
					data: 'https://github.com/dingyong0214/ThorUI-uniapp',
					success(res) {
						uni.getClipboardData({
							success(res) {
								that.tui.toast("链接已复制", 2000, true)
							}
						})
					}
				})
			},
			mall: function() {
				uni.navigateTo({
					url: '../extend-view/mall/mall'
				})
			},
			getPageUrl(page) {
				let pageUrl = '../' + page + '/' + page;
				if (page == 'friendsList') {
					pageUrl = '../extend-view/' + page + '/' + page;
				}
				return pageUrl
			}
		}
	}
</script>

<style>
	.container {
		width: 100%;
		padding-bottom: 30upx;
	}

	.page_title {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 70upx 0 30upx 0;
	}

	.logo {
		height: 120upx;
		width: 120upx;
	}

	.title {
		font-size: 64upx;
		padding-left: 20upx;
		color: #333;
	}

	.link {
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
		content: " ";
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
		content: " ";
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

	.page_desc {
		color: #666;
		font-size: 28upx;
		text-align: center;
		padding-bottom: 50upx;
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

	.tui-img-0,
	.tui-img-1,
	.tui-img-2 {
		width: 32px !important;
		height: 32px !important;
	}

	.tui-img-7 {
		width: 26px !important;
		height: 26px !important;
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
</style>
