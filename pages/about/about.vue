<template>
	<view class="container">
		<view class="tui-flex">
			<view class="tui-cube-box" @tap='log'>
				<view class="tui-cube tui-cube-1">TH❤R UI</view>
				<view class="tui-cube tui-cube-2">V{{version}}</view>
				<view class="tui-cube tui-cube-3">TH❤R UI</view>
				<view class="tui-cube tui-cube-4">V{{version}}</view>
				<view class="tui-cube tui-cube-5">TH❤R UI</view>
				<view class="tui-cube tui-cube-6">V{{version}}</view>
			</view>

		</view>
		<view class="tui-content-box">
			<view class="tui-content">尊敬的开发者，欢迎体验Thor UI！</view>
			<view class="tui-content">该项目主要是一些uni-app代码片段的分享，以及基础组件的封装。项目免费开源，源码可在<text class="tui-content-email" @tap="copy('https://github.com/dingyong0214/ThorUI-uniapp')">GitHub</text>上下载，欢迎Watch
				& Star ★。</view>
			<view class="tui-content">项目可能存在缺陷或者bug，如果您在使用过程中发现问题或者有更好的建议，可反馈给我。</view>
			<view class="tui-content">
				您可以通过反馈或者以下方式联系我！
			</view>
			<view class="tui-content tui-content-email" @tap="copy('1062884167@qq.com')">邮箱：1062884167@qq.com</view>
			<view class="tui-content tui-content-email" @tap="copy('745733024')">QQ交流群：745733024</view>
			<view class="tui-footer">
				<image src='../../static/images/my/applets.jpg' class="tui-applets" mode="widthFix"></image>
				<view class="tui-footer-text">扫描二维码，您的朋友也可以体验Thor UI！</view>
			</view>
		</view>

	</view>
</template>

<script>
	const thorui = require("@/components/utils/clipboard.thorui.js")
	import {
		mapState
	} from 'vuex'
	export default {
		computed: mapState(['version']),
		data() {
			return {

			}
		},
		methods: {
			copy: function(text) {
				const that = this
				thorui.getClipboardData(text, (res) => {
					// #ifdef H5
					if (res) {
						this.tui.toast("链接复制成功")
					} else {
						this.tui.toast("链接复制失败")
					}
					// #endif
				})
			},
			log: function() {
				uni.navigateTo({
					url: '../log/log'
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 0 50rpx 40rpx 50rpx;
		box-sizing: border-box;
	}

	.tui-flex {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 40px;
	}

	.tui-cube-box {
		width: 60px;
		height: 60px;
		position: relative;
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
		animation: tui-go 4s linear infinite;
	}

	@keyframes tui-go {
		0% {
			-webkit-transform: rotateX(0) rotateY(0);
			transform: rotateX(0) rotateY(0);
		}

		100% {
			-webkit-transform: rotateX(360deg) rotateY(360deg);
			transform: rotateX(360deg) rotateY(360deg);
		}
	}

	.tui-cube {
		width: 60px;
		height: 60px;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		box-sizing: border-box;
		font-size: 24rpx;
		color: #fff;
		text-align: center;
		word-break: break-all;
		word-wrap: break-word;
	}

	.tui-cube-1 {
		background: #fff;
		-webkit-transform: rotateY(90deg) translateZ(-30px);
		transform: rotateY(90deg) translateZ(-30px);
		color: #333 !important;
	}

	.tui-cube-2 {
		background: #8a5966;
		-webkit-transform: rotateY(90deg) translateZ(30px);
		transform: rotateY(90deg) translateZ(30px);
	}

	.tui-cube-3 {
		background: linear-gradient(-90deg, #5677fc, #5c8dff);
		-webkit-transform: rotateX(90deg) translateZ(30px);
		transform: rotateX(90deg) translateZ(30px);
	}

	.tui-cube-4 {
		background: #ed3f14;
		-webkit-transform: rotateX(90deg) translateZ(-30px);
		transform: rotateX(90deg) translateZ(-30px);
	}

	.tui-cube-5 {
		background: #ff7900;
		-webkit-transform: translateZ(30px);
		transform: translateZ(30px);
	}

	.tui-cube-6 {
		background: #19be6b;
		-webkit-transform: translateZ(-30px);
		transform: translateZ(-30px);
	}

	.tui-content-box {
		width: 100%;
		margin-top: 50px;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
		border-radius: 10rpx;
		box-shadow: 0 0 10rpx #eee;
	}

	.tui-content {
		color: #333;
		font-size: 30rpx;
		line-height: 44rpx;
		padding: 10rpx 0;
		text-align: justify;
	}

	.tui-content-email {
		color: #5677fc !important;
	}

	.tui-footer {
		display: flex;
		align-items: center;
		padding-top: 30rpx;
	}

	.tui-applets {
		width: 80px;
		height: 80px;
		display: block;
	}

	.tui-footer-text {
		font-size: 24rpx;
		color: #999;
		padding-left: 20rpx;
		width: 300rpx;
	}
</style>
