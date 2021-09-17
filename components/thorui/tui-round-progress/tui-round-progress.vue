<template>
	<view class="tui-circular-container" :style="{ width: diam + 'px', height: (height || diam) + 'px' }">
		<canvas :start="percent" :change:start="parse.initDraw" :data-width="diam" :data-height="height"
			:data-lineWidth="lineWidth" :data-lineCap="lineCap" :data-fontSize="fontSize" :data-fontColor="fontColor"
			:data-fontShow="fontShow" :data-percentText="percentText" :data-defaultShow="defaultShow"
			:data-defaultColor="defaultColor" :data-progressColor="progressColor" :data-gradualColor="gradualColor"
			:data-sAngle="sAngle" :data-counterclockwise="counterclockwise" :data-multiple="multiple"
			:data-speed="speed" :data-activeMode="activeMode" :data-cid="progressCanvasId" :canvas-id="progressCanvasId"
			:class="[progressCanvasId]" :style="{ width: diam + 'px', height: (height || diam) + 'px' }"></canvas>
		<slot></slot>
	</view>
</template>
<script module="parse" lang="renderjs">
	export default {
		methods: {
			format(str) {
				if (!str) return str;
				return str.replace(/\"/g, "");
			},
			bool(str) {
				return str === 'true' || str == true ? true : false
			},
			//初始化绘制
			initDraw(percentage, oldPercentage, owner, ins) {
				let state = ins.getState();
				let res = ins.getDataset();
				const activeMode = this.format(res.activemode);
				let start = activeMode === 'backwards' ? 0 : (state.startPercentage || 0);
				//当start大于当前percentage时，start设置为0
				start = start > percentage ? 0 : start;
				if (!state.progressContext || !state.canvas) {
					const width = res.width;
					const height = res.height == 0 ? res.width : res.height;
					let ele = `.${res.cid}>canvas`
					const canvas = document.querySelectorAll(this.format(ele))[0];
					const ctx = canvas.getContext('2d');
					// const dpr =uni.getSystemInfoSync().pixelRatio;
					// canvas.style.width=width+'px';
					// canvas.style.height=height+'px';
					// canvas.width = width * dpr;
					// canvas.height = height * dpr;
					// ctx.scale(dpr, dpr);
					state.progressContext = ctx;
					state.canvas = canvas;
					this.drawProgressCircular(start, ctx, canvas, percentage, res, state, owner);
				} else {
					this.drawProgressCircular(start, state.progressContext, state.canvas, percentage, res, state, owner);
				}
			},
			//默认(背景)圆环
			drawDefaultCircular(ctx, canvas, res) {
				//终止弧度
				let sangle = Number(res.sangle) * Math.PI
				let eAngle = Math.PI * (res.height != 0 ? 1 : 2) + sangle;
				this.drawArc(ctx, eAngle, this.format(res.defaultcolor), res);
			},
			drawPercentage(ctx, percentage, res) {
				ctx.save(); //save和restore可以保证样式属性只运用于该段canvas元素
				ctx.beginPath();
				ctx.fillStyle = this.format(res.fontcolor);
				ctx.font = res.fontsize + "px Arial"; //设置字体大小和字体
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				let radius = res.width / 2;
				let percenttext = this.format(res.percenttext)
				if (!percenttext) {
					let multiple = Number(res.multiple)
					percentage = this.bool(res.counterclockwise) ? 100 - percentage * multiple : percentage * multiple;
					percentage = percentage.toFixed(0) + "%"
				} else {
					percentage = percenttext
				}
				ctx.fillText(percentage, radius, radius);
				ctx.stroke();
				ctx.restore();
			},
			//进度圆环
			drawProgressCircular(startPercentage, ctx, canvas, percentage, res, state, owner) {
				if (!ctx || !canvas) return;
				let that = this
				let gradient = ctx.createLinearGradient(0, 0, Number(res.width), 0);
				gradient.addColorStop(0, this.format(res.progresscolor));
				let gradualColor = this.format(res.gradualcolor)
				if (gradualColor) {
					gradient.addColorStop('1', gradualColor);
				}
				let requestId = null
				let renderLoop = () => {
					drawFrame((res) => {
						if (res) {
							requestId = requestAnimationFrame(renderLoop)
						} else {
							setTimeout(() => {
								cancelAnimationFrame(requestId)
								requestId = null;
								renderLoop = null;
							}, 20)
						}
					})
				}
				renderLoop()
				// requestId = requestAnimationFrame(renderLoop)

				function drawFrame(callback) {
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					if (that.bool(res.defaultshow)) {
						that.drawDefaultCircular(ctx, canvas, res)
					}
					if (that.bool(res.fontshow)) {
						that.drawPercentage(ctx, startPercentage, res);
					}
					let isEnd = percentage === 0 || (that.bool(res.counterclockwise) && startPercentage === 100);
					if (!isEnd) {
						let sangle = Number(res.sangle) * Math.PI
						let eAngle = ((2 * Math.PI) / 100) * startPercentage + sangle;
						that.drawArc(ctx, eAngle, gradient, res);
					}
					owner.callMethod('change', {
						percentage: startPercentage
					})
					if (startPercentage >= percentage) {
						state.startPercentage = startPercentage;
						owner.callMethod('end', {
							canvasId: that.format(res.canvasid)
						})
						callback && callback(false)
					} else {
						let num = startPercentage + Number(res.speed)
						startPercentage = num > percentage ? percentage : num;
						callback && callback(true)
					}
				}

			},
			//创建弧线
			drawArc(ctx, eAngle, strokeStyle, res) {
				ctx.save();
				ctx.beginPath();
				ctx.lineCap = this.format(res.linecap);
				ctx.lineWidth = Number(res.linewidth);
				ctx.strokeStyle = strokeStyle;
				let radius = res.width / 2; //x=y
				let sangle = Number(res.sangle) * Math.PI
				ctx.arc(radius, radius, radius - res.linewidth, sangle, eAngle, this.bool(res.counterclockwise));
				ctx.stroke();
				ctx.closePath();
				ctx.restore();
			}
		}
	}
</script>
<script>
	export default {
		name: 'tuiRoundProgress',
		emits: ['change','end'],
		props: {
			/*
			  传值需使用rpx进行转换保证各终端兼容
			  px = rpx / 750 * wx.getSystemInfoSync().windowWidth
			  圆形进度条(画布)宽度，直径 [px]
			*/
			diam: {
				type: Number,
				default: 60
			},
			//圆形进度条(画布)高度，默认取diam值[当画半弧时传值，height有值时则取height]
			height: {
				type: Number,
				default: 0
			},
			//进度条线条宽度[px]
			lineWidth: {
				type: Number,
				default: 4
			},
			/*
				 线条的端点样式
				 butt：向线条的每个末端添加平直的边缘
				 round	向线条的每个末端添加圆形线帽
				 square	向线条的每个末端添加正方形线帽
				*/
			lineCap: {
				type: String,
				default: 'round'
			},
			//圆环进度字体大小 [px]
			fontSize: {
				type: Number,
				default: 12
			},
			//圆环进度字体颜色
			fontColor: {
				type: String,
				default: '#5677fc'
			},
			//是否显示进度文字
			fontShow: {
				type: Boolean,
				default: true
			},
			/*
				 自定义显示文字[默认为空，显示百分比，fontShow=true时生效]
				 可以使用 slot自定义显示内容
				*/
			percentText: {
				type: String,
				default: ''
			},
			//是否显示默认(背景)进度条
			defaultShow: {
				type: Boolean,
				default: true
			},
			//默认进度条颜色
			defaultColor: {
				type: String,
				default: '#CCC'
			},
			//进度条颜色
			progressColor: {
				type: String,
				default: '#5677fc'
			},
			//进度条渐变颜色[结合progressColor使用，默认为空]
			gradualColor: {
				type: String,
				default: ''
			},
			//起始弧度，单位弧度 实际  Math.PI * sAngle
			sAngle: {
				type: Number,
				default: -0.5
			},
			//指定弧度的方向是逆时针还是顺时针。默认是false，即顺时针
			counterclockwise: {
				type: Boolean,
				default: false
			},
			//进度百分比 [10% 传值 10]
			percentage: {
				type: Number,
				default: 0
			},
			//进度百分比缩放倍数[使用半弧为100%时，则可传2]
			multiple: {
				type: Number,
				default: 1
			},
			//动画执行速度，值越大动画越快（0.1~100）
			speed: {
				type: [Number, String],
				default: 1
			},
			//backwards: 动画从头播；forwards：动画从上次结束点接着播
			activeMode: {
				type: String,
				default: 'backwards'
			}
		},
		watch: {
			percentage(val) {
				this.percent = val;
			}
		},
		mounted() {
			setTimeout(() => {
				this.percent = this.percentage;
			}, 50);
		},
		data() {
			return {
				percent: -1,
				progressCanvasId: this.getCanvasId()
			};
		},
		methods: {
			getCanvasId() {
				return 'tui' + new Date().getTime() + (Math.random() * 100000).toFixed(0);
			},
			change(e) {
				//绘制进度
				this.$emit('change', e);
			},
			end(e) {
				//绘制完成
				this.$emit('end', e);
			}
		}
	};
</script>

<style scoped>
	.tui-circular-container {
		position: relative;
	}
</style>
