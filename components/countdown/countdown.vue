<template>
	<view class="tui-countdown-class tui-countdown-box">
		<view class="tui-countdown-item" :style="{background:bgcolor,borderColor:bcolor,width:width+'rpx',height:height+'rpx'}"
		 v-if="hours">
			<view class="dm-countdown-time" :class="[scale?'tui-countdown-scale':'']" :style="{fontSize:size+'rpx',color:color,lineHeight:size +'rpx'}">{{h}}</view>
		</view>
		<view class="tui-countdown-colon" :style="{lineHeight:colonsize+'rpx',fontSize:colonsize+'rpx',color:coloncolor}"
		 v-if="hours">:</view>
		<view class="tui-countdown-item" :style="{background:bgcolor,borderColor:bcolor,width:width+'rpx',height:height+'rpx'}">
			<view class="dm-countdown-time" :class="[scale?'tui-countdown-scale':'']" :style="{fontSize:size+'rpx',color:color,lineHeight:size +'rpx'}">{{i}}</view>
		</view>
		<view class="tui-countdown-colon" :style="{lineHeight:colonsize+'rpx',fontSize:colonsize+'rpx',color:coloncolor}">:</view>
		<view class="tui-countdown-item" :style="{background:bgcolor,borderColor:bcolor,width:width+'rpx',height:height+'rpx'}">
			<view class="dm-countdown-time" :class="[scale?'tui-countdown-scale':'']" :style="{fontSize:size+'rpx',color:color,lineHeight:size +'rpx'}">{{s}}</view>
		</view>
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
			//是否缩放 0.8
			scale: {
				type: Boolean,
				default: false
			},
			//冒号大小
			colonsize: {
				type: Number,
				default: 28
			},
			//冒号颜色
			coloncolor: {
				type: String,
				default: "#333"
			},
			//剩余时间 
			time: {
				type: Object,
				default: function() {
					return {
						hours: 0,
						minute: 0,
						second: 0
					}
				}
			},
			//是否包含小时
			hours: {
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
		created() {
			this.doLoop()
		},
		destroyed() {
			clearInterval(this.countdown)
			this.countdown = null
		},
		methods: {
			toSeconds(hours, minutes, seconds) {
				return (hours * 60 * 60) + (minutes * 60) + seconds
			},
			endOfTime() {
				clearInterval(this.countdown)
				this.countdown = null;
				this.$emit('end', {});
			},
			doLoop: function() {
				let seconds = this.toSeconds(this.time.hours || 0, this.time.minute || 0, this.time.second)
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
				let [hour, minute, second] = [0, 0, 0]
				if (seconds > 0) {
					hour = Math.floor(seconds / (60 * 60))
					minute = Math.floor(seconds / 60) - (hour * 60)
					second = Math.floor(seconds) - (hour * 60 * 60) - (minute * 60)
				} else {
					this.endOfTime()
				}
				hour = hour < 10 ? ('0' + hour) : hour
				minute = minute < 10 ? ('0' + minute) : minute
				second = second < 10 ? ('0' + second) : second
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

	.tui-countdown-item {
		border: 1rpx solid;
		display: flex;
		align-items: center;
		justify-content: center;
		padding:1rpx;
		border-radius: 6rpx;
		white-space: nowrap;
		overflow: hidden;
	}
	.dm-countdown-time{
		margin: 0;
		padding: 0;
	}

	.tui-countdown-colon {
		display: flex;
		justify-content: center;
		padding: 0 5rpx;
	}

	.tui-countdown-scale {
		transform: scale(0.8);
		transform-origin: center center;
	}
</style>
