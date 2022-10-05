<template>
	<view class="container">
		<view class="tui-back">
			<tui-icon name="arrowleft" color="#fff" :size="30" @click="back"></tui-icon>
			<view :class="{ 'tui-btn-box': mp }">
				<tui-button :size="24" width="152rpx" height="56rpx" shape="circle" plain type="white" @click="btnCropper">确定裁剪</tui-button>
			</view>
		</view>
		<tui-image-cropper
			custom
			:lockRatio="lockRatio"
			:edgeColor="edgeColor"
			:startCutting="startCutting"
			:rotateAngle="rotateAngle"
			:lockWidth="lockWidth"
			:lockHeight="lockHeight"
			:disableRotate="disableRotate"
			:limitMove="limitMove"
			:imageUrl="imageUrl"
			@cropper="cropper"
		></tui-image-cropper>
		<view class="tui-custom-bar">
			<view class="tui-item-box">
				<tui-button width="136rpx" height="56rpx" :size="24" shape="circle" plain type="white" @click="choose">选择图片</tui-button>
				<text>边缘线颜色</text>
				<tui-button width="56rpx" height="56rpx" :size="24" @click="setedgeColor(0)"></tui-button>
				<tui-button width="56rpx" height="56rpx" :size="24" type="danger" @click="setedgeColor(1)"></tui-button>
				<tui-button width="56rpx" height="56rpx" :size="24" type="green" @click="setedgeColor(2)"></tui-button>
				<tui-button width="56rpx" height="56rpx" :size="24" type="white" @click="setedgeColor(3)"></tui-button>
				<tui-button width="56rpx" height="56rpx" :size="24" type="warning" @click="setedgeColor(4)"></tui-button>
			</view>
			<view class="tui-item-box">
				<tui-button width="110rpx" height="56rpx" :size="24" shape="circle" plain type="white" @click="rotate">旋转</tui-button>
				<text>锁定裁剪框宽</text>
				<switch color="#19be6b" class="tui-switch" @change="switchChange(1, $event)"></switch>
				<text>锁定裁剪框高</text>
				<switch color="#19be6b" class="tui-switch" @change="switchChange(2, $event)"></switch>
			</view>
			<view class="tui-item-box">
				<text>锁定比例</text>
				<switch color="#19be6b" class="tui-switch" @change="switchChange(3, $event)"></switch>
				<text>触摸旋转</text>
				<switch color="#19be6b" :checked="!disableRotate" class="tui-switch" @change="switchChange(4, $event)"></switch>
				<text>限制移动</text>
				<switch color="#19be6b" :checked="limitMove" class="tui-switch" @change="switchChange(5, $event)"></switch>
			</view>
		</view>
	</view>
</template>

<script>
//案例并非全部功能，更多使用参考文档
//裁剪框的宽高比例通过设置裁剪框宽高进行调整
export default {
	data() {
		return {
			imageUrl: '', //要裁剪的图片
			lockRatio: false, //锁定比例
			edgeColor: '#fff', //边缘线颜色
			startCutting: 0, //开始裁剪
			rotateAngle: 0, //旋转角度
			lockWidth: false, //裁剪框宽度锁定
			lockHeight: false, //裁剪框高度锁定
			disableRotate: true, //是否禁用触摸旋转 组件默认是true
			limitMove: false, //是否限制移动范围(剪裁框只能在图片内,为true不可触摸转动图片)
			mp: false
		};
	},
	onLoad(options) {
		// #ifdef MP
		this.mp = true;
		// #endif
	},
	methods: {
		choose() {
			//uni.chooseImage 返回的 tempFilePaths 如果为空，检查自己的开发工具是否为最新版
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['album', 'camera'],
				success: res => {
					const tempFilePaths = res.tempFilePaths[0];
					this.imageUrl = tempFilePaths;
					setTimeout(()=>{
						this.rotateAngle = 0;
					},200)
				}
			});
		},
		btnCropper() {
			this.startCutting += 1;
		},
		cropper(e) {
			//裁剪完成后处理逻辑
			uni.previewImage({
				current: '', // 当前显示图片的http链接
				urls: [e.url] // 需要预览的图片http链接列表
			});
			// #ifdef MP-BAIDU
			console.log(`百度小程序previewImage Api不支持预览本地图片：${e.url}`)
			// #endif
		},
		back() {
			uni.navigateBack();
		},
		setedgeColor(type) {
			this.edgeColor = ['#5677fc', '#EB0909', '#19be6b', '#ffffff', '#ff7900'][type];
		},
		rotate() {
			if (!this.imageUrl) return;
			this.rotateAngle += 90;
		},
		switchChange(type, e) {
			switch (type) {
				case 1:
					this.lockWidth = e.target.value;
					break;
				case 2:
					this.lockHeight = e.target.value;
					break;
				case 3:
					this.lockRatio = e.target.value;
					break;
				case 4:
					this.disableRotate = !e.target.value;
					if (!this.disableRotate) {
						this.limitMove = false;
					}
					break;
				case 5:
					this.limitMove = e.target.value;
					if (this.limitMove) {
						this.disableRotate = true;
					}
					break;
				default:
					break;
			}
		}
	}
};
</script>

<style>
.tui-custom-bar {
	width: 100%;
	padding: 0 20rpx 20rpx;
	box-sizing: border-box;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 9999;
}

.tui-item-box {
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 28rpx;
	justify-content: space-between;
	white-space: nowrap;
	padding-bottom: 12rpx;
}

.tui-flex-start {
	justify-content: flex-start !important;
}

.tui-switch {
	transform: scale(0.8);
	transform-origin: 0 center;
}

.tui-back {
	width: 100%;
	padding: 0 30rpx;
	box-sizing: border-box;
	position: fixed;
	z-index: 9999;
	left: 0;
	top: 50rpx;
	display: flex;
	align-items: center;
	/* #ifndef MP */
	justify-content: space-between;
	/* #endif */
}
.tui-btn-box {
	margin-left: 60rpx;
}
</style>
