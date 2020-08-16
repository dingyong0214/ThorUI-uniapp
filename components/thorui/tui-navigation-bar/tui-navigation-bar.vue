<template>
	<view
		class="tui-navigation-bar"
		:class="{ 'tui-bar-line': opacity > 0.85 && splitLine, 'tui-navbar-fixed': isFixed, 'tui-backdrop__filter': backdropFilter }"
		:style="{ height: height + 'px', backgroundColor: `rgba(${background},${opacity})`, opacity: dropDownOpacity }"
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
		//NavigationBar背景颜色,不支持rgb
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
		//不透明度最大值 0-1
		maxOpacity: {
			type: [Number, String],
			default: 1
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
		},
		//下拉隐藏NavigationBar，主要针对有回弹效果ios端
		dropDownHide: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		scrollTop(newValue, oldValue) {
			if (this.isOpacity) {
				this.opacityChange();
			}
		},
		backgroundColor(val) {
			if (val) {
				this.background = this.hexToRgb(val);
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
			statusBarHeight: 0, //状态栏高度
			background: '255,255,255', //header背景色
			dropDownOpacity: 1
		};
	},
	created() {
		this.opacity = this.isOpacity ? 0 : this.maxOpacity;
		this.background = this.hexToRgb(this.backgroundColor);
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
					left: this.left,
					top: this.top,
					statusBarHeight: this.statusBarHeight,
					opacity: this.opacity
				});
			}
		});
	},
	methods: {
		hexToRgb(hex) {
			let rgb = '255,255,255';
			if (hex && ~hex.indexOf('#')) {
				if (hex.length === 4) {
					let text = hex.substring(1, 4);
					hex = '#' + text + text;
				}
				let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
				if (result) {
					rgb = `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
				}
			}
			return rgb;
		},
		opacityChange() {
			if (this.dropDownHide) {
				if (this.scrollTop < 0) {
					if (this.dropDownOpacity > 0) {
						this.dropDownOpacity = 1 - Math.abs(this.scrollTop) / 30;
					}
				} else {
					this.dropDownOpacity = 1;
				}
			}
			let scroll = this.scrollTop <= 1 ? 0 : this.scrollTop;
			let opacity = scroll / this.scrollH;
			if ((this.opacity >= this.maxOpacity && opacity >= this.maxOpacity) || (this.opacity == 0 && opacity == 0)) {
				return;
			}
			this.opacity = opacity > this.maxOpacity ? this.maxOpacity : opacity;
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
	transition: opacity 0.4s;
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
