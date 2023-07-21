<template>
	<view class="container">
		<view class="header">
			<view class="title">upload</view>
			<view class="sub-title">图片上传，需要根据上传接口实际返回数据进行调整或传入一个返回Promise的文件上传的函数 </view>
		</view>
		<view class="tui-box-upload">
			<tui-upload :value="value" :serverUrl="serverUrl" @complete="result" @remove="remove"></tui-upload>
			<tui-section title="传入一个返回Promise的文件上传的函数" is-line margin="100rpx 0 20rpx"></tui-section>
			<tui-upload ref="uploadRef" @complete="complete" @reupload="reUpload"></tui-upload>
			<tui-button bold type="gray-primary" btn-size="medium" @click="upload" margin="30rpx 0">上传</tui-button>
		</view>
	</view>
</template>

<script>
	//实际使用需要传入上传地址，以及上传接口返回数据进行调整组件
	export default {
		data() {
			return {
				imageData: [],
				//上传接口地址，此处需换成自己的接口地址，示例接口地址已关闭
				serverUrl: "https://api.thorui.cn/upload/uploadFile",
				value: [], //初始化图片
				imageList: []
			}
		},
		onLoad() {
			setTimeout(() => {
				this.value = ['https://thorui.cn/images/index/logo.png']
			}, 200)
		},
		methods: {
			result: function(e) {
				console.log(e)
				this.imageData = e.imgArr;
			},
			remove: function(e) {
				//移除图片
				console.log(e)
				let index = e.index
			},
			//以下为调用upload 方法上传示例
			uploadImg(file) {
				//上传的文件信息
				console.log('组件内返回的文件信息', file)
				// 文件上传的函数，返回一个promise
				//上传成功后返回上传后的图片地址，上传失败则返回false即可
				return new Promise((resolve, reject) => {
					//调用api上传，所有需要参数自行补充【上传自行实现，便于扩展】
					uni.uploadFile({
						//请换成真实的上传接口地址，示例接口已关闭
						url: this.serverUrl,
						name: 'file',
						// header: {},
						// formData:{},
						filePath: file.path,
						success: (res) => {
							//上传成功后，将图片地址返回
							//此处逻辑自行根据接口返回判断
							console.log(res)
							if (true) {
								//返回上传成功后的图片地址，根据实际接口返回处理数据 
								const data = JSON.parse(res.data.replace(/\ufeff/g, "") || "{}")
								let url = data.data.url
								resolve(url)
							} else {
								//上传失败
								reject(false)
							}
						},
						fail: (err) => {
							//上传失败
							console.log(err)
							reject(false)
						}
					})
				})
			},
			upload() {
				if(this.imageList.length===0){
					this.tui.toast('请选择图片！')
					return;
				}
				//调用upload 方法上传，并传入函数，初始上传时勿传入索引值
				this.$refs.uploadRef && this.$refs.uploadRef.upload(this.uploadImg)
			},
			//重新上传
			reUpload(e) {
				//当前上传按钮索引值
				console.log(e.index)
				//调用upload 方法上传，并传入函数，且此时需要传入index值
				this.$refs.uploadRef && this.$refs.uploadRef.upload(this.uploadImg, e.index)
			},
			complete(e) {
				console.log(e)
				this.imageList = e.imgArr
			}

		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}

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

	.tui-box-upload {
		padding-left: 25rpx;
		box-sizing: border-box;
	}
</style>