<template>
	<view
		class="tui-navigation-bar"
		:class="{ 'tui-bar-line': opcity > 0.85 && splitLine, 'tui-navbar-fixed': isFixed }"
		:style="{ height: height + 'px', backgroundColor: `rgba(${backgroundColor},${opcity})` }"
	>
		<view class="tui-status-bar" :style="{ height: statusBarHeight + 'px' }" v-if="isImmersive"></view>
		<view class="tui-navigation_bar-title" :style="{ opacity: opcity, color: color, paddingTop: top - statusBarHeight + 'px' }" v-if="title && !isCustom">{{ title }}</view>
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
			default: '#fff'
		},
		//NavigationBar背景颜色 rgb
		backgroundColor: {
			type: String,
			default: '86,119,252'
		},
		//是否需要分割线
		splitLine: {
			type: Boolean,
			default: false
		},
		//是否设置不透明度
		isOpcity: {
			type: Boolean,
			default: true
		},
		//滚动条滚动距离
		scrollTop: {
			type: [Number, String],
			default: 0
		},
		/*
		 isOpcity 为true时生效
		 opcity=scrollTop /windowWidth * scrollRatio
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
		}
	},
	watch: {
		scrollTop(newValue, oldValue) {
			if (this.isOpcity) {
				this.opcityChange();
			}
		}
	},
	data() {
		return {
			width: 375, //header宽度
			left: 375, //小程序端 左侧距胶囊按钮距离
			height: 44, //header高度
			top: 0,
			scrollH: 1, //滚动总高度,计算opcity
			opcity: 0, //0-1
			statusBarHeight: 0 //状态栏高度
		};
	},
	created() {
		this.opcity = this.isOpcity ? this.opcity : 1;
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
					opcity: this.opcity
				});
			}
		});
	},
	methods: {
		opcityChange() {
			let scroll = this.scrollTop <= 1 ? 0 : this.scrollTop;
			let opcity = scroll / this.scrollH;
			if ((this.opcity >= 1 && opcity >= 1) || (this.opcity == 0 && opcity == 0)) {
				return;
			}
			this.opcity = opcity;
			this.$emit('change', {
				opcity: this.opcity
			});
		}
	}
};
</script>

<style scoped>
.tui-navigation-bar {
	width: 100%;
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
