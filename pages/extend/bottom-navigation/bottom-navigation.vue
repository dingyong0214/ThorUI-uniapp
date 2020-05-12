<template>
	<view class="container">
		<view class="header">
			<view class="title">Bottom Navigation</view>
			<view class="sub-title">底部导航菜单：可设置背景色，字体颜色，字体大小，二级菜单等基本样式</view>
		</view>

		<view class="tui-title">无二级菜单</view>
		<tui-bottom-navigation :current="current2" :itemList="itemList2" :isFixed="false" @click="tabbar"></tui-bottom-navigation>

		<view class="tui-title">暗黑模式</view>
		<tui-bottom-navigation :isFixed="false" isDarkMode :itemList="itemList" @click="menu"></tui-bottom-navigation>

		<tui-bottom-navigation :itemList="itemList" @click="menu"></tui-bottom-navigation>
	</view>
</template>

<script>
export default {
	data() {
		return {
			current: 0,
			current2: 0,
			itemList: [
				{
					text: '往期',
					iconPath: '/static/components/bottom-navigation/icon_menu_gray.png',
					selectedIconPath: '/static/components/bottom-navigation/icon_menu_gray.png',
					color: '#666',
					//1-选中切换，2-跳转、请求、其他操作，3-菜单
					type: 3,
					//自定义参数，类型自定义
					parameter: null,
					//子菜单left值,不传默认50%,当菜单贴近左右两边可用此参数调整
					popupLeft: '',
					itemList: [
						{
							//不建议超过6个字，请自行控制
							text: '全部文章',
							//自定义参数，类型自定义
							parameter: null
						},
						{
							text: 'ThorUI小程序',
							//自定义参数，类型自定义
							parameter: null
						}
					]
				},
				{
					text: '小程序',
					color: '#666',
					//1-选中切换，2-跳转、请求、其他操作，3-菜单
					type: 2,
					//子菜单left值,不传默认50%,当菜单贴近左右两边可用此参数调整
					popupLeft: '',
					itemList: []
				},
				{
					text: '更多',
					iconPath: '/static/components/bottom-navigation/icon_menu_gray.png',
					selectedIconPath: '/static/components/bottom-navigation/icon_menu_gray.png',
					color: '#666',
					//1-选中切换，2-跳转、请求、其他操作，3-菜单
					type: 3,
					//自定义参数，类型自定义
					parameter: null,
					//子菜单left值,不传默认50%,当菜单贴近左右两边可用此参数调整
					popupLeft: '',
					itemList: [
						{
							//不建议超过6个字，请自行控制
							text: '打赏作者',
							//自定义参数，类型自定义
							parameter: null
						},
						{
							text: '联系我们',
							//自定义参数，类型自定义
							parameter: null
						},
						{
							text: 'ThorUI文档',
							//自定义参数，类型自定义
							parameter: null
						}
					]
				}
			],
			itemList2: [
				{
					text: '首页',
					color: '#666',
					//1-选中切换，2-跳转、请求、其他操作，3-菜单
					type: 1
				},
				{
					text: '组件',
					color: '#666',
					//1-选中切换，2-跳转、请求、其他操作，3-菜单
					type: 1
				},
				{
					text: '模板',
					color: '#666',
					//1-选中切换，2-跳转、请求、其他操作，3-菜单
					type: 1
				},
				{
					text: '我的',
					color: '#666',
					//1-选中切换，2-跳转、请求、其他操作，3-菜单
					type: 1
				}
			]
		};
	},
	methods: {
		tabbar(e) {
			this.current2 = e.index;
		},
		menu(e) {
			//菜单类型 主菜单/子菜单
			let menuType = e.menu;
			//主菜单索引
			let index = e.index;
			//1-选中切换，2-跳转、请求、其他操作，3-菜单
			//操作自行约定好即可，传入参数 parameter,也可以直接取传入的itemList值

			//此处默认全部知晓菜单按钮以及相关操作，实际开发中可自行约定判断处理操作
			let type = e.type;
			if (menuType === 'main') {
				// if(type==1){
				// 	this.current=index;
				// }
				if (type == 2 && index == 1) {
					this.tui.toast('打开小程序');
				}
			} else {
				//子菜单索引
				let subIndex = e.subIndex;
				if (index == 0) {
					if (subIndex == 0) {
						this.tui.toast('全部文章');
					} else {
						this.tui.toast('打开小程序');
					}
				} else {
					if (subIndex == 0) {
						uni.previewImage({
							urls: ['https://thorui.cn/img/reward.jpg']
						});
					} else if (subIndex == 1) {
						this.tui.href('/pages/common/about/about');
					} else {
						const that = this;
						const url = 'https://www.thorui.cn/doc';
						// #ifdef H5
						location.href = url;
						// #endif

						// #ifndef H5
						uni.setClipboardData({
							data: url,
							success(res) {
								uni.getClipboardData({
									success(res) {
										that.tui.toast('文档链接已复制');
									}
								});
							}
						});
						// #endif
					}
				}
			}
		}
	}
};
</script>

<style>
page {
	background-color: #f5f5f5;
}
.container {
	padding: 20rpx 0 120rpx 0;
	box-sizing: border-box;
}

.header {
	padding: 80rpx 90rpx 60rpx 90rpx;
	box-sizing: border-box;
}

.title {
	font-size: 34rpx;
	color: #333;
	font-weight: 500;
}

.sub-title {
	font-size: 24rpx;
	color: #7a7a7a;
	padding-top: 18rpx;
}
.tui-title {
	width: 100%;
	padding: 80rpx 30rpx 50rpx;
	box-sizing: border-box;
	font-size: 32rpx;
	font-weight: bold;
}
</style>
