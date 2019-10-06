<template>
	<view class="tui-numberbox-class tui-numberbox">
		<view class="tui-numbox-icon tui-icon-reduce " :class="[disabled || min>=value?'tui-disabled':'']" @tap="reduce" :style="{color:iconColor,fontSize:iconSize+'rpx'}"></view>
		<input type="number" v-model="inputValue" :disabled="disabled" @blur="blur" class="tui-num-input" :style="{color:color,fontSize:size+'rpx',background:bgcolor,height:height+'rpx',width:width+'rpx'}" />
		<view class="tui-numbox-icon tui-icon-plus" :class="[disabled || value>=max?'tui-disabled':'']" @tap="plus" :style="{color:iconColor,fontSize:iconSize+'rpx'}"></view>
	</view>
</template>

<script>
	export default {
		name: "tuiNumberbox",
		props: {
			value: {
				type: Number,
				default: 1
			},
			//最小值
			min: {
				type: Number,
				default: 1
			},
			//最大值
			max: {
				type: Number,
				default: 99
			},
			//迈步大小 1 1.1 10...
			step: {
				type: Number,
				default: 1
			},
			//是否禁用操作
			disabled: {
				type: Boolean,
				default: false
			},
			//加减图标大小 rpx
			iconSize: {
				type: Number,
				default: 26
			},
			iconColor: {
				type: String,
				default: "#666666"
			},
			//input 高度
			height: {
				type: Number,
				default: 42
			},
			//input 宽度
			width: {
				type: Number,
				default: 80
			},
			size: {
				type: Number,
				default: 28
			},
			//input 背景颜色
			bgcolor: {
				type: String,
				default: "#F5F5F5"
			},
			//input 字体颜色
			color: {
				type: String,
				default: "#333"
			},
			//索引值，列表中使用
			index: {
				type: Number,
				default: 0
			}
		},
		created() {
			this.inputValue = +this.value
		},
		data() {
			return {
				inputValue: 0
			};
		},
		watch: {
			value(val) {
				this.inputValue = +val
			}
		},
		methods: {
			getScale() {
				let scale = 1;
				//浮点型
				if (!Number.isInteger(this.step)) {
					scale = Math.pow(10, (this.step + '').split('.')[1].length)
				}
				return scale;
			},
			calcNum: function(type) {
				if (this.disabled) {
					return
				}
				const scale = this.getScale()
				let num = this.value * scale
				let step = this.step * scale
				if (type === 'reduce') {
					num -= step
				} else if (type === 'plus') {
					num += step
				}
				let value = num / scale
				if (value < this.min || value > this.max) {
					return
				}

				this.handleChange(value, type)
			},
			plus: function() {
				this.calcNum("plus")
			},
			reduce: function() {
				this.calcNum("reduce")
			},
			blur: function(e) {
				let value = e.detail.value
				if (value) {
					if (~value.indexOf(".") && Number.isInteger(this.step)) {
						value = value.split(".")[0]
					}
					value = Number(value)
					if (value > this.max) {
						value = this.max
					} else if (value < this.min) {
						value = this.min
					}
				} else {
					value = this.min
				}
				if (value == this.value && value != this.inputValue) {
					this.inputValue = value
				}
				this.handleChange(value, "blur")
			},
			handleChange(value, type) {
				if (this.disabled) return;
				this.$emit('change', {
					value: value,
					type: type,
					index: this.index
				})
			}
		}
	}
</script>

<style>
	@font-face {
		font-family: 'numberbox';
		src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASQAA0AAAAABtwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEdAAAABoAAAAciBpnRUdERUYAAARUAAAAHgAAAB4AKQALT1MvMgAAAZwAAABDAAAAVjxzSINjbWFwAAAB9AAAAEYAAAFK5zLpOGdhc3AAAARMAAAACAAAAAj//wADZ2x5ZgAAAkgAAACHAAAAnIfIEjxoZWFkAAABMAAAAC8AAAA2FZWEOWhoZWEAAAFgAAAAHAAAACQH3gOFaG10eAAAAeAAAAARAAAAEgwAAAFsb2NhAAACPAAAAAwAAAAMADAATm1heHAAAAF8AAAAHwAAACABEAAobmFtZQAAAtAAAAFJAAACiCnmEVVwb3N0AAAEHAAAAC0AAABV/+8iFXjaY2BkYGAA4gVmC5Tj+W2+MnCzMIDATWsFOQT9v5GFgbkeyOVgYAKJAgDrogf+AHjaY2BkYGBu+N/AEMPCAAJAkpEBFbAAAEcKAm142mNgZGBgYGWQYQDRDAxMQMwFhAwM/8F8BgALpAE5AHjaY2BkYWCcwMDKwMDUyXSGgYGhH0IzvmYwYuQAijKwMjNgBQFprikMDs9Yn01kbvjfwBDD3MDQABRmBMkBAOXpDHEAeNpjYYAAFghmZGAAAACdAA4AAAB42mNgYGBmgGAZBkYGEHAB8hjBfBYGDSDNBqQZGZiesT6b+P8/AwOElvwnWQxVDwSMbAxwDiMTkGBiQAWMDMMeAABRZwszAAAAAAAAAAAAAAAwAE542iWKQQrCMBBF5xNpd0pQ7EIoTEnahSCTUNqdWz2A9TrieXKeXCc1qcPn/zfzh0BYv2pVH7oQgbvqdG5Yt/DTrNlPYz+wHvuuqhFSME4sFshTgKUsKfhH5lg8BSul3i5bS3mQdd0RIh2IjnvUrkXDd8zuhuFt86tY9fonIsSYgsXpB+cCGosAeNp9kD1OAzEQhZ/zByQSQiCoXVEA2vyUKRMp9Ailo0g23pBo1155nUg5AS0VB6DlGByAGyDRcgpelkmTImvt6PObmeexAZzjGwr/3yXuhBWO8ShcwREy4Sr1F+Ea+V24jhY+hRvUf4SbuFUD4RYu1BsdVO2Eu5vSbcsKZxgIV3CKJ+Eq9ZVwjfwqXMcVPoQb1L+EmxjjV7iFa2WpDOFhMEFgnEFjig3jAjEcLJIyBtahOfRmEsxMTzd6ETubOBso71dilwMeaDnngCntPbdmvkon/mDLgdSYbh4FS7YpjS4idCgbXyyc1d2oc7D9nu22tNi/a4E1x+xRDWzU/D3bM9JIbAyvkJI18jK3pBJTj2hrrPG7ZynW814IiU68y/SIx5o0dTr3bmniwOLn8owcfbS5kj33qBw+Y1kIeb/dTsQgil2GP5PYcRkAAAB42mNgYoAALjDJyIAOWMGiTIxMjMwiWZmJQJRXVQoigTgjMd9QGIsgAFDsEBsAAAAAAAAB//8AAgABAAAADAAAABYAAAACAAEAAwAEAAEABAAAAAIAAAAAeNpjYGBgZACCq0vUOUD0TWsFORgNADPBBE4AAA==) format('woff');
		font-weight: normal;
		font-style: normal;
	}

	.tui-numbox-icon {
		font-family: "numberbox" !important;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		padding: 10rpx;
	}

	.tui-icon-reduce:before {
		content: "\e691";
	}

	.tui-icon-plus:before {
		content: "\e605";
	}

	.tui-numberbox {
		display: -webkit-inline-flex;
		display: inline-flex;
		align-items: center;
	}

	.tui-num-input {
		text-align: center;
		margin: 0 12rpx;
		font-weight: 400;
	}

	.tui-disabled {
		color: #ededed !important;
	}
</style>
