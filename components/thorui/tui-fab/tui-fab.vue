<template>
	<view>
		<view class="tui-fab-box"
			:class="{'tui-fab-right':left==0 || (left && right),'tui-fab__box-bottom':bottom && top == 0,'tui-fab__box-top':!(bottom && top == 0)}"
			:style="getStyles">
			<view class="tui-fab-btn" :class="{'tui-visible':isOpen,'tui-fab-hidden':isHidden}">
				<view class="tui-fab-item-box"
					:class="{'tui-fab-item-left':left && right==0 && item[imgField],'tui-fab__pb40':bottom && top == 0,'tui-fab__pt40':!(bottom && top == 0)}"
					v-for="(item,index) in btnList" :key="index" @tap.stop="handleClick(index)">
					<view :class="[left && right==0?'tui-text-left':'tui-text-right']" v-if="item[imgField]"
						:style="{fontSize:(item.fontSize || size)+'rpx',color:item.color}">{{item[textField] || ""}}
					</view>
					<view class="tui-fab-item"
						:style="{width:width+'rpx',height:height+'rpx',background:item.bgColor || getBgColor,borderRadius:radius}">
						<view class="tui-fab-title" v-if="!item[imgField]"
							:style="{fontSize:(item.fontSize || size)+'rpx',color:item.color}">{{item[textField] || ""}}
						</view>
						<image :src="item[imgField]" class="tui-fab-img" v-else
							:style="{width:(item.imgWidth || 64)+'rpx',height:(item.imgHeight || 64)+'rpx'}"></image>
					</view>
				</view>
			</view>
			<view class="tui-fab-item" :class="{'tui-active':isOpen}"
				:style="{width:width+'rpx',height:height+'rpx',borderRadius:radius,background:getBgColor,color:color}"
				@tap.stop="handleClick(-1)">
				<text class="tui-fab-icon tui-icon-plus" v-if="!custom"></text>
				<slot></slot>
			</view>
		</view>
		<view class="tui-fab-mask" :style="getZIndex" :class="{'tui-visible':isOpen}" @tap="handleClickCancel"></view>
	</view>
</template>

<script>
	//拓展出来的按钮不应多于6个，否则违反了作为悬浮按钮的快速、高效的原则
	export default {
		name: "tuiFab",
		emits: ['click'],
		props: {
			//rpx 为0时值为auto
			left: {
				type: [Number, String],
				default: 0
			},
			//rpx 当为0时且left不为0，值为auto
			right: {
				type: [Number, String],
				default: 80
			},
			//rpx bottom值
			bottom: {
				type: [Number, String],
				default: 100
			},
			//rpx top值
			top: {
				type: [Number, String],
				default: 0
			},
			zIndex: {
				type: [Number, String],
				default: 997
			},
			//默认按钮 宽度 rpx
			width: {
				type: [Number, String],
				default: 108
			},
			//默认按钮 高度 rpx
			height: {
				type: [Number, String],
				default: 108
			},
			//圆角值
			radius: {
				type: String,
				default: "50%"
			},
			//默认按钮自定义内容[替换加号]
			custom: {
				type: Boolean,
				default: false
			},
			//默认按钮背景颜色
			bgColor: {
				type: String,
				default: ""
			},
			//字体颜色
			color: {
				type: String,
				default: "#fff"
			},
			btnList: {
				type: Array,
				default () {
					return []
				}
			},
			textField: {
				type: String,
				default: "text"
			},
			imgField: {
				type: String,
				default: "imgUrl"
			},
			size: {
				type: [Number, String],
				default: 28
			},
			//点击遮罩 是否可关闭
			maskClosable: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			getBgColor() {
				return this.bgColor || (uni && uni.$tui && uni.$tui.color.primary) || '#5677fc';
			},
			getStyles() {
				let style = `z-index:${this.zIndex};`;
				if (this.left && this.right == 0) {
					style += `left:${this.left}rpx;`
				} else {
					style += `right:${this.right}rpx;`
				}

				if (this.bottom && this.top == 0) {
					style += `bottom:${this.bottom}rpx;`
				} else {
					style += `top:${this.top}rpx;`
				}
				return style
			},
			getZIndex() {
				return Number(this.zIndex) - 2
			}
		},
		data() {
			return {
				isOpen: false,
				isHidden: true,
				timer: null
			};
		},
		// #ifndef VUE3
		beforeDestroy() {
			clearTimeout(this.timer)
			this.timer = null
		},
		// #endif
		// #ifdef VUE3
		beforeUnmount() {
			clearTimeout(this.timer)
			this.timer = null
		},
		// #endif
		methods: {
			handleClick: function(index) {
				this.isHidden = false
				clearTimeout(this.timer)
				if (index == -1 && this.btnList.length) {
					this.isOpen = !this.isOpen
				} else {
					this.$emit("click", {
						index: index
					})
					this.isOpen = false
				}
				if (!this.isOpen) {
					this.timer = setTimeout(() => {
						this.isHidden = true
					}, 200)
				}
			},
			handleClickCancel: function() {
				if (!this.maskClosable) return;
				this.isOpen = false
			}
		}
	}
</script>

<style scoped>
	@font-face {
		font-family: 'tuifab';
		src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAREAA0AAAAABnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEKAAAABoAAAAciPExJUdERUYAAAQIAAAAHgAAAB4AKQAKT1MvMgAAAaAAAABCAAAAVjyBSAVjbWFwAAAB9AAAAD4AAAFCAA/pvmdhc3AAAAQAAAAACAAAAAj//wADZ2x5ZgAAAkAAAABRAAAAYFkYQQNoZWFkAAABMAAAADAAAAA2Fm5OF2hoZWEAAAFgAAAAHQAAACQH3QOFaG10eAAAAeQAAAAPAAAAEAwAAANsb2NhAAACNAAAAAoAAAAKADAAAG1heHAAAAGAAAAAHwAAACABDwAobmFtZQAAApQAAAFJAAACiCnmEVVwb3N0AAAD4AAAAB8AAAAx2XRuznjaY2BkYGAAYtGolt54fpuvDNwsDCBwc1krH5xm/t/I/J+5FsjlYGACiQIAGAEKZHjaY2BkYGBu+N/AEMPCAALM/xkYGVABCwBZ4wNrAAAAeNpjYGRgYGBhkGEA0QwMTEDMBYQMDP/BfAYAC4kBOAB42mNgZGFgnMDAysDA1Ml0hoGBoR9CM75mMGLkAIoysDIzYAUBaa4pDA7PhJ8JMzf8b2CIYW5gaAAKM4LkAN21DAEAAHjaY2GAABYIZgYAAIMAEAB42mNgYGBmgGAZBkYGELAB8hjBfBYGBSDNAoRA/jPh//8hpOQHqEoGRjYGGJOBkQlIMDGgAkaGYQ8AUSIHswAAAAAAAAAAAAAAMAAAeNpjYGRg/t/I/J+5lkGagYFRUVCPUYmNXVCRj1FETFxRUI7RyMxcUNGO0USN+fS/HEY5XTnGfznicnLijFPAHMYpYnJyjFvBlBgWBQBNJxKpAAAAeNp9kD1OAzEQhZ/zByQSQiCoXVEA2vyUKRMp9Ailo0g23pBo1155nUg5AS0VB6DlGByAGyDRcgpelkmTImvt6PObmeexAZzjGwr/3yXuhBWO8ShcwREy4Sr1F+Ea+V24jhY+hRvUf4SbuFUD4RYu1BsdVO2Eu5vSbcsKZxgIV3CKJ+Eq9ZVwjfwqXMcVPoQb1L+EmxjjV7iFa2WpDOFhMEFgnEFjig3jAjEcLJIyBtahOfRmEsxMTzd6ETubOBso71dilwMeaDnngCntPbdmvkon/mDLgdSYbh4FS7YpjS4idCgbXyyc1d2oc7D9nu22tNi/a4E1x+xRDWzU/D3bM9JIbAyvkJI18jK3pBJTj2hrrPG7ZynW814IiU68y/SIx5o0dTr3bmniwOLn8owcfbS5kj33qBw+Y1kIeb/dTsQgil2GP5PYcRkAAAB42mNgYoAALjDJyIAOWMCiTIxMbFmZiRmJ+QALXAKKAAAAAAH//wACAAEAAAAMAAAAFgAAAAIAAQADAAMAAQAEAAAAAgAAAAB42mNgYGBkAIKrS9Q5QPTNZa18MBoAPbcFzgAA) format('woff');
		font-weight: normal;
		font-style: normal;
	}

	.tui-fab-icon {
		font-family: "tuifab" !important;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		padding: 10rpx;
	}

	.tui-icon-plus:before {
		content: "\e613";
	}

	.tui-fab-box {
		display: flex;
		justify-content: center;
		position: fixed;
	}

	.tui-fab__box-bottom {
		flex-direction: column;
	}

	.tui-fab__box-top {
		flex-direction: column-reverse;
	}

	.tui-fab-right {
		align-items: flex-end;
	}

	.tui-fab-btn {
		transform: scale(0);
		transition: all 0.2s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.tui-fab-hidden {
		height: 0;
		width: 0;
	}


	.tui-fab-item-box {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.tui-fab__pb40 {
		padding-bottom: 40rpx;
	}

	.tui-fab__pt40 {
		padding-top: 40rpx;
	}

	.tui-fab-item-left {
		flex-flow: row-reverse;
	}

	.tui-fab-title {
		width: 90%;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tui-text-left {
		padding-left: 28rpx;
	}

	.tui-text-right {
		padding-right: 28rpx;
	}

	.tui-fab-img {
		display: block;
	}

	.tui-fab-item {
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
		transition: all 0.2s linear;
	}

	.tui-radius {
		border-radius: 50%;
	}

	.tui-active {
		transform: rotate(135deg);
	}

	.tui-fab-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.75);
		transition: all 0.2s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.tui-visible {
		visibility: visible;
		opacity: 1;
		transform: scale(1);
	}
</style>