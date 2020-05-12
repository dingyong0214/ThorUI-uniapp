<template>
	<view class="tui-image-container" :class="{ 'tui-image-direction': direction == 'column' }">
		<view
			v-for="(item, index) in imageList"
			:key="index"
			class="tui-image-item_box"
			:style="{
				width: width,
				height: height,
				borderRadius: radius,
				marginLeft: direction == 'column' ? 0 : (index && distance) + 'rpx',
				marginTop: direction == 'row' ? 0 : (index && distance) + 'rpx'
			}"
			@tap="bindClick(index, item.id)"
		>
			<image
				class="tui-image-item"
				:mode="mode"
				:lazy-load="lazyLoad"
				fade-show="fadeShow"
				:webp="webp"
				:show-menu-by-longpress="longpress"
				@error="error"
				@load="load"
				:style="{ width: width, height: height, borderRadius: radius, borderWidth: borderWidth, borderColor: borderColor }"
				:src="item.src"
			></image>
			<slot />
		</view>
	</view>
</template>

<script>
export default {
	name: 'tuiImage',
	props: {
		//图片集合
		/*
		  [{id:1,src:"1.png"}]
		*/
		imageList: {
			type: Array,
			default: () => {
				return [];
			}
		},
		//图片宽度
		width: {
			type: String,
			default: '120rpx'
		},
		//图片高度
		height: {
			type: String,
			default: '120rpx'
		},
		//图片边框宽度 rpx
		borderWidth: {
			type: String,
			default: '0'
		},
		//图片边框颜色 可传rgba
		borderColor: {
			type: String,
			default: '#fff'
		},
		//图片圆角
		radius: {
			type: String,
			default: '50%'
		},
		//图片裁剪、缩放的模式
		mode: {
			type: String,
			default: 'scaleToFill'
		},
		//图片懒加载。只针对page与scroll-view下的image有效
		lazyLoad: {
			type: Boolean,
			default: true
		},
		//图片显示动画效果 | 仅App-nvue 2.3.4+ Android有效
		fadeShow: {
			type: Boolean,
			default: true
		},
		//默认不解析 webP 格式，只支持网络资源 | 微信小程序2.9.0
		webp: {
			type: Boolean,
			default: false
		},
		//开启长按图片显示识别小程序码菜单 | 微信小程序2.7.0
		longpress: {
			type: Boolean,
			default: false
		},
		//是否组合排列
		isGroup: {
			type: Boolean,
			default: false
		},
		//排列方向 row ，column
		direction: {
			type: String,
			default: 'row'
		},
		//偏移距离 rpx
		distance: {
			type: [Number, String],
			default: -16
		}
	},
	data() {
		return {};
	},
	methods: {
		error(e) {
			this.$emit('errorEvent', e);
		},
		load(e) {
			this.$emit('loaded', e);
		},
		bindClick(index, id) {
			this.$emit('click', {
				index: index,
				id: id || ''
			});
		}
	}
};
</script>

<style scoped>
.tui-image-container {
	display: inline-flex;
	align-items: center;
}
.tui-image-direction {
	flex-direction: column;
}
.tui-image-item_box {
	position: relative;
}
.tui-image-item {
	border-style: solid;
	flex-shrink: 0;
	display: block;
}
</style>
