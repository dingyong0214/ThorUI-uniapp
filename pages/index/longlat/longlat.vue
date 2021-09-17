<template>
	<view class="container">
		<view class="result">
			<view class="city">所选城市：{{cityName}}</view>
			<view class="city">latitude：{{latitude}}</view>
			<view>longitude：{{longitude}}</view>
		</view>
		<view class="btn-box">
			<button class="tui-button-primary" hover-class="tui-button-hover" @tap="selectCity">请选择地址</button>
		</view>
		<view class="tips">温馨提示：例子为地址转经纬度，经纬度转地址的例子也包含在此代码中，请从GitHub下载源码查看</view>
	</view>
</template>

<script>
	import QQMapWX from '@/libs/qqmap-wx-jssdk.min.js';
	export default {
		data() {
			return {
				cityName: "深圳",
				latitude: "",
				longitude: "",
				qqmapsdk: null,
				key: 'W4WBZ-TUD65-IDAIR-QPM36-HMFQ5-CGBZP'
			}
		},
		onLoad() {
			uni.$on('emit', (data) => {
				this.cityName= data
				this.getLonglatByLocation()
			});
			this.qqmapsdk = new QQMapWX({
				key: this.key
			});
			setTimeout(() => {
				this.getLonglatByLocation()
			}, 200)
		},
		methods: {
			// 位置获取经纬度
			getLonglatByLocation: function() {
				// #ifdef H5
				let url = `https://apis.map.qq.com/ws/geocoder/v1/?address=${this.cityName}&key=${this.key}&callbackName=QQmap&output=jsonp`
				this.tui.tuiJsonp(url, (res)=> {
					if(res.status===0){
						this.latitude= res.result.location.lat;
						this.longitude= res.result.location.lng;
						//经纬度获取地址
						//this.getLocationByLonglat(this.latitude,this.longitude)
					}
				}, "QQmap")
				// #endif
				
				// #ifndef H5
				let that = this;
				that.qqmapsdk.geocoder({
					address: that.cityName,
					success: function(res) {
						that.latitude= res.result.location.lat;
						that.longitude= res.result.location.lng;
					}
				})
				// #endif
			},
			//经纬度获取位置
			getLocationByLonglat: function(latitude, longitude) {
				// #ifdef H5
				let url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude + "," + longitude}&key=${this.key}&callbackName=QQmap&output=jsonp&coord_type=5&get_poi=0`
				this.tui.tuiJsonp(url, (res)=> {
					if(res.status===0){
						//地址信息
						console.log(res.result.address_component)
					}
				}, "QQmap")
				// #endif
				
				// #ifndef H5
				this.qqmapsdk.reverseGeocoder({
					location: {
						latitude: latitude,
						longitude: longitude
					},
					success: function(res) {
						let city = res.result.address_component.city;
					}
				})
				// #endif
			},
			selectCity: function() {
				uni.navigateTo({
					url: '../selectCity/selectCity',
				})
			}
		}
	}
</script>

<style>
	.result {
		padding: 80rpx 50rpx 80rpx 50rpx;
		background: #fff;
		color: #333;
		font-size: 32rpx
	}

	.city {
		padding-bottom: 30rpx
	}

	.btn-box {
		padding: 80rpx 32rpx 30rpx 32rpx;
	}

	.tips {
		padding: 30rpx;
		font-size: 26rpx;
		color: #666
	}
</style>
