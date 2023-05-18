<template>
	<view class="tui-nodata-box" :class="[fixed?'tui-nodata-fixed':'']" :style="{marginTop:marginTop+'rpx'}">
		<image v-if="imgUrl" :src="imgUrl" class="tui-tips-icon" :style="{width:imgWidth+'rpx',height:imgHeight+'rpx',marginBottom:imgBottom+'rpx'}"
			mode="widthFix"></image>
		<view class="tui-tips-content">
			<slot></slot>
		</view>
		<view class="tui-tips-btn" :style="{width:btnWidth+'rpx',height:btnHeight+'rpx',background:getBgColor,borderRadius:radius,fontSize:size+'rpx'}"
			v-if="btnText" @tap="handleClick">{{btnText}}</view>
	</view>
</template>

<script>
	export default {
		name: "tuiNoData",
		emits: ['click'],
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
				type: [Number, String],
				default: 200
			},
			//图片高度
			imgHeight: {
				type: [Number, String],
				default: 200
			},
			//V2.3.0+
			imgBottom:{
				type: [Number, String],
				default: 30
			},
			//按钮宽度
			btnWidth: {
				type: [Number, String],
				default: 200
			},
			btnHeight: {
				type: [Number, String],
				default: 60
			},
			//按钮文字，没有则不显示
			btnText: {
				type: String,
				default: ""
			},
			//按钮背景色
			backgroundColor: {
				type: String,
				default: ""
			},
			size: {
				type: [Number,String],
				default: 28
			},
			radius: {
				type: String,
				default: '8rpx'
			},
			//2.3.0+
			marginTop: {
				type: [Number, String],
				default: 0
			}
		},
		computed:{
			getBgColor(){
				return this.backgroundColor || (uni && uni.$tui && uni.$tui.color.danger) || '#EB0909';
			}
		},
		methods: {
			handleClick(e) {
				this.$emit('click', {});
			}
		}
	}
</script>

<style scoped>
	.tui-nodata-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.tui-nodata-fixed {
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
	}

	.tui-tips-content {
		text-align: center;
		color: #666666;
		font-size: 28rpx;
		padding: 0 50rpx 28rpx 50rpx;
		box-sizing: border-box;
		word-break: break-all;
		word-wrap: break-word;
	}

	.tui-tips-btn {
		color: #fff;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}
	
	.tui-tips-btn:active{
		opacity: 0.5;
	}
</style>