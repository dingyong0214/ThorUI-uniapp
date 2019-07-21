<template>
	<view class="tui-tips-box" :class="[fixed?'tui-tips-fixed':'']">
		<image :src="imgUrl" class="tui-tips-icon" :style="{width:imgWidth+'rpx',height:imgHeight+'rpx'}"></image>
		<view class="tui-tips-content">
			<slot></slot>
		</view>
		<button class="tui-tips-btn" hover-class="tui-tips-btn-hover" :style="{width:btnWidth+'rpx'}" v-if="btnText"  @tap="handleClick">{{btnText}}</button>
	</view>
</template>

<script>
	export default {
		name: "tuiTips",
		props: {
			//是否垂直居中
			fixed: {
				type: Boolean,
				default: true
			},
			//图片地址，没有则不显示
			imgUrl: {
				type: String,
				default: ""
			},
			//图片宽度
			imgWidth: {
				type: Number,
				default: 200
			},
			//图片高度
			imgHeight:{
				type: Number,
				default: 200
			},
			//按钮宽度
			btnWidth:{
				type: Number,
				default: 200
			},
			//按钮文字，没有则不显示
			btnText:{
				type:String,
				default: ""
			}
		},
		methods: {
			handleClick(e) {
				this.$emit('click', {});
			}
		}
	}
</script>

<style>
	.tui-tips-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.tui-tips-fixed {
		width: 90%;
		position: fixed;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	.tui-tips-icon {
		display: block;
		flex-shrink: 0;
		width: 280rpx;
		height: 280rpx;
		margin-bottom: 40rpx;
	}

	.tui-tips-content {
		text-align: center;
		color: #666666;
		font-size: 28rpx;
		padding: 0 50rpx 24rpx 50rpx;
		box-sizing: border-box;
		word-break: break-all;
		word-wrap: break-word;
	}

	.tui-tips-btn {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 28rpx;
		background: #EB0909;
		color: #fff;
		border-radius: 6rpx;
		margin: 0;
	}

	.tui-tips-btn-hover {
		background: #c80808;
		color: #e5e5e5;
	}
</style>
