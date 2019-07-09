<template>
	<view class="tui-keyboard-input tui-pwd-box" :style="{background:bgcolor}">
		<view class="tui-inner-box">
			<view class="tui-input" :class="[inputvalue.length===4?'tui-margin-right':'']" :style="{fontSize:px(size),color:color,width:px(inputvalue.length===4?90:70)}"
			 v-for="(item,index) in inputvalue" :key="index">{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"KeyboardInput",
		props: {
			//背景颜色
			bgcolor: {
				type: String,
				default: "#fff"
			},
			size: {
				type: Number,
				default: 32
			},
			color: {
				type: String,
				default: "#333"
			},
			//输入框的值：数组格式，长度即为输入框个数
			inputvalue: {
				type: Array,
				default: ["", "", "", "", "", ""] //密码圆点 ●
			}
		},
		data() {
			return {

			};
		},
		methods: {
			px(num) {
				return uni.upx2px(num) +"px"
			}
		}
	}
</script>

<style>
	.tui-pwd-box {
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		vertical-align: top;
	}

	.tui-inner-box {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-input {
		height: 80upx;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 20upx;
		border-bottom: 2px solid #666;
	}

	.tui-margin-right {
		margin-right: 30upx;
	}

	.tui-input:last-child {
		margin-right: 0 !important;
	}
</style>
