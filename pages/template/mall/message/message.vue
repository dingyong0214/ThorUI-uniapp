<template>
	<view class="container">
		<tui-list-cell :hover="false" :unlined="true">
			<view class="tui-message-item">
				<view>
					<view class="tui-title">开启消息推送</view>
					<view class="tui-sub-title">开启后，可以第一时间收到订阅的消息哦！</view>
				</view>
				<tui-button type="danger" width="140rpx" height="60rpx" :size="24" @click="href(1)">前往设置</tui-button>
			</view>
		</tui-list-cell>
		<view class="tui-top">
			<tui-list-cell @click="href(2)">
				<view class="tui-message-item">
					<view class="tui-title-box">
						<view class="tui-icon-box tui-bg-danger">
							<tui-icon name="kefu" color="#fff" :size="26"></tui-icon>
						</view>
						<view class="tui-title">客服消息</view>
					</view>
					<tui-badge :position="false" type="red" :scale="false">1</tui-badge>
				</view>
			</tui-list-cell>
			<tui-list-cell @click="href(3)">
				<view class="tui-message-item">
					<view class="tui-title-box">
						<view class="tui-icon-box tui-bg-warning">
							<tui-icon name="transport" color="#fff" :size="28"></tui-icon>
						</view>
						<view class="tui-title">发货通知</view>
					</view>
					<tui-badge :position="false" type="red" :scale="false">12</tui-badge>
				</view>
			</tui-list-cell>
			<tui-list-cell @click="href(4)">
				<view class="tui-message-item">
					<view class="tui-title-box">
						<view class="tui-icon-box tui-bg-pink">
							<tui-icon name="unreceive" color="#fff" :size="26"></tui-icon>
						</view>
						<view class="tui-title">收货通知</view>
					</view>
					<tui-badge :position="false" type="red" :scale="false" v-if="false">1</tui-badge>
				</view>
			</tui-list-cell>
			<tui-list-cell @click="href(5)">
				<view class="tui-message-item">
					<view class="tui-title-box">
						<view class="tui-icon-box tui-bg-success">
							<tui-icon name="wallet" color="#fff" :size="26"></tui-icon>
						</view>
						<view class="tui-title">付款通知</view>
					</view>
					<tui-badge :position="false" type="red" :scale="false">8</tui-badge>
				</view>
			</tui-list-cell>
			<tui-list-cell :unlined="true" @click="href(6)">
				<view class="tui-message-item">
					<view class="tui-title-box">
						<view class="tui-icon-box tui-bg-blue">
							<tui-icon name="message" color="#fff" :size="30"></tui-icon>
						</view>
						<view class="tui-title">系统通知</view>
					</view>
					<tui-badge :position="false" type="red" :scale="false">10</tui-badge>
				</view>
			</tui-list-cell>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			href(type) {
				if(type==1){
					this.tui.href('../notice/notice');
				}else{
					this.tui.toast("功能开发中~")
				}
			}
		}
	};
</script>

<style lang="scss">
	.container {
		padding:20rpx 0 48rpx;

		.tui-message-item {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			box-sizing: border-box;

			.tui-title {
				font-size: $uni-font-size-lg;
			}

			.tui-sub-title {
				font-size: $uni-font-size-sm;
				color: $uni-text-color-grey;
				padding-top: 4rpx;
			}

			.tui-title-box {
				display: flex;
				align-items: center;
				justify-content: center;

				.tui-icon-box {
					width: 88rpx;
					height: 88rpx;
					color: $uni-text-color-inverse;
					border-radius: $uni-border-radius-lg;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: $uni-spacing-row-base;
				}

				.tui-bg-danger {
					background-color: $uni-color-error;
				}

				.tui-bg-warning {
					background-color: $uni-color-warning;
				}

				.tui-bg-success {
					background-color: $uni-color-success;
				}

				.tui-bg-primary {
					background-color: $uni-color-primary;
				}

				.tui-bg-pink {
					background-color: $uni-color-pink;
				}

				.tui-bg-blue {
					background-color: $uni-color-primary;
				}
			}
		}

		.tui-top {
			margin-top: 20rpx;
		}
	}
</style>
