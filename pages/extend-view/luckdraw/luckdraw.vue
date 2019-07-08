<template>
	<view class="container">
		<view class="tui-dot" :class="['tui-dot-'+(index+1)]" v-for="(item,index) in circleList" :key="index"></view>
		<view class="tui-container-in">
			<view class="tui-content-out" :class="['tui-award-'+(index+1),index==indexSelect?'tui-awardSelect':'']" v-for="(item,index) in awardList"
			 :key="index">
				<image class="tui-award-image" :src="'../../../static/images/luck/'+item.img"></image>
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
				this.isRunning= true;
				let indexSelect = 0;
				let i = 0;
				let randomNum = this.getRandom(3);
				let timer = setInterval(() => {
					++indexSelect;
					//这里用y=30*x+150函数做的处理.可根据自己的需求改变转盘速度
					indexSelect = indexSelect % 8;
					this.indexSelect= indexSelect;
					i += 40;
					if (i > randomNum) {
						//去除循环
						clearInterval(timer)
						timer = null;
						//获奖提示
						uni.showModal({
							title: '恭喜您',
							content: '获得了奖品【'+this.awardList[indexSelect].name+'】',
							confirmColor: '#5677FC',
							showCancel: false, //去掉取消按钮
							success: (res) => {
								if (res.confirm) {
									this.isRunning= false
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
		height: 600upx;
		width: 650upx;
		background-color: #fc4034;
		margin: 100upx auto;
		border-radius: 40upx;
		box-shadow: 0 10px 0 #d80014;
		position: relative;
	}

	.tui-container-in {
		width: 580upx;
		height: 530upx;
		background-color: #d80014;
		border-radius: 40upx;
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
		height: 20upx;
		width: 20upx;
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
		left: 15upx;
		top: 15upx;
	}

	.tui-dot-2 {
		left: 117.5upx;
		top: 7.5upx;
	}

	.tui-dot-3 {
		left: 220upx;
		top: 7.5upx;
	}

	.tui-dot-4 {
		left: 322.5upx;
		top: 7.5upx;
	}

	.tui-dot-5 {
		left: 425upx;
		top: 7.5upx;
	}

	.tui-dot-6 {
		left: 527.5upx;
		top: 7.5upx;
	}

	.tui-dot-7 {
		left: 620upx;
		top: 15upx;
	}

	.tui-dot-8 {
		left: 622upx;
		top: 109upx;
	}

	.tui-dot-9 {
		left: 622upx;
		top: 203upx;
	}

	.tui-dot-10 {
		left: 622upx;
		top: 297upx;
	}

	.tui-dot-11 {
		left: 622upx;
		top: 391upx;
	}

	.tui-dot-12 {
		left: 622upx;
		top: 485upx;
	}

	.tui-dot-13 {
		left: 620upx;
		top: 565upx;
	}

	.tui-dot-14 {
		left: 517.5upx;
		top: 572upx;
	}

	.tui-dot-15 {
		left: 415upx;
		top: 572upx;
	}

	.tui-dot-16 {
		left: 312.5upx;
		top: 572upx;
	}

	.tui-dot-17 {
		left: 210upx;
		top: 572upx;
	}

	.tui-dot-18 {
		left: 107.5upx;
		top: 572upx;
	}

	.tui-dot-19 {
		left: 15upx;
		top: 565upx;
	}

	.tui-dot-20 {
		left: 7.5upx;
		top: 471upx;
	}

	.tui-dot-21 {
		left: 7.5upx;
		top: 377upx;
	}

	.tui-dot-22 {
		left: 7.5upx;
		top: 283upx;
	}

	.tui-dot-23 {
		left: 7.5upx;
		top: 189upx;
	}

	.tui-dot-24 {
		left: 7.5upx;
		top: 95upx;
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
		height: 150upx;
		width: 168upx;
		background-color: #fcecec;
		border-radius: 15upx;
		box-shadow: 0 4px 0 #fcc8d0;
	}

	/* 580 530  */

	.tui-award-1 {
		left: 24upx;
		top: 24upx;
	}

	.tui-award-2 {
		left: 206upx;
		top: 24upx;
	}

	.tui-award-3 {
		left: 388upx;
		top: 24upx;
	}

	.tui-award-4 {
		left: 388upx;
		top: 188upx;
	}

	.tui-award-5 {
		left: 388upx;
		top: 352upx;
	}

	.tui-award-6 {
		left: 206upx;
		top: 352upx;
	}

	.tui-award-7 {
		left: 24upx;
		top: 352upx;
	}

	.tui-award-8 {
		left: 24upx;
		top: 188upx;
	}

	/**居中 加粗*/

	.tui-btn-start {
		position: absolute;
		top: 188upx;
		left: 206upx;
		border-radius: 15upx;
		height: 150upx;
		width: 168upx;
		background-color: #fc4034;
		box-shadow: 0 4px 0 #fcc8d0;
		color: #fcf400;
		text-align: center;
		font-size: 32upx;
		font-weight: bold;
		line-height: 150upx;
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
		height: 134upx;
		width: 134upx;
	}

	.tui-awardSelect {
		background-color: #fcf400 !important;
		box-shadow: 0 4px 0 rgb(240, 208, 12) !important;
	}
</style>
