<template>
	<view class="container">
		<view class="header">
			<view class="title">Modal</view>
			<view class="sub-title">modal弹框</view>
		</view>

		<view class="tui-btn-box">
			<tui-button type="white" shape="circle" @click='show'>一般弹框</tui-button>
			<tui-button type="white" shape="circle" @click='show2'>提示文本样式</tui-button>
			<tui-button type="white" shape="circle" @click="show3">单个按钮</tui-button>
			<tui-button type="white" shape="circle" @click="show4">多个按钮</tui-button>
			<tui-button type="white" shape="circle" @click="show5">圆角按钮</tui-button>
			<tui-button type="white" shape="circle" @click="show6">按钮颜色</tui-button>
			<tui-button type="white" shape="circle" @click="show7">遮罩不可点</tui-button>
			<tui-button type="white" shape="circle" @click="show8">自定义弹窗内容</tui-button>
			<tui-button type="white" shape="circle" @click="show9">自定义输入框</tui-button>
		</view>
		<tui-modal :show="modal" @click="handleClick" @cancel="hide" title="提示" content="确定退出登录吗？"></tui-modal>
		<tui-modal :show="modal2" @click="handleClick2" @cancel="hide2" content="确定退出登录吗？" color="#333" :size="32"></tui-modal>
		<tui-modal :show="modal3" @click="handleClick3" @cancel="hide3" content="您还未登录，请先登录" :button="button3"></tui-modal>
		<tui-modal :show="modal4" @click="handleClick4" @cancel="hide4" content="请选择支付方式" :button="button4"></tui-modal>
		<tui-modal :show="modal5" @click="handleClick5" @cancel="hide5" content="确定退出登录吗？" color="#333" :size="32" shape="circle"></tui-modal>
		<tui-modal :show="modal6" @click="handleClick6" @cancel="hide6" content="确定退出登录吗？" color="#333" :size="32" :button="button6"></tui-modal>
		<tui-modal :show="modal7" @click="handleClick7" @cancel="hide7" content="您还未登录，请先登录" :button="button3" :maskClosable="false"></tui-modal>
		<tui-modal :show="modal8" @cancel="hide8" :custom="true">
			<view class="tui-modal-custom">
				<image src="../../../static/images/chat/fail.png" class="tui-tips-img"></image>
				<view class="tui-modal-custom-text">我是自定内容</view>
				<tui-button type="danger" shape="circle" @click="handleClick8">确定</tui-button>
			</view>
		</tui-modal>

		<tui-modal :show="modal9" @cancel="hide9" :custom="true" :fadein="true">
			<view class="tui-modal-custom">
				<view class="tui-prompt-title">邮箱</view>
				<input placeholder="请输入邮箱" class="tui-input" v-model="email" />
				<tui-button shape="circle" @click="handleClick9" size="small">立即提交</tui-button>
			</view>
		</tui-modal>
	</view>
</template>

<script>
	import tuiButton from "@/components/button/button"
	import tuiModal from "@/components/modal/modal"
	export default {
		components: {
			tuiButton,
			tuiModal
		},
		data() {
			return {
				modal: false,
				modal2: false,
				modal3: false,
				button3: [{
					text: "确定",
					type: 'red'
				}],
				modal4: false,
				button4: [{
					text: "微信",
					type: 'green',
					plain: true
				}, {
					text: "支付宝",
					plain: true
				}, {
					text: "银行卡",
					type: 'red',
					plain: true
				}],
				modal5: false,
				modal6: false,
				button6: [{
					text: "取消",
					type: 'gray'
				}, {
					text: "确定"
				}],
				modal7: false,
				modal8: false,
				modal9: false,
				email: ""
			}
		},
		methods: {
			show() {
				this.modal = true
			},
			show2() {
				this.modal2 = true
			},
			show3() {
				this.modal3 = true
			},
			show4() {
				this.modal4 = true
			},
			show5() {
				this.modal5 = true
			},
			show6() {
				this.modal6 = true
			},
			show7() {
				this.modal7 = true
			},
			show8() {
				this.modal8 = true
			},
			show9() {
				this.modal9 = true
			},
			hide() {
				this.modal = false
			},
			hide2() {
				this.modal2 = false
			},
			hide3() {
				this.modal3 = false
			},
			hide4() {
				this.modal4 = false
			},
			hide5() {
				this.modal5 = false
			},
			hide6() {
				this.modal6 = false
			},
			hide7() {
				this.modal7 = false
			},
			hide8() {
				this.modal8 = false
			},
			hide9() {
				this.modal9 = false
			},
			handleClick(e) {
				let index = e.index;
				if (index === 0) {
					this.tui.toast("你点击了取消按钮")
				} else {
					this.tui.toast("你点击了确定按钮")
				}
				this.hide()
			},
			handleClick2(e) {
				let index = e.index;
				if (index === 0) {
					this.tui.toast("你点击了取消按钮")
				} else {
					this.tui.toast("你点击了确定按钮")
				}
				this.hide2()
			},
			handleClick3(e) {
				let index = e.index;
				if (index === 0) {
					this.tui.toast("你点击了确定按钮")
				}
				this.hide3()
			},
			handleClick4(e) {
				let index = e.index;
				this.tui.toast("你点击的按钮index：" + index)
				this.hide4()
			},
			handleClick5(e) {
				let index = e.index;
				this.tui.toast("你点击的按钮index：" + index)
				this.hide5()
			},
			handleClick6(e) {
				let index = e.index;
				this.tui.toast("你点击的按钮index：" + index)
				this.hide6()
			},
			handleClick7(e) {
				let index = e.index;
				this.tui.toast("你点击的按钮index：" + index)
				this.hide7()
			},
			handleClick8() {
				this.tui.toast("你点击了自定义按钮")
				this.hide8()
			},
			handleClick9() {
				this.tui.toast("您输入了：" + this.email)
				this.hide9()
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

	.tui-btn-class {
		margin-top: 36rpx;
	}

	.tui-modal-custom {
		text-align: center
	}

	.tui-tips-img {
		width: 100rpx;
		height: 100rpx;
		margin-top: 20rpx;
	}

	.tui-modal-custom-text {
		font-size: 30rpx;
		color: #333;
		padding: 30rpx 0
	}

	.tui-prompt-title {
		padding-bottom: 20rpx;
		font-size: 34rpx;
	}

	.tui-input {
		margin: 30rpx 40rpx;
		border-bottom: 1rpx solid #E6E6E6;
		padding-bottom: 20rpx;
		font-size: 32rpx;
	}
</style>
