<template>
	<view class="tui-upload__container">
		<view class="tui-upload-box">
			<view class="tui-image-item" :style="{width:width+'rpx',height:height+'rpx',borderRadius:radius+'rpx'}"
				v-for="(item,index) in imageList" :key="index">
				<image :src="item" class="tui-item-img"
					:style="{width:width+'rpx',height:height+'rpx',borderRadius:radius+'rpx'}"
					@tap.stop="previewImage(index)" mode="aspectFill"></image>
				<view v-if="!forbidDel" class="tui-img-del" :style="{background:getDelColor}"
					@tap.stop="delImage(index)">
				</view>
				<view v-if="statusArr[index]!=1" class="tui-upload-mask">
					<view class="tui-upload-loading" v-if="statusArr[index]==2"></view>
					<text class="tui-tips">{{statusArr[index]==2?'上传中...':'上传失败'}}</text>
					<view class="tui-mask-btn" v-if="statusArr[index]==3" @tap.stop="reUpLoad(index)"
						hover-class="tui-btn-hover" :hover-stay-time="150">重新上传</view>
				</view>
			</view>
			<view v-if="isShowAdd" class="tui-upload-add"
				:class="[borderColor!=='transparent'?'tui-upload__border':'tui-upload__unborder']"
				:style="{width:width+'rpx',height:height+'rpx',background:background,borderRadius:radius+'rpx',borderColor:borderColor,borderStyle:borderSytle}"
				@tap="chooseImage">
				<slot>
					<view class="tui-upload-icon tui-icon-plus" :style="{color:addColor,fontSize:addSize+'rpx'}"></view>
				</slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'tuiUpload',
		emits: ['remove', 'complete', 'reupload'],
		props: {
			//展示图片宽度
			width: {
				type: [Number, String],
				default: 218
			},
			//展示图片高度
			height: {
				type: [Number, String],
				default: 218
			},
			//初始化图片路径
			value: {
				type: Array,
				default () {
					return []
				}
			},
			//2.3.0+
			radius: {
				type: [Number, String],
				default: 0
			},
			//2.3.0+
			background: {
				type: String,
				default: '#F7F7F7'
			},
			//2.3.0+
			borderColor: {
				type: String,
				default: 'transparent'
			},
			//2.3.0+
			//solid、dashed、dotted
			borderSytle: {
				type: String,
				default: 'dashed'
			},
			//2.3.0+
			delColor: {
				type: String,
				default: ''
			},
			//删除图片前是否弹框确认
			delConfirm: {
				type: Boolean,
				default: false
			},
			//禁用删除
			forbidDel: {
				type: Boolean,
				default: false
			},
			//2.3.0+
			addColor: {
				type: String,
				default: '#888'
			},
			//2.3.0+
			addSize: {
				type: [Number, String],
				default: 68
			},
			//禁用添加
			forbidAdd: {
				type: Boolean,
				default: false
			},
			//服务器接口地址。当接口地址为空时，直接返回本地图片地址
			serverUrl: {
				type: String,
				default: ""
			},
			//限制数
			limit: {
				type: Number,
				default: 9
			},
			//original 原图，compressed 压缩图，默认二者都有
			sizeType: {
				type: Array,
				default () {
					return ['original', 'compressed']
				}
			},
			//album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
			sourceType: {
				type: Array,
				default () {
					return ['album', 'camera']
				}
			},
			//可上传图片类型，默认为空，不限制  Array<String> ['jpg','png','gif']
			imageFormat: {
				type: Array,
				default () {
					return []
				}
			},
			//单张图片大小限制 MB 
			size: {
				type: Number,
				default: 4
			},
			//文件对应的key，默认为 file
			fileKeyName: {
				type: String,
				default: "file"
			},
			//HTTP 请求 Header, header 中不能设置 Referer。
			header: {
				type: Object,
				default () {
					return {}
				}
			},
			//HTTP 请求中其他额外的 form data
			formData: {
				type: Object,
				default () {
					return {}
				}
			},
			//自定义参数
			params: {
				type: [Number, String],
				default: 0
			}
		},
		data() {
			return {
				//图片地址
				imageList: [],
				tempFiles: [],
				//上传状态：1-上传成功 2-上传中 3-上传失败
				statusArr: [],
				//传入回调函数上传
				callUpload: false
			}
		},
		created() {
			this.initImages()
		},
		watch: {
			value(val) {
				if (val) {
					this.initImages()
				}
			}
		},
		computed: {
			isShowAdd() {
				let isShow = true;
				if (this.forbidAdd || (this.limit && this.imageList.length >= this.limit)) {
					isShow = false;
				}
				return isShow
			},
			getDelColor() {
				return this.delColor || (uni && uni.$tui && uni.$tui.color.danger) || '#EB0909';
			}
		},
		methods: {
			initImages() {
				this.statusArr = [];
				this.imageList = [...this.value];
				let tempFiles = []
				for (let item of this.imageList) {
					this.statusArr.push("1")
					tempFiles.push({
						path: item
					})
				}
				this.tempFiles = tempFiles;
			},
			// 重新上传
			reUpLoad(index) {
				this.$set(this.statusArr, index, "2")
				this.$emit('reupload', {
					index
				})
				if (!this.callUpload) {
					this.uploadImage(index, this.imageList[index]).then(() => {
						this.change()
					}).catch(() => {
						this.change()
					})
				}
			},
			/**
			 * @param manual 是否手动上传
			 **/
			change(manual = false) {
				let status = ~this.statusArr.indexOf("2") ? 2 : 1
				if (status != 2 && ~this.statusArr.indexOf("3")) {
					// 上传失败
					status = 3
				}
				this.$emit('complete', {
					status: status,
					imgArr: this.imageList,
					params: this.params,
					manual: manual
				})
			},
			toast(text) {
				text && uni.showToast({
					title: text,
					icon: "none"
				});
			},
			chooseImage: function() {
				let _this = this;
				uni.chooseImage({
					count: _this.limit - _this.imageList.length,
					sizeType: _this.sizeType,
					sourceType: _this.sourceType,
					success: function(e) {
						let imageArr = [];
						for (let i = 0; i < e.tempFiles.length; i++) {
							let len = _this.imageList.length;
							if (len >= _this.limit) {
								_this.toast(`最多可上传${_this.limit}张图片`);
								break;
							}
							//过滤图片类型
							let path = e.tempFiles[i].path;

							if (_this.imageFormat.length > 0) {
								let format = ""
								// #ifdef H5
								let type = e.tempFiles[i].type;
								format = type.split('/')[1]
								// #endif

								// #ifndef H5
								format = path.split(".")[(path.split(".")).length - 1];
								// #endif

								if (_this.imageFormat.indexOf(format) == -1) {
									let text = `只能上传 ${_this.imageFormat.join(',')} 格式图片！`
									_this.toast(text);
									continue;
								}
							}

							//过滤超出大小限制图片
							let size = e.tempFiles[i].size;

							if (_this.size * 1024 * 1024 < size) {
								let err = `单张图片大小不能超过：${_this.size}MB`
								_this.toast(err);
								continue;
							}
							imageArr.push(path)
							_this.imageList.push(path)
							_this.tempFiles.push(e.tempFiles[i])
							_this.statusArr.push("2")
						}
						_this.change()

						let start = _this.imageList.length - imageArr.length
						for (let j = 0; j < imageArr.length; j++) {
							let index = start + j
							//服务器地址
							if (_this.serverUrl) {
								_this.uploadImage(index, imageArr[j]).then(() => {
									_this.change()
								}).catch(() => {
									_this.change()
								})
							} else {
								//无服务器地址则直接返回成功
								_this.$set(_this.statusArr, index, "1")
								_this.change()
							}
						}
					}
				})
			},
			uploadImage: function(index, url, serverUrl) {
				let _this = this;
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: this.serverUrl || serverUrl,
						name: this.fileKeyName,
						header: this.header,
						formData: this.formData,
						filePath: url,
						success: function(res) {
							if (res.statusCode == 200) {
								//返回结果 此处需要按接口实际返回进行修改
								let d = JSON.parse(res.data.replace(/\ufeff/g, "") || "{}")
								//判断code，以实际接口规范判断
								if (d.code % 100 === 0) {
									// 上传成功 d.url 为上传后图片地址，以实际接口返回为准
									d.url && (_this.imageList[index] = d.url)
									_this.$set(_this.statusArr, index, d.url ? "1" : "3")
								} else {
									// 上传失败
									_this.$set(_this.statusArr, index, "3")
								}
								resolve(index)
							} else {
								_this.$set(_this.statusArr, index, "3")
								reject(index)
							}
						},
						fail: function(res) {
							_this.$set(_this.statusArr, index, "3")
							reject(index)
						}
					})
				})

			},
			delImage: function(index) {
				let that = this
				if (this.delConfirm) {
					uni.showModal({
						title: '提示',
						content: '确认删除该图片吗？',
						showCancel: true,
						cancelColor: "#555",
						confirmColor: "#eb0909",
						confirmText: "确定",
						success(res) {
							if (res.confirm) {
								that.imageList.splice(index, 1)
								that.tempFiles.splice(index, 1)
								that.statusArr.splice(index, 1)
								that.$emit("remove", {
									index: index,
									params: that.params
								})
								that.change()
							}
						}
					})
				} else {
					that.imageList.splice(index, 1)
					that.tempFiles.splice(index, 1)
					that.statusArr.splice(index, 1)
					that.$emit("remove", {
						index: index,
						params: that.params
					})
					that.change()
				}
			},
			previewImage: function(index) {
				if (!this.imageList.length) return;
				uni.previewImage({
					current: this.imageList[index],
					loop: true,
					urls: this.imageList
				})
			},
			/**
			 * 当属性serverUrl传空时，父级调用该方法一次性上传所有图片
			 * @param serverUrl 服务器接口地址
			 **/
			uploadAllImage(serverUrl) {
				if (!serverUrl) {
					this.toast('服务器接口地址不能为空！');
					return;
				}
				let imageArr = [...this.imageList]
				const len = imageArr.length
				for (let i = 0; i < len; i++) {
					//如果是服务器地址图片则无需再次上传
					if (imageArr[i].startsWith('https')) {
						continue;
					} else {
						this.$set(this.statusArr, i, "2")
						this.uploadImage(i, imageArr[i], serverUrl).then(() => {
							if (i === len - 1) {
								this.change(true)
							}
						}).catch(() => {
							if (i === len - 1) {
								this.change(true)
							}
						})
					}
				}
			},
			upload(callback, index) {
				// 传入一个返回Promise的文件上传的函数
				//上传状态：1-上传成功 2-上传中 3-上传失败
				this.callUpload = true;
				if (index === undefined || index === null) {
					let urls = [...this.imageList]
					const len = urls.length
					for (let i = 0; i < len; i++) {
						if (urls[i].startsWith('https')) {
							continue;
						} else {
							this.$set(this.statusArr, i, "2")
							if (typeof callback === 'function') {
								callback(this.tempFiles[i]).then(res => {
									this.$set(this.statusArr, i, '1')
									this.imageList[i] = res
									this.change(true)
								}).catch(err => {
									this.$set(this.statusArr, i, '3')
								})
							}
						}
					}
				} else {
					//如果传入index，则是重新上传时调用
					this.$set(this.statusArr, index, "2")
					if (typeof callback === 'function') {
						callback(this.tempFiles[index]).then(res => {
							this.$set(this.statusArr, index, '1')
							this.imageList[index] = res
							this.change(true)
						}).catch(err => {
							this.$set(this.statusArr, index, '3')
						})
					}
				}
			}
		}
	}
</script>

<style scoped>
	@font-face {
		font-family: 'tuiUpload';
		src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATcAA0AAAAAByQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEwAAAABoAAAAciR52BUdERUYAAASgAAAAHgAAAB4AKQALT1MvMgAAAaAAAABCAAAAVjxvR/tjbWFwAAAB+AAAAEUAAAFK5ibpuGdhc3AAAASYAAAACAAAAAj//wADZ2x5ZgAAAkwAAADXAAABAAmNjcZoZWFkAAABMAAAAC8AAAA2FpiS+WhoZWEAAAFgAAAAHQAAACQH3QOFaG10eAAAAeQAAAARAAAAEgwAACBsb2NhAAACQAAAAAwAAAAMAEoAgG1heHAAAAGAAAAAHwAAACABEgA2bmFtZQAAAyQAAAFJAAACiCnmEVVwb3N0AAAEcAAAACgAAAA6OMUs4HjaY2BkYGAAYo3boY/i+W2+MnCzMIDAzb3qdQj6fwPzf+YGIJeDgQkkCgA/KAtvAHjaY2BkYGBu+N/AEMPCAALM/xkYGVABCwBZ4wNrAAAAeNpjYGRgYGBl0GJgZgABJiDmAkIGhv9gPgMADTABSQB42mNgZGFgnMDAysDA1Ml0hoGBoR9CM75mMGLkAIoysDIzYAUBaa4pDA7PGJ9xMjf8b2CIYW5gaAAKM4LkANt9C+UAAHjaY2GAABYIVmBgAAAA+gAtAAAAeNpjYGBgZoBgGQZGBhBwAfIYwXwWBg0gzQakGRmYnjE+4/z/n4EBQksxSf6GqgcCRjYGOIeRCUgwMaACRoZhDwCiLwmoAAAAAAAAAAAAAAAASgCAeNpdjkFKw0AARf/vkIR0BkPayWRKQZtYY90ohJju2kOIbtz0KD1HVm50UfEmWXoAr9ADOHFARHHzeY//Fx8Ci+FJfIgdJFa4AhgiMshbrCuIsLxhFJZVs+Vl1bT1GddtbXTC3OhohN4dg4BJ3zMJAnccyfm468ZzHXddrH9ZKbHzdf9n/vkY/xv9sPQXgGEvBrHHwst5kTbXLE+YpYVPkxepPmW94W16UbdNJd6f3SAzo5W7m1jaKd+8ZZIvk5nlKw9SK6Wle7BLS3f/bTzQLmfAF2T1NsQAeNp9kD1OAzEQhZ/zByQSQiCoXVEA2vyUKRMp9Ailo0g23pBo1155nUg5AS0VB6DlGByAGyDRcgpelkmTImvt6PObmeexAZzjGwr/3yXuhBWO8ShcwREy4Sr1F+Ea+V24jhY+hRvUf4SbuFUD4RYu1BsdVO2Eu5vSbcsKZxgIV3CKJ+Eq9ZVwjfwqXMcVPoQb1L+EmxjjV7iFa2WpDOFhMEFgnEFjig3jAjEcLJIyBtahOfRmEsxMTzd6ETubOBso71dilwMeaDnngCntPbdmvkon/mDLgdSYbh4FS7YpjS4idCgbXyyc1d2oc7D9nu22tNi/a4E1x+xRDWzU/D3bM9JIbAyvkJI18jK3pBJTj2hrrPG7ZynW814IiU68y/SIx5o0dTr3bmniwOLn8owcfbS5kj33qBw+Y1kIeb/dTsQgil2GP5PYcRkAAAB42mNgYoAALjDJyIAOWMGiTIxMjMxsKak5qSWpbFmZiRmJ+QAmgAUIAAAAAf//AAIAAQAAAAwAAAAWAAAAAgABAAMABAABAAQAAAACAAAAAHjaY2BgYGQAgqtL1DlA9M296nUwGgA+8QYgAAA=) format('woff');
		font-weight: normal;
		font-style: normal;
	}

	.tui-upload-icon {
		font-family: "tuiUpload" !important;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		padding: 10rpx;
	}

	.tui-icon-delete:before {
		content: "\e601";
	}

	.tui-icon-plus:before {
		content: "\e609";
	}

	.tui-upload-box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.tui-upload-add {
		font-weight: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		overflow: hidden;
		box-sizing: border-box;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.tui-upload__unborder {
		border-width: 0;
	}

	.tui-upload__border {
		border-width: 1px;
	}

	.tui-image-item {
		position: relative;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		flex-shrink: 0;
	}

	.tui-item-img {
		display: block;
	}

	.tui-img-del {
		width: 36rpx;
		height: 36rpx;
		position: absolute;
		right: -12rpx;
		top: -12rpx;
		border-radius: 50%;
		color: white;
		font-size: 34rpx;
		z-index: 5;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.tui-img-del::before {
		content: '';
		width: 16rpx;
		height: 1px;
		position: absolute;
		left: 10rpx;
		top: 18rpx;
		background-color: #fff;
	}

	.tui-upload-mask {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx 0;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 3;
	}

	.tui-upload-loading {
		width: 28rpx;
		height: 28rpx;
		border-radius: 50%;
		border: 2px solid;
		border-color: #B2B2B2 #B2B2B2 #B2B2B2 #fff;
		animation: tui-rotate 0.7s linear infinite;
	}

	@keyframes tui-rotate {
		0% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.tui-tips {
		font-size: 26rpx;
		color: #fff;
	}

	.tui-mask-btn {
		padding: 4rpx 16rpx;
		border-radius: 40rpx;
		text-align: center;
		font-size: 24rpx;
		color: #fff;
		border: 1px solid #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 26rpx;
	}

	.tui-btn-hover {
		opacity: 0.8;
	}
</style>