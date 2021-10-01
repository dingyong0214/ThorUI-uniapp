<template>
	<view class="maps-container">
		<view class="search-bar">
			<view class="search-bar-form">
				<view class="search-bar-box">
					<icon class="icon-search-in-box" type="search" :size="16"></icon>
					<input confirm-type="search" class="search-bar-input" placeholder="请输入您的目的地" :value="inputVal" :focus="inputShowed"
					 @confirm="bindInput" @input="inputTyping" />
					<view class="icon-clear" v-if="inputVal" @tap="clearInput">
						<icon type="clear" size="14"></icon>
					</view>
				</view>
				<view class="search-bar-label" v-show="!inputShowed" @tap="showInput">
					<icon class="icon-search" type="search" :size="16"></icon>
					<view class="search-bar-text">请输入您的目的地</view>
				</view>
			</view>
			<view class="cancel-btn" @tap="hideInput" v-show="inputShowed">取消</view>
		</view>
		<map class="tui-map" :latitude="lat" :longitude="lng" :markers="covers" @markertap="marker" :scale="12"></map>
		<scroll-view scroll-y class="scrollView" :style="{height:scrollH +'px'}" @scrolltolower="pullUp">
			<view class="tui-list">
				<view class="tui-list-cell" :class="[index==address.length-1?'tui-cell-last':'']" v-for="(item,index) in address"
				 :key="index">
					<view class="addr-title">
						<text>{{item.title}}</text>
					</view>
					<view class="addr-box ">
						<view class="addr-detail ">
							<text class="distance">{{item.distance}}m</text>
							{{item.address}}
						</view>
						<view class="addr-opera ">
							<view class="opera-box " hover-class="tui-opcity" :hover-stay-time="150 " @tap="call " :data-id="item.id" v-if="item.tel">
								<image src="/static/images/my/call.png" class="mini-img"></image>
								<view class="text">打电话</view>
							</view>
							<view class="opera-box " hover-class="tui-opcity" :hover-stay-time="150" @tap="go" :data-id="item.id">
								<image src="/static/images/my/go.png" class="mini-img"></image>
								<view class="text">到这里</view>
							</view>
						</view>
					</view>
				</view>
				<tui-loadmore :index="3" v-if="loading"></tui-loadmore>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import QQMapWX from '@/libs/qqmap-wx-jssdk.min.js';
	export default {
		data() {
			return {
				inputShowed: false,
				inputVal: "",
				qqmapsdk: null,
				key: 'W4WBZ-TUD65-IDAIR-QPM36-HMFQ5-CGBZP',
				lat: 22.63137,
				lng: 114.010857,
				covers: [],
				address: [],
				scrollH: 256,
				pageIndex: 1,
				loading: true,
				pullUpOn: true,
				keywords: ''
			}
		},
		onLoad(options) {
			this.qqmapsdk = new QQMapWX({
				key: this.key
			});
			this.keywords = options.key || '加油站';
			setTimeout(() => {
				let winHeight = uni.getSystemInfoSync().windowHeight;
				this.scrollH = winHeight - 44 - uni.upx2px(600);
				this.getLocation(() => {
					this.getPoiAround(this.keywords)
				});
			}, 300)
		},
		methods: {
			trim: function(value) {
				return value ? value.toString().replace(/(^\s*)|(\s*$)/g, "") : value;
			},
			showInput() {
				this.inputShowed = true
			},
			hideInput() {
				this.inputVal = "";
				this.inputShowed = false;
				uni.hideKeyboard(); //强行隐藏键盘
			},
			clearInput() {
				this.inputVal = ""
			},
			inputTyping: function(e) {
				this.inputVal = e.detail.value
			},
			getLocation(callback) {
				//当前位置
				const that = this;
				//H5：使用坐标类型为 gcj02 时，需要配置腾讯地图 sdk 信息（manifest.json -> h5）
				uni.getLocation({
					type: 'gcj02',
					altitude: true,
					success(res) {
						that.lat = res.latitude;
						that.lng = res.longitude;
						callback();
					},
					fail(res) {
						callback();
					}
				});
			},
			calculateDistance(to, callback) {
				// let url=`https://apis.map.qq.com/ws/distance/v1/?mode=walking&to=&output=jsonp&key=W4WBZ-TUD65-IDAIR-QPM36-HMFQ5-CGBZP&from=39.901403%2C116.406243`;
				this.qqmapsdk.calculateDistance({
					from: '', //默认当前位置
					to: to,
					success: res => {
						callback && callback(res.result);
					},
					fail: res => {
						callback && callback(false);
					}
				});
			},
			getResult(data) {
				let arr = [];
				let addr = [];
				let idx = this.address.length;
				// this.calculateDistance(data, d => {
				// 	if (d) {
				// 		let distanceArr = d.elements || [];
				// 		for (let i = 0, len = data.length; i < len; i++) {
				// 			data[i].distance = distanceArr[i].distance;
				// 		}
				// 	}
				// });
				
				for (let [index, item] of data.entries()) {
					arr.push({
						id: index + idx,
						latitude: item.location.lat,
						longitude: item.location.lng,
						title: item.title,
						iconPath:"/static/images/maps/location.png",
						width:40,
						height:40
					});
					let tel = this.trim(item.tel);
					if (~tel.indexOf(';')) {
						tel = tel.split(';')[0];
					}
					addr.push({
						id: index + idx,
						latitude: item.location.lat,
						longitude: item.location.lng,
						title: item.title,
						address: item.address,
						tel: tel,
						distance: item._distance
					});
				}
				this.address = this.address.concat(addr);
				this.covers = this.covers.concat(arr);
				this.pageIndex++;
				this.loading = false;
				if (data.length < 10) {
					this.pullUpOn = false;
				}

			},
			pullUp() {
				if (!this.pullUpOn || this.loading) return;
				this.loading = true;
				this.getPoiAround(this.keywords)
			},
			getPoiAround(keywords) {
				//检索周边的POI
				let boundary = `nearby(${this.lat},${this.lng},1000)`;
				// #ifdef H5
				//https://lbs.qq.com/service/webService/webServiceGuide/webServiceSearch
				let url =
					`https://apis.map.qq.com/ws/place/v1/search?keyword=${keywords}&boundary=${boundary}&page_size=20&page_index=${this.pageIndex}&output=jsonp&key=${this.key}`;
				this.tui.tuiJsonp(
					url,
					res => {
						if (res.status === 0) {
							let data = res.data || [];
							this.getResult(data)
						}
					},
					'QQmap'
				);
				// #endif
				
				// #ifndef H5
				this.qqmapsdk.search({
					keyword: keywords,
					page_index: this.pageIndex,
					page_size: 20,
					boundary: boundary,
					//无此参数
					location: {
						latitude: this.lat,
						longitude: this.lng
					},
					success: res => {
						let data = res.data || [];
						this.getResult(data)
					},
					fail: res => {
						this.loading = false;
						this.tui.toast('获取位置信息失败，请检查是否打开位置权限');
					}
				});
				// #endif
			},
			bindInput: function(e) {
				this.keywords = e.detail.value;
				this.pageIndex = 1;
				this.address = [];
				this.covers = [];
				this.pullUpOn = true;
				this.getPoiAround(this.keywords);
			},
			marker: function(e) {
				const that = this
				const item = that.address[e.detail.markerId || 0];
				const menu = item.tel ? ["打电话", "到这里"] : ["到这里"];

				uni.showActionSheet({
					itemList: menu,
					success(res) {
						if (res.tapIndex == 0 && item.tel) {
							uni.makePhoneCall({
								phoneNumber: item.tel
							})
						} else {
							const latitude = Number(item.latitude)
							const longitude = Number(item.longitude)
							uni.openLocation({
								name: item.title,
								address: item.address,
								latitude,
								longitude,
								scale: 18
							})
						}
					},
					fail(res) {
						console.log(res.errMsg)
					}
				})

			},
			call(event) {
				const index = Number(event.currentTarget.dataset.id);
				const tel = this.address[index].tel;
				if (tel) {
					uni.makePhoneCall({
						phoneNumber: tel
					})
				}

			},
			go(event) {
				const index = Number(event.currentTarget.dataset.id)
				const item = this.address[index];
				const latitude = Number(item.latitude)
				const longitude = Number(item.longitude)
				uni.openLocation({
					name: item.title,
					address: item.address,
					latitude,
					longitude,
					scale: 18
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
	}

	.tui-list {
		background-color: #fff;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.tui-list-cell::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 30rpx;
	}

	.tui-cell-last::after {
		border-bottom: 0;
	}

	.maps-container {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.tui-map {
		width: 100%;
		height: 600rpx;
		display: block;
	}

	.scrollView {
		width: 100%;
		padding-bottom: 100rpx;
		background-color: #fff;
	}

	.search-bar {
		position: relative;
		padding: 8px 10px;
		display: -webkit-flex;
		display: flex;
		box-sizing: border-box;
		align-items: center;
		background-color: #fff;
	}

	.icon-search {
		margin-right: 8px;
	}

	.icon-search-in-box {
		margin-right: 8rpx;
	}

	.search-bar-form {
		position: relative;
		-webkit-box-flex: 1;
		-webkit-flex: auto;
		flex: auto;
		border-radius: 5px;
		background-color: #f0f0f0;
	}

	.search-bar-text {
		display: inline-block;
		font-size: 14px;
		vertical-align: middle;
	}

	.search-bar-box {
		width: 100%;
		height: 30px;
		padding-left: 10px;
		padding-right: 30px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		position: relative;
		z-index: 1;
		
	}

	.search-bar-input {
		font-size: 14px;
		flex: 1;
	}

	.icon-clear {
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		padding: 0 8px;
		font-size: 0;
		display: flex;
		align-items: center;
	}

	.search-bar-label {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
		border-radius: 3px;
		text-align: center;
		color: #9b9b9b;
		background: #f0f0f0;
		display: flex;
		align-items: center;
		justify-content: center;

	}

	.cancel-btn {
		margin-left: 10px;
		line-height: 30px;
		color: #5982fd;
		white-space: nowrap;
		font-size: 15px;
	}

	.tui-list-cell {
		display: initial;
		padding: 30rpx;
	}

	.addr-title {
		font-size: 30rpx;
		line-height: 40rpx;
		color: #000;
		font-weight: bold;
		width: 100%;
		padding-bottom: 20rpx;
	}

	.addr-box {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}

	.addr-detail {
		width: 450rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		/* autoprefixer: off */
		-webkit-box-orient: vertical;
		/* autoprefixer: on */
		font-size: 24rpx;
		color: #999;
	}

	.distance {
		color: #5677fc;
		padding-right: 6rpx;
	}

	.addr-opera {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.opera-box {
		text-align: center;
		margin-left: 26rpx;
	}

	.mini-img {
		width: 44rpx;
		height: 44rpx;
	}

	.text {
		color: #333;
		font-size: 24rpx;
		line-height: 30rpx;
	}
</style>
