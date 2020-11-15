<template>
	<view class="tui-slide-vcode" :style="{width:slideBarWidth+'px',height:slideBlockWidth+'px',backgroundColor:backgroundColor}">
		<text class="tui-text-flashover" :style="{fontSize:size+'rpx',background:getBgColor}">拖动滑块验证</text>
		<view class="tui-slide-glided" :style="{backgroundColor:activeBgColor}">
			<text :style="{fontSize:size+'rpx',color:activeColor}" v-if="isPass">{{passText}}</text>
		</view>
		<view class="tui-slider-block" :style="{width:slideBlockWidth+'px',height:slideBlockWidth+'px',borderColor:isPass?activeBorderColor: borderColor}"
		 :change:prop="parse.slidereset" :prop="reset" :data-slideBarWidth="slideBarWidth" :data-slideBlockWidth="slideBlockWidth"
		 :data-errorRange="errorRange" :data-disabled="disabled" @touchstart="parse.touchstart" @touchmove="parse.touchmove"
		 @touchend="parse.touchend">
			<text class="tui-slide-icon tui-icon-double_arrow" :style="{fontSize:iconSize+'rpx',color:arrowColor}" v-if="!isPass"></text>
			<text class="tui-slide-icon tui-icon-check_mark" :style="{fontSize:iconSize+'rpx',color:checkColor}" v-if="isPass"></text>
		</view>
	</view>
</template>
<script src="./tui-slide-verify.wxs" module="parse" lang="wxs"></script>
<script>
	export default {
		name: "tuiSlideVerify",
		props: {
			//滑动条宽度 px
			slideBarWidth: {
				type: [Number, String],
				default: 300
			},
			//滑块宽度 px = 滑动条高度
			slideBlockWidth: {
				type: [Number, String],
				default: 40
			},
			//滑块border颜色
			borderColor: {
				type: String,
				default: '#E9E9E9'
			},
			//通过验证后滑块border颜色
			activeBorderColor: {
				type: String,
				default: '#19be6b'
			},
			//误差范围 px 距离右侧多少距离验证通过
			errorRange: {
				type: [Number, String],
				default: 2
			},
			//重置滑动
			resetSlide: {
				type: Number,
				default: 0
			},
			//提示文字大小
			size: {
				type: Number,
				default: 30
			},
			//提示文字颜色
			color: {
				type: String,
				default: "#444"
			},
			//验证通过后提示文字颜色
			activeColor: {
				type: String,
				default: "#fff"
			},
			//图标字体大小 rpx
			iconSize: {
				type: Number,
				default: 32
			},
			//箭头图标颜色
			arrowColor: {
				type: String,
				default: "#cbcbcb"
			},
			checkColor: {
				type: String,
				default: "#19be6b"
			},
			//滑动条背景色
			backgroundColor: {
				type: String,
				default: "#E9E9E9"
			},
			//滑过区域背景颜色
			activeBgColor: {
				type: String,
				default: "#19be6b"
			},
			//通过提示文字
			passText: {
				type: String,
				default: '验证通过'
			}

		},
		computed: {
			getBgColor() {
				return `-webkit-gradient(linear, left top, right top, color-stop(0, ${this.color}), color-stop(.4, ${this.color}), color-stop(.5, white), color-stop(.6, ${this.color}), color-stop(1, ${this.color}))`
			}
		},
		watch: {
			resetSlide(val) {
				if (val > 0) {
					this.slideReset()
				}
			}
		},
		data() {
			return {
				isPass: false,
				disabled: false,
				reset: 0
			}
		},
		methods: {
			success() {
				//验证成功
				this.isPass = true;
				this.disabled = true;
				this.$emit('success', {})
			},
			slideReset() {
				this.isPass = false;
				this.disabled = false;
				this.reset++;
			}
		}
	}
</script>

<style scoped>
	@font-face {
		font-family: 'tuiSlideVcode';
		src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUYAA0AAAAAB1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE/AAAABoAAAAci6lfG0dERUYAAATcAAAAHgAAAB4AKQALT1MvMgAAAaAAAABCAAAAVjxuSCZjbWFwAAAB+AAAAEUAAAFK5n3pi2dhc3AAAATUAAAACAAAAAj//wADZ2x5ZgAAAkwAAAD8AAABJDQ/n7JoZWFkAAABMAAAADAAAAA2GSR8FGhoZWEAAAFgAAAAHQAAACQHygOFaG10eAAAAeQAAAARAAAAEgwUAD5sb2NhAAACQAAAAAwAAAAMAFQAkm1heHAAAAGAAAAAHgAAACABEQA6bmFtZQAAA0gAAAFJAAACiCnmEVVwb3N0AAAElAAAAD0AAABPYJEgVXjaY2BkYGAA4oqPSw3j+W2+MnCzMIDAbaY5nHBa5P905jfMeUAuBwMTSBQAHycKCHjaY2BkYGBu+N/AEMPCAALMbxgYGVABCwBYegNYAAAAeNpjYGRgYGBl0GNgYgABEMkFhAwM/8F8BgANfQFMAAB42mNgZGFgnMDAysDA1Ml0hoGBoR9CM75mMGLkAIoysDIzYAUBaa4pDA7PGJ6ZMDf8b2CIYW5gaAAKM4LkAN6ZDA8AAHjaY2GAABYItmMQAQABaABfAAAAeNpjYGBgZoBgGQZGBhBwAfIYwXwWBg0gzQakGRmYnjE8M/n/n4EBQksxS16AqgcCRjYGOIeRCUgwMaACRoZhDwDR6wnSAAAAAAAAAAAAAAAAVACSeNpFzjFOwzAYxfHv2Yodu4ozxHEq2qoSEilLQYoqh6lIIBaugMTC3hswMcPQhYmBjV4AMSFxAppjQDmDSzJle9L7DX9itNx/8i9+QY7mRPDn8ItTlDOcQLhCwcBVtWLCOl/D10v0L5vHnAGMx+EuLSctvQ8PBpMyxWU30/GxwUvMwXqDW6lkNIikllgnGM1MeAqPyWxkeNktczRGgrXUXOkeETGy+2f+x1c0oGnbKUg6KjzVJWUQh23TwlfTrhW+cpZRE3ZCIG8a5EKE3U34yM/sRttCb5hiuNLDjK+i8PO9Db8igmu2cOE1vNsWDTP9xhiuVXZARP+yvTqbeNp9kD1OAzEQhZ/zByQSQiCoXVEA2vyUKRMp9Ailo0g23pBo1155nUg5AS0VB6DlGByAGyDRcgpelkmTImvt6PObmeexAZzjGwr/3yXuhBWO8ShcwREy4Sr1F+Ea+V24jhY+hRvUf4SbuFUD4RYu1BsdVO2Eu5vSbcsKZxgIV3CKJ+Eq9ZVwjfwqXMcVPoQb1L+EmxjjV7iFa2WpDOFhMEFgnEFjig3jAjEcLJIyBtahOfRmEsxMTzd6ETubOBso71dilwMeaDnngCntPbdmvkon/mDLgdSYbh4FS7YpjS4idCgbXyyc1d2oc7D9nu22tNi/a4E1x+xRDWzU/D3bM9JIbAyvkJI18jK3pBJTj2hrrPG7ZynW814IiU68y/SIx5o0dTr3bmniwOLn8owcfbS5kj33qBw+Y1kIeb/dTsQgil2GP5PYcRkAAAB42mNgYoAALjDJyIAOWMGiTIxMjMyCOalpJbop+aVJOam6iUVF+eUCKaWZ6fmlJZmJeckZ+XnpugDvDw1eAAAAAAAAAf//AAIAAQAAAAwAAAAWAAAAAgABAAMABAABAAQAAAACAAAAAHjaY2BgYGQAgqtL1DlA9G2mOZwwGgA1wQSuAAA=) format('woff');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	.tui-slide-icon {
		font-family: "tuiSlideVcode" !important;
		font-size: 34rpx;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
	}

	.tui-icon-check_mark:before {
		content: "\e634";
	}

	.tui-icon-double_arrow:before {
		content: "\e600";
	}

	.tui-slide-vcode {
		background-color: #EAEEF1;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-slide-glided {
		width: 0;
		height: 100%;
		background-color: #19BE6B;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-slider-block {
		position: absolute;
		z-index: 2;
		background-color: #FFFFFF;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1rpx solid;
		box-sizing: border-box;
		left: 0;
		top: 0;
		transition: border-color 0.08s;
	}

	.tui-text-flashover {
		-webkit-background-clip: text !important;
		-webkit-text-fill-color: transparent !important;
		-webkit-animation: animate 1.8s infinite;
	}

	@-webkit-keyframes animate {
		from {
			background-position: -90rpx;
		}

		to {
			background-position: 90rpx;
		}
	}

	@keyframes animate {
		from {
			background-position: -90rpx;
		}

		to {
			background-position: 90rpx;
		}
	}
</style>
