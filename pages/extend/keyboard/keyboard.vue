<template>
	<view class="container">
		<view class="header">
			<view class="title">Digital keyboard</view>
			<view class="sub-title">数字键盘 </view>
		</view>
		<view class="tui-btn-box">
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click='switchKeyboard(6)'>6位数密码</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click='switchKeyboard(4)'>4位数密码</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="lockscreen">锁屏密码</tui-button>
		</view>

		<tui-keyboard :radius="radius" :show="show" @close="closeKeyboard" @click="keyboardClick">
			<view class="tui-digital-box">
				<view class="tui-keyboard-tips">请输入密码</view>
				<tui-keyboard-input :inputvalue="pwdArr"></tui-keyboard-input>
			</view>
		</tui-keyboard>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				numberArr: [],
				pwdArr: ["", "", "", "", "", ""],
				temp: ["", "", "", "", "", ""],
				radius: false
			}
		},
		methods: {
			switchKeyboard(index) {
				let length = index; //e.currentTarget.dataset.length;
				let arr = ["", "", "", "", "", ""]
				let radius = false
				if (length == 4) {
					arr = ["", "", "", ""]
					radius = true
				}
				this.pwdArr = arr;
				this.temp = arr;
				this.numberArr = [];
				this.radius = radius;
				this.show = true
			},
			closeKeyboard: function() {
				this.show = false;
				this.numberArr = [];
				this.pwdArr = this.temp
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
						// #ifdef MP-ALIPAY || MP-BAIDU
						setTimeout(()=>{
							uni.hideLoading()
						},200)
						// #endif
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
						pwdArr = this.temp;
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
				this.getPwd();
			},
			lockscreen: function() {
				uni.navigateTo({
					url: '../lockscreen/lockscreen'
				})
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

	.tui-keyboard-tips {
		width: 100%;
		height: 120rpx;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		background: #fff;
		position: relative;
		color: #333;
		border: 0;
	}

	.tui-digital-box {
		background: #fff;
		padding-bottom: 50rpx;
		border: 0;
	}
</style>
