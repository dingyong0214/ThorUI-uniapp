<template>
	<view class="tui-sticky-class" :change:prop="parse.stickyChange" :prop="scrollTop" :data-top="top" :data-height="height"
	 :data-stickytop="stickyTop" :data-container="container" :data-isNativeHeader="isNativeHeader" :data-index="index">
		<!--sticky 容器-->
		<view class="tui-sticky-seat" :style="{ height: stickyHeight, backgroundColor: backgroundColor }"></view>
		<view class="tui-sticky-bar">
			<slot name="header"></slot>
		</view>
		<!--sticky 容器-->
		<!--内容-->
		<slot name="content"></slot>
	</view>
</template>
<script src="./tui-sticky.wxs" module="parse" lang="wxs"></script>
<script>
	export default {
		name: 'tuiStickyWxs',
		emits: ['prop', 'change'],
		props: {
			scrollTop: {
				type: [Number, String],
				value: 0
			},
			//吸顶时与顶部的距离，单位px
			stickyTop: {
				type: [Number, String],
				// #ifndef H5
				default: 0,
				// #endif
				// #ifdef H5
				default: 44
				// #endif
			},
			//是否指定容器，即内容放置插槽content内
			container: {
				type: Boolean,
				default: false
			},
			//是否是原生自带header
			isNativeHeader: {
				type: Boolean,
				default: true
			},
			//吸顶容器 高度 rpx
			stickyHeight: {
				type: String,
				default: 'auto'
			},
			//占位容器背景颜色
			backgroundColor: {
				type: String,
				default: 'transparent'
			},
			//是否重新计算[有异步加载时使用,设置大于0的数]
			recalc: {
				type: Number,
				default: 0
			},
			//列表中的索引值
			index: {
				type: [Number, String],
				default: 0
			}
		},
		watch: {
			recalc(newValue, oldValue) {
				this.updateScrollChange(() => {
					//更新prop scrollTop值(+0.1即可),触发change事件
					this.$emit("prop",{})
				});
			}
		},
		mounted() {
			setTimeout(() => {
				this.updateScrollChange();
			}, 20);
		},
		data() {
			return {
				timer: null,
				top: 0,
				height: 0
			};
		},
		methods: {
			updateScrollChange(callback) {
				if (this.timer) {
					clearTimeout(this.timer);
					this.timer = null;
				}
				this.timer = setTimeout(() => {
					const className = '.tui-sticky-class';
					const query = uni.createSelectorQuery().in(this);
					query
						.select(className)
						.boundingClientRect(res => {
							if (res) {
								this.top = res.top + (this.scrollTop || 0);
								this.height = res.height;
								callback && callback();
								this.$emit('change', {
									index: Number(this.index),
									top: this.top
								});
							}
						})
						.exec();
				}, 0);
			}
		}
	};
</script>

<style scoped>
	.tui-sticky-fixed {
		width: 100%;
		position: fixed;
		left: 0;
		z-index: 998;
	}

	.tui-sticky-seat {
		display: none;
	}
</style>
