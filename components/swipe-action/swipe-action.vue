<template>
	<view class="tui-swipeout-wrap">
		<view class="tui-swipeout-item" :class="[isShowBtn?'swipe-action-show':'']" @touchstart="handlerTouchstart"
		 @touchmove="handlerTouchmove" @touchend="handlerTouchend" :style="{transform:'translate(' + position.pageX + 'px,0)'}">
			<view class="tui-swipeout-content">
				<slot name="content"></slot>
			</view>
			<view class="tui-swipeout-button-right-group" v-if="actions.length > 0" @touchend.stop="loop">
				<view class="tui-swipeout-button-right-item" v-for="(item,index) in actions" :key="index" :style="{background:item.background || '#f7f7f7',color:item.color,width:item.width+'px'}"
				 :data-index="index" @tap="handlerButton">
					<image :src="item.icon" v-if="item.icon" :style="{width:px(item.imgWidth),height:px(item.imgHeight)}"></image>
					<text :style="{fontSize:px(item.fontsize)}">{{item.name}}</text>
				</view>
			</view>
			<!--actions长度设置为0，可直接传按钮进来-->
			<view class="tui-swipeout-button-right-group" @touchend.stop="loop" @tap="handlerParentButton" v-if="actions.length === 0"
			 :style="{width:operateWidth+'px',right:'-'+operateWidth+'px'}">
				<slot name="button"></slot>
			</view>
		</view>
		<view v-if="isShowBtn && showMask" class="swipe-action_mask" @tap="closeButtonGroup" @touchmove.stop="closeButtonGroup" />
	</view>
</template>

<script>
	export default {
		name: "tuiSwipeAction",
		props: {
			// name: '删除',
			// color: '#fff',
			// fontsize: 32,//单位upx
			// width: 80, //单位px
			// icon: 'like.png',//此处为图片地址
			// background: '#ed3f14'
			actions: {
				type: Array,
				default: function(){
					return []
				}
			},
			//是否可关闭，默认可关闭，可以单独控制
			closable: {
				type: Boolean,
				default: true
			},
			//设为false，可以滑动多行不关闭菜单
			showMask: {
				type: Boolean,
				default: true
			},
			operateWidth: {
				type: Number,
				default: 80
			},
			params: {
				type: Object,
				default: function(){
					return {}
				}
			}
		},
		watch: {
			actions(newValue, oldValue) {
				this.updateButtonSize()
			}
		},
		data() {
			return {
				//start position
				tStart: {
					pageX: 0,
					pageY: 0
				},
				//限制滑动距离
				limitMove: 0,
				//move position
				position: {
					pageX: 0,
					pageY: 0
				},
				isShowBtn: false
			};
		},
		// #ifdef H5
		mounted() {
			this.updateButtonSize()
		},
		// #endif
		onReady() {
			this.updateButtonSize()
		},
		methods: {
			swipeDirection(x1, x2, y1, y2) {
				return Math.abs(x1 - x2) >=
					Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
			},
			//阻止事件冒泡
			loop() {},
			updateButtonSize() {
				const actions = this.actions;
				if (actions.length > 0) {
					const query = uni.createSelectorQuery().in(this);
					let limitMovePosition = 0;
					actions.forEach(item => {
						limitMovePosition += item.width || 0;
					});
					this.limitMove = limitMovePosition;
				} else {
					this.limitMove = this.operateWidth;
				}
			},
			handlerTouchstart(event) {
				const touches = event.touches ? event.touches[0] : {};
				const tStart = this.tStart;
				if (touches) {
					for (let i in tStart) {
						if (touches[i]) {
							tStart[i] = touches[i];
						}
					}
				}
			},
			swipper(touches) {
				const start = this.tStart;
				const spacing = {
					pageX: touches.pageX - start.pageX,
					pageY: touches.pageY - start.pageY
				}
				if (this.limitMove < Math.abs(spacing.pageX)) {
					spacing.pageX = -this.limitMove;

				}
				this.position = spacing
			},
			handlerTouchmove(event) {
				const start = this.tStart;
				const touches = event.touches ? event.touches[0] : {};
				if (touches) {
					const direction = this.swipeDirection(start.pageX, touches.pageX, start.pageY, touches.pageY);
					if (direction === 'Left') {
						this.swipper(touches);
					}
				}
			},
			handlerTouchend(event) {
				const start = this.tStart;
				const touches = event.changedTouches ? event.changedTouches[0] : {};
				if (touches) {
					const direction = this.swipeDirection(start.pageX, touches.pageX, start.pageY, touches.pageY);
					const spacing = {
						pageX: touches.pageX - start.pageX,
						pageY: touches.pageY - start.pageY
					}
					if (Math.abs(spacing.pageX) >= 40 && direction === "Left") {
						spacing.pageX = spacing.pageX < 0 ? -this.limitMove : this.limitMove;
						this.isShowBtn = true
					} else {
						spacing.pageX = 0;
					}
					this.position = spacing
				}
			},
			handlerButton(event) {
				if (this.closable) {
					this.closeButtonGroup();
				}
				const dataset = event.currentTarget.dataset;
				this.$emit('click', {
					index: Number(dataset.index),
					item: this.params
				})
				
			},
			closeButtonGroup() {
				this.position = {
					pageX: 0,
					pageY: 0
				};
				this.isShowBtn = false
			},
			//控制自定义组件
			handlerParentButton(event) {
				if (this.closable) {
					this.closeButtonGroup();
				}
			},
			px(num) {
				return uni.upx2px(num) + "px"
			}
		}
	}
</script>

<style>
	.tui-swipeout-wrap {
		background: #fff;
		position: relative;
		overflow: hidden;
	}

	.swipe-action-show {
		position: relative;
		z-index: 99999
	}

	.tui-swipeout-item {
		width: 100%;
		/* padding: 15px 20px; */
		box-sizing: border-box;
		transition: transform 0.2s ease;
		font-size: 14px;
	}

	.tui-swipeout-content {
		white-space: nowrap;
		overflow: hidden;
	}

	.tui-swipeout-button-right-group {
		position: absolute;
		right: -100%;
		top: 0;
		height: 100%;
		z-index: 1;
		width: 100%;
	}

	.tui-swipeout-button-right-item {
		height: 100%;
		float: left;
		white-space: nowrap;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.swipe-action_mask {
		display: block;
		opacity: 0;
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
