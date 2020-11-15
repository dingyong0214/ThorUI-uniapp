<template>
	<view class="container">
		<view class="header">
			<view class="title">Countdown</view>
			<view class="sub-title">倒计时，毫秒使用css模拟替代js频繁更新操作</view>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">默认使用</view>
			<tui-countdown :time="timeList[0]"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">展示毫秒</view>
			<tui-countdown :time="timeList[0]" isMs></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">改变颜色,缩放字体</view>
			<tui-countdown :time="timeList[1]" color="#e41f19" borderColor="#e41f19" colonColor="#e41f19" :scale="true"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">边框与背景重合</view>
			<tui-countdown :time="timeList[1]" borderColor="#fff"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">改变背景</view>
			<tui-countdown :time="timeList[0]" color="#fff" borderColor="#e41f19" backgroundColor="#e41f19" colonColor="#e41f19"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">改变大小</view>
			<tui-countdown :time="timeList[1]" :height="30" :width="30" :size="26" :colonSize="32"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">去掉小时</view>
			<tui-countdown :time="timeList[2]" :hours="false" :scale="true"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">去掉小时分钟</view>
			<tui-countdown :time="timeList[5]" :hours="false" :minutes="false" scale  :isColon="false"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">秒数单位使用英文缩写</view>
			<tui-countdown :time="timeList[5]" :hours="false" :minutes="false" scale unitEn  :isColon="false"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">倒计时结束执行事件</view>
			<tui-countdown :time="timeList[3]" color="#e41f19" borderColor="#e41f19" colonColor="#e41f19" :scale="true" @end="endOfTime"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">冒号替换成文字</view>
			<tui-countdown :time="timeList[4]" :scale="true" :isColon="false"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">去掉边框</view>
			<tui-countdown :time="timeList[4]" borderColor="transparent" :isColon="false"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">显示剩余天数</view>
			<tui-countdown :time="timeList[4]" :scale="true" :isColon="false" :days="true"></tui-countdown>
		</view>
		<view class="tui-countdown">
			<view class="tui-countdown-text">去掉秒数</view>
			<tui-countdown :time="timeList[4]" :scale="true" :isColon="false" :days="true" :seconds="false"></tui-countdown>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timeList: [1000, 2000, 3000, 20, 240000,60]
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
