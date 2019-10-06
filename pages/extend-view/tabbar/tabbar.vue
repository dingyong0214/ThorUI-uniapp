<template>
	<view class="container">
		<view class="header">
			<view class="title">Tabbar</view>
			<view class="sub-title">类似uni-app原生tabbar组件，可用于自定义tabbar</view>
		</view>
		<view class="tui-mtop">
			<tui-tabbar :tabBar="tabBar" :isFixed="false" :current="current" @click="tabbarSwitch"></tui-tabbar>
		</view>

		<view class="tui-mtop">
			<tui-tabbar :tabBar="tabBar2" :isFixed="false" :unlined="true" backgroundColor="#F7F7F7" :current="current" @click="tabbarSwitch"></tui-tabbar>
		</view>

		<tui-tabbar :tabBar="tabBar2" :hump="true" :current="current" @click="tabbarSwitch"></tui-tabbar>
	</view>
</template>

<script>
	import tuiTabbar from "@/components/tui-tabbar/tui-tabbar"
	export default {
		components: {
			tuiTabbar
		},
		data() {
			return {
				current: 0,
				tabBar: [{
						"pagePath": "/pages/index/index",
						"text": "code",
						"iconPath": "/static/images/tabbar/code_gray.png",
						"selectedIconPath": "/static/images/tabbar/code_active.png",
						"num": 1,
						"isDot": false
					},
					{
						"pagePath": "/pages/extend/extend",
						"text": "extend",
						"iconPath": "/static/images/tabbar/extend_gray.png",
						"selectedIconPath": "/static/images/tabbar/extend_active.png",
						"num": 2,
						"isDot": true
					},
					{
						"pagePath": "/pages/my/my",
						"text": "thor",
						"iconPath": "/static/images/tabbar/thor_gray.png",
						"selectedIconPath": "/static/images/tabbar/thor_active.png",
						"verify": true
					}
				],
				tabBar2: [{
						"pagePath": "/pages/index/index",
						"text": "code",
						"iconPath": "/static/images/tabbar/code_gray.png",
						"selectedIconPath": "/static/images/tabbar/code_active.png"
					},
					{
						"pagePath": "",
						"text": "extend",
						"iconPath": "/static/images/tabbar/release.png",
						"hump": true,
						"selectedIconPath": "/static/images/tabbar/release.png"
					},
					{
						"pagePath": "/pages/my/my",
						"text": "thor",
						"iconPath": "/static/images/tabbar/thor_gray.png",
						"selectedIconPath": "/static/images/tabbar/thor_active.png",
						"num": 2,
						"isDot": true,
						"verify": true
					}
				]
			}
		},
		methods: {
			tabbarSwitch(e) {
				let isLogin=false
				if(e.verify && !isLogin){
					this.tui.toast("您还未登录，请先登录")
				}else{
					this.current = e.index
				}
			}
		}
	}
</script>

<style>
	/* page {
		background: #EDEDED;
	}
 */
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

	.tui-mtop {
		margin-top: 80rpx;
	}
</style>
