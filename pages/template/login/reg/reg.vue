<template>
	<view class="container">
		<view class="tui-page-title">注册</view>
		<view class="tui-form">
			<view class="tui-view-input">
				<tui-list-cell :hover="false" :lineLeft="false" backgroundColor="transparent">
					<view class="tui-cell-input">
						<tui-icon name="mobile" color="#6d7a87" :size="20"></tui-icon>
						<input :value="mobile" placeholder="请输入手机号" placeholder-class="tui-phcolor" type="number" maxlength="11" @input="inputMobile" />
						<view class="tui-icon-close" v-show="mobile" @tap="clearInput(1)"><tui-icon name="close-fill" :size="16" color="#bfbfbf"></tui-icon></view>
					</view>
				</tui-list-cell>
				<tui-list-cell :hover="false" :lineLeft="false" backgroundColor="transparent">
					<view class="tui-cell-input">
						<tui-icon name="shield" color="#6d7a87" :size="20"></tui-icon>
						<input placeholder="请输入验证码" placeholder-class="tui-phcolor" type="text" maxlength="6" @input="inputCode" />
						<view class="tui-btn-send" :class="{ 'tui-gray': isSend }" :hover-class="isSend ? '' : 'tui-opcity'" :hover-stay-time="150">{{ btnSendText }}</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :hover="false" :lineLeft="false" backgroundColor="transparent">
					<view class="tui-cell-input">
						<tui-icon name="pwd" color="#6d7a87" :size="20"></tui-icon>
						<input :value="password" placeholder="请输入密码" :password="true" placeholder-class="tui-phcolor" type="text" maxlength="40" @input="inputPwd" />
						<view class="tui-icon-close" v-show="password" @tap="clearInput(2)"><tui-icon name="close-fill" :size="16" color="#bfbfbf"></tui-icon></view>
					</view>
				</tui-list-cell>
			</view>
			<view class="tui-btn-box"><tui-button :disabledGray="true" :disabled="disabled" :shadow="true" shape="circle">注册</tui-button></view>
			<view class="tui-cell-text">
				注册代表同意
				<view class="tui-color-primary" hover-class="tui-opcity" :hover-stay-time="150" @tap="protocol">ThorUI用户服务协议、隐私政策</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	computed: {
		disabled: function() {
			let bool = true;
			if (this.mobile && this.code && this.password) {
				bool = false;
			}
			return bool;
		}
	},
	data() {
		return {
			mobile: '',
			password: '',
			code: '',
			isSend: false,
			btnSendText: '获取验证码' //倒计时格式：(60秒)
		};
	},
	methods: {
		back() {
			uni.navigateBack();
		},
		inputCode(e) {
			this.code = e.detail.value;
		},
		inputMobile: function(e) {
			this.mobile = e.detail.value;
		},
		inputPwd: function(e) {
			this.password = e.detail.value;
		},
		clearInput(type) {
			if (type == 1) {
				this.mobile = '';
			} else {
				this.password = '';
			}
		},
		protocol(){
			this.tui.href("/pages/doc/protocol/protocol")
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	.tui-page-title {
		width: 100%;
		font-size: 48rpx;
		font-weight: bold;
		color: $uni-text-color;
		line-height: 42rpx;
		padding: 110rpx 40rpx 40rpx 40rpx;
		box-sizing: border-box;
	}
	.tui-form {
		padding-top: 50rpx;
		.tui-view-input {
			width: 100%;
			box-sizing: border-box;
			padding: 0 40rpx;
			.tui-cell-input {
				width: 100%;
				display: flex;
				align-items: center;
				padding-top: 48rpx;
				padding-bottom: $uni-spacing-col-base;
				input {
					flex: 1;
					padding-left: $uni-spacing-row-base;
				}
				.tui-icon-close {
					margin-left: auto;
				}
				.tui-btn-send {
					width: 156rpx;
					text-align: right;
					flex-shrink: 0;
					font-size: $uni-font-size-base;
					color: $uni-color-primary;
				}
				.tui-gray {
					color: $uni-text-color-placeholder;
				}
			}
		}
		.tui-cell-text {
			width: 100%;
			padding: 40rpx $uni-spacing-row-lg;
			box-sizing: border-box;
			font-size: $uni-font-size-sm;
			color: $uni-text-color-grey;
			display: flex;
			align-items: center;
			.tui-color-primary {
				color: $uni-color-primary;
				padding-left: $uni-spacing-row-sm;
			}
		}
		.tui-btn-box {
			width: 100%;
			padding: 0 $uni-spacing-row-lg;
			box-sizing: border-box;
			margin-top: 80rpx;
		}
	}
}
</style>
