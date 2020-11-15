<template>
	<button
		class="tui-btn"
		:class="[
			plain ? 'tui-' + type + '-outline' : 'tui-btn-' + (type || 'primary'),
			getDisabledClass(disabled, type, plain),
			getShapeClass(shape, plain),
			getShadowClass(type, shadow, plain),
			bold ? 'tui-text-bold' : '',
			link ? 'tui-btn__link' : ''
		]"
		:hover-class="getHoverClass(disabled, type, plain)"
		:style="{ width: width, height: height, lineHeight: height, fontSize: size + 'rpx', margin: margin }"
		:loading="loading"
		:form-type="formType"
		:open-type="openType"
		@getuserinfo="bindgetuserinfo"
		@getphonenumber="bindgetphonenumber"
		@contact="bindcontact"
		@error="binderror"
		:disabled="disabled"
		@tap="handleClick"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'tuiButton',
	// #ifndef MP-QQ
	behaviors: ['wx://form-field-button'],
	// #endif
	props: {
		//样式类型 primary, white, danger, warning, green,blue, gray，black,brown,gray-primary,gray-danger,gray-warning,gray-green
		type: {
			type: String,
			default: 'primary'
		},
		//是否加阴影
		shadow: {
			type: Boolean,
			default: false
		},
		// 宽度 rpx或 %
		width: {
			type: String,
			default: '100%'
		},
		//高度 rpx
		height: {
			type: String,
			default: '96rpx'
		},
		//字体大小 rpx
		size: {
			type: Number,
			default: 32
		},
		bold: {
			type: Boolean,
			default: false
		},
		margin: {
			type: String,
			default: '0'
		},
		//形状 circle(圆角), square(默认方形)，rightAngle(平角)
		shape: {
			type: String,
			default: 'square'
		},
		plain: {
			type: Boolean,
			default: false
		},
		//link样式，去掉边框，结合plain一起使用
		link: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		//禁用后背景是否为灰色 （非空心button生效）
		disabledGray: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		formType: {
			type: String,
			default: ''
		},
		openType: {
			type: String,
			default: ''
		},
		index: {
			type: [Number, String],
			default: 0
		},
		//是否需要阻止重复点击【默认200ms】
		preventClick: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			time: 0
		};
	},
	methods: {
		handleClick() {
			if (this.disabled) return;
			if (this.preventClick) {
				if(new Date().getTime() - this.time <= 200) return;
				this.time = new Date().getTime();
				setTimeout(() => {
					this.time = 0;
				}, 200);
			}
			this.$emit('click', {
				index: Number(this.index)
			});
		},
		bindgetuserinfo({ detail = {} } = {}) {
			this.$emit('getuserinfo', detail);
		},
		bindcontact({ detail = {} } = {}) {
			this.$emit('contact', detail);
		},
		bindgetphonenumber({ detail = {} } = {}) {
			this.$emit('getphonenumber', detail);
		},
		binderror({ detail = {} } = {}) {
			this.$emit('error', detail);
		},
		getShadowClass: function(type, shadow, plain) {
			let className = '';
			if (shadow && type != 'white' && !plain) {
				className = 'tui-shadow-' + type;
			}
			return className;
		},
		getDisabledClass: function(disabled, type, plain) {
			let className = '';
			if (disabled && type != 'white' && type.indexOf('-') == -1) {
				let classVal = this.disabledGray ? 'tui-gray-disabled' : 'tui-dark-disabled';
				className = plain ? 'tui-dark-disabled-outline' : classVal;
			}
			return className;
		},
		getShapeClass: function(shape, plain) {
			let className = '';
			if (shape == 'circle') {
				className = plain ? 'tui-outline-fillet' : 'tui-fillet';
			} else if (shape == 'rightAngle') {
				className = plain ? 'tui-outline-rightAngle' : 'tui-rightAngle';
			}
			return className;
		},
		getHoverClass: function(disabled, type, plain) {
			let className = '';
			if (!disabled) {
				className = plain ? 'tui-outline-hover' : 'tui-' + (type || 'primary') + '-hover';
			}
			return className;
		}
	}
};
</script>

<style scoped>
.tui-btn-primary {
	background: #5677fc !important;
	color: #fff;
}

.tui-shadow-primary {
	box-shadow: 0 10rpx 14rpx 0 rgba(86, 119, 252, 0.2);
}

.tui-btn-danger {
	background: #eb0909 !important;
	color: #fff;
}

.tui-shadow-danger {
	box-shadow: 0 10rpx 14rpx 0 rgba(235, 9, 9, 0.2);
}

.tui-btn-warning {
	background: #fc872d !important;
	color: #fff;
}

.tui-shadow-warning {
	box-shadow: 0 10rpx 14rpx 0 rgba(252, 135, 45, 0.2);
}

.tui-btn-green {
	background: #07c160 !important;
	color: #fff;
}

.tui-shadow-green {
	box-shadow: 0 10rpx 14rpx 0 rgba(7, 193, 96, 0.2);
}

.tui-btn-blue {
	background: #007aff !important;
	color: #fff;
}

.tui-shadow-blue {
	box-shadow: 0 10rpx 14rpx 0 rgba(0, 122, 255, 0.2);
}

.tui-btn-white {
	background: #fff !important;
	color: #333 !important;
}

.tui-btn-gray {
	background: #bfbfbf !important;
	color: #fff !important;
}

.tui-btn-black {
	background: #333 !important;
	color: #fff !important;
}
.tui-btn-brown{
	background: #ac9157 !important;
	color: #fff !important;
}

.tui-btn-gray-black {
	background: #f2f2f2 !important;
	color: #333;
}

.tui-btn-gray-primary {
	background: #f2f2f2 !important;
	color: #5677fc !important;
}

.tui-gray-primary-hover {
	background: #d9d9d9 !important;
}

.tui-btn-gray-green {
	background: #f2f2f2 !important;
	color: #07c160 !important;
}

.tui-gray-green-hover {
	background: #d9d9d9 !important;
}

.tui-btn-gray-danger {
	background: #f2f2f2 !important;
	color: #eb0909 !important;
}

.tui-gray-danger-hover {
	background: #d9d9d9 !important;
}

.tui-btn-gray-warning {
	background: #f2f2f2 !important;
	color: #fc872d !important;
}

.tui-gray-warning-hover {
	background: #d9d9d9 !important;
}

.tui-shadow-gray {
	box-shadow: 0 10rpx 14rpx 0 rgba(191, 191, 191, 0.2);
}

.tui-hover-gray {
	background: #f7f7f9 !important;
}

.tui-black-hover {
	background: #555 !important;
	color: #e5e5e5 !important;
}
.tui-brown-hover{
	background: #A37F49 !important;
	color: #e5e5e5 !important;
}

/* button start*/

.tui-btn {
	width: 100%;
	position: relative;
	border: 0 !important;
	border-radius: 6rpx;
	padding-left: 0;
	padding-right: 0;
	overflow: visible;
}

.tui-btn::after {
	content: '';
	position: absolute;
	width: 200%;
	height: 200%;
	transform-origin: 0 0;
	transform: scale(0.5, 0.5) translateZ(0);
	box-sizing: border-box;
	left: 0;
	top: 0;
	border-radius: 12rpx;
	border: 0;
}

.tui-text-bold {
	font-weight: bold;
}

.tui-btn-white::after {
	border: 1px solid #bfbfbf;
}

.tui-white-hover {
	background: #e5e5e5 !important;
	color: #2e2e2e !important;
}

.tui-dark-disabled {
	opacity: 0.6 !important;
	color: #fafbfc !important;
}

.tui-dark-disabled-outline {
	opacity: 0.5 !important;
}

.tui-gray-disabled {
	background: #f3f3f3 !important;
	color: #919191 !important;
	box-shadow: none;
}

.tui-outline-hover {
	opacity: 0.5;
}

.tui-primary-hover {
	background: #4a67d6 !important;
	color: #e5e5e5 !important;
}

.tui-primary-outline::after {
	border: 1px solid #5677fc !important;
}

.tui-primary-outline {
	color: #5677fc !important;
	background: transparent;
}

.tui-danger-hover {
	background: #c80808 !important;
	color: #e5e5e5 !important;
}

.tui-danger-outline {
	color: #eb0909 !important;
	background: transparent;
}

.tui-danger-outline::after {
	border: 1px solid #eb0909 !important;
}

.tui-warning-hover {
	background: #d67326 !important;
	color: #e5e5e5 !important;
}

.tui-warning-outline {
	color: #fc872d !important;
	background: transparent;
}

.tui-warning-outline::after {
	border: 1px solid #fc872d !important;
}

.tui-green-hover {
	background: #06ad56 !important;
	color: #e5e5e5 !important;
}

.tui-green-outline {
	color: #07c160 !important;
	background: transparent;
}

.tui-green-outline::after {
	border: 1px solid #07c160 !important;
}

.tui-blue-hover {
	background: #0062cc !important;
	color: #e5e5e5 !important;
}

.tui-blue-outline {
	color: #007aff !important;
	background: transparent;
}

.tui-blue-outline::after {
	border: 1px solid #007aff !important;
}

/* #ifndef APP-NVUE */
.tui-btn-gradual {
	background: linear-gradient(90deg, rgb(255, 89, 38), rgb(240, 14, 44)) !important;
	color: #fff !important;
}

.tui-shadow-gradual {
	box-shadow: 0 10rpx 14rpx 0 rgba(235, 9, 9, 0.15);
}

/* #endif */

.tui-gray-hover {
	background: #a3a3a3 !important;
	color: #898989;
}

/* #ifndef APP-NVUE */
.tui-gradual-hover {
	background: linear-gradient(90deg, #d74620, #cd1225) !important;
	color: #fff !important;
}

/* #endif */

.tui-gray-outline {
	color: #999 !important;
	background: transparent !important;
}

.tui-white-outline {
	color: #fff !important;
	background: transparent !important;
}

.tui-black-outline {
	background: transparent !important;
	color: #333 !important;
}

.tui-gray-outline::after {
	border: 1px solid #ccc !important;
}

.tui-white-outline::after {
	border: 1px solid #fff !important;
}

.tui-black-outline::after {
	border: 1px solid #333 !important;
}

.tui-brown-outline {
	color: #ac9157 !important;
	background: transparent;
}
.tui-brown-outline::after {
	border: 1px solid #ac9157 !important;
}

/*圆角 */

.tui-fillet {
	border-radius: 50rpx;
}

.tui-btn-white.tui-fillet::after {
	border-radius: 98rpx;
}

.tui-outline-fillet::after {
	border-radius: 98rpx;
}

/*平角*/
.tui-rightAngle {
	border-radius: 0;
}

.tui-btn-white.tui-rightAngle::after {
	border-radius: 0;
}

.tui-outline-rightAngle::after {
	border-radius: 0;
}
.tui-btn__link::after {
	border: 0 !important;
}
</style>
