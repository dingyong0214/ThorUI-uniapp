<template>
	<view class="container">
		<view class="header">
			<view class="title">Alert</view>
			<view class="sub-title">Alert弹框 </view>
		</view>
		<view class="tui-btn-box">
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="showAlert(1)">默认样式</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="showAlert(2)">自定义按钮文本颜色</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="showAlert(3)">自定义按钮文本</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="showAlert(4)">提示信息颜色修改</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="showAlert(5)">遮罩可点击关闭</tui-button>
			</view>
		</view>
		<!--alert-->
		<tui-alert :show="show" @click="hideAlert" @cancel="hideAlert" :maskClosable="maskClosable" :btnColor="btnColor"
		 :color="color" :btnText="btnText">
			这是一个alert弹框
		</tui-alert>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				maskClosable: false,
				btnColor: "#EB0909",
				color: "#333",
				btnText: "确定"
			}
		},
		methods: {
			showAlert(type) {
				this.btnText = "确定";
				this.btnColor = "#EB0909";
				this.color = "#333";
				this.maskClosable = false;
				switch (type) {
					case 2:
						this.btnColor = "#000";
						break;
					case 3:
						this.btnText = "点击关闭";
						break;
					case 4:
						this.color = "#EB0909";
						break;
					case 5:
						this.maskClosable = true;
						break;
					default:
						break;
				}
				this.show = true
			},
			hideAlert(type) {
				this.show = false
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
