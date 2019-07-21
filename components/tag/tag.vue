<template>
	<view class="tui-tag-class" :class="[size?'tui-tag-'+size:'tui-tag',getClassName(shape,plain),getTypeClass(type,plain)]"
	 @tap="handleClick" v-if="visible">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "tuiTag",
		props: {
			type: {
				type: String,
				default: 'primary'
			},
			// '', small
			size: {
				type: String,
				default: ''
			},
			// circle, square，circleLeft，circleRight
			shape: {
				type: String,
				default: 'square'
			},
			//是否空心
			plain: {
				type: Boolean,
				default: false
			},
			//是否可见
			visible: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			handleClick() {
				this.$emit('click')
			},
			getTypeClass: function(type, plain) {
				return plain ? 'tui-' + type + '-outline' : 'tui-' + type
			},
			getClassName: function(shape, plain) {
				//circle, square，circleLeft，circleRight
				var className = plain ? 'tui-tag-outline ' : '';
				if (shape != 'square') {
					if (shape == "circle") {
						className = className + (plain ? 'tui-tag-outline-fillet' : 'tui-tag-fillet');
					} else if (shape == "circleLeft") {
						className = className + 'tui-tag-fillet-left';
					} else if (shape == "circleRight") {
						className = className + 'tui-tag-fillet-right';
					}
				}
				return className;
			}
		}
	}
</script>

<style>
/* color start*/

.tui-primary {
  background: #5677fc !important;
  color: #fff;
}

.tui-light-primary {
  background: #5c8dff !important;
  color: #fff;
}

.tui-dark-primary {
  background: #4a67d6 !important;
  color: #fff;
}

.tui-dLight-primary {
  background: #4e77d9 !important;
  color: #fff;
}

.tui-danger {
  background: #ed3f14 !important;
  color: #fff;
}

.tui-red {
  background: #ff201f !important;
  color: #fff;
}

.tui-warning {
  background: #ff7900 !important;
  color: #fff;
}

.tui-green {
  background: #19be6b !important;
  color: #fff;
}

.tui-high-green {
  background: #52dcae !important;
  color: #52dcae;
}

.tui-black {
  background: #000 !important;
  color: #fff;
}

.tui-white {
  background: #fff !important;
  color: #333 !important;
}

.tui-translucent {
  background: rgba(0, 0, 0, 0.7);
}

.tui-light-black {
  background: #333 !important;
}

.tui-gray {
  background: #ededed !important;
}

.tui-phcolor-gray {
  background: #ccc !important;
}

.tui-divider-gray {
  background: #eaeef1 !important;
}

.tui-btn-gray {
  background: #ededed !important;
  color: #999 !important;
}

.tui-hover-gray {
  background: #f7f7f9 !important;
}

.tui-bg-gray {
  background: #fafafa !important;
}

.tui-light-blue {
  background: #ecf6fd;
  color: #4dabeb !important;
}

.tui-light-brownish {
  background: #fcebef;
  color: #8a5966 !important;
}

.tui-light-orange {
  background: #fef5eb;
  color: #faa851 !important;
}

.tui-light-green {
  background: #e8f6e8;
  color: #44cf85 !important;
}

.tui-primary-outline::after {
  border: 1px solid #5677fc !important;
}

.tui-primary-outline {
  color: #5677fc !important;
  background: none;
}

.tui-danger-outline {
  color: #ed3f14 !important;
  background: none;
}

.tui-danger-outline::after {
  border: 1px solid #ed3f14 !important;
}

.tui-red-outline {
  color: #ff201f !important;
  background: none;
}

.tui-red-outline::after {
  border: 1px solid #ff201f !important;
}

.tui-warning-outline {
  color: #ff7900 !important;
  background: none;
}

.tui-warning-outline::after {
  border: 1px solid #ff7900 !important;
}

.tui-green-outline {
  color: #44cf85 !important;
  background: none;
}

.tui-green-outline::after {
  border: 1px solid #44cf85 !important;
}

.tui-high-green-outline {
  color: #52dcae !important;
  background: none;
}

.tui-high-green-outline::after {
  border: 1px solid #52dcae !important;
}

.tui-gray-outline {
  color: #999 !important;
  background: none;
}

.tui-gray-outline::after {
  border: 1px solid #ccc !important;
}


.tui-black-outline {
  color: #333 !important;
  background: none;
}

.tui-black-outline::after {
  border: 1px solid #333 !important;
}

.tui-white-outline {
  color: #fff !important;
  background: none;
}

.tui-white-outline::after {
  border: 1px solid #fff !important;
}

/* color end*/

/* tag start*/

.tui-tag {
  padding: 16upx 26upx;
  font-size: 28upx;
  border-radius: 6upx;
  /* display: inline-block;
  vertical-align: middle; */
  line-height: 28upx;
}

.tui-tag-small {
  padding: 10upx 16upx;
  font-size: 24upx;
  border-radius: 6upx;
  /* display: inline-block;
  vertical-align: middle; */
  line-height: 24upx;
}

.tui-tag-outline {
  position: relative;
  background: none;
  color: #5677fc;
}

.tui-tag-outline::after {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scale(0.5, 0.5);
  transform: scale(0.5, 0.5);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  left: 0;
  top: 0;
  border-radius: 80upx;
  border: 1px solid #5677fc;
}

.tui-tag-fillet {
  border-radius: 50upx;
}

.tui-white.tui-tag-fillet::after {
  border-radius: 80upx;
}

.tui-tag-outline-fillet::after {
  border-radius: 80upx;
}

.tui-tag-fillet-left {
  border-radius: 50upx 0 0 50upx;
}

.tui-tag-fillet-right {
  border-radius: 0 50upx 50upx 0;
}

.tui-tag-fillet-left.tui-tag-outline::after {
  border-radius: 100upx 0 0 100upx;
}

.tui-tag-fillet-right.tui-tag-outline::after {
  border-radius: 0 100upx 100upx 0;
}

/* tag end*/

</style>
