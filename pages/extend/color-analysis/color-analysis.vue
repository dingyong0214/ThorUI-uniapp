<template>
	<view class="container">
		<view class="header">
			<view class="title">颜色分析器</view>
			<view class="sub-title">color analysis，图片颜色分析，传入图片获取图片主颜色</view>
		</view>

		<view class="tui-canvas-box" @tap="chooseImg">
			<text v-if="!imgUrl">+ 点击上传图片</text>
			<image v-if="imgUrl" :src="imgUrl" class="tui-image" mode="aspectFit"></image>
		</view>
		<canvas id="tui-color-palette" canvas-id="tui-color-palette" class="tui-palette-canvas"
			:style="{width:canvasWidth+'px',height:canvasHeight+'px'}"></canvas>
		<view class="tui-colors-container" v-if="colors.length>0">
			<view v-for="(item,index) in colors" :key="index" class="tui-color" :style="{backgroundColor:item}"
				@tap="copyColor" :data-color="item">{{ item }}</view>
		</view>
		<view class="tui-colors-container" style="width:94%" v-if="rbgColors.length>0">
			<view v-for="(item,index) in rbgColors" :key="index" class="tui-color"
				:style="{backgroundColor:`rgb(${item})`}" @tap="copyColor" :data-color="`rgb(${item})`">
				<view>RGB</view>
				{{ item }}
			</view>
		</view>
		<view class="tui-btn-box">
			<tui-button type="green" shape="circle" @click="setMaxColors">set maxColors=4</tui-button>
		</view>
	</view>
</template>

<script>
	import ColorAnalysis from '@/components/common/tui-color-analysis/tui-color-analysis.js';
	import thorui from '@/components/common/tui-clipboard/tui-clipboard.js'
	import util from '@/utils/util.js'
	export default {
		data() {
			return {
				imgUrl: '',
				canvasWidth: 200,
				canvasHeight: 200,
				colorAnalysis: null,
				winWidth: 375,
				maxColors: 5,
				colors: [],
				rbgColors: []
			};
		},
		onReady() {
			this.colorAnalysis = new ColorAnalysis('tui-color-palette');
			this.winWidth = uni.getSystemInfoSync().windowWidth;
		},
		methods: {
			chooseImg: function() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: res => {
						this.imgUrl = res.tempFilePaths[0]
						uni.getImageInfo({
							src: res.tempFilePaths[0],
							success: imgInfo => {
								let {
									width,
									height
								} = imgInfo;
								let scale = (0.6 * this.winWidth) / Math.max(width, height);
								let canvasWidth = Math.floor(scale * width);
								let canvasHeight = Math.floor(scale * height);
								this.canvasWidth = canvasWidth;
								this.canvasHeight = canvasHeight;
								this.colorAnalysis.getPalette({
										width: canvasWidth,
										height: canvasHeight,
										imgPath: res.tempFilePaths[0],
										maxColors: this.maxColors,
										step: 1
									},
									colorArr => {
										if (colorArr) {
											let rbgColors = [];
											colorArr = colorArr.map(color => {
												rbgColors.push(
													`${color[0]},${color[1]},${color[2]}`
													);
												return util.rgbToHex(color[0],
													color[1], color[2]);
											});
											console.log(colorArr, rbgColors);
											this.colors = colorArr;
											this.rbgColors = rbgColors;
										}
									}
								);
							}
						});
					}
				});
			},
			setMaxColors() {
				this.maxColors = 4;
				this.tui.toast('设置成功，重新上传图片查看');
			},
			copyColor(e) {
				let color = e.currentTarget.dataset.color;
				thorui.getClipboardData(color, res => {
					this.tui.toast('颜色值已复制');
				});
			}
		}
	};
</script>

<style>
	.container {
		padding: 20rpx 0 120rpx 0;
		box-sizing: border-box;
	}

	.header {
		padding: 80rpx 90rpx 60rpx 90rpx;
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

	.tui-primary {
		color: #5677fc;
	}

	.tui-btn-box {
		padding: 30rpx 40rpx;
		box-sizing: border-box;
		margin-top: 40rpx;
	}

	.tui-canvas-box {
		width: 600rpx;
		height: 600rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		margin: 0 auto;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}

	.tui-image {
		max-width: 600rpx;
		max-height: 600rpx;
		display: block;
	}

	.tui-canvas-box text {
		color: #999;
	}

	.tui-palette-canvas {
		position: fixed;
		z-index: 10;
		left: -2000px;
		top: -2000px;
		pointer-events: none;
	}

	.tui-colors-container {
		width: 600rpx;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		border-radius: 6px;
		overflow: hidden;
		margin: 40rpx auto 0;
		box-sizing: border-box;
	}

	.tui-color {
		flex: 1;
		flex-shrink: 0;
		height: 100%;
		font-size: 24rpx;
		color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		word-break: break-all;
	}
</style>
