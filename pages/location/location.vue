<template>
	<view class="container">
		<view class="header-box">
			<view class="result-box">
				<view class="info list-item">
					<view class="badge"></view>
					<view class="ellipsis">{{address}}</view>
				</view>
				<view class="info">
					<view class="badge orange"></view>
					<view class="ellipsis"> {{current_long}},{{current_lat}}</view>
				</view>
			</view>
		</view>

		<map id="maps" :longitude="longitude" :latitude="latitude" scale="16" show-location @regionchange="regionchange">
			<cover-image class="cover-image" src="../../static/images/maps/location.png" />
		</map>
		<!-- #ifdef MP-WEIXIN || MP-BAIDU  -->
		<cover-view class="current-location" @tap.stop="currentLocation">
			<cover-image src="../../static/images/maps/current.png" class="current-img"></cover-image>
		</cover-view>
		<!-- #endif -->

	</view>
</template>

<script>
	const QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
	export default {
		data() {
			return {
				address: "正在获取地址...",
				longitude: 114.010857,
				latitude: 22.63137,
				current_long: 114.010857,
				current_lat: 22.63137,
				key: 'W4WBZ-TUD65-IDAIR-QPM36-HMFQ5-CGBZP',
				mapCtx: null,
				location: false,
				qqmapsdk: null,
				mapObj: null
			}
		},
		onLoad() {
			this.qqmapsdk = new QQMapWX({
				key: this.key
			});
			this.currentLocation()
		},
		onReady() {
			// #ifdef APP-PLUS
			if (!this.mapCtx) {
				this.mapCtx = uni.createMapContext("maps");
			}
			this.mapObj = this.mapCtx.$getAppMap();
			this.mapObj.onstatuschanged = (e) => {
				// 地图发生变化的时候，获取中间点，也就是cover-image指定的位置
				if (this.longitude != 114.010857) {
					this.address = "正在获取地址...";
					this.mapCtx.getCenterLocation({
						type: 'gcj02',
						success: (res) => {
							this.current_long = res.latitude;
							this.current_lat = res.longitude;
							this.getAddress(res.longitude, res.latitude);
						}
					})
				}
			}
			// #endif
		},
		methods: {
			regionchange(e) {
				// 地图发生变化的时候，获取中间点，也就是cover-image指定的位置
				if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) {
					this.address = "正在获取地址...";
					if (!this.mapCtx) {
						this.mapCtx = uni.createMapContext("maps");
					}
					this.mapCtx.getCenterLocation({
						type: 'gcj02',
						success: (res) => {
							//console.log(res)
							this.latitude = res.latitude;
							this.longitude = res.longitude;
							this.getAddress(res.longitude, res.latitude);
						}
					})
				}
			},
			getAddress: function(lng, lat) {
				//根据经纬度获取地址信息
				this.qqmapsdk.reverseGeocoder({
					location: {
						latitude: lat,
						longitude: lng
					},
					success: (res) => {
						//console.log(res)
						this.address = res.result.formatted_addresses.recommend
					},
					fail: (res) => {
						this.address = "获取位置信息失败"
					}
				})
			},
			currentLocation() {
				//当前位置
				const that = this;
				uni.getLocation({
					type: 'gcj02',
					success(res) {
						that.latitude = res.latitude;
						that.longitude = res.longitude;
						//that.getAddress(res.longitude, res.latitude);
					}
				})
			}
		}
	}
</script>

<style>
	/* pages/location/location.wxss */

	page {
		height: 100%;
	}

	.container {
		width: 100%;
		height: 100%;
	}

	#maps {
		width: 100%;
		height: 100%;
	}

	.cover-image {
		height: 60upx;
		width: 60upx;
		position: fixed;
		top: 50%;
		left: 50%;
		margin-top: -30upx;
		margin-left: -30upx;
	}

	.header-box {
		width: 100%;
		padding-top: 8upx;
		box-sizing: border-box;
		border-radius: 24upx;
	}

	.result-box {
		width: 100%;
		padding: 12upx 30upx;
		box-sizing: border-box;
		color: #555;
		font-size: 28upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: #fff;
		border-radius: 24upx;
	}

	.list-item::after {
		left: 0;
	}

	.badge {
		height: 16upx;
		width: 16upx;
		border-radius: 8upx;
		background: #5677fc;
		margin-right: 20upx;
		flex-shrink: 0;
	}

	.orange {
		background: #ff7900 !important;
	}

	.info {
		display: flex;
		align-items: center;
		padding: 20upx 0;
	}

	.ellipsis {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.current-location {
		position: fixed;
		height: 76upx;
		width: 76upx;
		display: flex;
		align-items: center;
		justify-content: center;
		bottom: 80upx;
		right: 60upx;
		background: rgba(255, 255, 255, 0.94);
		border-radius: 38upx;
	}

	.current-img {
		width: 42upx;
		height: 42upx;
	}
</style>
