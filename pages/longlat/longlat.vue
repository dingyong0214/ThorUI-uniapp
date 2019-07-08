<template>
	<view class="container">
		<view class="result">
			<view class="city">所选城市：{{cityName}}</view>
			<view class="city">latitude：{{latitude}}</view>
			<view>longitude：{{longitude}}</view>
		</view>
		<view class="btn-box">
			<button class="btn-primary" hover-class="btn-hover" @tap="selectCity">请选择地址</button>
		</view>
		<view class="tips">温馨提示：例子为地址转经纬度，经纬度转地址的例子也包含在此代码中，请从GitHub下载源码查看</view>
	</view>
</template>

<script>
	const QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
	export default {
		data() {
			return {
				cityName: "深圳",
				latitude: "",
				longitude: "",
				qqmapsdk: null
			}
		},
		onLoad() {
			this.$eventHub.$on('emit', (data) => {
				this.cityName= data
				this.getLonglatByLocation()
			});
			this.qqmapsdk = new QQMapWX({
				key: 'W4WBZ-TUD65-IDAIR-QPM36-HMFQ5-CGBZP'
			});
			setTimeout(() => {
				this.getLonglatByLocation()
			}, 200)
		},
		methods: {
			// 位置获取经纬度
			getLonglatByLocation: function() {
				let that = this;
				that.qqmapsdk.geocoder({
					address: that.cityName,
					success: function(res) {
						that.latitude= res.result.location.lat;
						that.longitude= res.result.location.lng;
					}
				})
			},
			//经纬度获取位置
			getLocationByLonglat: function(latitude, longitude) {
				this.qqmapsdk.reverseGeocoder({
					location: {
						latitude: latitude,
						longitude: longitude
					},
					success: function(res) {
						let city = res.result.address_component.city;
					}
				})
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
		padding: 80upx 50upx 80upx 50upx;
		background: #fff;
		color: #333;
		font-size: 32upx
	}

	.city {
		padding-bottom: 30upx
	}

	.btn-box {
		padding: 80upx 32upx 30upx 32upx;
	}

	.tips {
		padding: 30upx;
		font-size: 26upx;
		color: #666
	}
</style>
