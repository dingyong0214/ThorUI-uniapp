<template>
	<view class="tui-countdown-box">
		<view class="tui-countdown-item" :style="{background:bgcolor,borderColor:bcolor,width:width+'rpx',height:height+'rpx'}"
		 v-if="days">
			<view class="tui-countdown-time" :class="[scale?'tui-countdown-scale':'']" :style="{fontSize:size+'rpx',color:color,lineHeight:size +'rpx'}">{{d}}</view>
		</view>
		<view class="tui-countdown-colon" :class="{'tui-colon-pad':bcolor=='transparent'}" :style="{lineHeight:colonSize+'rpx',fontSize:colonSize+'rpx',color:colonColor}"
		 v-if="days">{{isColon?':':'天'}}</view>
		<view class="tui-countdown-item" :style="{background:bgcolor,borderColor:bcolor,width:width+'rpx',height:height+'rpx'}"
		 v-if="hours">
			<view class="tui-countdown-time" :class="[scale?'tui-countdown-scale':'']" :style="{fontSize:size+'rpx',color:color,lineHeight:size +'rpx'}">{{h}}</view>
		</view>
		<view class="tui-countdown-colon" :class="{'tui-colon-pad':bcolor=='transparent'}" :style="{lineHeight:colonSize+'rpx',fontSize:colonSize+'rpx',color:colonColor}"
		 v-if="hours">{{isColon?':':'时'}}</view>
		<view class="tui-countdown-item" :style="{background:bgcolor,borderColor:bcolor,width:width+'rpx',height:height+'rpx'}"
		 v-if="minutes">
			<view class="tui-countdown-time" :class="[scale?'tui-countdown-scale':'']" :style="{fontSize:size+'rpx',color:color,lineHeight:size +'rpx'}">{{i}}</view>
		</view>
		<view class="tui-countdown-colon" :class="{'tui-colon-pad':bcolor=='transparent'}" :style="{lineHeight:colonSize+'rpx',fontSize:colonSize+'rpx',color:colonColor}"
		 v-if="minutes">{{isColon?':':'分'}}</view>
		<view class="tui-countdown-item" :style="{background:bgcolor,borderColor:bcolor,width:width+'rpx',height:height+'rpx'}"
		 v-if="seconds  && minutes">
			<view class="tui-countdown-time" :class="[scale?'tui-countdown-scale':'']" :style="{fontSize:size+'rpx',color:color,lineHeight:size +'rpx'}">{{s}}</view>
		</view>
		<view class="tui-countdown-colon" :class="{'tui-colon-pad':bcolor=='transparent'}" :style="{lineHeight:colonSize+'rpx',fontSize:colonSize+'rpx',color:colonColor}"
		 v-if="seconds && !isColon && minutes">秒</view>
	</view>
</template>

<script>
	export default {
		name: "tuiCountdown",
		props: {
			//数字框宽度
			width: {
				type: Number,
				default: 24
			},
			//数字框高度
			height: {
				type: Number,
				default: 24
			},
			//数字框border颜色
			bcolor: {
				type: String,
				default: "#333"
			},
			//数字框背景颜色
			bgcolor: {
				type: String,
				default: "#fff"
			},
			//数字框字体大小
			size: {
				type: Number,
				default: 24
			},
			//数字框字体颜色
			color: {
				type: String,
				default: "#333"
			},
			//是否缩放 0.9
			scale: {
				type: Boolean,
				default: false
			},
			//冒号大小
			colonSize: {
				type: Number,
				default: 28
			},
			//冒号颜色
			colonColor: {
				type: String,
				default: "#333"
			},
			//剩余时间 (单位：秒)
			time: {
				type: Number,
				default:0
			},
			//是否包含天
			days: {
				type: Boolean,
				default: false
			},
			//是否包含小时
			hours: {
				type: Boolean,
				default: true
			},
			//是否包含分钟
			minutes: {
				type: Boolean,
				default: true
			},
			//是否包含秒
			seconds: {
				type: Boolean,
				default: true
			},
			//是否展示为冒号,false为文字
			isColon: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				countdown: null,
				h: '00',
				i: '00',
				s: '00'
			};
		},
		watch: {
			time(val) {
				clearInterval(this.countdown)
				this.doLoop()
			}
		},
		data() {
			return {
				countdown: null,
				d: "0",
				h: '00',
				i: '00',
				s: '00'
			};
		},
		created() {
			this.doLoop()
		},
		beforeDestroy() {
			clearInterval(this.countdown)
			this.countdown = null
		},
		methods: {
			endOfTime() {
				clearInterval(this.countdown)
				this.countdown = null;
				this.$emit('end', {});
			},
			doLoop: function() {
				let seconds = this.time || 0
				this.countDown(seconds)
				this.countdown = setInterval(() => {
					seconds--
					if (seconds < 0) {
						this.endOfTime()
						return
					}
					this.countDown(seconds)
				}, 1000)
			},
			countDown(seconds) {
				let [day, hour, minute, second] = [0, 0, 0, 0]
				if (seconds > 0) {
					day = this.days ? Math.floor(seconds / (60 * 60 * 24)) : 0
					hour = Math.floor(seconds / (60 * 60)) - (day * 24)
					minute = Math.floor(seconds / 60) - (hour * 60) - (day * 24 * 60)
					second = Math.floor(seconds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
				} else {
					this.endOfTime()
				}
				hour = hour < 10 ? ('0' + hour) : hour
				minute = minute < 10 ? ('0' + minute) : minute
				second = second < 10 ? ('0' + second) : second
				this.d = day;
				this.h = hour;
				this.i = minute;
				this.s = second
			}
		}
	}
</script>

<style>
	.tui-countdown-box {
		display: flex;
		align-items: center;
	}

	.tui-countdown-box {
		display: flex;
		align-items: center;
	}

	.tui-countdown-item {
		border: 1rpx solid;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rpx;
		border-radius: 6rpx;
		white-space: nowrap;
		transform: translateZ(0);
	}

	.tui-countdown-time {
		margin: 0;
		padding: 0;

	}

	.tui-countdown-colon {
		display: flex;
		justify-content: center;
		padding: 0 5rpx;
	}

	.tui-colon-pad {
		padding: 0 !important;
	}

	.tui-countdown-scale {
		transform: scale(0.9);
		transform-origin: center center;
	}
</style>
