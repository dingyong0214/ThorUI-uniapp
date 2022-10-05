<template>
	<view class="container">
		<tui-image-cropper :lockRatio="true" :imageUrl="imageUrl" @ready="ready" @cropper="cropper"></tui-image-cropper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			src: '',
			imageUrl: '' //要裁剪的图片
		};
	},
	onLoad(options) {
		this.src = options.src || '';
		//如果从上个页面传值时可显示loading
		this.src &&
			uni.showLoading({
				title: '请稍候...',
				mask: true
			});
	},
	methods: {
		ready() {
			this.imageUrl = this.src;
		},
		cropper(e) {
			//裁剪完成后处理逻辑，百度小程序不支持预览本地图片
			uni.previewImage({
				current: '', // 当前显示图片的http链接
				urls: [e.url] // 需要预览的图片http链接列表
			});
			// #ifdef MP-BAIDU
			console.log(`百度小程序previewImage Api不支持预览本地图片：${e.url}`)
			// #endif
		}
	}
};
</script>

<style></style>
