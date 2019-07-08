<template>
	<view class="container">
		<view class="header">
			<view class="title">ActionSheet</view>
			<view class="sub-title">操作菜单 </view>
		</view>
		<view class="tui-btn-box">
			<tui-button type="white" shape="circle" @click='openActionSheet(1)'>默认操作</tui-button>
			<tui-button type="white" shape="circle" @click='openActionSheet(2)'>退出登录</tui-button>
			<tui-button type="white" shape="circle" @click="openActionSheet(3)">提示文本样式</tui-button>
			<tui-button type="white" shape="circle" @click="openActionSheet(4)">无提示操作</tui-button>
			<tui-button type="white" shape="circle" @click="openActionSheet(5)">无取消按钮</tui-button>
			<tui-button type="white" shape="circle" @click="openActionSheet(6)">Mask不可点击</tui-button>

		</view>

		<tui-actionsheet :show="showActionSheet" :tips="tips" :item-list="itemList" :mask-closable="maskClosable"
		 :color="color" :size="size" :is-cancel="isCancel" @click="itemClick" @cancel="closeActionSheet"></tui-actionsheet>
	</view>
</template>

<script>
	import tuiButton from "@/components/button/button"
	import tuiActionsheet from "@/components/actionsheet/actionsheet"
	export default {
		components:{
			tuiButton,
			tuiActionsheet
		},
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
							color: "#e53a37"
						}];
						break;
					case 3:
						color = "#e53a37";
						size = 28;
						break;
					case 4:
						tips = "";
						itemList = [{
							text: "点赞",
							color: "#1a1a1a"
						}, {
							text: "评论",
							color: "#1a1a1a"
						}, {
							text: "收藏",
							color: "#1a1a1a"
						}, {
							text: "分享",
							color: "#1a1a1a"
						}]
						break;
					case 5:
						isCancel = false;
						tips = "选择您的性别";
						itemList = [{
							text: "男",
							color: "#1a1a1a"
						}, {
							text: "女",
							color: "#1a1a1a"
						}, {
							text: "不公开",
							color: "#1a1a1a"
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
				let index = e.index;
				this.closeActionSheet();
				this.tui.toast(`您点击的按钮索引为：${index}`)
			}
		}
	}
</script>

<style>
	.container {
		padding: 20upx 0 120upx 0;
		box-sizing: border-box;
	}

	.header {
		padding: 80upx 90upx 60upx 90upx;
		box-sizing: border-box;
	}

	.title {
		font-size: 34upx;
		color: #333;
		font-weight: 500;
	}

	.sub-title {
		font-size: 24upx;
		color: #7a7a7a;
		padding-top: 18upx;
	}

	.tui-btn-box {
		padding: 10upx 40upx;
		box-sizing: border-box;
	}

	.tui-btn-class {
		margin-top: 36upx;
	}

	.tui-keyboard-tips {
		width: 100%;
		height: 120upx;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30upx;
		background: #fff;
		position: relative;
		color: #333;
		border: 0;
	}

	.tui-digital-box {
		background: #fff;
		padding-bottom: 50upx;
		border: 0;
	}
</style>
