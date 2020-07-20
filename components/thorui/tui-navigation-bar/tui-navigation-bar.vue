<template>
	<view
		class="tui-navigation-bar"
		:class="{ 'tui-bar-line': opacity > 0.85 && splitLine, 'tui-navbar-fixed': isFixed, 'tui-backdrop__filter': backdropFilter }"
		:style="{ height: height + 'px', backgroundColor:backgroundColor,opacity:opacity }"
	>
		<view class="tui-status-bar" :style="{ height: statusBarHeight + 'px' }" v-if="isImmersive"></view>
		<view class="tui-navigation_bar-title" :style="{ opacity: opacity, color: color, paddingTop: top - statusBarHeight + 'px' }" v-if="title && !isCustom">{{ title }}</view>
		<slot />
	</view>
</template>

<script>
export default {
	name: 'tuiNavigationBar',
	props: {
		//NavigationBar标题
		title: {
			type: String,
			default: ''
		},
		//NavigationBar标题颜色
		color: {
			type: String,
			default: '#333'
		},
		//NavigationBar背景颜色
		backgroundColor: {
			type: String,
			default: '#fff'
		},
		//是否需要分割线
		splitLine: {
			type: Boolean,
			default: false
		},
		//是否设置不透明度
		isOpacity: {
			type: Boolean,
			default: true
		},
		//滚动条滚动距离
		scrollTop: {
			type: [Number, String],
			default: 0
		},
		/*
			 isOpacity 为true时生效
			 opacity=scrollTop /windowWidth * scrollRatio
			*/
		scrollRatio: {
			type: [Number, String],
			default: 0.3
		},
		//是否自定义header内容
		isCustom: {
			type: Boolean,
			default: false
		},
		//是否沉浸式
		isImmersive: {
			type: Boolean,
			default: true
		},
		isFixed: {
			type: Boolean,
			default: true
		},
		//是否开启高斯模糊效果[仅在支持的浏览器有效果]
		backdropFilter: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		scrollTop(newValue, oldValue) {
			if (this.isOpacity) {
				this.opacityChange();
			}
		}
	},
	data() {
		return {
			width: 375, //header宽度
			left: 375, //小程序端 左侧距胶囊按钮距离
			height: 44, //header高度
			top: 0,
			scrollH: 1, //滚动总高度,计算opacity
			opacity: 1, //0-1
			statusBarHeight: 0 //状态栏高度
		};
	},
	created() {
		this.opacity = this.isOpacity ? 0 : 1;
		let obj = {};
		// #ifdef MP-WEIXIN
		obj = wx.getMenuButtonBoundingClientRect();
		// #endif
		// #ifdef MP-BAIDU
		obj = swan.getMenuButtonBoundingClientRect();
		// #endif
		// #ifdef MP-ALIPAY
		my.hideAddToDesktopMenu();
		// #endif
		uni.getSystemInfo({
			success: res => {
				this.statusBarHeight = res.statusBarHeight;
				this.width = res.windowWidth;
				this.left = obj.left || res.windowWidth;
				if (this.isImmersive) {
					this.height = obj.top ? obj.top + obj.height + 8 : res.statusBarHeight + 44;
				}
				this.scrollH = res.windowWidth * this.scrollRatio;
				this.top = obj.top ? obj.top + (obj.height - 32) / 2 : res.statusBarHeight + 6;
				this.$emit('init', {
					width: this.width,
					height: this.height,
					left: obj.left,
					top: this.top,
					statusBarHeight: this.statusBarHeight,
					opacity: this.opacity
				});
			}
		});
	},
	methods: {
		opacityChange() {
			let scroll = this.scrollTop <= 1 ? 0 : this.scrollTop;
			let opacity = scroll / this.scrollH;
			if ((this.opacity >= 1 && opacity >= 1) || (this.opacity == 0 && opacity == 0)) {
				return;
			}
			this.opacity = opacity;
			this.$emit('change', {
				opacity: this.opacity
			});
		}
	}
};
</script>

<style scoped>
.tui-navigation-bar {
	width: 100%;
}
.tui-backdrop__filter {
	/* Safari for macOS & iOS */
	-webkit-backdrop-filter: blur(15px);
	/* Google Chrome */
	backdrop-filter: blur(15px);
}

.tui-navbar-fixed {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 9998;
}

.tui-status-bar {
	width: 100%;
}

.tui-navigation_bar-title {
	width: 100%;
	font-size: 17px;
	line-height: 17px;
	/* #ifndef APP-PLUS */
	font-weight: 500;
	/* #endif */
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.tui-bar-line::after {
	content: '';
	position: absolute;
	border-bottom: 1rpx solid #eaeef1;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
	bottom: 0;
	right: 0;
	left: 0;
}
</style>
