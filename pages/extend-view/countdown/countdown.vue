<template>
	<view class="container">
		<view class="header">
			<view class="title">Countdown</view>
			<view class="sub-title">倒计时 </view>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">默认使用</view>
			<tui-countdown :time="timeList[0]" ></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">改变颜色,缩放字体</view>
			<tui-countdown :time="timeList[1]" color="#e41f19" bcolor="#e41f19" coloncolor="#e41f19" :scale="true"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">边框与背景重合</view>
			<tui-countdown :time="timeList[1]" bcolor="#fff"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">改变背景</view>
			<tui-countdown :time="timeList[0]" color="#fff" bcolor="#e41f19" bgcolor="#e41f19" coloncolor="#e41f19"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">改变大小</view>
			<tui-countdown :time="timeList[1]" :height="30" :width="30" :size="26" :colonsize="32"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">去掉小时</view>
			<tui-countdown :time="timeList[2]" :hours="false" :scale="true"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">倒计时结束执行事件</view>
			<tui-countdown :time="timeList[3]" color="#e41f19" bcolor="#e41f19" coloncolor="#e41f19" :scale="true" @end="endOfTime"></tui-countdown>
		</view>

	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiCountdown from "@/components/countdown/countdown"
	export default {
		components:{
			tuiIcon,
			tuiCountdown
		},
		data() {
			return {
				timeList: [{
					hours: 1,
					minute: 40,
					second: 17
				}, {
					hours: 2,
					minute: 20,
					second: 58
				}, {
					minute: 19,
					second: 36
				}, {
					second: 20
				}]
			}
		}, 
		methods: {
			endOfTime: function() {
				this.tui.toast("倒计时结束，事件执行")
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: 100rpx;
		box-sizing: border-box;
	}

	.header {
		padding: 80rpx 90rpx 40rpx 90rpx;
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

	.tui-countdown {
		width: 100%;
		padding: 40rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
		margin-top: 20rpx;
	}

	.tui-countdown-text {
		font-size: 30rpx;
		line-height: 30rpx;
		color: #555;
	}
</style>
