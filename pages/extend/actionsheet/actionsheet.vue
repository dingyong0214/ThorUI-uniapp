<template>
	<view class="container">
		<view class="header">
			<view class="title">ActionSheet</view>
			<view class="sub-title">操作菜单 </view>
		</view>
		<view class="tui-btn-box">
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click='openActionSheet(1)'>默认操作</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click='openActionSheet(2)'>退出登录</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="openActionSheet(3)">提示文本样式</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="openActionSheet(4)">无提示操作</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="openActionSheet(5)">无取消按钮</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="openActionSheet(6)">Mask不可点击</tui-button>

		</view>

		<tui-actionsheet :show="showActionSheet" :tips="tips" :item-list="itemList" :mask-closable="maskClosable" :color="color"
		 :size="size" :is-cancel="isCancel" @click="itemClick" @cancel="closeActionSheet"></tui-actionsheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showActionSheet: false,
				maskClosable: true,
				tips: "确认清空搜索历史吗？",
				itemList: [],
				color: "#9a9a9a",
				size: 26,
				isCancel: true
			}
		},
		methods: {
			closeActionSheet: function() {
				this.showActionSheet = false
			},
			openActionSheet: function(type) {
				let itemList = [{
					text: "确定",
					color: "#1a1a1a"
				}];
				let maskClosable = true;
				let tips = "确认清空搜索历史吗？";
				let color = "#9a9a9a";
				let size = 26;
				let isCancel = true;
				//组件中都有默认值，实际应用中不需要可不操作
				switch (type) {
					case 1:
						break;
					case 2:
						tips = "退出登录会清除您的登录信息，确认退出吗？";
						itemList = [{
							text: "退出登录",
							color: "#E3302D"
						}];
						break;
					case 3:
						color = "#E3302D";
						size = 28;
						break;
					case 4:
						tips = "";
						itemList = [{
							text: "点赞",
							color: "#2B2B2B"
						}, {
							text: "评论",
							color: "#2B2B2B"
						}, {
							text: "收藏",
							color: "#2B2B2B"
						}, {
							text: "分享",
							color: "#2B2B2B"
						}]
						break;
					case 5:
						isCancel = false;
						tips = "选择您的性别";
						itemList = [{
							text: "男",
							color: "#2B2B2B"
						}, {
							text: "女",
							color: "#2B2B2B"
						}, {
							text: "不公开",
							color: "#2B2B2B"
						}]
						break;
					case 6:
						maskClosable = false;
						break;
					default:
						break;
				}
				setTimeout(() => {
					this.showActionSheet = true;
					this.itemList = itemList;
					this.maskClosable = maskClosable;
					this.tips = tips;
					this.color = color;
					this.size = size;
					this.isCancel = isCancel
				}, 0)
			},
			itemClick: function(e) {
				console.log(e)
				let index = e.index;
				this.closeActionSheet();
				this.tui.toast(`您点击的按钮索引为：${index}`)
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
		width: 100%;
		padding: 10rpx 40rpx;
		box-sizing: border-box;
	}
</style>
