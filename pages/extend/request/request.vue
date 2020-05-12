<template>
	<view class="container">
		<view class="header">
			<view class="title">网络请求</view>
			<view class="sub-title">Network request，发起网络请求，简单的封装与使用 </view>
		</view>
		<view class="tui-btn-box">
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="request(1)">带loading请求</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="request(2)">无loading请求</tui-button>
			</view>
		</view>
		<view class="tui-result">
			请求结果：<text class="tui-red">{{result}}</text>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				result: ""
			}
		},
		methods: {
			request: function(type) {
				//参数
				let postData = {}
				this.tui.request("/Home/GetStatus", "GET", postData, false,true, type == 1 ? false : true).then((res) => {
					if (res.code == 100) {
						this.result = `${type == 1 ?"带":"无"}loading请求成功！返回值为 ${JSON.stringify(res)}`
					} else {
						this.result = `${type == 1 ? "带" : "无"}loading请求失败！ ${JSON.stringify(res)}`
					}
				}).catch((res) => {
					this.result = `${type == 1 ? "带" : "无"}loading请求失败！ ${JSON.stringify(res)}`
				})
			}
		}
	}
</script>

<style>
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

	.tui-btn-box {
		padding: 10rpx 40rpx;
		box-sizing: border-box;
	}

	.tui-btn-btm {
		margin-bottom: 36rpx;
	}

	.tui-result {
		width: 100%;
		padding: 30rpx 40rpx;
		box-sizing: border-box;
		font-size: 28rpx;
	}

	.tui-red {
		color: #ee0900;
	}
</style>
