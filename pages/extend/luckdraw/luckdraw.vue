<template>
	<view class="container">
		<view class="tui-dot" :class="['tui-dot-'+(index+1)]" v-for="(item,index) in circleList" :key="index"></view>
		<view class="tui-container-in">
			<view class="tui-content-out" :class="['tui-award-'+(index+1),index==indexSelect?'tui-awardSelect':'']" v-for="(item,index) in awardList"
			 :key="index">
				<image class="tui-award-image" :src="'https://thorui.cn/images/luck/'+item.img"></image>
			</view>
			<view class="tui-btn-start" :class="[isRunning?'tui-ative':'']" @tap="startDrawing">立即抽奖</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				circleList: 24, //圆点
				awardList: [{
					img: "luck-1.png",
					name: ".top域名 1元/年"
				}, {
					img: "luck-2.png",
					name: "VPS 1元/30天"
				}, {
					img: "luck-3.png",
					name: "免费主机1年"
				}, {
					img: "luck-4.png",
					name: "虚拟主机1元/年"
				}, {
					img: "luck-1.png",
					name: ".top域名 1元/年"
				}, {
					img: "luck-2.png",
					name: "VPS 1元/30天"
				}, {
					img: "luck-3.png",
					name: "免费主机1年"
				}, {
					img: "luck-4.png",
					name: "虚拟主机1元/年"
				}], //奖品数组
				indexSelect: 0, //被选中的奖品index
				isRunning: false //是否正在抽奖
			}
		},
		methods: {
			//获取随机数
			getRandom: function(u) {
				let rnd = Math.random() > 0.5 ? "2" : "1";
				u = u || 3;
				for (var i = 0; i < u; i++) {
					rnd += Math.floor(Math.random() * 10);
				}
				return Number(rnd);
			},
			//开始抽奖
			startDrawing: function() {
				if (this.isRunning) return
				this.isRunning = true;
				let indexSelect = 0;
				let i = 0;
				let randomNum = this.getRandom(3);
				let timer = setInterval(() => {
					++indexSelect;
					//这里用y=30*x+150函数做的处理.可根据自己的需求改变转盘速度
					indexSelect = indexSelect % 8;
					this.indexSelect = indexSelect;
					i += 40;
					if (i > randomNum) {
						//去除循环
						clearInterval(timer)
						timer = null;
						//获奖提示
						uni.showModal({
							title: '恭喜您',
							content: '获得了奖品【' + this.awardList[indexSelect].name + '】',
							confirmColor: '#5677FC',
							showCancel: false, //去掉取消按钮
							success: (res) => {
								if (res.confirm) {
									this.isRunning = false
								}
							}
						})
					}
				}, (70 + i))
			}
		}
	}
</script>

<style>
	.container {
		height: 600rpx;
		width: 650rpx;
		background-color: #fc4034;
		margin: 100rpx auto;
		border-radius: 40rpx;
		box-shadow: 0 10px 0 #d80014;
		position: relative;
	}

	.tui-container-in {
		width: 580rpx;
		height: 530rpx;
		background-color: #d80014;
		border-radius: 40rpx;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	/**小圆点 start*/

	.tui-dot {
		position: absolute;
		display: block;
		border-radius: 50%;
		height: 20rpx;
		width: 20rpx;
	}

	.tui-dot:nth-child(odd) {
		background: #fff;
		animation: 0.5s odd linear infinite;
	}

	.tui-dot:nth-child(even) {
		background: #fcf400;
		animation: 0.5s even linear infinite;
	}

	.tui-dot-1 {
		left: 15rpx;
		top: 15rpx;
	}

	.tui-dot-2 {
		left: 117.5rpx;
		top: 7.5rpx;
	}

	.tui-dot-3 {
		left: 220rpx;
		top: 7.5rpx;
	}

	.tui-dot-4 {
		left: 322.5rpx;
		top: 7.5rpx;
	}

	.tui-dot-5 {
		left: 425rpx;
		top: 7.5rpx;
	}

	.tui-dot-6 {
		left: 527.5rpx;
		top: 7.5rpx;
	}

	.tui-dot-7 {
		left: 620rpx;
		top: 15rpx;
	}

	.tui-dot-8 {
		left: 622rpx;
		top: 109rpx;
	}

	.tui-dot-9 {
		left: 622rpx;
		top: 203rpx;
	}

	.tui-dot-10 {
		left: 622rpx;
		top: 297rpx;
	}

	.tui-dot-11 {
		left: 622rpx;
		top: 391rpx;
	}

	.tui-dot-12 {
		left: 622rpx;
		top: 485rpx;
	}

	.tui-dot-13 {
		left: 620rpx;
		top: 565rpx;
	}

	.tui-dot-14 {
		left: 517.5rpx;
		top: 572rpx;
	}

	.tui-dot-15 {
		left: 415rpx;
		top: 572rpx;
	}

	.tui-dot-16 {
		left: 312.5rpx;
		top: 572rpx;
	}

	.tui-dot-17 {
		left: 210rpx;
		top: 572rpx;
	}

	.tui-dot-18 {
		left: 107.5rpx;
		top: 572rpx;
	}

	.tui-dot-19 {
		left: 15rpx;
		top: 565rpx;
	}

	.tui-dot-20 {
		left: 7.5rpx;
		top: 471rpx;
	}

	.tui-dot-21 {
		left: 7.5rpx;
		top: 377rpx;
	}

	.tui-dot-22 {
		left: 7.5rpx;
		top: 283rpx;
	}

	.tui-dot-23 {
		left: 7.5rpx;
		top: 189rpx;
	}

	.tui-dot-24 {
		left: 7.5rpx;
		top: 95rpx;
	}

	@-webkit-keyframes odd {
		0% {
			background: #fff;
		}

		100% {
			background: #fcf400;
		}
	}

	@keyframes odd {
		0% {
			background: #fff;
		}

		100% {
			background: #fcf400;
		}
	}

	@-webkit-keyframes even {
		0% {
			background: #fcf400;
		}

		100% {
			background: #fff;
		}
	}

	@keyframes even {
		0% {
			background: #fcf400;
		}

		100% {
			background: #fff;
		}
	}

	/**小圆点 end*/

	.tui-content-out {
		position: absolute;
		height: 150rpx;
		width: 168rpx;
		background-color: #fcecec;
		border-radius: 15rpx;
		box-shadow: 0 4px 0 #fcc8d0;
	}

	/* 580 530  */

	.tui-award-1 {
		left: 24rpx;
		top: 24rpx;
	}

	.tui-award-2 {
		left: 206rpx;
		top: 24rpx;
	}

	.tui-award-3 {
		left: 388rpx;
		top: 24rpx;
	}

	.tui-award-4 {
		left: 388rpx;
		top: 188rpx;
	}

	.tui-award-5 {
		left: 388rpx;
		top: 352rpx;
	}

	.tui-award-6 {
		left: 206rpx;
		top: 352rpx;
	}

	.tui-award-7 {
		left: 24rpx;
		top: 352rpx;
	}

	.tui-award-8 {
		left: 24rpx;
		top: 188rpx;
	}

	/**居中 加粗*/

	.tui-btn-start {
		position: absolute;
		top: 188rpx;
		left: 206rpx;
		border-radius: 15rpx;
		height: 150rpx;
		width: 168rpx;
		background-color: #fc4034;
		box-shadow: 0 4px 0 #fcc8d0;
		color: #fcf400;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
		line-height: 150rpx;
	}

	.tui-ative {
		opacity: 0.6 !important;
	}

	.tui-award-image {
		position: absolute;
		margin: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		height: 134rpx;
		width: 134rpx;
	}

	.tui-awardSelect {
		background-color: #fcf400 !important;
		box-shadow: 0 4px 0 rgb(240, 208, 12) !important;
	}
</style>
