<template>
	<view class="container">
		<view class="tui-bg-box">
			<image src="/static/images/login/bg_login.png" class="tui-bg-img"></image>
			<image src="/static/images/my/mine_def_touxiang_3x.png" class="tui-photo"></image>
			<view class="tui-login-name">Thor UI</view>
		</view>
		<form :report-submit="true" @submit="formLogin">
			<view class="tui-login-from">
				<view class="tui-line-cell">
					<tui-icon name="mobile" :size="20" color="#6d7a87"></tui-icon>
					<input placeholder-class="tui-phcolor" class="tui-input" name="mobile" placeholder="请输入手机号码" maxlength="11" v-model="mobile" type="number" />
				</view>
				<view class="tui-line-cell tui-top28">
					<tui-icon name="pwd" :size="20" color="#6d7a87"></tui-icon>
					<input placeholder-class="tui-phcolor" class="tui-input" name="smsCode" placeholder="请输入验证码" maxlength="6" />
					<tui-button width="182rpx" height="56rpx" :size="24" :type="type" shape="circle" :plain="true" :disabled="disabled" @click="btnSend">{{ btnText }}</tui-button>
				</view>
				<button class="tui-button-primary tui-btn-submit" hover-class="tui-button-hover" form-type="submit">登录</button>
				<view class="tui-protocol" hover-class="opcity" :hover-stay-time="150">
					点击"登录"即表示已同意
					<text class="tui-protocol-red" @tap="protocol">《用户协议》</text>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
import { mapMutations } from 'vuex';
const util = require('@/utils/util.js');
const form = require('@/components/common/tui-validation/tui-validation.js');
export default {
	data() {
		return {
			disabled: false,
			btnText: '获取验证码',
			mobile: '',
			type: 'primary',
			code: ''
		};
	},
	methods: {
		...mapMutations(['login']),
		getRandom: function(u) {
			let rnd = '';
			u = u || 6;
			for (var i = 0; i < u; i++) {
				rnd += Math.floor(Math.random() * 10);
			}
			return rnd;
		},
		doLoop: function(seconds) {
			let code = this.getRandom(6);
			this.tui.toast('您本次的验证码是：' + code, 5000);
			seconds = seconds ? seconds : 60;
			this.btnText = seconds + 's后获取';
			this.code = code;
			let countdown = setInterval(() => {
				if (seconds > 0) {
					this.btnText = seconds + 's后获取';
					--seconds;
				} else {
					this.btnText = '获取验证码';
					this.disabled = false;
					this.type = 'primary';
					clearInterval(countdown);
				}
			}, 1000);
		},
		btnSend: function() {
			let rules = [
				{
					name: 'mobile',
					rule: ['required', 'isMobile'],
					msg: ['请输入手机号码', '请输入正确的手机号码']
				}
			];
			//进行表单检查
			let formData = {
				mobile: this.mobile
			};
			let checkRes = form.validation(formData, rules);
			if (!checkRes) {
				this.disabled = true;
				this.btnText = '请稍候...';
				this.type = 'gray';

				setTimeout(() => {
					this.doLoop(60);
				}, 500);
			} else {
				this.tui.toast(checkRes);
			}
		},
		formLogin: function(e) {
			let loginCode = e.detail.value.smsCode;
			let mobile = e.detail.value.mobile;
			let rules = [
				{
					name: 'mobile',
					rule: ['required', 'isMobile'],
					msg: ['请输入手机号码', '请输入正确的手机号码']
				},
				{
					name: 'loginCode',
					rule: ['required', 'isSame:code'],
					msg: ['请输入验证码', '验证码不正确']
				}
			];
			//进行表单检查
			let formData = {
				mobile: mobile,
				loginCode: loginCode,
				code: this.code
			};
			let checkRes = form.validation(formData, rules);
			if (checkRes) {
				this.tui.toast(checkRes);
				return;
			}
			let format = util.formatNumber(mobile);
			uni.setStorageSync('thorui_mobile', format);
			let state = {
				mobile: format
			};
			this.login(state);
			this.tui.toast('登录成功', 2000, true);
			setTimeout(() => {
				uni.reLaunch({
					url: '/pages/tabbar/my/my'
				});
			}, 200);
		},
		protocol: function() {
			uni.navigateTo({
				url: '/pages/doc/protocol/protocol'
			});
		}
	}
};
</script>

<style>
page {
	background-color: #fff;
}

.tui-bg-box {
	width: 100%;
	box-sizing: border-box;
	position: relative;
	padding-top: 44rpx;
}

.tui-photo {
	height: 138rpx;
	width: 138rpx;
	display: block;
	margin: 10rpx auto 0 auto;
	border-radius: 50%;
	position: relative;
	z-index: 2;
}

.tui-login-name {
	width: 128rpx;
	height: 40rpx;
	font-size: 30rpx;
	color: #fff;
	margin: 36rpx auto 0 auto;
	text-align: center;
	position: relative;
	z-index: 2;
}

.tui-bg-img {
	width: 100%;
	height: 346rpx;
	display: block;
	position: absolute;
	top: 0;
}

.tui-login-from {
	width: 100%;
	padding: 128rpx 104rpx 0 104rpx;
	box-sizing: border-box;
}

.tui-input {
	font-size: 32rpx;
	flex: 1;
	display: inline-block;
	padding-left: 32rpx;
	box-sizing: border-box;
	overflow: hidden;
}

.tui-line-cell {
	padding: 27rpx 0;
	display: -webkit-flex;
	display: flex;
	-webkiit-align-items: center;
	align-items: center;
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
}

.tui-line-cell::after {
	content: '';
	position: absolute;
	border-bottom: 1rpx solid #e0e0e0;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
	bottom: 0;
	right: 0;
	left: 0;
}

.tui-top28 {
	margin-top: 28rpx;
}

.tui-btn-class {
	width: 196rpx !important;
	height: 54rpx !important;
	border-radius: 27rpx !important;
	font-size: 28rpx !important;
	padding: 0 !important;
	line-height: 54rpx !important;
}

.tui-btn-submit {
	margin-top: 100rpx;
}

.tui-protocol {
	color: #333;
	font-size: 24rpx;
	text-align: center;
	width: 100%;
	margin-top: 29rpx;
}

.tui-protocol-red {
	color: #f54f46;
}
</style>
