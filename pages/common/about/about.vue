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
			<view class="tui-content">该项目主要以组件为主，以及部分模板的分享。项目免费开源（不包括且不限于以下方式：恶意修改、销售、再版、删除），源码可在<text class="tui-content-email" @tap="copy('https://github.com/dingyong0214/ThorUI-uniapp')">GitHub</text>上下载，欢迎Watch
				& Star ★。</view>
			<view class="tui-content">
				ThorUI跨端项目uni-app版本（v3编译），支持nvue uni-app编译模式（原weex编译模式），easycom组件模式（无需手动引入，开发工具自带智能感知）。
			</view>
			<view class="tui-content">项目可能存在缺陷或者bug，如果您在使用过程中发现问题或者有更好的建议，可反馈给我。</view>
			
			<view class="tui-content">
				您可以通过反馈或者以下方式联系我！
			</view>
			<view class="tui-content tui-content-email" @tap="copy('1062884167@qq.com','邮箱已复制')">邮箱：1062884167@qq.com</view>
			<view class="tui-content tui-content-email" @tap="copy('605135318','QQ群号已复制')">QQ交流群3：605135318</view>
			<view class="tui-content tui-content-email" @tap="copy('3168647172','QQ已复制')">合作付费QQ：3168647172</view>
			<view class="tui-footer">
				<image src='/static/images/my/applets.jpg' class="tui-applets" mode="widthFix"></image>
				<view class="tui-footer-text">扫描二维码，您的朋友也可以体验Thor UI！</view>
			</view>
			<view class="tui-footer" @tap="openThorUI">
				<image src='https://thorui.cn/img/applets_extend.jpg' class="tui-applets" mode="widthFix"></image>
				<view class="tui-footer-text">扫描二维码，您的朋友也可以体验Thor UI示例！</view>
			</view>
		</view>

	</view>
</template>

<script>
	import thorui from '@/components/common/tui-clipboard/tui-clipboard.js'
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
			copy: function(text,msg) {
				const that = this
				thorui.getClipboardData(text, (res) => {
					// #ifdef H5 || MP-ALIPAY
					if (res) {
						this.tui.toast(msg)
					} else {
						this.tui.toast("内容复制失败")
					}
					// #endif
				})
			},
			log: function() {
				uni.navigateTo({
					url: '../log/log'
				})
			},
			openThorUI() {
				// #ifdef MP-WEIXIN
				wx.navigateToMiniProgram({
					appId: 'wxd3c1da92cb8fcf40'
				});
				// #endif
			
				// #ifndef  MP-WEIXIN
				if (this.sweixin) {
					this.sweixin.launchMiniProgram({
						id: 'gh_78d54c9830d3'
					});
				} else {
					uni.previewImage({
						urls: ['https://thorui.cn/img/applets_extend.jpg']
					});
				}
				// #endif
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
		z-index: 99;
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
		/* word-break: break-all;
		word-wrap: break-word; */
	}

	.tui-cube-1 {
		background-color: #fff;
		-webkit-transform: rotateY(90deg) translateZ(-30px);
		transform: rotateY(90deg) translateZ(-30px);
		color: #333 !important;
	}

	.tui-cube-2 {
		background-color: #8a5966;
		-webkit-transform: rotateY(90deg) translateZ(30px);
		transform: rotateY(90deg) translateZ(30px);
	}

	.tui-cube-3 {
		background-color: #5c8dff;
		-webkit-transform: rotateX(90deg) translateZ(30px);
		transform: rotateX(90deg) translateZ(30px);
	}

	.tui-cube-4 {
		background-color: #ed3f14;
		-webkit-transform: rotateX(90deg) translateZ(-30px);
		transform: rotateX(90deg) translateZ(-30px);
	}

	.tui-cube-5 {
		background-color: #ff7900;
		-webkit-transform: translateZ(30px);
		transform: translateZ(30px);
	}

	.tui-cube-6 {
		background-color: #19be6b;
		-webkit-transform: translateZ(-30px);
		transform: translateZ(-30px);
	}

	.tui-content-box {
		width: 100%;
		margin-top: 50px;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
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
