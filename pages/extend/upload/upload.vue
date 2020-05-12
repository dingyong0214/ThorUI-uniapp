<template>
	<view class="container">
		<view class="header">
			<view class="title">upload</view>
			<view class="sub-title">图片上传，需要根据上传接口实际返回数据进行调整 </view>
		</view>
		<view class="tui-box-upload">
			<tui-upload :serverUrl="serverUrl" @complete="result" @remove="remove"></tui-upload>
		</view>
	</view>
</template>

<script>
	//实际使用需要传入上传地址，以及上传接口返回数据进行调整组件
	export default {
		data() {
			return {
				imageData: [],
				//上传地址
				serverUrl: "https://api.thorui.cn/"
			}
		},
		methods: {
			result: function(e) {
				console.log(e)
				this.imageData = e.imgArr;
			},
			remove: function(e) {
				//移除图片
				console.log(e)
				let index = e.index
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
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

	.tui-box-upload {
		padding-left: 25rpx;
		box-sizing: border-box;
	}
</style>
