<template>
	<view class="container">
		<view class="header">
			<view class="title">Toast提示</view>
			<view class="sub-title">自定义icon，传入icon地址即可 </view>
		</view>
		<view class="tui-btn-box">
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="showToast(1)">操作成功</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="showToast(2)">操作失败</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="showToast(3)">提示信息</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="showToast(4)">提示信息，无icon</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="showToast(5)">操作成功，多行文本</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="showToast(6)">自定义显示时间</tui-button>
			</view>
		</view>
		<!--toast提示-->
		<tui-toast ref="toast"></tui-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			showToast(type) {
				let params = {
					title: "操作成功",
					imgUrl: "/static/images/toast/check-circle.png",
					icon: true
				};
				switch (type) {
					case 2:
						params.title = "操作失败";
						params.imgUrl = "/static/images/toast/fail-circle.png";
						break;
					case 3:
						params.title = "提示信息";
						params.imgUrl = "/static/images/toast/info-circle.png";
						break;
					case 4:
						params.title = "提示信息";
						params.icon = false;
						break;
					case 5:
						params.title = "标题信息";
						params.content = "操作成功，内容信息";
						break;
					case 6:
						params.title = "5s后消失~";
						params.duration = 4000;
						break;
					default:
						break;
				}
				
				this.$refs.toast.show(params)
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
</style>
