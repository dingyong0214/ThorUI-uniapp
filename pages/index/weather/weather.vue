<template>
	<view class="container">
		<view class="list-item">省份：{{obj.liveData.province || ''}}</view>
		<view class="list-item">位置：{{obj.liveData.city || ""}}</view>
		<view class="list-item">湿度：{{obj.liveData.humidity || 0}}%</view>
		<view class="list-item">温度：{{obj.liveData.temperature || 0}} 摄氏度</view>
		<view class="list-item">天气：{{obj.liveData.weather || ""}}</view>
		<view class="list-item">风向：{{obj.liveData.winddirection || ""}}</view>
		<view class="list-item">风力：{{obj.liveData.windpower || 0}}级</view>
		<view class="btn-box">
			<button class="tui-button-primary" hover-class="tui-button-hover" @tap="back">返回</button>
		</view>
	</view>
</template>

<script>
	import amap from '@/libs/amap-wx.js'
	export default {
		data() {
			return {
				amapPlugin: null,
				key: "6799b5f6f88d3d9fb52ac244855a8759",
				obj: {
					liveData:{}
				}
			}
		},
		onLoad() {
			this.amapPlugin = new amap.AMapWX({
				key: this.key
			})
			this.getWeather()
		},
		methods: {
			//获取天气数据
			getWeather: function() {
				uni.showLoading({
					title: '请稍候...'
				})
				this.amapPlugin.getWeather({
					success: (data) => {
						//成功回调
						//console.log(data)
						uni.hideLoading()
						this.obj= data
					},
					fail: function(info) {
						//失败回调
						console.log(info)
					}
				})
			},
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	.list-item {
		background: #fff;
		padding: 30rpx
	}

	.btn-box {
		padding: 80rpx 32rpx 30rpx 32rpx;
	}
</style>
