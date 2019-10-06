<template>
	<view>
		<view class="tui-actionsheet-class tui-actionsheet" :class="[show?'tui-actionsheet-show':'']">
			<view class="tui-tips" :style="{fontSize:size+'rpx',color:color}" v-if="tips">
				{{tips}}
			</view>
			<view :class="[isCancel?'tui-operate-box':'']">
				<block v-for="(item,index) in itemList" :key="index">
					<view class="tui-actionsheet-btn tui-actionsheet-divider" :class="[(!isCancel && index==itemList.length-1)?'tui-btn-last':'']"
					 hover-class="tui-actionsheet-hover" :hover-stay-time="150" :data-index="index" :style="{color:item.color || '#1a1a1a'}"
					 @tap="handleClickItem">{{item.text}}</view>
				</block>
			</view>
			<view class="tui-actionsheet-btn tui-actionsheet-cancel" hover-class="tui-actionsheet-hover" :hover-stay-time="150"
			 v-if="isCancel" @tap="handleClickCancel">取消</view>
		</view>
		<view class="tui-actionsheet-mask" :class="[show?'tui-mask-show':'']" @tap="handleClickMask"></view>
	</view>
</template>

<script>
	export default {
		name: "tuiActionsheet",
		props: {
			//点击遮罩 是否可关闭
			maskClosable: {
				type: Boolean,
				default: true
			},
			//显示操作菜单
			show: {
				type: Boolean,
				default: false
			},
			//菜单按钮数组，自定义文本颜色，红色参考色：#e53a37
			itemList: {
				type: Array,
				default: function() {
					return [{
						text: "确定",
						color: "#1a1a1a"
					}]
				}
			},
			//提示文字
			tips: {
				type: String,
				default: ""
			},
			//提示文字颜色
			color: {
				type: String,
				default: "#9a9a9a"
			},
			//提示文字大小 rpx
			size: {
				type: Number,
				default: 26
			},
			//是否需要取消按钮
			isCancel: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			handleClickMask() {
				if (!this.maskClosable) return;
				this.handleClickCancel();
			},
			handleClickItem(e) {
				if (!this.show) return;
				const dataset = e.currentTarget.dataset;
				this.$emit('click', {
					index: dataset.index
				});
			},
			handleClickCancel() {
				this.$emit('cancel');
			}
		}
	}
</script>

<style>
	.tui-actionsheet {
		width: 100%;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		visibility: hidden;
		transform: translate3d(0, 100%, 0);
		transform-origin: center;
		transition: all 0.3s ease-in-out;
		background: #eaeaec;
		min-height: 100rpx;
	}

	.tui-actionsheet-show {
		transform: translate3d(0, 0, 0);
		visibility: visible;
	}

	.tui-tips {
		width: 100%;
		padding: 30rpx 60rpx;
		box-sizing: border-box;
		text-align: center;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-operate-box {
		padding-bottom: 12rpx;
	}

	.tui-actionsheet-btn {
		width: 100%;
		height: 100rpx;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 36rpx;
		position: relative;
	}

	.tui-btn-last {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-actionsheet-divider::before {
		content: '';
		width: 100%;
		border-top: 1rpx solid #d9d9d9;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-actionsheet-cancel {
		color: #1a1a1a;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-actionsheet-hover {
		background: #f7f7f9;
	}

	.tui-actionsheet-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 9996;
		transition: all 0.3s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.tui-mask-show {
		opacity: 1;
		visibility: visible;
	}
</style>
