<template>
	<view class="tui-container" @touchmove.stop.prevent="stop">
		<view class="tui-image-cropper" @touchend="cutTouchEnd" @touchstart="cutTouchStart" @touchmove="cutTouchMove">
			<view class="tui-content">
				<view class="tui-content-top tui-bg-transparent" :style="{ height: cutY + 'px', transitionProperty: cutAnimation ? '' : 'background' }"></view>
				<view class="tui-content-middle" :style="{ height: canvasHeight + 'px' }">
					<view class="tui-bg-transparent" :style="{ width: cutX + 'px', transitionProperty: cutAnimation ? '' : 'background' }"></view>
					<view class="tui-cropper-box" :style="{ width: canvasWidth + 'px', height: canvasHeight + 'px', borderColor: borderColor, transitionProperty: cutAnimation ? '' : 'background' }">
						<view v-for="(item, index) in 4" :key="index" class="tui-edge" :class="[`tui-${index < 2 ? 'top' : 'bottom'}-${index === 0 || index === 2 ? 'left' : 'right'}`]"
						 :style="{
								width: edgeWidth,
								height: edgeWidth,
								borderColor: edgeColor,
								borderWidth: edgeBorderWidth,
								left: index === 0 || index === 2 ? `-${edgeOffsets}` : 'auto',
								right: index === 1 || index === 3 ? `-${edgeOffsets}` : 'auto',
								top: index < 2 ? `-${edgeOffsets}` : 'auto',
								bottom: index > 1 ? `-${edgeOffsets}` : 'auto'
							}"></view>
					</view>
					<view class="tui-flex-auto tui-bg-transparent" :style="{ transitionProperty: cutAnimation ? '' : 'background' }"></view>
				</view>
				<view class="tui-flex-auto tui-bg-transparent" :style="{ transitionProperty: cutAnimation ? '' : 'background' }"></view>
			</view>
			<image @load="imageLoad" @error="imageLoad" @touchstart="start" @touchmove="move" @touchend="end" :style="{
					width: imgWidth ? imgWidth + 'px' : 'auto',
					height: imgHeight ? imgHeight + 'px' : 'auto',
					transform: imgTransform,
					transitionDuration: (cutAnimation ? 0.35 : 0) + 's'
				}"
			 class="tui-cropper-image" :src="imageUrl" v-if="imageUrl" mode="widthFix"></image>
		</view>
		<canvas canvas-id="tui-image-cropper" id="tui-image-cropper" :disable-scroll="true" :style="{ width: CROPPER_WIDTH * scaleRatio + 'px', height: CROPPER_HEIGHT * scaleRatio + 'px' }"
		 class="tui-cropper-canvas"></canvas>
		<view class="tui-cropper-tabbar" v-if="!custom">
			<view class="tui-op-btn" @tap.stop="back">取消</view>
			<image :src="rotateImg" class="tui-rotate-img" @tap="setAngle"></image>
			<view class="tui-op-btn" @tap.stop="getImage">完成</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 注意：组件中使用的图片地址，将文件复制到自己项目中
	 * 如果图片位置与组件同级，编译成小程序时图片会丢失
	 * 拷贝static下整个components文件夹
	 *也可直接转成base64（不建议）
	 * */
	export default {
		name: 'tuiImageCropper',
		emits: ['ready','cropper','imageLoad'],
		props: {
			//图片路径
			imageUrl: {
				type: String,
				default: ''
			},
			/*
				 默认正方形，可修改大小控制比例
				 裁剪框高度 px
				*/
			height: {
				type: Number,
				default: 280
			},
			//裁剪框宽度 px
			width: {
				type: Number,
				default: 280
			},
			//裁剪框最小宽度 px
			minWidth: {
				type: Number,
				default: 100
			},
			//裁剪框最小高度 px
			minHeight: {
				type: Number,
				default: 100
			},
			//裁剪框最大宽度 px
			maxWidth: {
				type: Number,
				default: 360
			},
			//裁剪框最大高度 px
			maxHeight: {
				type: Number,
				default: 360
			},
			//裁剪框border颜色
			borderColor: {
				type: String,
				default: 'rgba(255,255,255,0.1)'
			},
			//裁剪框边缘线颜色
			edgeColor: {
				type: String,
				default: '#FFFFFF'
			},
			//裁剪框边缘线宽度 w=h
			edgeWidth: {
				type: String,
				default: '34rpx'
			},
			//裁剪框边缘线border宽度
			edgeBorderWidth: {
				type: String,
				default: '6rpx'
			},
			//偏移距离，根据edgeBorderWidth进行调整
			edgeOffsets: {
				type: String,
				default: '6rpx'
			},
			/**
			 * 如果宽度和高度都为true则裁剪框禁止拖动
			 * 裁剪框宽度锁定
			 */
			lockWidth: {
				type: Boolean,
				default: false
			},
			//裁剪框高度锁定
			lockHeight: {
				type: Boolean,
				default: false
			},
			//锁定裁剪框比例（放大或缩小）
			lockRatio: {
				type: Boolean,
				default: false
			},
			//生成的图片尺寸相对剪裁框的比例
			scaleRatio: {
				type: Number,
				default: 2
			},
			//图片的质量，取值范围为 (0, 1]，不在范围内时当作1.0处理
			quality: {
				type: Number,
				default: 0.8
			},
			//图片旋转角度
			rotateAngle: {
				type: Number,
				default: 0
			},
			//图片最小缩放比
			minScale: {
				type: Number,
				default: 0.5
			},
			//图片最大缩放比
			maxScale: {
				type: Number,
				default: 2
			},
			//是否禁用触摸旋转（为false则可以触摸转动图片，limitMove为false生效）
			disableRotate: {
				type: Boolean,
				default: true
			},
			//是否限制移动范围(剪裁框只能在图片内,为true不可触摸转动图片)
			limitMove: {
				type: Boolean,
				default: true
			},
			//自定义操作栏（为true时隐藏底部操作栏）
			custom: {
				type: Boolean,
				default: false
			},
			//值发生改变开始裁剪（custom为true时生效）
			startCutting: {
				type: [Number, Boolean],
				default: 0
			},
			/**
			 * 是否返回base64(H5端默认base64)
			 * 支持平台：App，微信小程序，支付宝小程序,H5(默认url就是base64)
			 **/
			isBase64: {
				type: Boolean,
				default: false
			},
			//裁剪时是否显示loadding
			loadding: {
				type: Boolean,
				default: true
			},
			//旋转icon
			rotateImg: {
				type: String,
				default: '/static/components/cropper/img_rotate.png'
			}
		},
		data() {
			return {
				MOVE_THROTTLE: null, //触摸移动节流setTimeout
				MOVE_THROTTLE_FLAG: true, //节流标识
				TIME_CUT_CENTER: null,
				CROPPER_WIDTH: 200, //裁剪框宽
				CROPPER_HEIGHT: 200, //裁剪框高
				CUT_START: null,
				cutX: 0, //画布x轴起点
				cutY: 0, //画布y轴起点0
				touchRelative: [{
					x: 0,
					y: 0
				}], //手指或鼠标和图片中心的相对位置
				flagCutTouch: false, //是否是拖动裁剪框
				hypotenuseLength: 0, //双指触摸时斜边长度
				flagEndTouch: false, //是否结束触摸
				canvasWidth: 0,
				canvasHeight: 0,
				imgWidth: 0, //图片宽度
				imgHeight: 0, //图片高度
				scale: 1, //图片缩放比
				angle: 0, //图片旋转角度
				cutAnimation: false, //是否开启图片和裁剪框过渡
				cutAnimationTime: null,
				imgTop: 0, //图片上边距
				imgLeft: 0, //图片左边距
				ctx: null,
				sysInfo: null
			};
		},
		computed: {
			imgTransform: function() {
				return `translate3d(${this.imgLeft - this.imgWidth / 2}px,${this.imgTop - this.imgHeight / 2}px,0) scale(${this.scale}) rotate(${this.angle}deg)`;
			}
		},
		watch: {
			imageUrl(val, oldVal) {
				this.imageReset();
				this.showLoading();
				uni.getImageInfo({
					src: val,
					success: res => {
						//计算图片尺寸
						this.imgComputeSize(res.width, res.height);
						if (this.limitMove) {
							//限制移动，不留空白处理
							this.imgMarginDetectionScale();
						}
					},
					fail: err => {
						this.imgComputeSize();
						if (this.limitMove) {
							this.imgMarginDetectionScale();
						}
					}
				});
			},
			//监听截取框宽高变化
			canvasWidth(val) {
				if (val < this.minWidth) {
					this.canvasWidth = this.minWidth;
				}
				this.computeCutSize();
			},
			canvasHeight(val) {
				if (val < this.minHeight) {
					this.canvasHeight = this.minHeight;
				}
				this.computeCutSize();
			},
			rotateAngle(val) {
				this.cutAnimation = true;
				this.angle = val;
			},
			angle(val) {
				this.moveStop();
				if (this.limitMove && val % 90) {
					this.angle = Math.round(val / 90) * 90;
				}
				this.imgMarginDetectionScale();
			},
			cutAnimation(val) {
				//开启过渡260毫秒之后自动关闭
				clearTimeout(this.cutAnimationTime);
				if (val) {
					this.cutAnimationTime = setTimeout(() => {
						this.cutAnimation = false;
					}, 260);
				}
			},
			limitMove(val) {
				if (val) {
					if (this.angle % 90) {
						this.angle = Math.round(this.angle / 90) * 90;
					}
					this.imgMarginDetectionScale();
				}
			},
			cutY(value) {
				this.cutDetectionPosition();
			},
			cutX(value) {
				this.cutDetectionPosition();
			},
			startCutting(val) {
				if (this.custom && val) {
					this.getImage();
				}
			}
		},
		mounted() {
			this.sysInfo = uni.getSystemInfoSync();
			this.imgTop = this.sysInfo.windowHeight / 2;
			this.imgLeft = this.sysInfo.windowWidth / 2;
			this.CROPPER_WIDTH = this.width;
			this.CROPPER_HEIGHT = this.height;
			this.canvasHeight = this.height;
			this.canvasWidth = this.width;
			this.ctx = uni.createCanvasContext('tui-image-cropper', this);
			this.setCutCenter();
			//设置裁剪框大小>设置图片尺寸>绘制canvas
			this.computeCutSize();
			//检查裁剪框是否在范围内
			this.cutDetectionPosition();
			setTimeout(() => {
				this.$emit('ready', {});
			}, 200);
		},
		methods: {
			//网络图片转成本地文件[同步执行]
			async getLocalImage(url) {
				return await new Promise((resolve, reject) => {
					uni.downloadFile({
						url: url,
						success: res => {
							resolve(res.tempFilePath);
						},
						fail: res => {
							reject(false)
						}
					})
				})
			},
			//返回裁剪后图片信息
			getImage() {
				if (!this.imageUrl) {
					uni.showToast({
						title: '请选择图片',
						icon: 'none'
					});
					return;
				}
				this.loadding && this.showLoading();
				let draw = async () => {
					//图片实际大小
					let imgWidth = this.imgWidth * this.scale * this.scaleRatio;
					let imgHeight = this.imgHeight * this.scale * this.scaleRatio;
					//canvas和图片的相对距离
					let xpos = this.imgLeft - this.cutX;
					let ypos = this.imgTop - this.cutY;
					//旋转画布
					this.ctx.translate(xpos * this.scaleRatio, ypos * this.scaleRatio);
					this.ctx.rotate((this.angle * Math.PI) / 180);
					let imgUrl = this.imageUrl;
					// #ifdef APP-PLUS || MP-WEIXIN
					if (~this.imageUrl.indexOf('https:')) {
						imgUrl = await this.getLocalImage(this.imageUrl)
					}
					// #endif
					this.ctx.drawImage(imgUrl, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
					this.ctx.draw(false, () => {
						let params = {
							width: this.canvasWidth * this.scaleRatio,
							height: Math.round(this.canvasHeight * this.scaleRatio),
							destWidth: this.canvasWidth * this.scaleRatio,
							destHeight: Math.round(this.canvasHeight) * this.scaleRatio,
							fileType: 'png',
							quality: this.quality
						};
						let data = {
							url: '',
							base64: '',
							width: this.canvasWidth * this.scaleRatio,
							height: this.canvasHeight * this.scaleRatio
						};
						// #ifdef MP-ALIPAY

						if (this.isBase64) {
							this.ctx.toDataURL(params).then(dataURL => {
								data.base64 = dataURL;
								this.loadding && uni.hideLoading();
								this.$emit('cropper', data);
							});
						} else {
							this.ctx.toTempFilePath({
								...params,
								success: res => {
									data.url = res.apFilePath;
									this.loadding && uni.hideLoading();
									this.$emit('cropper', data);
								}
							});
						}
						// #endif

						// #ifndef MP-ALIPAY
						// #ifdef MP-BAIDU || MP-TOUTIAO || H5
						this.isBase64 = false;
						// #endif
						if (this.isBase64) {
							uni.canvasGetImageData({
								canvasId: 'tui-image-cropper',
								x: 0,
								y: 0,
								width: this.canvasWidth * this.scaleRatio,
								height: Math.round(this.canvasHeight * this.scaleRatio),
								success: res => {
									const arrayBuffer = new Uint8Array(res.data);
									const base64 = uni.arrayBufferToBase64(arrayBuffer);
									data.base64 = base64;
									this.loadding && uni.hideLoading();
									this.$emit('cropper', data);
								}
							},this);
						} else {
							uni.canvasToTempFilePath({
									...params,
									canvasId: 'tui-image-cropper',
									success: res => {
										data.url = res.tempFilePath;
										// #ifdef H5
										data.base64 = res.tempFilePath;
										// #endif
										this.loadding && uni.hideLoading();
										this.$emit('cropper', data);
									},
									fail(res) {
										console.log(res);
									}
								},
								this
							);
						}
						// #endif
					});
				};
				if (this.CROPPER_WIDTH != this.canvasWidth || this.CROPPER_HEIGHT != this.canvasHeight) {
					this.CROPPER_WIDTH = this.canvasWidth;
					this.CROPPER_HEIGHT = this.canvasHeight;
					this.ctx.draw();
					this.$nextTick(() => {
						setTimeout(() => {
							draw();
						}, 100);
					});
				} else {
					draw();
				}
			},
			/**
			 * 设置剪裁框和图片居中
			 */
			setCutCenter() {
				let sys = this.sysInfo || uni.getSystemInfoSync();
				let cutY = (sys.windowHeight - this.canvasHeight) * 0.5;
				let cutX = (sys.windowWidth - this.canvasWidth) * 0.5;
				//顺序不能变
				this.imgTop = this.imgTop - this.cutY + cutY;
				this.cutY = cutY; //截取的框上边距
				this.imgLeft = this.imgLeft - this.cutX + cutX;
				this.cutX = cutX; //截取的框左边距
			},
			imageReset() {
				// this.cutAnimation = true;
				this.scale = 1;
				this.angle = 0;
				let sys = this.sysInfo || uni.getSystemInfoSync();
				this.imgTop = sys.windowHeight / 2;
				this.imgLeft = sys.windowWidth / 2;
			},
			imageLoad(e) {
				this.imageReset();
				uni.hideLoading();
				this.$emit('imageLoad', {});
			},
			//检测剪裁框位置是否在允许的范围内(屏幕内)
			cutDetectionPosition() {
				let cutDetectionPositionTop = () => {
						//检测上边距是否在范围内
						if (this.cutY < 0) {
							this.cutY = 0;
						}
						if (this.cutY > this.sysInfo.windowHeight - this.canvasHeight) {
							this.cutY = this.sysInfo.windowHeight - this.canvasHeight;
						}
					},
					cutDetectionPositionLeft = () => {
						//检测左边距是否在范围内
						if (this.cutX < 0) {
							this.cutX = 0;
						}
						if (this.cutX > this.sysInfo.windowWidth - this.canvasWidth) {
							this.cutX = this.sysInfo.windowWidth - this.canvasWidth;
						}
					};
				//裁剪框坐标处理（如果只写一个参数则另一个默认为0，都不写默认居中）
				if (this.cutY == null && this.cutX == null) {
					let cutY = (this.sysInfo.windowHeight - this.canvasHeight) * 0.5;
					let cutX = (this.sysInfo.windowWidth - this.canvasWidth) * 0.5;
					this.cutY = cutY; //截取的框上边距
					this.cutX = cutX; //截取的框左边距
				} else if (this.cutY != null && this.cutX != null) {
					cutDetectionPositionTop();
					cutDetectionPositionLeft();
				} else if (this.cutY != null && this.cutX == null) {
					cutDetectionPositionTop();
					this.cutX = (this.sysInfo.windowWidth - this.canvasWidth) / 2;
				} else if (this.cutY == null && this.cutX != null) {
					cutDetectionPositionLeft();
					this.cutY = (this.sysInfo.windowHeight - this.canvasHeight) / 2;
				}
			},
			/**
			 * 图片边缘检测-位置
			 */
			imgMarginDetectionPosition(scale) {
				if (!this.limitMove) return;
				let left = this.imgLeft;
				let top = this.imgTop;
				scale = scale || this.scale;
				let imgWidth = this.imgWidth;
				let imgHeight = this.imgHeight;
				if ((this.angle / 90) % 2) {
					imgWidth = this.imgHeight;
					imgHeight = this.imgWidth;
				}
				left = this.cutX + (imgWidth * scale) / 2 >= left ? left : this.cutX + (imgWidth * scale) / 2;
				left = this.cutX + this.canvasWidth - (imgWidth * scale) / 2 <= left ? left : this.cutX + this.canvasWidth - (
					imgWidth * scale) / 2;
				top = this.cutY + (imgHeight * scale) / 2 >= top ? top : this.cutY + (imgHeight * scale) / 2;
				top = this.cutY + this.canvasHeight - (imgHeight * scale) / 2 <= top ? top : this.cutY + this.canvasHeight - (
					imgHeight * scale) / 2;
				this.imgLeft = left;
				this.imgTop = top;
				this.scale = scale;
			},
			/**
			 * 图片边缘检测-缩放
			 */
			imgMarginDetectionScale(scale) {
				if (!this.limitMove) return;
				scale = scale || this.scale;
				let imgWidth = this.imgWidth;
				let imgHeight = this.imgHeight;
				if ((this.angle / 90) % 2) {
					imgWidth = this.imgHeight;
					imgHeight = this.imgWidth;
				}
				if (imgWidth * scale < this.canvasWidth) {
					scale = this.canvasWidth / imgWidth;
				}
				if (imgHeight * scale < this.canvasHeight) {
					scale = Math.max(scale, this.canvasHeight / imgHeight);
				}
				this.imgMarginDetectionPosition(scale);
			},
			/**
			 * 计算图片尺寸
			 */
			imgComputeSize(width, height) {
				//默认按图片最小边 = 对应裁剪框尺寸
				let imgWidth = width,
					imgHeight = height;
				if (imgWidth && imgHeight) {
					if (imgWidth / imgHeight > (this.canvasWidth || this.width) / (this.canvasHeight || this.height)) {
						imgHeight = this.canvasHeight || this.height;
						imgWidth = (width / height) * imgHeight;
					} else {
						imgWidth = this.canvasWidth || this.width;
						imgHeight = (height / width) * imgWidth;
					}
				} else {
					let sys = this.sysInfo || uni.getSystemInfoSync();
					imgWidth = sys.windowWidth;
					imgHeight = 0;
				}
				this.imgWidth = imgWidth;
				this.imgHeight = imgHeight;
			},
			//改变截取框大小
			computeCutSize() {
				if (this.canvasWidth > this.sysInfo.windowWidth) {
					this.canvasWidth = this.sysInfo.windowWidth;
				} else if (this.canvasWidth + this.cutX > this.sysInfo.windowWidth) {
					this.cutX = this.sysInfo.windowWidth - this.cutX;
				}
				if (this.canvasHeight > this.sysInfo.windowHeight) {
					this.canvasHeight = this.sysInfo.windowHeight;
				} else if (this.canvasHeight + this.cutY > this.sysInfo.windowHeight) {
					this.cutY = this.sysInfo.windowHeight - this.cutY;
				}
			},
			//开始触摸
			start(e) {
				this.flagEndTouch = false;
				if (e.touches.length == 1) {
					//单指拖动
					this.touchRelative[0] = {
						x: e.touches[0].clientX - this.imgLeft,
						y: e.touches[0].clientY - this.imgTop
					};
				} else {
					//双指放大
					let width = Math.abs(e.touches[0].clientX - e.touches[1].clientX);
					let height = Math.abs(e.touches[0].clientY - e.touches[1].clientY);
					this.touchRelative = [{
							x: e.touches[0].clientX - this.imgLeft,
							y: e.touches[0].clientY - this.imgTop
						},
						{
							x: e.touches[1].clientX - this.imgLeft,
							y: e.touches[1].clientY - this.imgTop
						}
					];
					this.hypotenuseLength = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
				}
			},
			moveThrottle() {
				if (this.sysInfo.platform == 'android') {
					clearTimeout(this.MOVE_THROTTLE);
					this.MOVE_THROTTLE = setTimeout(() => {
						this.MOVE_THROTTLE_FLAG = true;
					}, 800 / 40);
					return this.MOVE_THROTTLE_FLAG;
				} else {
					this.MOVE_THROTTLE_FLAG = true;
				}
			},
			move(e) {
				if (this.flagEndTouch || !this.MOVE_THROTTLE_FLAG) return;
				this.MOVE_THROTTLE_FLAG = false;
				this.moveThrottle();
				this.moveDuring();
				if (e.touches.length == 1) {
					//单指拖动
					let left = e.touches[0].clientX - this.touchRelative[0].x,
						top = e.touches[0].clientY - this.touchRelative[0].y;
					//图像边缘检测,防止截取到空白
					this.imgLeft = left;
					this.imgTop = top;
					this.imgMarginDetectionPosition();
				} else {
					//双指放大
					let width = Math.abs(e.touches[0].clientX - e.touches[1].clientX),
						height = Math.abs(e.touches[0].clientY - e.touches[1].clientY),
						hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)),
						scale = this.scale * (hypotenuse / this.hypotenuseLength),
						current_deg = 0;
					scale = scale <= this.minScale ? this.minScale : scale;
					scale = scale >= this.maxScale ? this.maxScale : scale;
					//图像边缘检测,防止截取到空白
					// this.scale = scale;
					this.imgMarginDetectionScale(scale);
					//双指旋转(如果没禁用旋转)
					let touchRelative = [{
							x: e.touches[0].clientX - this.imgLeft,
							y: e.touches[0].clientY - this.imgTop
						},
						{
							x: e.touches[1].clientX - this.imgLeft,
							y: e.touches[1].clientY - this.imgTop
						}
					];
					if (!this.disableRotate) {
						let first_atan = (180 / Math.PI) * Math.atan2(touchRelative[0].y, touchRelative[0].x);
						let first_atan_old = (180 / Math.PI) * Math.atan2(this.touchRelative[0].y, this.touchRelative[0].x);
						let second_atan = (180 / Math.PI) * Math.atan2(touchRelative[1].y, touchRelative[1].x);
						let second_atan_old = (180 / Math.PI) * Math.atan2(this.touchRelative[1].y, this.touchRelative[1].x);
						//当前旋转的角度
						let first_deg = first_atan - first_atan_old,
							second_deg = second_atan - second_atan_old;
						if (first_deg != 0) {
							current_deg = first_deg;
						} else if (second_deg != 0) {
							current_deg = second_deg;
						}
					}
					this.touchRelative = touchRelative;
					this.hypotenuseLength = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
					//更新视图
					this.angle = this.angle + current_deg;
					this.scale = this.scale;
				}
			},
			//结束操作
			end(e) {
				this.flagEndTouch = true;
				this.moveStop();
			},
			//裁剪框处理
			cutTouchMove(e) {
				if (this.flagCutTouch && this.MOVE_THROTTLE_FLAG) {
					if (this.lockRatio && (this.lockWidth || this.lockHeight)) return;
					//节流
					this.MOVE_THROTTLE_FLAG = false;
					this.moveThrottle();
					let width = this.canvasWidth,
						height = this.canvasHeight,
						cutY = this.cutY,
						cutX = this.cutX,
						size_correct = () => {
							width = width <= this.maxWidth ? (width >= this.minWidth ? width : this.minWidth) : this.maxWidth;
							height = height <= this.maxHeight ? (height >= this.minHeight ? height : this.minHeight) : this.maxHeight;
						},
						size_inspect = () => {
							if ((width > this.maxWidth || width < this.minWidth || height > this.maxHeight || height < this.minHeight) &&
								this.lockRatio) {
								size_correct();
								return false;
							} else {
								size_correct();
								return true;
							}
						};
					height = this.CUT_START.height + (this.CUT_START.corner > 1 && this.CUT_START.corner < 4 ? 1 : -1) * (this.CUT_START
						.y - e.touches[0].clientY);
					switch (this.CUT_START.corner) {
						case 1:
							width = this.CUT_START.width - this.CUT_START.x + e.touches[0].clientX;
							if (this.lockRatio) {
								height = width / (this.canvasWidth / this.canvasHeight);
							}
							if (!size_inspect()) return;
							break;
						case 2:
							width = this.CUT_START.width - this.CUT_START.x + e.touches[0].clientX;
							if (this.lockRatio) {
								height = width / (this.canvasWidth / this.canvasHeight);
							}
							if (!size_inspect()) return;
							cutY = this.CUT_START.cutY - (height - this.CUT_START.height);
							break;
						case 3:
							width = this.CUT_START.width + this.CUT_START.x - e.touches[0].clientX;
							if (this.lockRatio) {
								height = width / (this.canvasWidth / this.canvasHeight);
							}
							if (!size_inspect()) return;
							cutY = this.CUT_START.cutY - (height - this.CUT_START.height);
							cutX = this.CUT_START.cutX - (width - this.CUT_START.width);
							break;
						case 4:
							width = this.CUT_START.width + this.CUT_START.x - e.touches[0].clientX;
							if (this.lockRatio) {
								height = width / (this.canvasWidth / this.canvasHeight);
							}
							if (!size_inspect()) return;
							cutX = this.CUT_START.cutX - (width - this.CUT_START.width);
							break;
						default:
							break;
					}
					if (!this.lockWidth && !this.lockHeight) {
						this.canvasWidth = width;
						this.cutX = cutX;
						this.canvasHeight = height;
						this.cutY = cutY;
					} else if (!this.lockWidth) {
						this.canvasWidth = width;
						this.cutX = cutX;
					} else if (!this.lockHeight) {
						this.canvasHeight = height;
						this.cutY = cutY;
					}
					this.imgMarginDetectionScale();
				}
			},
			cutTouchStart(e) {
				let currentX = e.touches[0].clientX;
				let currentY = e.touches[0].clientY;

				/*
				 * (右下-1 右上-2 左上-3 左下-4)
				 * left_x [3,4]
				 * top_y [2,3]
				 * right_x [1,2]
				 * bottom_y [1,4]
				 */
				let left_x1 = this.cutX - 24;
				let left_x2 = this.cutX + 24;

				let top_y1 = this.cutY - 24;
				let top_y2 = this.cutY + 24;

				let right_x1 = this.cutX + this.canvasWidth - 24;
				let right_x2 = this.cutX + this.canvasWidth + 24;

				let bottom_y1 = this.cutY + this.canvasHeight - 24;
				let bottom_y2 = this.cutY + this.canvasHeight + 24;

				if (currentX > right_x1 && currentX < right_x2 && currentY > bottom_y1 && currentY < bottom_y2) {
					this.moveDuring();
					this.flagCutTouch = true;
					this.flagEndTouch = true;
					this.CUT_START = {
						width: this.canvasWidth,
						height: this.canvasHeight,
						x: currentX,
						y: currentY,
						corner: 1
					};
				} else if (currentX > right_x1 && currentX < right_x2 && currentY > top_y1 && currentY < top_y2) {
					this.moveDuring();
					this.flagCutTouch = true;
					this.flagEndTouch = true;
					this.CUT_START = {
						width: this.canvasWidth,
						height: this.canvasHeight,
						x: currentX,
						y: currentY,
						cutY: this.cutY,
						cutX: this.cutX,
						corner: 2
					};
				} else if (currentX > left_x1 && currentX < left_x2 && currentY > top_y1 && currentY < top_y2) {
					this.moveDuring();
					this.flagCutTouch = true;
					this.flagEndTouch = true;
					this.CUT_START = {
						width: this.canvasWidth,
						height: this.canvasHeight,
						cutY: this.cutY,
						cutX: this.cutX,
						x: currentX,
						y: currentY,
						corner: 3
					};
				} else if (currentX > left_x1 && currentX < left_x2 && currentY > bottom_y1 && currentY < bottom_y2) {
					this.moveDuring();
					this.flagCutTouch = true;
					this.flagEndTouch = true;
					this.CUT_START = {
						width: this.canvasWidth,
						height: this.canvasHeight,
						cutY: this.cutY,
						cutX: this.cutX,
						x: currentX,
						y: currentY,
						corner: 4
					};
				}
			},
			cutTouchEnd(e) {
				this.moveStop();
				this.flagCutTouch = false;
			},
			//停止移动时需要做的操作
			moveStop() {
				//清空之前的自动居中延迟函数并添加最新的
				clearTimeout(this.TIME_CUT_CENTER);
				this.TIME_CUT_CENTER = setTimeout(() => {
					//动画启动
					if (!this.cutAnimation) {
						this.cutAnimation = true;
					}
					this.setCutCenter();
				}, 800);
			},
			//移动中
			moveDuring() {
				//清空之前的自动居中延迟函数
				clearTimeout(this.TIME_CUT_CENTER);
			},
			showLoading() {
				uni.showLoading({
					title: '请稍候...',
					mask: true
				});
			},
			stop() {},
			back() {
				uni.navigateBack();
			},
			setAngle() {
				this.cutAnimation = true;
				this.angle = this.angle + 90;
			}
		}
	};
</script>

<style scoped>
	.tui-container {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.6);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
	}

	.tui-image-cropper {
		width: 100vw;
		height: 100vh;
		position: absolute;
	}

	.tui-content {
		width: 100vw;
		height: 100vh;
		position: absolute;
		z-index: 9;
		display: flex;
		flex-direction: column;
		pointer-events: none;
	}

	.tui-bg-transparent {
		background-color: rgba(0, 0, 0, 0.6);
		transition-duration: 0.35s;
	}

	.tui-content-top {
		pointer-events: none;
	}

	.tui-content-middle {
		width: 100%;
		height: 200px;
		display: flex;
		box-sizing: border-box;
	}

	.tui-cropper-box {
		position: relative;
		/* transition-duration: 0.3s; */
		border-style: solid;
		border-width: 1rpx;
		box-sizing: border-box;
	}

	.tui-flex-auto {
		flex: auto;
	}

	.tui-cropper-image {
		width: 100%;
		border-style: none;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		transform-origin: center;
	}

	.tui-cropper-canvas {
		position: fixed;
		z-index: 10;
		left: -2000px;
		top: -2000px;
		pointer-events: none;
	}

	.tui-edge {
		border-style: solid;
		pointer-events: auto;
		position: absolute;
		box-sizing: border-box;
	}

	.tui-top-left {
		border-bottom-width: 0 !important;
		border-right-width: 0 !important;
	}

	.tui-top-right {
		border-bottom-width: 0 !important;
		border-left-width: 0 !important;
	}

	.tui-bottom-left {
		border-top-width: 0 !important;
		border-right-width: 0 !important;
	}

	.tui-bottom-right {
		border-top-width: 0 !important;
		border-left-width: 0 !important;
	}

	.tui-cropper-tabbar {
		width: 100%;
		height: 120rpx;
		padding: 0 40rpx;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #ffffff;
		font-size: 32rpx;
	}

	.tui-cropper-tabbar::after {
		content: ' ';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1rpx solid rgba(255, 255, 255, 0.2);
		-webkit-transform: scaleY(0.5) translateZ(0);
		transform: scaleY(0.5) translateZ(0);
		transform-origin: 0 100%;
	}

	.tui-op-btn {
		height: 80rpx;
		display: flex;
		align-items: center;
	}

	.tui-rotate-img {
		width: 44rpx;
		height: 44rpx;
	}
</style>
