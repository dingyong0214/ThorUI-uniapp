<template>
	<view class="container">
		<view class="header">
			<view class="title">Image Cropper</view>
			<view class="sub-title">图片裁剪：可设置裁剪框宽高，边缘线颜色，锁定裁剪框大小，是否可触摸旋转等</view>
		</view>
		<view class="tui-btn-box">
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="chooseImage">组件默认使用</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="customCropper">自定义操作栏+详细使用</tui-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		chooseImage() {
			//uni.chooseImage 返回的 tempFilePaths 如果为空，检查自己的开发工具是否为最新版
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['album', 'camera'],
				success: res => {
					const tempFilePaths = res.tempFilePaths[0];
					this.tui.href('../cropper-default-old/cropper-default-old?src=' + tempFilePaths);
				}
			});
		},
		customCropper() {
			this.tui.href('../cropper-custom-old/cropper-custom-old');
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

.tui-btn-box {
	width: 100%;
	padding: 10rpx 40rpx;
	box-sizing: border-box;
}
</style>
