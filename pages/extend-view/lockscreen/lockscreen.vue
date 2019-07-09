<template>
	<view class="container">
		<view class="tui-userinfo">
			<image class='tui-avatar' src='../../../static/images/my/mine_def_touxiang_3x.png'></image>
			<view class="tui-nickname">echo.</view>
		</view>
		<view class="tui-pwd-tips">请输入密码</view>
		<tui-keyboard-input :inputvalue="pwdArr"></tui-keyboard-input>
		<tui-keyboard :show="true" :action="false" :mask="false" @click="keyboardClick">
			<view class="tui-flex">
				<view hover-class="opcity" :hover-stay-time="150">忘记密码</view>
				<view class="tui-fingerprint-box" hover-class="opcity" :hover-stay-time="150">
					<tui-icon name="fingerprint" :size='18' color='#5677fc'></tui-icon>
					<text class="tui-text">指纹解锁</text>
				</view>
			</view>
		</tui-keyboard>
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiKeyboard from "@/components/keyboard/keyboard"
	import tuiKeyboardInput from "@/components/keyboard-input/keyboard-input"
	export default {
		components: {
			tuiIcon,
			tuiKeyboard,
			tuiKeyboardInput
		},
		data() {
			return {
				numberArr: [],
				pwdArr: ["", "", "", ""]
			}
		},
		methods: {
			closeKeyboard: function() {
				this.numberArr = [];
				this.pwdArr = ["", "", "", ""]
			},
			getPwd: function() {
				//判断并取出密码
				if (this.numberArr.length === this.pwdArr.length) {
					uni.showLoading({
						title: '模拟提交...',
						mask: true
					})
					setTimeout(() => {
						let pwd = this.numberArr.join('')
						this.closeKeyboard();
						this.tui.toast("您输入的密码为：" + pwd);
					}, 800);
				}
			},
			keyboardClick: function(e) {
				let numberArr = this.numberArr;
				let pwdArr = this.pwdArr;
				let index = e.index;
				if (numberArr.length === pwdArr.length || index == undefined) {
					return;
				}
				if (index == 9) { //取消键
					this.closeKeyboard();
					return;
				} else if (index == 11) {
					//退格键
					let len = numberArr.length;
					if (len) {
						pwdArr.splice(len - 1, 1, "");
					} else {
						pwdArr = ["", "", "", ""];
					}
					numberArr.pop()
				} else if (index == 10) {
					numberArr.push(0);
					pwdArr.splice(numberArr.length - 1, 1, "●");
				} else {
					numberArr.push(index + 1);
					pwdArr.splice(numberArr.length - 1, 1, "●");
				}
				this.numberArr = numberArr;
				this.pwdArr = pwdArr;
				this.getPwd()
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		background: #fff;
	}

	.tui-userinfo {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-top: 100upx;
	}

	.tui-avatar {
		width: 160upx;
		height: 160upx;
		border-radius: 50%;
	}

	.tui-nickname {
		font-weight: bold;
		font-size: 40upx;
		color: #333;
		padding: 20upx 0;
	}

	.tui-pwd-tips {
		text-align: center;
		font-size: 30upx;
		color: #666;
		padding: 70upx 0 30upx 0;
	}

	.tui-flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20upx 20upx;
		box-sizing: border-box;
		font-size: 30upx;
		color: #333;
	}

	.tui-fingerprint-box {
		display: flex;
		align-items: center;
	}

	.tui-text {
		margin-left: 16upx;
		vertical-align: middle;
	}
</style>
