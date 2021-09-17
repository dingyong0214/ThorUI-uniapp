<template>
	<view class="container">
		<view class="header">
			<view class="title">回到顶部</view>
			<view class="sub-title">可设置bottom，right值，可设置距离顶部多少距离显示，向下滑动页面查看效果</view>
		</view>
		<view class="tui-btn-box">
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="setParams(1)">显示回首页按钮</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="setParams(2)">显示分享按钮</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="setParams(3)">全部显示</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="setParams(4)">隐藏回顶部按钮</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="setParams(5)">只显示回首页按钮</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="setParams(6)">只显示分享按钮</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="setParams(7)">只显示回顶部按钮</tui-button>
		</view>
		<view class="tui-bottom-text">到达底部~</view>
		<tui-scroll-top :scrollTop="scrollTop" :isIndex="isIndex" :isShare="isShare" :customShare="customShare"
			@index="goIndex" @share="share"></tui-scroll-top>
	</view>
</template>

<script>
	import thorui from '@/components/common/tui-clipboard/tui-clipboard.js'
	export default {
		data() {
			return {
				scrollTop: 0,
				isIndex: false,
				isShare: false,
				hideTop: false,
				customShare: true
			};
		},
		onLoad() {
			// #ifdef MP
			this.customShare = false;
			// #endif
		},
		methods: {
			setParams(type) {
				this.hideTop = false;
				this.isIndex = false;
				this.isShare = false;
				switch (type) {
					case 1:
						this.isIndex = true;
						break;
					case 2:
						this.isShare = true;
						break;
					case 3:
						this.isIndex = true;
						this.isShare = true;
						break;
					case 4:
						this.hideTop = true;
						this.isIndex = true;
						this.isShare = true;
						break;
					case 5:
						this.isIndex = true;
						this.hideTop = true;
						break;
					case 6:
						this.isShare = true;
						this.hideTop = true;
						break;
					default:
						break;
				}
			},
			goIndex() {
				uni.switchTab({
					url: '/pages/tabbar/index/index'
				});
			},
			share() {
				//#ifdef APP-PLUS
				plus.share.sendWithSystem({
						content: 'ThorUI组件库，uni-app版本，v3编译，支持nvue uni-app编译模式（原weex编译模式），easycom组件模式（无需手动引入，开发工具自带智能感知）',
						href: 'https://www.thorui.cn/'
					},
					function() {
						console.log('分享成功');
					},
					function(e) {
						console.log('分享失败：' + JSON.stringify(e));
					}
				);
				//#endif

				// #ifdef H5
				thorui.getClipboardData('https://www.thorui.cn/', res => {
					// #ifdef H5 || MP-ALIPAY
					if (res) {
						this.tui.toast('复制链接成功，快去分享吧~');
					} else {
						this.tui.toast('复制链接失败~');
					}
					// #endif
				});
				// #endif
			}
		},
		onPageScroll(e) {
			if (!this.hideTop) {
				this.scrollTop = e.scrollTop;
			}
		}
	};
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

	.tui-bottom-text {
		padding-top: 600px;
		text-align: center;
		font-size: 24rpx;
		color: #7a7a7a;
	}
</style>
